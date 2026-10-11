import React, { useState, useEffect, useCallback } from "react";
import { brands } from "../content/brands";
import { api } from "../services/api";
import { toast } from "sonner";
import { 
  Search, Plus, Check, X, Edit, Trash2, Smartphone, Download, Upload, AlertCircle, RefreshCw
} from "lucide-react";

export function AdminDevicesTab() {
  const [devices, setDevices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [brandFilter, setBrandFilter] = useState<string>("");
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState<string>(""); // "" | "true" | "false"
  const [counts, setCounts] = useState<Record<string, number>>({});
  
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [editingDevice, setEditingDevice] = useState<any>(null);

  // Form state
  const [form, setForm] = useState({
    brandId: "", name: "", slug: "", series: "", releaseYear: "", variants: "",
    isActive: true, sortOrder: 0,
    dead_min: "", dead_max: "", cracked_min: "", cracked_max: "", worn_min: "", worn_max: "", mint_min: "", mint_max: ""
  });

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/devices?brand=${brandFilter}&q=${search}&active=${activeFilter}&page=${page}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("revivetech_admin_token")}` }
      });
      const data = await res.json();
      if (data.success) {
        setDevices(data.data);
        setTotal(data.pagination.total);
      }
    } catch (e) {
      toast.error("Failed to fetch devices");
    } finally {
      setLoading(false);
    }
  }, [brandFilter, search, activeFilter, page]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const payload = {
        brandId: form.brandId,
        name: form.name,
        slug: form.slug,
        series: form.series,
        releaseYear: parseInt(form.releaseYear) || undefined,
        variants: form.variants.split("|").map(s => ({ storage: s.trim() })).filter(v => v.storage),
        isActive: form.isActive,
        sortOrder: parseInt(form.sortOrder as any) || 0,
        priceRanges: {
          dead: { min: parseInt(form.dead_min) || undefined, max: parseInt(form.dead_max) || undefined },
          cracked: { min: parseInt(form.cracked_min) || undefined, max: parseInt(form.cracked_max) || undefined },
          worn: { min: parseInt(form.worn_min) || undefined, max: parseInt(form.worn_max) || undefined },
          mint: { min: parseInt(form.mint_min) || undefined, max: parseInt(form.mint_max) || undefined }
        }
      };

      const url = editingDevice ? `/api/admin/devices/${editingDevice._id}` : `/api/admin/devices`;
      const method = editingDevice ? "PUT" : "POST";
      
      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("revivetech_admin_token")}`
        },
        body: JSON.stringify(payload)
      });
      
      const data = await res.json();
      if (data.success) {
        toast.success(editingDevice ? "Device updated" : "Device created");
        setDrawerOpen(false);
        fetchData();
      } else {
        toast.error(data.message || "Save failed");
      }
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  const handleDelete = async (id: string, name: string) => {
    if (!window.confirm(`Are you sure you want to deactivate ${name}?`)) return;
    try {
      const res = await fetch(`/api/admin/devices/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${localStorage.getItem("revivetech_admin_token")}` }
      });
      const data = await res.json();
      if (data.success) {
        toast.success("Device deactivated");
        fetchData();
      }
    } catch (err) {}
  };

  const handleExportCSV = async () => {
    try {
      const qs = new URLSearchParams({ brand: brandFilter, q: search, active: activeFilter }).toString();
      const res = await fetch(`/api/admin/devices/export?${qs}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("revivetech_admin_token")}` }
      });
      if (!res.ok) throw new Error("Export failed");
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "revivetech_devices.csv";
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (e: any) {
      toast.error(e.message);
    }
  };

  const handleImportCSV = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    try {
      const text = await file.text();
      const res = await fetch(`/api/admin/devices/import`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("revivetech_admin_token")}`
        },
        body: JSON.stringify({ csv: text, dryRun: false })
      });
      const data = await res.json();
      if (data.success) {
        toast.success(`Imported! Created: ${data.results.created}, Updated: ${data.results.updated}, Errors: ${data.results.errors.length}`);
        fetchData();
      } else {
        toast.error(data.message || "Import failed");
      }
    } catch (err: any) {
      toast.error(err.message);
    }
    e.target.value = "";
  };

  const openDrawer = (device: any = null) => {
    if (device) {
      setEditingDevice(device);
      setForm({
        brandId: device.brandId, name: device.name, slug: device.slug, series: device.series || "",
        releaseYear: device.releaseYear?.toString() || "",
        variants: (device.variants || []).map((v: any) => v.storage).join(" | "),
        isActive: device.isActive, sortOrder: device.sortOrder || 0,
        dead_min: device.priceRanges?.dead?.min?.toString() || "", dead_max: device.priceRanges?.dead?.max?.toString() || "",
        cracked_min: device.priceRanges?.cracked?.min?.toString() || "", cracked_max: device.priceRanges?.cracked?.max?.toString() || "",
        worn_min: device.priceRanges?.worn?.min?.toString() || "", worn_max: device.priceRanges?.worn?.max?.toString() || "",
        mint_min: device.priceRanges?.mint?.min?.toString() || "", mint_max: device.priceRanges?.mint?.max?.toString() || ""
      });
    } else {
      setEditingDevice(null);
      setForm({
        brandId: brandFilter || "apple", name: "", slug: "", series: "", releaseYear: "", variants: "",
        isActive: true, sortOrder: 0,
        dead_min: "", dead_max: "", cracked_min: "", cracked_max: "", worn_min: "", worn_max: "", mint_min: "", mint_max: ""
      });
    }
    setDrawerOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* Header & Filters */}
      <div className="glass-card-admin p-4 rounded-2xl border border-brand/20 flex flex-col gap-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 w-full custom-scrollbar">
            <button
              onClick={() => setBrandFilter("")}
              className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition ${!brandFilter ? 'bg-brand text-white' : 'bg-white/10 text-slate-300'}`}
            >
              All Brands
            </button>
            {brands.map(b => (
              <button
                key={b.id}
                onClick={() => setBrandFilter(b.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition ${brandFilter === b.id ? 'bg-brand text-white' : 'bg-white/10 text-slate-300'}`}
              >
                {b.name}
              </button>
            ))}
          </div>
          
          <div className="flex gap-2">
            <input type="file" id="csv-upload" accept=".csv" className="hidden" onChange={handleImportCSV} />
            <button onClick={() => document.getElementById("csv-upload")?.click()} className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 whitespace-nowrap shrink-0 transition">
              <Upload className="h-4 w-4" /> Import CSV
            </button>
            <button onClick={handleExportCSV} className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 whitespace-nowrap shrink-0 transition">
              <Download className="h-4 w-4" /> Export CSV
            </button>
            <button onClick={() => openDrawer()} className="bg-brand hover:brightness-110 text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 whitespace-nowrap shrink-0 transition">
              <Plus className="h-4 w-4" /> Add Device
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input 
              type="text"
              placeholder="Search model, series..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full bg-black/40 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:border-brand outline-none"
            />
          </div>
          <select 
            value={activeFilter}
            onChange={e => setActiveFilter(e.target.value)}
            className="bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white outline-none w-full md:w-auto"
          >
            <option value="">All Status</option>
            <option value="true">Active Only</option>
            <option value="false">Inactive</option>
          </select>
        </div>
      </div>

      {/* Device List */}
      <div className="glass-card-admin rounded-2xl border border-white/10 overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-slate-400 flex flex-col items-center">
            <RefreshCw className="h-8 w-8 animate-spin mb-2" />
            Loading devices...
          </div>
        ) : devices.length === 0 ? (
          <div className="p-8 text-center text-slate-400">
            No devices found.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-white/5 border-b border-white/10 text-slate-300">
                <tr>
                  <th className="px-4 py-3 font-semibold">Model</th>
                  <th className="px-4 py-3 font-semibold">Brand / Series</th>
                  <th className="px-4 py-3 font-semibold">Storage</th>
                  <th className="px-4 py-3 font-semibold text-center">Status</th>
                  <th className="px-4 py-3 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {devices.map(d => {
                  const bName = brands.find(b => b.id === d.brandId)?.name || d.brandId;
                  const hasPrices = d.priceRanges?.mint?.min;
                  return (
                    <tr key={d._id} className="hover:bg-white/5">
                      <td className="px-4 py-3">
                        <div className="font-bold text-white">{d.name}</div>
                        <div className="text-[10px] text-slate-400">{d.slug} {hasPrices ? <span className="text-emerald-400 ml-1">($)</span> : ""}</div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="text-slate-200">{bName}</div>
                        <div className="text-xs text-slate-400">{d.series}</div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex gap-1">
                          {(d.variants || []).slice(0, 3).map((s: any) => (
                            <span key={s.storage} className="bg-white/10 px-1.5 py-0.5 rounded text-[10px]">{s.storage}</span>
                          ))}
                          {(d.variants?.length || 0) > 3 && <span className="text-xs text-slate-400">...</span>}
                        </div>
                      </td>
                      <td className="px-4 py-3 text-center">
                        {d.isActive ? (
                          <span className="bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded text-xs">Active</span>
                        ) : (
                          <span className="bg-rose-500/20 text-rose-400 px-2 py-1 rounded text-xs">Inactive</span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-right">
                        <button onClick={() => openDrawer(d)} className="p-1.5 text-slate-400 hover:text-brand transition"><Edit className="h-4 w-4" /></button>
                        <button onClick={() => handleDelete(d._id, d.name)} className="p-1.5 text-slate-400 hover:text-rose-400 transition ml-1"><Trash2 className="h-4 w-4" /></button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Edit Drawer Modal overlay */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end">
          <div className="w-full max-w-md bg-slate-900 border-l border-white/10 h-full overflow-y-auto p-6 shadow-2xl animate-in slide-in-from-right">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-white">{editingDevice ? "Edit Device" : "Add Device"}</h3>
              <button onClick={() => setDrawerOpen(false)} className="p-2 text-slate-400 hover:text-white rounded-full bg-white/5"><X className="h-5 w-5" /></button>
            </div>

            <form onSubmit={handleSave} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Brand</label>
                <select value={form.brandId} onChange={e => setForm({...form, brandId: e.target.value})} className="w-full bg-black border border-white/10 rounded-xl px-3 py-2 text-sm text-white" required>
                  <option value="">Select Brand</option>
                  {brands.map(b => <option key={b.id} value={b.id}>{b.name}</option>)}
                </select>
              </div>
              
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Model Name</label>
                <input required type="text" value={form.name} onChange={e => {
                  const slug = e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, "-");
                  setForm({...form, name: e.target.value, slug});
                }} className="w-full bg-black border border-white/10 rounded-xl px-3 py-2 text-sm text-white" />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Slug</label>
                <input required type="text" value={form.slug} onChange={e => setForm({...form, slug: e.target.value})} className="w-full bg-black border border-white/10 rounded-xl px-3 py-2 text-sm text-slate-400 font-mono" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">Series</label>
                  <input type="text" value={form.series} onChange={e => setForm({...form, series: e.target.value})} className="w-full bg-black border border-white/10 rounded-xl px-3 py-2 text-sm text-white" />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">Release Year</label>
                  <input type="number" value={form.releaseYear} onChange={e => setForm({...form, releaseYear: e.target.value})} className="w-full bg-black border border-white/10 rounded-xl px-3 py-2 text-sm text-white" />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Storage Options (pipe-separated)</label>
                <input type="text" placeholder="64GB | 128GB | 256GB" value={form.variants} onChange={e => setForm({...form, variants: e.target.value})} className="w-full bg-black border border-white/10 rounded-xl px-3 py-2 text-sm text-white" />
              </div>

              <div className="pt-4 border-t border-white/10">
                <h4 className="text-sm font-bold text-white mb-2">Pricing (Optional, leave blank for WA quote)</h4>
                
                {["mint", "worn", "cracked", "dead"].map(cond => (
                  <div key={cond} className="mb-3">
                    <label className="text-xs font-bold text-slate-300 block mb-1 capitalize">{cond}</label>
                    <div className="flex gap-2">
                      <input type="number" placeholder="Min ₹" value={(form as any)[`${cond}_min`]} onChange={e => setForm({...form, [`${cond}_min`]: e.target.value})} className="w-full bg-black border border-white/10 rounded-xl px-3 py-2 text-sm text-white" />
                      <input type="number" placeholder="Max ₹" value={(form as any)[`${cond}_max`]} onChange={e => setForm({...form, [`${cond}_max`]: e.target.value})} className="w-full bg-black border border-white/10 rounded-xl px-3 py-2 text-sm text-white" />
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 pt-4">
                <input type="checkbox" id="isActive" checked={form.isActive} onChange={e => setForm({...form, isActive: e.target.checked})} className="rounded bg-black border-white/10 text-brand" />
                <label htmlFor="isActive" className="text-sm text-white">Active (Visible to users)</label>
              </div>

              <button type="submit" className="w-full bg-brand hover:bg-brand-600 text-white font-bold py-3 rounded-xl mt-6">
                {editingDevice ? "Save Changes" : "Create Device"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
