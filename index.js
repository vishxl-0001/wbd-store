// 🔴 Catch hidden crashes (VERY IMPORTANT)
process.on("uncaughtException", (err) => {
  console.error("UNCAUGHT EXCEPTION:", err);
});

process.on("unhandledRejection", (reason) => {
  console.error("UNHANDLED REJECTION:", reason);
});

const express = require("express");
const cors = require("cors");
require("dotenv").config();

const paymentRoutes = require("./routes/payment");

const app = express();

// ✅ Middleware
app.use(cors({ origin: "*" }));
app.use(express.json());

// ✅ Health check (important)
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// ✅ API routes
app.use("/api", paymentRoutes);

// ✅ Port (auto-fallback)
const PORT = process.env.PORT || 5001;

// ✅ Start server SAFELY
const server = app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});

// 🔴 Catch port & server errors
server.on("error", (err) => {
  console.error("SERVER ERROR:", err);
});

const db = require("./db");

