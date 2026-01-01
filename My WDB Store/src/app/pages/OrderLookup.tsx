import { useState } from "react";

const API_BASE = "https://wdb-store.onrender.com/api";

export default function OrderLookup() {
  const [phone, setPhone] = useState("");
  const [orderId, setOrderId] = useState("");
  const [orders, setOrders] = useState<any[]>([]);
  const [error, setError] = useState("");

  const fetchOrder = async () => {
    setError("");
    setOrders([]);

    try {
      const res = await fetch(`${API_BASE}/get-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone: phone || null,
          orderId: orderId || null,
        }),
      });

      const data = await res.json();

      if (!data.success) {
        setError("No order found");
      } else {
        setOrders(data.orders);
      }
    } catch (err) {
      setError("Server error. Try again later.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-10 max-w-xl">
      <h2 className="text-2xl font-bold mb-4">Check Your Order</h2>

      <input
        type="text"
        placeholder="Order ID (optional)"
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
        className="w-full border p-2 rounded mb-3"
      />

      <input
        type="text"
        placeholder="Phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="w-full border p-2 rounded mb-4"
      />

      <button
        onClick={fetchOrder}
        className="w-full bg-black text-white py-2 rounded"
      >
        Check Order
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {orders.map((order) => (
        <div key={order.order_uuid} className="border rounded p-4 mt-6">
          <p><b>Order ID:</b> {order.order_uuid}</p>
          <p><b>Status:</b> {order.status}</p>
          <p><b>Amount:</b> ₹{order.amount}</p>
          <p><b>Date:</b> {new Date(order.created_at).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}
