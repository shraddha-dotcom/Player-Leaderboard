
import React from "react";

const Contact = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">📩 Contact Us</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Location Card */}
          <div className="p-6 bg-white rounded-lg shadow-lg border border-gray-200 text-center">
            <h3 className="text-lg font-semibold mb-2">📍 Our Location</h3>
            <p className="text-gray-600">1234 Main Street, Suite 500</p>
            <p className="text-gray-600">New York, NY 10001, USA</p>
          </div>

          {/* Contact Number Card */}
          <div className="p-6 bg-white rounded-lg shadow-lg border border-gray-200 text-center">
            <h3 className="text-lg font-semibold mb-2">📞 Contact Number</h3>
            <p className="text-gray-600">+1 (123) 456-7890</p>
            <p className="text-gray-600">+1 (987) 654-3210</p>
          </div>

          {/* Email Card */}
          <div className="p-6 bg-white rounded-lg shadow-lg border border-gray-200 text-center">
            <h3 className="text-lg font-semibold mb-2">📧 Email</h3>
            <p className="text-gray-600">support@example.com</p>
            <p className="text-gray-600">info@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
