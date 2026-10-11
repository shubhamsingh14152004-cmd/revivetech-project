import { defineNitroConfig } from "nitro/config";

export default defineNitroConfig({
  preset: "vercel",
  vercel: {
    functions: {
      runtime: "nodejs22.x",
    },
  },
  routeRules: {
    "/api/**": { proxy: "http://127.0.0.1:5000/api/**" },
  },
});
