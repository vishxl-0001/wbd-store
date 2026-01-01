import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { CheckCircle } from "lucide-react";

declare global {
  interface Window {
    Razorpay: any;
  }
}

const API_BASE = "https://wdb-store.onrender.com/api";

export const Checkout = () => {
  const { cart, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    street: "",
    locality: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fullAddress = `${formData.street}, ${formData.locality}, ${formData.city}, ${formData.state} - ${formData.pincode}`;

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      // 1️⃣ Create order
      const orderRes = await fetch(`${API_BASE}/create-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: getTotalPrice(),
          customer: {
            name: formData.fullName,
            phone: formData.phone,
            address: fullAddress,
          },
        }),
      });

      const orderData = await orderRes.json();

      if (!orderData.orderId) throw new Error("Order failed");

      // 2️⃣ Razorpay Checkout
      const options = {
        key: orderData.key,
        amount: getTotalPrice() * 100,
        currency: "INR",
        name: "WDB Store",
        description: "Order Payment",
        order_id: orderData.orderId,

        handler: async function (response: any) {
          // 3️⃣ Verify payment
          const verifyRes = await fetch(`${API_BASE}/verify-payment`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              customer: {
                name: formData.fullName,
                phone: formData.phone,
                address: fullAddress,
              },
              items: cart,
              amount: getTotalPrice(),
            }),
          });

          const verifyData = await verifyRes.json();

          if (verifyData.success) {
            clearCart();
            setShowSuccess(true);
            setTimeout(() => {
              navigate(`/order-success?orderId=${verifyData.orderId}`);
            }, 2000);
          } else {
            alert("Payment verification failed");
            setIsProcessing(false);
          }
        },

        prefill: {
          name: formData.fullName,
          email: formData.email,
          contact: formData.phone,
        },

        theme: { color: "#000000" },

        modal: {
          ondismiss: () => setIsProcessing(false),
        },
      };

      const razorpay = new window.Razorpay(options);

      razorpay.on("payment.failed", () => {
        alert("Payment failed");
        setIsProcessing(false);
      });

      razorpay.open();
    } catch {
      alert("Something went wrong. Try again.");
      setIsProcessing(false);
    }
  };

  if (cart.length === 0 && !showSuccess) {
    navigate("/cart");
    return null;
  }

  if (showSuccess) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-12 h-12 text-green-600" />
        </div>
        <h2 className="text-3xl font-bold mb-4">Order Placed Successfully!</h2>
        <p className="text-gray-600">We will contact you shortly.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form */}
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-6">Shipping Address</h2>

          <form onSubmit={handlePayment} className="space-y-4">
  <div>
    <label className="block text-sm font-medium mb-2">Full Name</label>
    <input
      type="text"
      name="fullName"
      value={formData.fullName}
      onChange={handleInputChange}
      required
      className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
      placeholder="Enter your full name"
    />
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <label className="block text-sm font-medium mb-2">Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        required
        className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
        placeholder="your@email.com"
      />
    </div>

    <div>
      <label className="block text-sm font-medium mb-2">Phone</label>
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleInputChange}
        required
        className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
        placeholder="+91 XXXXX XXXXX"
      />
    </div>
  </div>

  <div>
    <label className="block text-sm font-medium mb-2">House / Street</label>
    <input
      type="text"
      name="street"
      value={formData.street}
      onChange={handleInputChange}
      required
      className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
      placeholder="House no, Street name"
    />
  </div>

  <div>
    <label className="block text-sm font-medium mb-2">Locality / Area</label>
    <input
      type="text"
      name="locality"
      value={formData.locality}
      onChange={handleInputChange}
      required
      className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
      placeholder="Locality / Area"
    />
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div>
      <label className="block text-sm font-medium mb-2">City</label>
      <input
        type="text"
        name="city"
        value={formData.city}
        onChange={handleInputChange}
        required
        className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
        placeholder="City"
      />
    </div>

    <div>
      <label className="block text-sm font-medium mb-2">State</label>
      <input
        type="text"
        name="state"
        value={formData.state}
        onChange={handleInputChange}
        required
        className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
        placeholder="State"
      />
    </div>

    <div>
      <label className="block text-sm font-medium mb-2">Pincode</label>
      <input
        type="text"
        name="pincode"
        value={formData.pincode}
        onChange={handleInputChange}
        required
        className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
        placeholder="432156"
      />
    </div>
  </div>

  <button
    type="submit"
    disabled={isProcessing}
    className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors disabled:bg-gray-400"
  >
    {isProcessing ? "Processing..." : "Proceed to Payment"}
  </button>
</form>

        </div>

        {/* Order Summary */}
        <div className="bg-white p-6 rounded-lg shadow sticky top-24">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>

          {cart.map(item => (
            <div key={item.id} className="flex justify-between text-sm mb-2">
              <span>{item.name} × {item.quantity}</span>
              <span>₹{item.price * item.quantity}</span>
            </div>
          ))}

          <div className="border-t mt-4 pt-4 space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{getTotalPrice()}</span>
            </div>
            <div className="flex justify-between text-green-600">
              <span>Shipping</span>
              <span>FREE</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>₹{getTotalPrice()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
