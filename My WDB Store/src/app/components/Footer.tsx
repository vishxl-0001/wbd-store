import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="bg-black text-white px-3 py-1 rounded inline-block mb-4">
              <span className="text-xl font-bold">WDB</span>
            </div>
            <p className="text-gray-600 text-sm">
              🔥 82,86+ Happy Customers ❤️ Love WDB Store
              Your destination for quality, style, and modern innovation.            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">About WDB</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-gray-900 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-600 hover:text-gray-900 text-sm">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-gray-900 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-gray-900 text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* 
          <div>
            <h3 className="font-semibold mb-4">Quick Support</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Order Status</li>
              <li>Payment Issues</li>
              <li>Product Inquiries</li>
              <li>General Questions</li>
            </ul>
          </div> */}

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>support@we-designbrand.site</p>
              <p>+91 8302619709</p>
              <p>24*7 Hours Available</p>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-gray-600">
          <p>© 2021 WDB. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
