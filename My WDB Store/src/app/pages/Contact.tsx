import React from 'react';
import { Mail, Phone } from 'lucide-react';
export const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-600">
            Have questions? We'd love to hear from you. Get in touch with our team.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <p className="text-gray-600 mb-4">Send us an email anytime</p>
            <a
              href="mailto:support@we-designbrand.site"
              className="text-black hover:underline"
            >
              support@we-designbrand.site
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <p className="text-gray-600 mb-4">24*7 Hours Available</p>
            <a href="tel:+918302619709" className="text-black hover:underline">
              +91 8302619709
            </a>
          </div>
        </div>

        {/* Quick Support Section */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Quick Support</h2>
          <p className="text-gray-600 mb-6">
            For immediate assistance with your order, please have your order ID ready when
            contacting us.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Order Status</h3>
              <p className="text-sm text-gray-600">
                Check your order status in the "My Orders" section
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Payment Issues</h3>
              <p className="text-sm text-gray-600">
                Contact us immediately for payment-related concerns
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Product Inquiries</h3>
              <p className="text-sm text-gray-600">
                Email us for detailed product information
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">General Questions</h3>
              <p className="text-sm text-gray-600">
                Call or email us anytime
              </p>
            </div>
          </div>
        </div>

        {/* Contact Image */}
        {/* <div className="mt-12">
          <ImageWithFallback
            src={contactImage}
            alt="Contact Us"
            className="w-full rounded-lg shadow-md"
          />
        </div> */}
      </div>
    </div>
  );
};
