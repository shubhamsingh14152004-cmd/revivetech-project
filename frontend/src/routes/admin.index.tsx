import { createFileRoute } from "@tanstack/react-router";
import { AdminDashboard } from "../pages/AdminDashboard";

export const Route = createFileRoute("/admin/")({
  head: () => ({
    meta: [
      {
        title: "Cleanroom Desk — Sagar Tech Operations Portal",
      },
      {
        name: "robots",
        content: "noindex, nofollow",
      },
    ],
  }),
  component: AdminDashboard,
});
