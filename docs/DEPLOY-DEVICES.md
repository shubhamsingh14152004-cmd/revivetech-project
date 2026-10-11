# ReviveTech Device Catalog Deployment Guide

This document explains the device catalog infrastructure, local JSON fallback, and how to push devices to MongoDB Atlas for production (Vercel).

## Architecture: Dual-Layer Database

ReviveTech uses a dual-layer approach for data storage:

1.  **Local JSON Fallback (Development Only)**
    *   **File:** `backend/data/revivetech_db.json`
    *   **Purpose:** Allows rapid development, offline capability, and seeding without relying on a remote database connection.
    *   **Behavior:** If `MONGODB_URI` is not set or fails to connect, the `dataStore.js` interface automatically reads and writes to this JSON file.

2.  **MongoDB Atlas (Production)**
    *   **Purpose:** Required for production deployments (like Vercel) because Serverless environments are read-only and wipe local files across function executions.
    *   **Behavior:** If `MONGODB_URI` is defined and connects successfully, all operations route through Mongoose to your Atlas cluster. The local JSON file is ignored.

## Syncing Local Devices to Production

After generating or seeding devices locally into `revivetech_db.json`, you must sync them to your MongoDB cluster for production use.

1.  Ensure you have your MongoDB URI.
2.  Set it in your local environment variables (`backend/.env` or terminal).
    ```bash
    export MONGODB_URI="mongodb+srv://<user>:<password>@cluster.mongodb.net/revivetech?retryWrites=true&w=majority"
    ```
3.  Run the synchronization script from the `backend` directory:
    ```bash
    npm run sync-db
    ```
4.  **Result:** The script will connect to MongoDB, iterate through all devices in `revivetech_db.json`, and insert or update them in the Mongoose database. Devices modified by admins (`source="admin"`) will not be overwritten by seed data.

## Admin Dashboard: CSV Upload

The Admin Dashboard provides a powerful CSV management system for the device catalog.

### How it works:
1.  **Export CSV:** Click the "Export CSV" button in the Admin -> Devices tab. This downloads the currently filtered view of the database (or the entire DB if unfiltered).
2.  **Edit Offline:** Open the CSV in Excel, Google Sheets, or Numbers. You can bulk-edit prices, add new models, or toggle active states.
3.  **Import CSV:** Click "Import CSV" and select your modified file.
    *   **Updates:** If the row contains an `id` that exists in the database, the record will be updated, preserving its original `source` status.
    *   **Inserts:** If the row has no `id`, it will be created as a new device with `source="admin"`.

### CSV Validation
The backend (`POST /api/admin/devices/import`) uses Zod schema validation. Every imported row must contain at least:
- `brand` (e.g. `apple`)
- `model` (e.g. `iPhone 16 Pro`)
- Any provided prices must be valid numbers (or empty).
- `variants` must be separated by pipes (e.g., `128GB | 256GB`).

## Vercel Deployment Checklist

Before deploying to Vercel, ensure the following:
1.  **Environment Variables:** Add `MONGODB_URI` and `JWT_SECRET` in your Vercel Project Settings.
2.  **Backend Proxy:** Vercel automatically routes `/api/*` to the Express backend based on `vercel.json` and the nitro proxy rules in the frontend.
3.  **No Local Write Errors:** Because Vercel is a read-only filesystem, any fallback to `revivetech_db.json` will fail to save edits in production. Mongoose MUST be connected. The backend will throw a fatal 503 error if `MONGODB_URI` is missing in `NODE_ENV=production` to prevent silent failures.
