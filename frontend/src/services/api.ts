// Centralized API Service for ReviveTech Frontend

const getApiBaseUrl = (): string => {
  const envUrl = (import.meta.env["VITE_API_URL"] as string | undefined)?.trim();
  if (!envUrl) {
    return "http://localhost:5000/api";
  }
  const clean = envUrl.replace(/\/+$/, "");
  // Ensure the base URL ends with /api so endpoint paths resolve properly to /api/*
  return clean.endsWith("/api") ? clean : `${clean}/api`;
};

const API_BASE_URL = getApiBaseUrl();

export interface RepairRequestPayload {
  customerName: string;
  phoneNumber: string;
  email?: string;
  phoneBrand?: string;
  phoneModel: string;
  serviceType: string;
  problemDescription?: string;
  address?: string;
  preferredOption?: string;
  payoutMethod?: string;
  estimatedAmount?: number;
  deviceCondition?: string;
  storage?: string;
  phoneImage?: string;
}

export interface RepairRequestItem {
  _id: string;
  ticketNumber: string;
  customerName: string;
  phoneNumber: string;
  email: string;
  phoneBrand: string;
  phoneModel: string;
  serviceType: string;
  problemDescription: string;
  address: string;
  preferredOption: string;
  payoutMethod: string;
  estimatedAmount: number;
  deviceCondition: string;
  storage: string;
  phoneImage?: string;
  status: "Pending" | "Confirmed" | "In Progress" | "Completed" | "Cancelled";
  adminNotes: string;
  createdAt: string;
  updatedAt: string;
}

export interface RepairStats {
  total: number;
  pending: number;
  confirmed: number;
  inProgress: number;
  completed: number;
  cancelled: number;
}

export interface AdminUser {
  _id: string;
  name: string;
  email: string;
  role: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
}

// Helper to get token
export const getAdminToken = (): string | null => {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("revivetech_admin_token");
};

// Helper to store token
export const setAdminToken = (token: string): void => {
  if (typeof window !== "undefined") {
    localStorage.setItem("revivetech_admin_token", token);
  }
};

// Helper to clear token
export const clearAdminToken = (): void => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("revivetech_admin_token");
    localStorage.removeItem("revivetech_admin_user");
  }
};

// Core request utility
async function request<T = any>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  const url = `${API_BASE_URL.replace(/\/$/, "")}/${endpoint.replace(/^\//, "")}`;

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(options.headers as Record<string, string>),
  };

  const token = getAdminToken();
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  try {
    const response = await fetch(url, {
      ...options,
      headers,
    });

    const data: ApiResponse<T> = await response.json().catch(() => ({
      success: false,
      message: `Failed to parse response from server (${response.status})`,
    }));

    if (!response.ok) {
      const errorMsg = data?.message || `Request failed with status ${response.status}`;
      throw new Error(errorMsg);
    }

    return data;
  } catch (err: any) {
    // Check for network errors
    if (err.name === "TypeError" && err.message.includes("fetch")) {
      throw new Error(
        `Unable to reach backend server at ${API_BASE_URL}. Ensure the backend is running.`
      );
    }
    throw err;
  }
}

export const api = {
  // Health Check
  checkHealth: async () => {
    return request("health");
  },

  // Public: Submit customer repair or trade-in request
  submitRepairRequest: async (payload: RepairRequestPayload) => {
    return request<RepairRequestItem>("repairs", {
      method: "POST",
      body: JSON.stringify(payload),
    });
  },

  // Admin: Login
  adminLogin: async (email: string, password: string) => {
    const res = await request<{ admin: AdminUser; token: string }>(
      "auth/login",
      {
        method: "POST",
        body: JSON.stringify({ email, password }),
      }
    );

    if (res.success && res.data?.token) {
      setAdminToken(res.data.token);
      if (typeof window !== "undefined" && res.data.admin) {
        localStorage.setItem(
          "revivetech_admin_user",
          JSON.stringify(res.data.admin)
        );
      }
    }
    return res;
  },

  // Admin: Check profile / verify token
  getCurrentAdmin: async () => {
    return request<{ admin: AdminUser }>("auth/me");
  },

  // Admin: Logout
  adminLogout: () => {
    clearAdminToken();
  },

  // Admin: Get statistics
  getRepairStats: async () => {
    return request<RepairStats>("repairs/stats");
  },

  // Admin: List repair requests
  getRepairRequests: async (params?: {
    status?: string;
    search?: string;
    page?: number;
    limit?: number;
  }) => {
    const query = new URLSearchParams();
    if (params?.status && params.status !== "all") query.set("status", params.status);
    if (params?.search) query.set("search", params.search);
    if (params?.page) query.set("page", params.page.toString());
    if (params?.limit) query.set("limit", params.limit.toString());

    const qs = query.toString() ? `?${query.toString()}` : "";
    return request<{
      requests: RepairRequestItem[];
      pagination: { total: number; page: number; pages: number; limit: number };
    }>(`repairs${qs}`);
  },

  // Admin: Get single request
  getRepairById: async (id: string) => {
    return request<RepairRequestItem>(`repairs/${id}`);
  },

  // Admin: Update status & notes
  updateRepairStatus: async (
    id: string,
    status: string,
    adminNotes?: string
  ) => {
    return request<RepairRequestItem>(`repairs/${id}`, {
      method: "PUT",
      body: JSON.stringify({ status, adminNotes }),
    });
  },

  // Admin: Delete request
  deleteRepair: async (id: string) => {
    return request<{ id: string; ticketNumber: string }>(`repairs/${id}`, {
      method: "DELETE",
    });
  },
};
