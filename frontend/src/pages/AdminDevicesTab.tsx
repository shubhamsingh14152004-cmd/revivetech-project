import React, { useState, useEffect, useCallback } from "react";
import { brands } from "../content/brands";
import { toast } from "sonner";
import {
  Search,
  Plus,
  X,
  Edit,
  Trash2,
  Smartphone,
  Download,
  Upload,
  RefreshCw,
} from "lucide-react";

export function AdminDevicesTab() {
  const [devices, setDevices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [brandFilter, setBrandFilter] = useState<string>("");
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState<string>(""); // "" | "true" | "false"

  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [editingDevice, setEditingDevice] = useState<any>(null);

  // Form state
  const [form, setForm] = useState({
    brandId: "",
    name: "",
    slug: "",
    series: "",
    releaseYear: "",
    variants: "",
    isActive: true,
    sortOrder: 0,
    dead_min: "",
    dead_max: "",
    cracked_min: "",
    cracked_max: "",
    worn_min: "",
    worn_max: "",
    mint_min: "",
    mint_max: "",
  });

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `/api/admin/devices?brand=${brandFilter}&q=${search}&active=${activeFilter}&page=${page}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("revivetech_admin_token")}`,
          },
        }
      );
      const data = await res.json();
      if (data.success) {
        setDevices(data.data || []);
        setTotal(data.pagination?.total || 0);
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
        variants: form.variants
          .split("|")
          .map((s) => ({ storage: s.trim() }))
          .filter((v) => v.storage),
        isActive: form.isActive,
        sortOrder: parseInt(form.sortOrder as any) || 0,
        priceRanges: {
          dead: {
            min: parseInt(form.dead_min) || undefined,
            max: parseInt(form.dead_max) || undefined,
          },
          cracked: {
            min: parseInt(form.cracked_min) || undefined,
            max: parseInt(form.cracked_max) || undefined,
          },
          worn: {
            min: parseInt(form.worn_min) || undefined,
            max: parseInt(form.worn_max) || undefined,
          },
          mint: {
            min: parseInt(form.mint_min) || undefined,
            max: parseInt(form.mint_max) || undefined,
          },
        },
      };

      const url = editingDevice
        ? `/api/admin/devices/${editingDevice._id}`
        : `/api/admin/devices`;
      const method = editingDevice ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("revivetech_admin_token")}`,
        },
        body: JSON.stringify(payload),
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
        headers: {
          Authorization: `Bearer ${localStorage.getItem("revivetech_admin_token")}`,
        },
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
      const qs = new URLSearchParams({
        brand: brandFilter,
        q: search,
        active: activeFilter,
      }).toString();
      const res = await fetch(`/api/admin/devices/export?${qs}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("revivetech_admin_token")}`,
        },
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
          Authorization: `Bearer ${localStorage.getItem("revivetech_admin_token")}`,
        },
        body: JSON.stringify({ csv: text, dryRun: false }),
      });
      const data = await res.json();
      if (data.success) {
        toast.success(
          `Imported! Created: ${data.results.created}, Updated: ${data.results.updated}, Errors: ${data.results.errors.length}`
        );
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
        brandId: device.brandId,
        name: device.name,
        slug: device.slug,
        series: device.series || "",
        releaseYear: device.releaseYear?.toString() || "",
        variants: (device.variants || []).map((v: any) => v.storage).join(" | "),
        isActive: device.isActive,
        sortOrder: device.sortOrder || 0,
        dead_min: device.priceRanges?.dead?.min?.toString() || "",
        dead_max: device.priceRanges?.dead?.max?.toString() || "",
        cracked_min: device.priceRanges?.cracked?.min?.toString() || "",
        cracked_max: device.priceRanges?.cracked?.max?.toString() || "",
        worn_min: device.priceRanges?.worn?.min?.toString() || "",
        worn_max: device.priceRanges?.worn?.max?.toString() || "",
        mint_min: device.priceRanges?.mint?.min?.toString() || "",
        mint_max: device.priceRanges?.mint?.max?.toString() || "",
      });
    } else {
      setEditingDevice(null);
      setForm({
        brandId: brandFilter || "apple",
        name: "",
        slug: "",
        series: "",
        releaseYear: "",
        variants: "",
        isActive: true,
        sortOrder: 0,
        dead_min: "",
        dead_max: "",
        cracked_min: "",
        cracked_max: "",
        worn_min: "",
        worn_max: "",
        mint_min: "",
        mint_max: "",
      });
    }
    setDrawerOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* Header & Filters Card */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-neutral-200 shadow-xs flex flex-col gap-4">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          {/* Brand Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 w-full custom-scrollbar">
            <button
              type="button"
              onClick={() => setBrandFilter("")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                !brandFilter
                  ? "bg-brand-600 text-white shadow-xs"
                  : "bg-neutral-100 hover:bg-neutral-200 text-neutral-700 border border-neutral-200"
              }`}
            >
              All Brands
            </button>
            {brands.map((b) => (
              <button
                key={b.id}
                type="button"
                onClick={() => setBrandFilter(b.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition cursor-pointer ${
                  brandFilter === b.id
                    ? "bg-brand-600 text-white shadow-xs"
                    : "bg-neutral-100 hover:bg-neutral-200 text-neutral-700 border border-neutral-200"
                }`}
              >
                {b.name}
              </button>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
            <input
              type="file"
              id="csv-upload"
              accept=".csv"
              className="hidden"
              onChange={handleImportCSV}
            />
            <button
              type="button"
              onClick={() => document.getElementById("csv-upload")?.click()}
              className="bg-white hover:bg-neutral-50 text-neutral-700 hover:text-neutral-900 border border-neutral-300 px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 whitespace-nowrap shrink-0 transition cursor-pointer shadow-xs"
            >
              <Upload className="h-4 w-4" /> Import CSV
            </button>
            <button
              type="button"
              onClick={handleExportCSV}
              className="bg-white hover:bg-neutral-50 text-neutral-700 hover:text-neutral-900 border border-neutral-300 px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 whitespace-nowrap shrink-0 transition cursor-pointer shadow-xs"
            >
              <Download className="h-4 w-4" /> Export CSV
            </button>
            <button
              type="button"
              onClick={() => openDrawer()}
              className="bg-brand-600 hover:bg-brand-700 active:bg-brand-800 text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 whitespace-nowrap shrink-0 shadow-xs transition cursor-pointer"
            >
              <Plus className="h-4 w-4" /> Add Device
            </button>
          </div>
        </div>

        {/* Search & Status Filters */}
        <div className="flex flex-col md:flex-row gap-3 items-center">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" />
            <input
              type="text"
              placeholder="Search model, series..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white border border-neutral-300 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20 outline-none"
            />
          </div>
          <select
            value={activeFilter}
            onChange={(e) => setActiveFilter(e.target.value)}
            className="bg-white border border-neutral-300 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-semibold text-neutral-800 outline-none focus:border-brand-600 w-full md:w-auto cursor-pointer"
          >
            <option value="">All Status</option>
            <option value="true">Active Only</option>
            <option value="false">Inactive</option>
          </select>
        </div>
      </div>

      {/* Device List Table */}
      <div className="bg-white rounded-2xl border border-neutral-200 shadow-xs overflow-hidden">
        {loading ? (
          <div className="p-16 text-center text-neutral-500 flex flex-col items-center justify-center">
            <RefreshCw className="h-7 w-7 animate-spin mb-2 text-brand-600" />
            <span className="font-semibold text-sm text-neutral-700">Loading catalog devices…</span>
          </div>
        ) : devices.length === 0 ? (
          <div className="p-16 text-center">
            <Smartphone className="h-10 w-10 mx-auto mb-2 text-neutral-400 opacity-60" />
            <p className="font-bold text-neutral-900 text-base">No devices found</p>
            <p className="text-xs sm:text-sm text-neutral-500 mt-1 max-w-sm mx-auto">
              Try adjusting your search query, brand filter, or import devices using the CSV upload tool.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs whitespace-nowrap">
              <thead className="bg-neutral-100 border-b border-neutral-200 text-neutral-700 font-bold uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="px-4 py-3.5">Model</th>
                  <th className="px-4 py-3.5">Brand / Series</th>
                  <th className="px-4 py-3.5">Storage</th>
                  <th className="px-4 py-3.5 text-center">Status</th>
                  <th className="px-4 py-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {devices.map((d) => {
                  const bName =
                    brands.find((b) => b.id === d.brandId)?.name || d.brandId;
                  const hasPrices = d.priceRanges?.mint?.min;
                  return (
                    <tr key={d._id} className="hover:bg-neutral-50 transition-colors">
                      <td className="px-4 py-3.5">
                        <div className="font-bold text-neutral-900 text-sm">{d.name}</div>
                        <div className="text-[11px] text-neutral-500 font-mono mt-0.5">
                          {d.slug}{" "}
                          {hasPrices ? (
                            <span className="text-brand-700 font-semibold ml-1">(Priced)</span>
                          ) : (
                            ""
                          )}
                        </div>
                      </td>
                      <td className="px-4 py-3.5">
                        <div className="text-neutral-900 font-semibold">{bName}</div>
                        <div className="text-xs text-neutral-500">{d.series || "Standard"}</div>
                      </td>
                      <td className="px-4 py-3.5">
                        <div className="flex gap-1.5 flex-wrap">
                          {(d.variants || []).slice(0, 3).map((s: any) => (
                            <span
                              key={s.storage}
                              className="bg-neutral-100 text-neutral-700 border border-neutral-200 px-2 py-0.5 rounded text-[11px] font-semibold"
                            >
                              {s.storage}
                            </span>
                          ))}
                          {(d.variants?.length || 0) > 3 && (
                            <span className="text-xs text-neutral-500 font-medium">...</span>
                          )}
                        </div>
                      </td>
                      <td className="px-4 py-3.5 text-center">
                        {d.isActive ? (
                          <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold px-2.5 py-1 rounded-full text-xs">
                            Active
                          </span>
                        ) : (
                          <span className="bg-rose-50 text-rose-800 border border-rose-200 font-bold px-2.5 py-1 rounded-full text-xs">
                            Inactive
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-3.5 text-right">
                        <button
                          type="button"
                          onClick={() => openDrawer(d)}
                          className="p-2 text-neutral-600 hover:text-brand-600 hover:bg-neutral-100 rounded-lg transition border border-transparent hover:border-neutral-200 cursor-pointer"
                          title="Edit Device"
                        >
                          <Edit className="h-4 w-4" />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDelete(d._id, d.name)}
                          className="p-2 text-neutral-600 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition border border-transparent hover:border-rose-200 ml-1 cursor-pointer"
                          title="Deactivate Device"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Edit Drawer Modal Overlay */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end animate-in fade-in duration-200">
          <div className="w-full max-w-md bg-white border-l border-neutral-200 h-full overflow-y-auto p-6 shadow-2xl animate-in slide-in-from-right text-neutral-900">
            <div className="flex justify-between items-center mb-6 border-b border-neutral-200 pb-4">
              <h3 className="text-xl font-extrabold text-neutral-900">
                {editingDevice ? "Edit Device" : "Add Device"}
              </h3>
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                className="p-2 text-neutral-500 hover:text-neutral-900 rounded-full bg-neutral-100 hover:bg-neutral-200 transition cursor-pointer"
                aria-label="Close drawer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-neutral-800 block mb-1">
                  Brand
                </label>
                <select
                  value={form.brandId}
                  onChange={(e) => setForm({ ...form, brandId: e.target.value })}
                  className="w-full bg-white border border-neutral-300 rounded-xl px-3.5 py-2.5 text-sm text-neutral-900 focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20 outline-none"
                  required
                >
                  <option value="">Select Brand</option>
                  {brands.map((b) => (
                    <option key={b.id} value={b.id}>
                      {b.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-neutral-800 block mb-1">
                  Model Name
                </label>
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={(e) => {
                    const slug = e.target.value
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, "-");
                    setForm({ ...form, name: e.target.value, slug });
                  }}
                  className="w-full bg-white border border-neutral-300 rounded-xl px-3.5 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20 outline-none"
                  placeholder="e.g. iPhone 15 Pro"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-neutral-800 block mb-1">
                  Slug
                </label>
                <input
                  required
                  type="text"
                  value={form.slug}
                  onChange={(e) => setForm({ ...form, slug: e.target.value })}
                  className="w-full bg-neutral-50 border border-neutral-300 rounded-xl px-3.5 py-2.5 text-sm text-neutral-700 font-mono outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-neutral-800 block mb-1">
                    Series
                  </label>
                  <input
                    type="text"
                    value={form.series}
                    onChange={(e) => setForm({ ...form, series: e.target.value })}
                    className="w-full bg-white border border-neutral-300 rounded-xl px-3.5 py-2.5 text-sm text-neutral-900 focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20 outline-none"
                    placeholder="e.g. 15 Series"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-neutral-800 block mb-1">
                    Release Year
                  </label>
                  <input
                    type="number"
                    value={form.releaseYear}
                    onChange={(e) =>
                      setForm({ ...form, releaseYear: e.target.value })
                    }
                    className="w-full bg-white border border-neutral-300 rounded-xl px-3.5 py-2.5 text-sm text-neutral-900 focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20 outline-none"
                    placeholder="e.g. 2023"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-neutral-800 block mb-1">
                  Storage Options (pipe-separated)
                </label>
                <input
                  type="text"
                  placeholder="64GB | 128GB | 256GB"
                  value={form.variants}
                  onChange={(e) => setForm({ ...form, variants: e.target.value })}
                  className="w-full bg-white border border-neutral-300 rounded-xl px-3.5 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20 outline-none"
                />
              </div>

              <div className="pt-4 border-t border-neutral-200">
                <h4 className="text-sm font-bold text-neutral-900 mb-2">
                  Pricing (Optional, leave blank for WhatsApp quote)
                </h4>

                {["mint", "worn", "cracked", "dead"].map((cond) => (
                  <div key={cond} className="mb-3">
                    <label className="text-xs font-bold text-neutral-700 block mb-1 capitalize">
                      {cond} Condition
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="number"
                        placeholder="Min ₹"
                        value={(form as any)[`${cond}_min`]}
                        onChange={(e) =>
                          setForm({ ...form, [`${cond}_min`]: e.target.value })
                        }
                        className="w-full bg-white border border-neutral-300 rounded-xl px-3 py-2 text-sm text-neutral-900 focus:border-brand-600 outline-none"
                      />
                      <input
                        type="number"
                        placeholder="Max ₹"
                        value={(form as any)[`${cond}_max`]}
                        onChange={(e) =>
                          setForm({ ...form, [`${cond}_max`]: e.target.value })
                        }
                        className="w-full bg-white border border-neutral-300 rounded-xl px-3 py-2 text-sm text-neutral-900 focus:border-brand-600 outline-none"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 pt-2">
                <input
                  type="checkbox"
                  id="isActive"
                  checked={form.isActive}
                  onChange={(e) => setForm({ ...form, isActive: e.target.checked })}
                  className="rounded border-neutral-300 text-brand-600 focus:ring-brand-500 h-4 w-4"
                />
                <label
                  htmlFor="isActive"
                  className="text-sm font-semibold text-neutral-800 cursor-pointer"
                >
                  Active (Visible in customer trade-in catalog)
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-600 hover:bg-brand-700 active:bg-brand-800 text-white font-bold py-3.5 rounded-xl mt-4 shadow-md shadow-brand-600/20 transition cursor-pointer"
              >
                {editingDevice ? "Save Changes" : "Create Device"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
