import React from 'react';
import { Award, Shield, Truck, HeartHandshake } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";

export const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About WDB</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Your destination for modern products. Quality, style, and innovation in one
            place.
          </p>
        </div>

        {/* Our Story */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            WDB was founded with a simple mission: to provide access to high-quality,
            innovative products that enhance everyday life. We believe that everyone
            deserves access to premium products that combine style, functionality, and
            value.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our carefully curated collection features products from trusted brands and
            emerging innovators, ensuring that you always have access to the latest and
            greatest in modern design and technology.
          </p>
        </div>

        {/* Values Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Assured</h3>
              <p className="text-gray-600">
                Every product goes through rigorous quality checks to ensure you receive
                only the best.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fast Delivery</h3>
              <p className="text-gray-600">
                Quick and reliable shipping to get your products to you as fast as
                possible.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure Shopping</h3>
              <p className="text-gray-600">
                Your security is our priority. We use industry-standard encryption for all
                transactions.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer Care</h3>
              <p className="text-gray-600">
                Our dedicated support team is here to help you 24/7 with any questions or
                concerns.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
            To be the most trusted online destination for modern products, delivering
            exceptional value, quality, and service to our customers while supporting
            innovation and sustainable practices in the industry.
          </p>
        </div>
      </div>
      <Card>
                <CardHeader>
                  <CardTitle>Terms and Conditions</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="general">
                      <AccordionTrigger>General Terms</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground space-y-2">
                        <p>
                          By accessing and using WDB, you accept and agree to be bound by the terms and provision of this agreement.
                        </p>
                        <p>
                          We reserve the right to modify these terms at any time. Your continued use of the website following any changes 
                          constitutes acceptance of those changes.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="payment">
                      <AccordionTrigger>Payment Terms</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground space-y-2">
                        <p>
                          All payments are processed securely through Razorpay. We accept credit cards, debit cards, UPI, net banking, 
                          and digital wallets.
                        </p>
                        <p>
                          Prices are listed in Indian Rupees (INR) and include all applicable taxes. Payment must be made in full at 
                          the time of purchase.
                        </p>
                        <p>
                          Once payment is confirmed, you will receive an order confirmation via email with your order details and 
                          payment receipt.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="shipping">
                      <AccordionTrigger>Shipping & Delivery</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground space-y-2">
                        <p>
                          We offer shipping across India. Delivery times vary based on your location and product availability.
                        </p>
                        <p>
                          Free shipping is available on orders above ₹999. Orders below this amount will incur a shipping fee of ₹99.
                        </p>
                        <p>
                          We will notify you or reach out to you with your given contact information for delivery updates and coordination.
                        </p>
                        <p>
                          Please ensure that the shipping address provided is accurate and complete. We are not responsible for 
                          delays caused by incorrect address information.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="returns">
                      <AccordionTrigger>Returns & Refunds Policy</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground space-y-2">
                        <p className="font-medium text-foreground">
                          No Return Policy
                        </p>
                        <p>
                          At WDB, we maintain a strict no return policy. All sales are final and we do not accept returns 
                          or exchanges on any products once the order has been placed and payment has been processed.
                        </p>
                        <p>
                          We encourage customers to carefully review product descriptions, specifications, and images before making 
                          a purchase decision.
                        </p>
                        <p className="font-medium text-foreground">
                          Exceptions
                        </p>
                        <p>
                          In rare cases where you receive a damaged or defective product, please contact our customer support team 
                          within 12 hours of delivery with photographic evidence. We will review such cases on an individual basis 
                          and may offer a replacement at our discretion.
                        </p>
                        <p>
                          Refunds will not be issued under any circumstances except in cases of payment errors or technical issues 
                          that prevent order fulfillment.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="privacy">
                      <AccordionTrigger>Privacy & Data Protection</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground space-y-2">
                        <p>
                          We take your privacy seriously. All personal information collected during the ordering process is used 
                          solely for order processing and delivery purposes.
                        </p>
                        <p>
                          Your payment information is processed securely through Razorpay and we do not store any payment card details 
                          on our servers.
                        </p>
                        <p>
                          We will not share your personal information with third parties except as necessary to fulfill your order 
                          (e.g., sharing shipping address with delivery partners).
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="liability">
                      <AccordionTrigger>Limitation of Liability</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground space-y-2">
                        <p>
                          WDB shall not be liable for any indirect, incidental, special, or consequential damages arising 
                          out of or in connection with your use of our website or products.
                        </p>
                        <p>
                          Our total liability for any claims related to our products or services shall not exceed the purchase price 
                          of the product in question.
                        </p>
                        <p>
                          We are not responsible for delays or failures in performance resulting from causes beyond our reasonable 
                          control, including but not limited to natural disasters, strikes, or technical failures.
                        </p>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="contact">
                      <AccordionTrigger>Contact & Support</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground space-y-2">
                        <p>
                          For any questions regarding these terms and conditions, please contact our customer support team.
                        </p>
                        <p>
                          Email: support@we-designbrand.site
<br />
                          Phone: +91 8302619709<br />
                          Address: 5223/17 Kamla Market Street, Delhi, India
                        </p>
                        <p>
                          Our support team is available 24*7 Hours
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
    </div>
  );
};
