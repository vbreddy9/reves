import React from "react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="min-h-[calc(100vh-100px)] flex flex-col justify-center items-center text-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Thank You!</h1>
        <p className="text-gray-700 mb-4">
          Your inquiry has been submitted successfully. We will contact you soon.
        </p>
        <Link
          to="/"
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
