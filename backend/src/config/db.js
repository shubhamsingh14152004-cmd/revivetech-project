import mongoose from "mongoose";

export const connectDB = async () => {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    if (process.env.NODE_ENV === "production") {
      console.error("❌ FATAL: MONGODB_URI environment variable is required in production mode.");
      throw new Error("MONGODB_URI is required in production mode");
    }
    console.warn("⚠️ Warning: MONGODB_URI not set. Attempting localhost default mongodb://localhost:27017/revivetech");
  }

  const connectionUri = uri || "mongodb://localhost:27017/revivetech";

  try {
    const conn = await mongoose.connect(connectionUri, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log(` MongoDB Connected: ${conn.connection.host}/${conn.connection.name}`);
    return conn;
  } catch (err) {
    console.error(`❌ MongoDB Connection Error: ${err.message}`);
    if (process.env.NODE_ENV === "production") {
      throw err;
    }
    console.log("ℹ️ Running in local development without active MongoDB daemon. Dev local persistence active.");
    return null;
  }
};

mongoose.connection.on("disconnected", () => {
  console.warn("⚠️ MongoDB connection disconnected.");
});

mongoose.connection.on("error", (err) => {
  console.error("❌ MongoDB connection error event:", err.message);
});
