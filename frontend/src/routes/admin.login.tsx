import { createFileRoute } from "@tanstack/react-router";
import { AdminLogin } from "../pages/AdminLogin";

export const Route = createFileRoute("/admin/login")({
  head: () => ({
    meta: [
      {
        title: "Staff Login — ReviveTech Operations Portal",
      },
      {
        name: "robots",
        content: "noindex, nofollow",
      },
    ],
  }),
  component: AdminLogin,
});
