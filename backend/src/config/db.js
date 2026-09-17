import mongoose from "mongoose";

// Connection caching for serverless environments (e.g. Vercel)
let cached = global.mongooseConnection;
if (!cached) {
  cached = global.mongooseConnection = { conn: null, promise: null };
}

export const connectDB = async () => {
  // If already connected and ready, return existing connection immediately
  if (cached.conn && mongoose.connection.readyState === 1) {
    return cached.conn;
  }

  // If connection is in-flight, return the existing promise
  if (cached.promise && mongoose.connection.readyState === 2) {
    try {
      return await cached.promise;
    } catch {
      // In-flight connection failed; will fall through to retry
    }
  }

  const uri = process.env.MONGODB_URI;

  if (!uri) {
    if (process.env.NODE_ENV === "production") {
      console.error("❌ FATAL: MONGODB_URI environment variable is required in production mode.");
      throw new Error("MONGODB_URI is required in production mode");
    }
    console.warn("⚠️ Warning: MONGODB_URI not set. Attempting localhost default mongodb://localhost:27017/revivetech");
  }

  const connectionUri = uri || "mongodb://localhost:27017/revivetech";

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      serverSelectionTimeoutMS: 5000,
    };

    cached.promise = mongoose
      .connect(connectionUri, opts)
      .then((mongooseInstance) => {
        console.log(` MongoDB Connected: ${mongooseInstance.connection.host}/${mongooseInstance.connection.name}`);
        return mongooseInstance;
      })
      .catch((err) => {
        cached.promise = null; // Reset promise on failure so subsequent invocations can retry
        throw err;
      });
  }

  try {
    cached.conn = await cached.promise;
    return cached.conn;
  } catch (err) {
    cached.conn = null;
    cached.promise = null;
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
  if (cached) {
    cached.conn = null;
    cached.promise = null;
  }
});

mongoose.connection.on("error", (err) => {
  console.error("❌ MongoDB connection error event:", err.message);
});

