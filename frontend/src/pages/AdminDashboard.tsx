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
  RefreshCw,
  LogOut,
  Clock,
  AlertCircle,
  Eye,
  Trash2,
  ExternalLink,
  Phone,
  Smartphone,
  Loader2,
  X,
  TrendingUp,
  Camera,
  Download,
  Maximize2,
} from "lucide-react";
import { toast } from "sonner";
import { AdminDevicesTab } from "./AdminDevicesTab";

export function AdminDashboard() {
  const navigate = useNavigate();
  const [activeMainTab, setActiveMainTab] = useState("requests");

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
      const stored =
        localStorage.getItem("revivetech_admin_user") ||
        localStorage.getItem("sagartech_admin_user");
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
          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-800 border border-amber-200">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
            Pending Review
          </span>
        );
      case "Confirmed":
        return (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-800 border border-blue-200">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            Confirmed
          </span>
        );
      case "In Progress":
        return (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-50 px-2.5 py-1 text-xs font-semibold text-purple-800 border border-purple-200">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-500 animate-pulse" />
            On Bench / Transit
          </span>
        );
      case "Completed":
        return (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-800 border border-emerald-200">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Completed / Paid
          </span>
        );
      case "Cancelled":
        return (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-50 px-2.5 py-1 text-xs font-semibold text-rose-800 border border-rose-200">
            <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
            Cancelled
          </span>
        );
      default:
        return <span className="text-neutral-600 font-medium">{status}</span>;
    }
  };

  return (
    <div className="min-h-screen w-full bg-neutral-50 text-neutral-900 pb-20 flex flex-col selection:bg-brand selection:text-white">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-30 w-full bg-neutral-900 border-b border-neutral-800 px-4 md:px-8 py-3.5 shadow-md">
        <div className="mx-auto max-w-7xl flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand-600 text-white font-bold text-base shadow-sm">
              <span>R</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-base text-white tracking-tight">
                  Revora Operations
                </span>
                <span className="rounded-md bg-brand-500/20 px-2 py-0.5 text-[10px] font-bold text-brand-300 uppercase tracking-wider border border-brand-500/30">
                  Admin v2.0
                </span>
              </div>
              <span className="text-[11px] text-neutral-400 block -mt-0.5">
                Lab Repair &amp; Buyout Management Desk
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 px-3.5 py-1.5 text-xs font-semibold text-neutral-200 hover:text-white transition border border-neutral-700"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              <span>View Storefront</span>
            </Link>

            {adminUser && (
              <div className="hidden md:flex flex-col text-right">
                <span className="text-xs font-bold text-white leading-tight">
                  {adminUser.name || "Administrator"}
                </span>
                <span className="text-[11px] text-neutral-400">{adminUser.email}</span>
              </div>
            )}

            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 rounded-lg bg-rose-500/15 hover:bg-rose-500/25 px-3.5 py-1.5 text-xs font-bold text-rose-300 hover:text-rose-200 transition border border-rose-500/30 cursor-pointer"
            >
              <LogOut className="h-3.5 w-3.5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="mx-auto max-w-7xl px-4 md:px-8 pt-8 space-y-6 flex-1 w-full">
        {/* Title & Sync Row */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
            <h2 className="text-lg sm:text-2xl font-extrabold text-neutral-900 flex items-center gap-2.5">
              <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-brand-600 shrink-0" />
              <span>Repair &amp; Buyback Operations Overview</span>
            </h2>
            <button
              type="button"
              onClick={fetchData}
              disabled={loading}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-700 hover:text-brand-800 bg-brand-50 hover:bg-brand-100 border border-brand-200 px-3 py-1.5 rounded-xl transition cursor-pointer shadow-xs disabled:opacity-60 self-start sm:self-auto shrink-0"
            >
              <RefreshCw className={`h-3.5 w-3.5 ${loading ? "animate-spin" : ""}`} />
              <span>Sync Live DB</span>
            </button>
          </div>

          {/* Main Navigation Tabs */}
          <div className="flex gap-6 border-b border-neutral-200 mb-6">
            <button
              type="button"
              onClick={() => setActiveMainTab("requests")}
              className={`pb-3 font-bold text-sm transition-colors border-b-2 cursor-pointer ${
                activeMainTab === "requests"
                  ? "border-brand-600 text-brand-700"
                  : "border-transparent text-neutral-600 hover:text-neutral-900"
              }`}
            >
              Repair Requests
            </button>
            <button
              type="button"
              onClick={() => setActiveMainTab("devices")}
              className={`pb-3 font-bold text-sm transition-colors border-b-2 cursor-pointer ${
                activeMainTab === "devices"
                  ? "border-brand-600 text-brand-700"
                  : "border-transparent text-neutral-600 hover:text-neutral-900"
              }`}
            >
              Device Catalog
            </button>
          </div>
        </div>

        {activeMainTab === "requests" ? (
          <>
            {/* KPI Statistics Row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
              {/* Total */}
              <div className="h-full flex flex-col justify-between rounded-2xl bg-white p-4 sm:p-5 border border-neutral-200 shadow-xs">
                <span className="text-[11px] uppercase tracking-wider text-neutral-500 block font-bold">
                  Total Orders
                </span>
                <span className="text-3xl font-black text-neutral-900 mt-2 block">
                  {stats.total}
                </span>
                <span className="text-[11px] text-neutral-500 mt-1 block font-medium">
                  All time tickets
                </span>
              </div>

              {/* Pending */}
              <div className="h-full flex flex-col justify-between rounded-2xl bg-amber-50/70 p-4 sm:p-5 border border-amber-200 shadow-xs">
                <span className="text-[11px] uppercase tracking-wider text-amber-800 block font-bold">
                  Pending
                </span>
                <span className="text-3xl font-black text-amber-900 mt-2 block">
                  {stats.pending}
                </span>
                <span className="text-[11px] text-amber-700 mt-1 block font-medium">
                  Needs review
                </span>
              </div>

              {/* Confirmed */}
              <div className="h-full flex flex-col justify-between rounded-2xl bg-blue-50/70 p-4 sm:p-5 border border-blue-200 shadow-xs">
                <span className="text-[11px] uppercase tracking-wider text-blue-800 block font-bold">
                  Confirmed
                </span>
                <span className="text-3xl font-black text-blue-900 mt-2 block">
                  {stats.confirmed}
                </span>
                <span className="text-[11px] text-blue-700 mt-1 block font-medium">
                  Kit dispatched
                </span>
              </div>

              {/* In Progress */}
              <div className="h-full flex flex-col justify-between rounded-2xl bg-purple-50/70 p-4 sm:p-5 border border-purple-200 shadow-xs">
                <span className="text-[11px] uppercase tracking-wider text-purple-800 block font-bold">
                  In Progress
                </span>
                <span className="text-3xl font-black text-purple-900 mt-2 block">
                  {stats.inProgress}
                </span>
                <span className="text-[11px] text-purple-700 mt-1 block font-medium">
                  On clean bench
                </span>
              </div>

              {/* Completed */}
              <div className="h-full flex flex-col justify-between rounded-2xl bg-emerald-50/70 p-4 sm:p-5 border border-emerald-200 shadow-xs">
                <span className="text-[11px] uppercase tracking-wider text-emerald-800 block font-bold">
                  Completed
                </span>
                <span className="text-3xl font-black text-emerald-900 mt-2 block">
                  {stats.completed}
                </span>
                <span className="text-[11px] text-emerald-700 mt-1 block font-medium">
                  Paid &amp; closed
                </span>
              </div>

              {/* Cancelled */}
              <div className="h-full flex flex-col justify-between rounded-2xl bg-rose-50/70 p-4 sm:p-5 border border-rose-200 shadow-xs">
                <span className="text-[11px] uppercase tracking-wider text-rose-800 block font-bold">
                  Cancelled
                </span>
                <span className="text-3xl font-black text-rose-900 mt-2 block">
                  {stats.cancelled}
                </span>
                <span className="text-[11px] text-rose-700 mt-1 block font-medium">
                  Void / refunded
                </span>
              </div>
            </div>

            {/* Search & Filter Toolbar */}
            <div className="rounded-2xl bg-white p-4 border border-neutral-200 flex flex-col md:flex-row gap-4 items-center justify-between shadow-xs">
              {/* Search box */}
              <div className="relative w-full md:w-96">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search customer, phone, brand, model or RT- ticket…"
                  className="w-full rounded-xl border border-neutral-300 bg-white pl-10 pr-9 py-2.5 text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400 outline-none transition focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20"
                />
                {searchTerm && (
                  <button
                    type="button"
                    onClick={() => setSearchTerm("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700 cursor-pointer"
                    aria-label="Clear search"
                  >
                    <X className="h-4 w-4" />
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
                    type="button"
                    onClick={() => setSelectedStatus(tab.id)}
                    className={`rounded-xl px-3.5 py-1.5 text-xs font-bold transition cursor-pointer ${
                      selectedStatus === tab.id
                        ? "bg-brand-600 text-white shadow-xs"
                        : "bg-neutral-100 hover:bg-neutral-200 text-neutral-700 border border-neutral-200"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Requests Table */}
            <div className="rounded-2xl bg-white border border-neutral-200 shadow-xs overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-neutral-100 border-b border-neutral-200 text-[11px] uppercase tracking-wider text-neutral-700 font-bold">
                    <tr>
                      <th className="py-3.5 px-4">Ticket / Date</th>
                      <th className="py-3.5 px-4">Customer</th>
                      <th className="py-3.5 px-4">Brand &amp; Model</th>
                      <th className="py-3.5 px-3 text-center">Photo</th>
                      <th className="py-3.5 px-4">Service Type</th>
                      <th className="py-3.5 px-4">Amount / Payout</th>
                      <th className="py-3.5 px-4">Status</th>
                      <th className="py-3.5 px-4 text-right">Actions</th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-neutral-200">
                    {loading && requests.length === 0 ? (
                      <tr>
                        <td colSpan={8} className="py-16 text-center text-neutral-500">
                          <Loader2 className="h-7 w-7 animate-spin mx-auto mb-2 text-brand-600" />
                          <span className="font-medium">Loading database records…</span>
                        </td>
                      </tr>
                    ) : requests.length === 0 ? (
                      <tr>
                        <td colSpan={8} className="py-16 text-center">
                          <Smartphone className="h-10 w-10 mx-auto mb-2 text-neutral-400 opacity-60" />
                          <p className="font-bold text-neutral-900 text-base">No requests found</p>
                          <p className="text-xs sm:text-sm text-neutral-500 mt-1 max-w-sm mx-auto">
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
                          className="hover:bg-neutral-50 transition-colors group cursor-pointer"
                          onClick={() => setSelectedRequest(item)}
                        >
                          {/* Ticket & Date */}
                          <td className="py-4 px-4">
                            <span className="font-bold text-brand-700 text-xs sm:text-sm block">
                              {item.ticketNumber}
                            </span>
                            <span className="text-[11px] text-neutral-500 flex items-center gap-1 mt-0.5 font-medium">
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
                            <span className="font-bold text-neutral-900 block text-xs sm:text-sm">
                              {item.customerName}
                            </span>
                            <div
                              className="flex items-center gap-2 mt-1.5"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <a
                                href={`tel:${item.phoneNumber}`}
                                className="text-xs font-semibold text-neutral-700 hover:text-neutral-900 flex items-center gap-1 bg-neutral-100 hover:bg-neutral-200 px-2 py-0.5 rounded-lg border border-neutral-200 transition"
                                title="Click to call customer"
                              >
                                <Phone className="h-3 w-3 text-emerald-600" />
                                <span>{item.phoneNumber}</span>
                              </a>
                              <a
                                href={`https://wa.me/91${item.phoneNumber.replace(/\D/g, "")}?text=Hi%20${encodeURIComponent(item.customerName)}%2C%20Revora%20team%20here%20regarding%20ticket%20${item.ticketNumber}.`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[11px] font-bold bg-emerald-50 text-emerald-700 hover:bg-emerald-100 px-2 py-0.5 rounded-lg border border-emerald-200 transition"
                                title="Chat with customer on WhatsApp"
                              >
                                WhatsApp
                              </a>
                            </div>
                          </td>

                          {/* Device */}
                          <td className="py-4 px-4">
                            <span className="font-semibold text-neutral-900 block text-xs sm:text-sm">
                              {item.phoneModel}
                            </span>
                            <div className="flex flex-wrap items-center gap-1.5 mt-1">
                              <span className="text-[10px] text-brand-700 uppercase font-bold bg-brand-50 px-1.5 py-0.5 rounded border border-brand-200">
                                {item.phoneBrand}
                              </span>
                              {item.storage && (
                                <span className="text-[11px] text-neutral-600 font-medium">
                                  · {item.storage}
                                </span>
                              )}
                              {item.deviceCondition && (
                                <span className="text-[11px] text-neutral-600 capitalize">
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
                                className="relative group mx-auto h-11 w-11 rounded-xl overflow-hidden border border-neutral-200 bg-neutral-100 cursor-pointer shadow-xs hover:ring-2 hover:ring-brand-600 transition"
                                title="Click to zoom device photo"
                              >
                                <img
                                  src={item.phoneImage}
                                  alt="Device thumbnail"
                                  className="h-full w-full object-cover group-hover:scale-110 transition duration-200"
                                />
                                <div className="absolute inset-0 bg-neutral-900/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                                  <Eye className="h-3.5 w-3.5 text-white" />
                                </div>
                              </div>
                            ) : (
                              <span className="text-[11px] text-neutral-400 italic">
                                No photo
                              </span>
                            )}
                          </td>

                          {/* Service Type */}
                          <td className="py-4 px-4 max-w-xs">
                            <span className="text-neutral-900 font-semibold truncate block">
                              {item.serviceType}
                            </span>
                            {item.problemDescription && (
                              <span className="text-[11px] text-neutral-500 truncate block mt-0.5">
                                {item.problemDescription}
                              </span>
                            )}
                          </td>

                          {/* Amount / Payout */}
                          <td className="py-4 px-4 font-bold text-neutral-900">
                            {item.estimatedAmount > 0 ? (
                              <span className="text-brand-700 font-black">
                                ₹{item.estimatedAmount.toLocaleString("en-IN")}
                              </span>
                            ) : (
                              <span className="text-neutral-500 font-medium">Custom Quote</span>
                            )}
                          </td>

                          {/* Status Dropdown */}
                          <td className="py-4 px-4" onClick={(e) => e.stopPropagation()}>
                            <select
                              value={item.status}
                              disabled={statusUpdating === item._id}
                              onChange={(e) => handleUpdateStatus(item._id, e.target.value)}
                              className="rounded-lg bg-white border border-neutral-300 px-2.5 py-1 text-xs font-semibold text-neutral-800 outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600 cursor-pointer transition shadow-2xs"
                            >
                              <option value="Pending">Pending Review</option>
                              <option value="Confirmed">Confirmed</option>
                              <option value="In Progress">In Progress</option>
                              <option value="Completed">Completed / Paid</option>
                              <option value="Cancelled">Cancelled</option>
                            </select>
                          </td>

                          {/* Actions */}
                          <td className="py-4 px-4 text-right" onClick={(e) => e.stopPropagation()}>
                            <div className="inline-flex items-center gap-1.5">
                              <button
                                type="button"
                                onClick={() => setSelectedRequest(item)}
                                title="View Full Details"
                                className="p-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-700 hover:text-neutral-900 transition cursor-pointer border border-neutral-200"
                              >
                                <Eye className="h-4 w-4" />
                              </button>
                              <button
                                type="button"
                                onClick={() => handleDeleteRequest(item._id, item.ticketNumber)}
                                title="Delete Record"
                                className="p-2 rounded-lg bg-neutral-100 hover:bg-rose-50 text-neutral-700 hover:text-rose-600 transition cursor-pointer border border-neutral-200 hover:border-rose-200"
                              >
                                <Trash2 className="h-4 w-4" />
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
          </>
        ) : (
          <AdminDevicesTab />
        )}
      </main>

      {/* Full Customer & Order Details Modal */}
      {selectedRequest && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl rounded-3xl bg-white p-6 md:p-8 border border-neutral-200 shadow-2xl text-neutral-900 max-h-[90vh] overflow-y-auto">
            {/* Close button */}
            <button
              type="button"
              onClick={() => setSelectedRequest(null)}
              className="absolute right-5 top-5 p-2 text-neutral-500 hover:text-neutral-900 rounded-full bg-neutral-100 hover:bg-neutral-200 transition cursor-pointer border border-neutral-200"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Header */}
            <div className="border-b border-neutral-200 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-brand-700">
                  {selectedRequest.ticketNumber}
                </span>
                {renderStatusBadge(selectedRequest.status)}
              </div>
              <h3 className="text-2xl font-extrabold text-neutral-900 mt-1">
                Order &amp; Customer Dossier
              </h3>
              <span className="text-xs text-neutral-500 mt-0.5 block">
                Created on {new Date(selectedRequest.createdAt).toLocaleString("en-IN")}
              </span>
            </div>

            {/* Details Grid */}
            <div className="grid gap-6 md:grid-cols-2 text-xs">
              {/* Customer Info */}
              <div className="rounded-2xl bg-neutral-50 p-4 border border-neutral-200 space-y-3">
                <span className="text-[11px] uppercase tracking-wider text-brand-700 font-bold block border-b border-neutral-200 pb-1.5">
                  Customer Information
                </span>
                <div className="flex justify-between">
                  <span className="text-neutral-600 font-medium">Name:</span>
                  <span className="font-bold text-neutral-900">{selectedRequest.customerName}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-600 font-medium">Phone:</span>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-brand-700 text-sm">
                      {selectedRequest.phoneNumber}
                    </span>
                    <a
                      href={`tel:${selectedRequest.phoneNumber}`}
                      className="rounded-lg bg-white hover:bg-neutral-100 px-2 py-0.5 text-xs text-neutral-800 flex items-center gap-1 transition border border-neutral-200 shadow-2xs"
                      title="Direct phone call"
                    >
                      <Phone className="h-3 w-3 text-emerald-600" /> Call
                    </a>
                    <a
                      href={`https://wa.me/91${selectedRequest.phoneNumber.replace(/\D/g, "")}?text=Hi%20${encodeURIComponent(selectedRequest.customerName)}%2C%20Revora%20team%20here%20regarding%20ticket%20${selectedRequest.ticketNumber}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 px-2 py-0.5 text-xs font-semibold flex items-center gap-1 border border-emerald-200 transition"
                      title="Open WhatsApp chat"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600 font-medium">Email:</span>
                  <span className="font-semibold text-neutral-900">
                    {selectedRequest.email || "Not specified"}
                  </span>
                </div>
                {selectedRequest.address && (
                  <div className="flex justify-between">
                    <span className="text-neutral-600 font-medium">Address:</span>
                    <span className="font-semibold text-neutral-900 text-right max-w-[60%]">
                      {selectedRequest.address}
                    </span>
                  </div>
                )}
              </div>

              {/* Device Details */}
              <div className="rounded-2xl bg-neutral-50 p-4 border border-neutral-200 space-y-3">
                <span className="text-[11px] uppercase tracking-wider text-brand-700 font-bold block border-b border-neutral-200 pb-1.5">
                  Device Specifications
                </span>
                <div className="flex justify-between">
                  <span className="text-neutral-600 font-medium">Brand:</span>
                  <span className="font-bold text-neutral-900">{selectedRequest.phoneBrand}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600 font-medium">Model:</span>
                  <span className="font-bold text-neutral-900">{selectedRequest.phoneModel}</span>
                </div>
                {selectedRequest.storage && (
                  <div className="flex justify-between">
                    <span className="text-neutral-600 font-medium">Storage:</span>
                    <span className="font-semibold text-neutral-900">{selectedRequest.storage}</span>
                  </div>
                )}
                {selectedRequest.deviceCondition && (
                  <div className="flex justify-between">
                    <span className="text-neutral-600 font-medium">Condition:</span>
                    <span className="font-semibold capitalize text-neutral-900">
                      {selectedRequest.deviceCondition.replace("_", " ")}
                    </span>
                  </div>
                )}
              </div>

              {/* Customer Uploaded Device Photo */}
              {selectedRequest.phoneImage && (
                <div className="md:col-span-2 rounded-2xl bg-neutral-50 p-4 border border-neutral-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-wider text-brand-700 font-bold flex items-center gap-1.5">
                      <Camera className="h-3.5 w-3.5" />
                      <span>Customer Uploaded Device Photo</span>
                    </span>
                    <button
                      type="button"
                      onClick={() => setPreviewImage(selectedRequest.phoneImage || null)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-brand-700 hover:text-brand-800 transition cursor-pointer"
                    >
                      <Maximize2 className="h-3.5 w-3.5" />
                      <span>Full Resolution</span>
                    </button>
                  </div>
                  <div
                    onClick={() => setPreviewImage(selectedRequest.phoneImage || null)}
                    className="relative max-h-72 rounded-xl overflow-hidden border border-neutral-200 bg-white cursor-pointer group flex items-center justify-center p-2"
                  >
                    <img
                      src={selectedRequest.phoneImage}
                      alt="Customer uploaded device"
                      className="max-h-64 w-auto object-contain mx-auto group-hover:scale-105 transition duration-300 rounded-lg shadow-sm"
                    />
                    <div className="absolute inset-0 bg-neutral-900/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition gap-2">
                      <span className="rounded-full bg-white px-3.5 py-1.5 text-xs font-bold text-neutral-900 flex items-center gap-1.5 shadow-md">
                        <Eye className="h-3.5 w-3.5" /> Click to Zoom Photo
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Service & Logistics */}
              <div className="md:col-span-2 rounded-2xl bg-neutral-50 p-4 border border-neutral-200 space-y-3">
                <span className="text-[11px] uppercase tracking-wider text-brand-700 font-bold block border-b border-neutral-200 pb-1.5">
                  Service &amp; Logistics Breakdown
                </span>
                <div className="grid sm:grid-cols-3 gap-3 text-xs">
                  <div>
                    <span className="text-neutral-600 font-medium block">Service Type:</span>
                    <span className="font-bold text-neutral-900 mt-0.5 block text-sm">
                      {selectedRequest.serviceType}
                    </span>
                  </div>
                  <div>
                    <span className="text-neutral-600 font-medium block">Preferred Logistics:</span>
                    <span className="font-bold text-neutral-900 mt-0.5 block text-sm">
                      {selectedRequest.preferredOption}
                    </span>
                  </div>
                  <div>
                    <span className="text-neutral-600 font-medium block">Payout / Valuation:</span>
                    <span className="font-bold text-brand-700 mt-0.5 block text-sm">
                      {selectedRequest.estimatedAmount > 0
                        ? `₹${selectedRequest.estimatedAmount.toLocaleString("en-IN")}`
                        : "Custom Quote"}
                    </span>
                  </div>
                </div>

                <div className="pt-2 border-t border-neutral-200">
                  <span className="text-neutral-600 font-medium block">Reported Symptoms &amp; Notes:</span>
                  <p className="mt-1 p-3 rounded-xl bg-white text-neutral-800 leading-relaxed border border-neutral-200 text-xs">
                    {selectedRequest.problemDescription || "None provided by customer."}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Status Control */}
            <div className="mt-6 pt-5 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <span className="text-xs font-bold text-neutral-700">Change Status:</span>
                <select
                  value={selectedRequest.status}
                  onChange={(e) =>
                    handleUpdateStatus(selectedRequest._id, e.target.value)
                  }
                  className="rounded-xl bg-white border border-neutral-300 px-3 py-2 text-xs font-semibold text-neutral-900 outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600 cursor-pointer shadow-xs"
                >
                  <option value="Pending">Pending Review</option>
                  <option value="Confirmed">Confirmed</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed / Paid</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => setSelectedRequest(null)}
                  className="w-full sm:w-auto rounded-xl bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 px-6 py-2.5 text-xs font-bold text-neutral-800 transition cursor-pointer"
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
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-200"
          onClick={() => setPreviewImage(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] rounded-3xl overflow-hidden border border-neutral-200 bg-white p-4 shadow-2xl flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full flex items-center justify-between pb-3 border-b border-neutral-200 mb-3">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-brand-50 text-brand-700 border border-brand-200">
                  <Camera className="h-4 w-4" />
                </div>
                <span className="font-bold text-sm text-neutral-900">
                  Customer Device Inspection Photo
                </span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={previewImage}
                  download="customer-device-photo.jpg"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 px-3.5 py-1.5 text-xs font-bold text-neutral-800 transition cursor-pointer border border-neutral-300"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Download</span>
                </a>
                <button
                  type="button"
                  onClick={() => setPreviewImage(null)}
                  className="p-1.5 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 transition cursor-pointer border border-neutral-300"
                  aria-label="Close photo preview"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="w-full flex items-center justify-center bg-neutral-100 rounded-2xl p-2 max-h-[75vh] overflow-hidden">
              <img
                src={previewImage}
                alt="Full device inspection"
                className="max-h-[70vh] w-auto object-contain rounded-xl shadow-md"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
