// 🔴 Catch hidden crashes
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
 * ✅ CORS (CORRECT FIX — NO app.options("*"))
 */
app.use(
  cors({
    origin: [
      "http://localhost:5174", // Vite dev
      "hhttps://we-designbrand.site/",
      // add production frontend later
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

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

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
