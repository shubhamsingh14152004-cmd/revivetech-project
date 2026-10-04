import React, { useState, useEffect, useCallback } from "react";
import { useNavigate, Link } from "@tanstack/react-router";
import {
  api,
  getAdminToken,
  clearAdminToken,
  RepairRequestItem,
  RepairStats,
} from "../services/api";
import {
  ShieldCheck,
  Search,
  Filter,
  RefreshCw,
  LogOut,
  Clock,
  CheckCircle2,
  AlertCircle,
  XCircle,
  Eye,
  Trash2,
  ExternalLink,
  Phone,
  Mail,
  MapPin,
  Calendar,
  IndianRupee,
  Smartphone,
  Wrench,
  Loader2,
  X,
  Check,
  ChevronRight,
  TrendingUp,
  Camera,
  Download,
  Maximize2,
  Image as ImageIcon,
  UserCheck,
} from "lucide-react";
import { toast } from "sonner";

export function AdminDashboard() {
  const navigate = useNavigate();

  const [stats, setStats] = useState<RepairStats>({
    total: 0,
    pending: 0,
    confirmed: 0,
    inProgress: 0,
    completed: 0,
    cancelled: 0,
  });

  const [requests, setRequests] = useState<RepairRequestItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedRequest, setSelectedRequest] = useState<RepairRequestItem | null>(null);
  const [statusUpdating, setStatusUpdating] = useState<string | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [adminUser, setAdminUser] = useState<any>(null);

  // Authentication check
  useEffect(() => {
    const token = getAdminToken();
    if (!token) {
      navigate({ to: "/admin/login" });
      return;
    }

    try {
      const stored = localStorage.getItem("revivetech_admin_user") || localStorage.getItem("sagartech_admin_user");
      if (stored) setAdminUser(JSON.parse(stored));
    } catch (_) {}
  }, [navigate]);

  // Fetch data
  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const [statsRes, listRes] = await Promise.all([
        api.getRepairStats(),
        api.getRepairRequests({
          status: selectedStatus,
          search: searchTerm,
        }),
      ]);

      if (statsRes.success && statsRes.data) {
        setStats(statsRes.data);
      }
      if (listRes.success && listRes.data) {
        setRequests(listRes.data.requests);
      }
    } catch (err: any) {
      if (err.message && (err.message.includes("401") || err.message.includes("token"))) {
        clearAdminToken();
        navigate({ to: "/admin/login" });
      } else {
        toast.error("Error loading requests", { description: err.message });
      }
    } finally {
      setLoading(false);
    }
  }, [selectedStatus, searchTerm, navigate]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Handle Logout
  const handleLogout = () => {
    api.adminLogout();
    toast.info("Logged out successfully");
    navigate({ to: "/admin/login" });
  };

  // Handle Status Update
  const handleUpdateStatus = async (
    id: string,
    newStatus: string,
    notes?: string
  ) => {
    setStatusUpdating(id);
    try {
      const res = await api.updateRepairStatus(id, newStatus, notes);
      if (res.success && res.data) {
        toast.success(`Request marked as ${newStatus}`);
        setRequests((prev) =>
          prev.map((r) => (r._id === id ? res.data! : r))
        );
        if (selectedRequest && selectedRequest._id === id) {
          setSelectedRequest(res.data);
        }
        // Refresh statistics
        const statsRes = await api.getRepairStats();
        if (statsRes.success && statsRes.data) setStats(statsRes.data);
      }
    } catch (err: any) {
      toast.error("Failed to update status", { description: err.message });
    } finally {
      setStatusUpdating(null);
    }
  };

  // Handle Delete
  const handleDeleteRequest = async (id: string, ticket: string) => {
    if (!window.confirm(`Are you sure you want to permanently delete ticket ${ticket}?`)) {
      return;
    }

    try {
      const res = await api.deleteRepair(id);
      if (res.success) {
        toast.success(`Ticket ${ticket} removed from database`);
        setRequests((prev) => prev.filter((r) => r._id !== id));
        if (selectedRequest && selectedRequest._id === id) {
          setSelectedRequest(null);
        }
        const statsRes = await api.getRepairStats();
        if (statsRes.success && statsRes.data) setStats(statsRes.data);
      }
    } catch (err: any) {
      toast.error("Failed to delete", { description: err.message });
    }
  };

  // Status Badge Helper
  const renderStatusBadge = (status: string) => {
    switch (status) {
      case "Pending":
        return (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/15 px-2.5 py-1 text-xs font-semibold text-amber-300 border border-amber-400/30">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            Pending Review
          </span>
        );
      case "Confirmed":
        return (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-400/15 px-2.5 py-1 text-xs font-semibold text-blue-300 border border-blue-400/30">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            Confirmed
          </span>
        );
      case "In Progress":
        return (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-400/15 px-2.5 py-1 text-xs font-semibold text-purple-300 border border-purple-400/30">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400 live-pulse" />
            On Bench / Transit
          </span>
        );
      case "Completed":
        return (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/15 px-2.5 py-1 text-xs font-semibold text-emerald-300 border border-emerald-400/30">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Completed / Paid
          </span>
        );
      case "Cancelled":
        return (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-400/15 px-2.5 py-1 text-xs font-semibold text-rose-300 border border-rose-400/30">
            <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
            Cancelled
          </span>
        );
      default:
        return <span className="text-slate-300">{status}</span>;
    }
  };

  return (
    <div className="dusk-admin min-h-screen w-full text-slate-100 selection:bg-[#007F5F] selection:text-white pb-20 font-display flex flex-col">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-30 w-full bg-[#0A1412]/90 backdrop-blur-xl border-b border-[#43C59E]/20 px-4 md:px-8 py-3 shadow-xl">
        <div className="mx-auto max-w-7xl flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="chrome-plate grid h-9 w-9 shrink-0 place-items-center rounded-xl shadow-lg">
              <span className="font-label font-bold text-white text-base">R</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-base text-white tracking-tight">
                  Revora Operations
                </span>
                <span className="rounded-md bg-[#007F5F]/20 px-2 py-0.5 text-[10px] font-label font-bold text-[#43C59E] uppercase tracking-wider border border-[#43C59E]/30">
                  Admin v2.0
                </span>
              </div>
              <span className="text-[10px] font-label text-slate-400 block -mt-0.5">
                Cleanroom Repair & Buyout Management Desk
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3.5 py-1.5 text-xs font-medium text-slate-200 hover:bg-white/15 hover:text-white transition border border-white/10"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              <span>View Storefront</span>
            </Link>

            {adminUser && (
              <div className="hidden md:flex flex-col text-right">
                <span className="text-xs font-bold text-white leading-tight">
                  {adminUser.name || "Administrator"}
                </span>
                <span className="text-[10px] text-slate-400">{adminUser.email}</span>
              </div>
            )}

            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 rounded-full bg-rose-500/10 hover:bg-rose-500/20 hover:text-rose-200 px-3.5 py-1.5 text-xs font-bold font-label text-rose-300 transition border border-rose-500/30 cursor-pointer"
            >
              <LogOut className="h-3.5 w-3.5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="mx-auto max-w-7xl px-4 md:px-8 pt-8 space-y-8 flex-1 w-full">
        {/* KPI Statistics Row */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-lg font-bold text-white flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-[#43C59E]" />
              <span>Repair & Buyback Operations Overview</span>
            </h2>
            <button
              type="button"
              onClick={fetchData}
              disabled={loading}
              className="inline-flex items-center gap-1.5 text-xs text-[#43C59E] hover:text-white transition cursor-pointer font-label"
            >
              <RefreshCw className={`h-3.5 w-3.5 ${loading ? "animate-spin" : ""}`} />
              <span>Sync Live DB</span>
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {/* Total */}
            <div className="h-full flex flex-col justify-between rounded-2xl glass-card-admin p-4 border border-[#43C59E]/20 shadow-lg">
              <span className="text-[11px] font-label uppercase tracking-wider text-slate-300 block font-bold">
                Total Orders
              </span>
              <span className="font-display text-3xl font-black text-white mt-2 block">
                {stats.total}
              </span>
              <span className="text-[10px] text-slate-400 mt-1 block">All time tickets</span>
            </div>

            {/* Pending */}
            <div className="h-full flex flex-col justify-between rounded-2xl bg-amber-500/10 p-4 border border-amber-500/30 shadow-lg">
              <span className="text-[11px] font-label uppercase tracking-wider text-amber-400 block font-bold">
                Pending
              </span>
              <span className="font-display text-3xl font-black text-amber-300 mt-2 block">
                {stats.pending}
              </span>
              <span className="text-[10px] text-amber-300/80 mt-1 block">Needs review</span>
            </div>

            {/* Confirmed */}
            <div className="h-full flex flex-col justify-between rounded-2xl bg-blue-500/10 p-4 border border-blue-500/30 shadow-lg">
              <span className="text-[11px] font-label uppercase tracking-wider text-blue-400 block font-bold">
                Confirmed
              </span>
              <span className="font-display text-3xl font-black text-blue-300 mt-2 block">
                {stats.confirmed}
              </span>
              <span className="text-[10px] text-blue-300/80 mt-1 block">Kit dispatched</span>
            </div>

            {/* In Progress */}
            <div className="h-full flex flex-col justify-between rounded-2xl bg-purple-500/10 p-4 border border-purple-500/30 shadow-lg">
              <span className="text-[11px] font-label uppercase tracking-wider text-purple-400 block font-bold">
                In Progress
              </span>
              <span className="font-display text-3xl font-black text-purple-300 mt-2 block">
                {stats.inProgress}
              </span>
              <span className="text-[10px] text-purple-300/80 mt-1 block">On clean bench</span>
            </div>

            {/* Completed */}
            <div className="h-full flex flex-col justify-between rounded-2xl bg-emerald-500/10 p-4 border border-emerald-500/30 shadow-lg">
              <span className="text-[11px] font-label uppercase tracking-wider text-emerald-400 block font-bold">
                Completed
              </span>
              <span className="font-display text-3xl font-black text-emerald-300 mt-2 block">
                {stats.completed}
              </span>
              <span className="text-[10px] text-emerald-300/80 mt-1 block">Paid & closed</span>
            </div>

            {/* Cancelled */}
            <div className="h-full flex flex-col justify-between rounded-2xl bg-rose-500/10 p-4 border border-rose-500/30 shadow-lg">
              <span className="text-[11px] font-label uppercase tracking-wider text-rose-400 block font-bold">
                Cancelled
              </span>
              <span className="font-display text-3xl font-black text-rose-300 mt-2 block">
                {stats.cancelled}
              </span>
              <span className="text-[10px] text-rose-300/80 mt-1 block">Void / refunded</span>
            </div>
          </div>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="rounded-2xl glass-card-admin p-4 border border-[#43C59E]/20 flex flex-col md:flex-row gap-4 items-center justify-between shadow-xl">
          {/* Search box */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search customer, phone, brand, model or RT- ticket…"
              className="w-full rounded-xl border border-white/15 bg-black/40 pl-10 pr-4 py-2.5 text-xs text-white placeholder:text-slate-400 outline-none transition focus:border-[#43C59E] focus:ring-1 focus:ring-[#43C59E]"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>

          {/* Status Tabs Filter */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {[
              { id: "all", label: "All" },
              { id: "Pending", label: "Pending" },
              { id: "Confirmed", label: "Confirmed" },
              { id: "In Progress", label: "In Progress" },
              { id: "Completed", label: "Completed" },
              { id: "Cancelled", label: "Cancelled" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedStatus(tab.id)}
                className={`rounded-xl px-3.5 py-1.5 text-xs font-semibold font-label transition cursor-pointer ${
                  selectedStatus === tab.id
                    ? "bg-[#007F5F] text-white shadow-md shadow-[#007F5F]/40 border border-[#43C59E]/40"
                    : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Requests Table */}
        <div className="rounded-3xl glass-card-admin border border-[#43C59E]/20 shadow-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-black/60 border-b border-white/10 font-label text-[11px] uppercase tracking-wider text-slate-300">
                <tr>
                  <th className="py-4 px-4 font-bold">Ticket / Date</th>
                  <th className="py-4 px-4 font-bold">Customer</th>
                  <th className="py-4 px-4 font-bold">Brand & Model</th>
                  <th className="py-4 px-3 font-bold text-center">Photo</th>
                  <th className="py-4 px-4 font-bold">Service Type</th>
                  <th className="py-4 px-4 font-bold">Amount / Payout</th>
                  <th className="py-4 px-4 font-bold">Status</th>
                  <th className="py-4 px-4 font-bold text-right">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-white/5">
                {loading && requests.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="py-16 text-center text-slate-400">
                      <Loader2 className="h-7 w-7 animate-spin mx-auto mb-2 text-[#43C59E]" />
                      <span>Loading database records…</span>
                    </td>
                  </tr>
                ) : requests.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="py-16 text-center text-slate-400">
                      <Smartphone className="h-9 w-9 mx-auto mb-2 opacity-40 text-slate-400" />
                      <p className="font-bold text-white text-sm">No requests found</p>
                      <p className="text-xs text-slate-400 mt-1">
                        {searchTerm || selectedStatus !== "all"
                          ? "Try clearing your search term or status filter."
                          : "New customer repair & trade-in submissions will appear here in real time."}
                      </p>
                    </td>
                  </tr>
                ) : (
                  requests.map((item) => (
                    <tr
                      key={item._id}
                      className="hover:bg-white/[0.04] transition-colors group cursor-pointer border-b border-white/5"
                      onClick={() => setSelectedRequest(item)}
                    >
                      {/* Ticket & Date */}
                      <td className="py-4 px-4">
                        <span className="font-mono font-bold text-[#43C59E] block">
                          {item.ticketNumber}
                        </span>
                        <span className="text-[10px] text-slate-400 flex items-center gap-1 mt-1">
                          <Clock className="h-3 w-3" />
                          {new Date(item.createdAt).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </span>
                      </td>

                      {/* Customer */}
                      <td className="py-4 px-4">
                        <span className="font-bold text-white block">
                          {item.customerName}
                        </span>
                        <div
                          className="flex items-center gap-2 mt-1.5"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <a
                            href={`tel:${item.phoneNumber}`}
                            className="font-mono text-xs font-bold text-[#43C59E] hover:underline flex items-center gap-1 bg-white/5 px-2 py-0.5 rounded border border-white/10 hover:bg-white/10 transition"
                            title="Click to call customer"
                          >
                            <Phone className="h-3 w-3 text-emerald-400" />
                            <span>{item.phoneNumber}</span>
                          </a>
                          <a
                            href={`https://wa.me/91${item.phoneNumber.replace(/\D/g, "")}?text=Hi%20${encodeURIComponent(item.customerName)}%2C%20Revora%20team%20here%20regarding%20ticket%20${item.ticketNumber}.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[10px] font-bold font-label bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 px-2 py-0.5 rounded border border-emerald-500/30 transition"
                            title="Chat with customer on WhatsApp"
                          >
                            WhatsApp
                          </a>
                        </div>
                      </td>

                      {/* Device */}
                      <td className="py-4 px-4">
                        <span className="font-semibold text-white block">
                          {item.phoneModel}
                        </span>
                        <div className="flex flex-wrap items-center gap-1.5 mt-1">
                          <span className="text-[10px] text-[#43C59E] font-label uppercase font-bold bg-[#007F5F]/20 px-1.5 py-0.2 rounded border border-[#43C59E]/30">
                            {item.phoneBrand}
                          </span>
                          {item.storage && (
                            <span className="text-[10px] text-slate-300">
                              · {item.storage}
                            </span>
                          )}
                          {item.deviceCondition && (
                            <span className="text-[10px] text-amber-300 capitalize">
                              · {item.deviceCondition.replace("_", " ")}
                            </span>
                          )}
                        </div>
                      </td>

                      {/* Phone Photo Thumbnail */}
                      <td
                        className="py-4 px-3 text-center"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {item.phoneImage ? (
                          <div
                            onClick={() => setPreviewImage(item.phoneImage || null)}
                            className="relative group mx-auto h-11 w-11 rounded-xl overflow-hidden border border-white/20 bg-black/60 cursor-pointer shadow-md hover:ring-2 hover:ring-[#43C59E] transition"
                            title="Click to zoom device photo"
                          >
                            <img
                              src={item.phoneImage}
                              alt="Device photo"
                              className="h-full w-full object-cover group-hover:scale-110 transition duration-200"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                              <Eye className="h-3.5 w-3.5 text-white" />
                            </div>
                          </div>
                        ) : (
                          <span className="text-[10px] text-slate-500 italic">
                            No photo
                          </span>
                        )}
                      </td>

                      {/* Service Type */}
                      <td className="py-4 px-4 max-w-xs">
                        <span className="text-slate-200 font-medium truncate block">
                          {item.serviceType}
                        </span>
                        {item.problemDescription && (
                          <span className="text-[10px] text-slate-400 truncate block mt-0.5">
                            {item.problemDescription}
                          </span>
                        )}
                      </td>

                      {/* Amount / Payout */}
                      <td className="py-4 px-4 font-mono font-bold text-[#F59E0B]">
                        {item.estimatedAmount > 0 ? (
                          `₹${item.estimatedAmount.toLocaleString("en-IN")}`
                        ) : (
                          <span className="text-slate-400 font-normal">Custom Quote</span>
                        )}
                      </td>

                      {/* Status Dropdown */}
                      <td className="py-4 px-4" onClick={(e) => e.stopPropagation()}>
                        <select
                          value={item.status}
                          disabled={statusUpdating === item._id}
                          onChange={(e) => handleUpdateStatus(item._id, e.target.value)}
                          className="rounded-lg bg-black/50 border border-white/20 px-2.5 py-1 text-xs text-white outline-none focus:border-[#43C59E] cursor-pointer font-label transition"
                        >
                          <option value="Pending" className="bg-[#0F172A] text-amber-400 font-semibold py-1">
                            Pending Review
                          </option>
                          <option value="Confirmed" className="bg-[#0F172A] text-blue-400 font-semibold py-1">
                            Confirmed
                          </option>
                          <option value="In Progress" className="bg-[#0F172A] text-purple-400 font-semibold py-1">
                            In Progress
                          </option>
                          <option value="Completed" className="bg-[#0F172A] text-emerald-400 font-semibold py-1">
                            Completed / Paid
                          </option>
                          <option value="Cancelled" className="bg-[#0F172A] text-rose-400 font-semibold py-1">
                            Cancelled
                          </option>
                        </select>
                      </td>

                      {/* Actions */}
                      <td className="py-4 px-4 text-right" onClick={(e) => e.stopPropagation()}>
                        <div className="inline-flex items-center gap-1.5">
                          <button
                            type="button"
                            onClick={() => setSelectedRequest(item)}
                            title="View Full Details"
                            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition cursor-pointer border border-white/10"
                          >
                            <Eye className="h-3.5 w-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDeleteRequest(item._id, item.ticketNumber)}
                            title="Delete Record"
                            className="p-1.5 rounded-lg bg-white/5 hover:bg-rose-500/20 text-slate-400 hover:text-rose-300 transition cursor-pointer border border-white/10"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Full Customer & Order Details Modal */}
      {selectedRequest && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl rounded-3xl glass-card-admin p-6 md:p-8 border border-[#43C59E]/30 shadow-2xl text-white max-h-[90vh] overflow-y-auto">
            {/* Close button */}
            <button
              onClick={() => setSelectedRequest(null)}
              className="absolute right-5 top-5 p-2 text-slate-400 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition cursor-pointer border border-white/10"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Header */}
            <div className="border-b border-white/10 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="font-mono text-sm font-bold text-[#43C59E]">
                  {selectedRequest.ticketNumber}
                </span>
                {renderStatusBadge(selectedRequest.status)}
              </div>
              <h3 className="font-display text-2xl font-bold text-white mt-1">
                Order & Customer Dossier
              </h3>
              <span className="text-xs text-slate-400 mt-0.5 block">
                Created on {new Date(selectedRequest.createdAt).toLocaleString("en-IN")}
              </span>
            </div>

            {/* Details Grid */}
            <div className="grid gap-6 md:grid-cols-2 text-xs font-display">
              {/* Customer Info */}
              <div className="rounded-2xl bg-black/40 p-4 border border-white/10 space-y-3">
                <span className="font-label text-[10px] uppercase tracking-wider text-[#43C59E] font-bold block border-b border-white/10 pb-1.5">
                  Customer Information
                </span>
                <div className="flex justify-between">
                  <span className="text-slate-400">Name:</span>
                  <span className="font-semibold text-white">{selectedRequest.customerName}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Phone:</span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-[#43C59E] text-sm">
                      {selectedRequest.phoneNumber}
                    </span>
                    <a
                      href={`tel:${selectedRequest.phoneNumber}`}
                      className="rounded-lg bg-white/10 hover:bg-white/20 px-2 py-0.5 text-xs text-white flex items-center gap-1 transition border border-white/15"
                      title="Direct phone call"
                    >
                      <Phone className="h-3 w-3 text-emerald-400" /> Call
                    </a>
                    <a
                      href={`https://wa.me/91${selectedRequest.phoneNumber.replace(/\D/g, "")}?text=Hi%20${encodeURIComponent(selectedRequest.customerName)}%2C%20Revora%20team%20here%20regarding%20ticket%20${selectedRequest.ticketNumber}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 px-2 py-0.5 text-xs font-semibold flex items-center gap-1 border border-emerald-500/30 transition"
                      title="Open WhatsApp chat"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Email:</span>
                  <span className="font-semibold text-white">
                    {selectedRequest.email || "Not specified"}
                  </span>
                </div>
                {selectedRequest.address && (
                  <div className="flex justify-between">
                    <span className="text-slate-400">Address:</span>
                    <span className="font-semibold text-white text-right max-w-[60%]">
                      {selectedRequest.address}
                    </span>
                  </div>
                )}
              </div>

              {/* Device Details */}
              <div className="rounded-2xl bg-black/40 p-4 border border-white/10 space-y-3">
                <span className="font-label text-[10px] uppercase tracking-wider text-[#43C59E] font-bold block border-b border-white/10 pb-1.5">
                  Device Specifications
                </span>
                <div className="flex justify-between">
                  <span className="text-slate-400">Brand:</span>
                  <span className="font-semibold text-white">{selectedRequest.phoneBrand}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Model:</span>
                  <span className="font-semibold text-white">{selectedRequest.phoneModel}</span>
                </div>
                {selectedRequest.storage && (
                  <div className="flex justify-between">
                    <span className="text-slate-400">Storage:</span>
                    <span className="font-semibold text-white">{selectedRequest.storage}</span>
                  </div>
                )}
                {selectedRequest.deviceCondition && (
                  <div className="flex justify-between">
                    <span className="text-slate-400">Condition:</span>
                    <span className="font-semibold text-amber-300 capitalize">
                      {selectedRequest.deviceCondition.replace("_", " ")}
                    </span>
                  </div>
                )}
              </div>

              {/* Customer Uploaded Device Photo */}
              {selectedRequest.phoneImage && (
                <div className="md:col-span-2 rounded-2xl bg-black/40 p-4 border border-white/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-label text-[10px] uppercase tracking-wider text-[#43C59E] font-bold flex items-center gap-1.5">
                      <Camera className="h-3.5 w-3.5" />
                      <span>Customer Uploaded Device Photo</span>
                    </span>
                    <button
                      type="button"
                      onClick={() => setPreviewImage(selectedRequest.phoneImage || null)}
                      className="inline-flex items-center gap-1 text-[11px] text-[#43C59E] hover:text-white transition font-label cursor-pointer"
                    >
                      <Maximize2 className="h-3 w-3" />
                      <span>Full Resolution</span>
                    </button>
                  </div>
                  <div
                    onClick={() => setPreviewImage(selectedRequest.phoneImage || null)}
                    className="relative max-h-72 rounded-xl overflow-hidden border border-white/15 bg-black/60 cursor-pointer group flex items-center justify-center p-2"
                  >
                    <img
                      src={selectedRequest.phoneImage}
                      alt="Customer uploaded device"
                      className="max-h-64 w-auto object-contain mx-auto group-hover:scale-105 transition duration-300 rounded-lg shadow-lg"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition gap-2">
                      <span className="rounded-full bg-black/80 px-3.5 py-1.5 text-xs text-white flex items-center gap-1.5 border border-white/20 shadow-lg">
                        <Eye className="h-3.5 w-3.5" /> Click to Zoom Photo
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Service & Logistics */}
              <div className="md:col-span-2 rounded-2xl bg-black/40 p-4 border border-white/10 space-y-3">
                <span className="font-label text-[10px] uppercase tracking-wider text-[#43C59E] font-bold block border-b border-white/10 pb-1.5">
                  Service & Logistics Breakdown
                </span>
                <div className="grid sm:grid-cols-3 gap-3 text-xs">
                  <div>
                    <span className="text-slate-400 block">Service Type:</span>
                    <span className="font-semibold text-white mt-0.5 block">
                      {selectedRequest.serviceType}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Preferred Logistics:</span>
                    <span className="font-semibold text-white mt-0.5 block">
                      {selectedRequest.preferredOption}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Payout / Valuation:</span>
                    <span className="font-mono font-bold text-[#F59E0B] mt-0.5 block">
                      {selectedRequest.estimatedAmount > 0
                        ? `₹${selectedRequest.estimatedAmount.toLocaleString("en-IN")}`
                        : "Custom Quote"}
                    </span>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10">
                  <span className="text-slate-400 block">Reported Symptoms & Notes:</span>
                  <p className="mt-1 p-3 rounded-xl bg-black/60 text-slate-200 leading-relaxed border border-white/10 font-mono text-xs">
                    {selectedRequest.problemDescription || "None provided by customer."}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Status Control */}
            <div className="mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <span className="text-xs text-slate-300 font-label">Change Status:</span>
                <select
                  value={selectedRequest.status}
                  onChange={(e) =>
                    handleUpdateStatus(selectedRequest._id, e.target.value)
                  }
                  className="rounded-xl bg-black/50 border border-white/20 px-3 py-2 text-xs text-white outline-none focus:border-[#43C59E] cursor-pointer font-label"
                >
                  <option value="Pending" className="bg-[#0F172A] text-amber-400 font-semibold py-1">Pending Review</option>
                  <option value="Confirmed" className="bg-[#0F172A] text-blue-400 font-semibold py-1">Confirmed</option>
                  <option value="In Progress" className="bg-[#0F172A] text-purple-400 font-semibold py-1">In Progress</option>
                  <option value="Completed" className="bg-[#0F172A] text-emerald-400 font-semibold py-1">Completed</option>
                  <option value="Cancelled" className="bg-[#0F172A] text-rose-400 font-semibold py-1">Cancelled</option>
                </select>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => setSelectedRequest(null)}
                  className="w-full sm:w-auto rounded-full bg-white/10 hover:bg-white/20 border border-white/15 px-6 py-2 text-xs font-semibold text-white transition cursor-pointer font-label"
                >
                  Close Dossier
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Full-Screen Photo Lightbox Modal */}
      {previewImage && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-lg p-4 animate-in fade-in duration-200"
          onClick={() => setPreviewImage(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] rounded-3xl overflow-hidden border border-white/20 bg-[#0F172A] p-4 shadow-2xl flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full flex items-center justify-between pb-3 border-b border-white/10 mb-3">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-[#007F5F]/30 text-[#43C59E] border border-[#43C59E]/30">
                  <Camera className="h-4 w-4" />
                </div>
                <span className="font-display font-bold text-sm text-white">
                  Customer Device Inspection Photo
                </span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={previewImage}
                  download="customer-device-photo.jpg"
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/10 hover:bg-white/20 px-3.5 py-1.5 text-xs text-white transition font-label cursor-pointer border border-white/10"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Download</span>
                </a>
                <button
                  type="button"
                  onClick={() => setPreviewImage(null)}
                  className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition cursor-pointer border border-white/10"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="w-full flex items-center justify-center bg-black/60 rounded-2xl p-2 max-h-[75vh] overflow-hidden">
              <img
                src={previewImage}
                alt="Full device inspection"
                className="max-h-[70vh] w-auto object-contain rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
