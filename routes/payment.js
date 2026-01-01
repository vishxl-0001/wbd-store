const express = require("express");
const Razorpay = require("razorpay");
const crypto = require("crypto");
const { v4: uuidv4 } = require("uuid");
const db = require("../db");

const router = express.Router();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

/**
 * CREATE ORDER
 */
router.post("/create-order", async (req, res) => {
  try {
    let { amount } = req.body;

    amount = Number(amount);

    if (!Number.isInteger(amount) || amount <= 0) {
      return res.status(400).json({ success: false, error: "Invalid amount" });
    }

    const order = await razorpay.orders.create({
      amount: amount * 100,
      currency: "INR",
      receipt: "rcpt_" + Date.now(),
    });

    res.json({
      success: true,
      orderId: order.id,
      key: process.env.RAZORPAY_KEY_ID,
    });
  } catch (err) {
    console.error("❌ CREATE ORDER ERROR:", err);
    res.status(500).json({ success: false, error: "Order creation failed" });
  }
});

/**
 * VERIFY PAYMENT + SAVE ORDER
 */
router.post("/verify-payment", (req, res) => {
  console.log("VERIFY BODY 👉", req.body);

  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      customer,
      items,
      amount,
    } = req.body;

    const body = `${razorpay_order_id}|${razorpay_payment_id}`;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body)
      .digest("hex");

    if (expectedSignature !== razorpay_signature) {
      console.error("❌ Signature mismatch");
      return res.status(400).json({ success: false, error: "Invalid signature" });
    }

    const orderUUID = uuidv4();

    const sql = `
      INSERT INTO orders
      (order_uuid, full_name, phone, address, items, amount,
       razorpay_order_id, razorpay_payment_id, status)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
  orderUUID,
  customer?.name || "",
  customer?.phone || "",
  customer?.address || "",
  JSON.stringify(items || []),
  Number(amount),
  razorpay_order_id,
  razorpay_payment_id,
  "PAID",
];


    db.query(sql, values, (err, result) => {
      if (err) {
        console.error("❌ DB INSERT ERROR:", err);
        return res.status(500).json({
          success: false,
          error: "Order save failed",
        });
      }

      console.log("✅ Order saved:", orderUUID);
      res.json({ success: true, orderId: orderUUID });
    });
  } catch (err) {
    console.error("❌ VERIFY ERROR:", err);
    res.status(500).json({ success: false });
  }
});

/**
 * FETCH ORDER
 */
router.post("/get-order", (req, res) => {
  const { phone, orderId } = req.body;

  let query;
  let values;

  if (orderId) {
    query = "SELECT * FROM orders WHERE order_uuid = ?";
    values = [orderId];
  } else if (phone) {
    query = "SELECT * FROM orders WHERE phone = ? ORDER BY created_at DESC";
    values = [phone];
  } else {
    return res.status(400).json({ error: "No search input" });
  }

  db.query(query, values, (err, results) => {
    if (err) {
      console.error("❌ FETCH ORDER ERROR:", err);
      return res.status(500).json({ error: "DB error" });
    }

    if (results.length === 0) {
      return res.json({ success: false });
    }

    res.json({ success: true, orders: results });
  });
});

module.exports = router;
