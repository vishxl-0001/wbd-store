// 🔴 Catch hidden crashes (VERY IMPORTANT)
process.on("uncaughtException", (err) => {
  console.error("UNCAUGHT EXCEPTION:", err);
});

process.on("unhandledRejection", (reason) => {
  console.error("UNHANDLED REJECTION:", reason);
});

require("dotenv").config();

const express = require("express");
const cors = require("cors");

const paymentRoutes = require("./routes/payment");

const app = express();

/**
 * ✅ CORS CONFIG (FIXES YOUR ERROR)
 */
app.use(
  cors({
    origin: [
      "http://localhost:5174", // Vite dev
      "https://we-designbrand.site",
      // add your deployed frontend later, example:
      // "https://we-designbrand.site"
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// ✅ VERY IMPORTANT: handle preflight requests
app.options("*", cors());

/**
 * ✅ Middleware
 */
app.use(express.json());

/**
 * ✅ Health check
 */
app.get("/", (req, res) => {
  res.send("Backend is running");
});

/**
 * ✅ API routes
 */
app.use("/api", paymentRoutes);

/**
 * ✅ Port
 */
const PORT = process.env.PORT || 5000;

/**
 * ✅ Start server
 */
const server = app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});

/**
 * 🔴 Catch server errors
 */
server.on("error", (err) => {
  console.error("SERVER ERROR:", err);
});
