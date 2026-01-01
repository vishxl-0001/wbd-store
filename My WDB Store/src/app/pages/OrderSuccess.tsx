import { useSearchParams } from "react-router-dom";

export default function OrderSuccess() {
    const [params] = useSearchParams();
    const orderId = params.get("orderId");

    return (
        <div style={{ padding: 40 }}>
            <h2>✅ Payment Successful</h2>
            <p>Your order has been placed.</p>
            <p><b>Order ID:</b> {orderId}</p>
            <p>Save this Order ID for future reference.</p>
            <p>Save this Order ID for future reference.</p>
            <p>
                You Will Be Notified Via Your Given Contact Details...
            </p>

        </div>
    );
}
