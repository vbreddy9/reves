import React from "react";
import tLogo from "./assets/tc.jpg";

const TermsAndConditions = () => {
  return (
    <div className="w-full">
      {/* Fully Responsive Banner Image */}
      <div
        className="w-full h-40 sm:h-56 md:h-64 lg:h-72 xl:h-80 bg-cover bg-center"
        style={{
          backgroundImage: `url(${tLogo})`,
        }}
      ></div>

      {/* Content Section with Proper Spacing */}
      <div className="max-w-4xl mx-auto py-10 px-6 md:px-12">
        
        <p className="text-sm md:text-base text-gray-700 mb-4">
          Welcome to Vidhyavaaradhi Overseas Consultancy! These terms and conditions outline the rules
          and regulations for the use of our services.
        </p>

        <h2 className="text-lg md:text-xl font-semibold text-gray-800 mt-6">
          1. Acceptance of Terms
        </h2>
        <p className="text-sm md:text-base text-gray-700">
          By accessing this website and using our services, you accept and agree to be bound by these
          terms and conditions. If you do not agree, please do not use our services.
        </p>

        <h2 className="text-lg md:text-xl font-semibold text-gray-800 mt-6">
          2. Services Provided
        </h2>
        <p className="text-sm md:text-base text-gray-700">
          Vidhyavaaradhi provides guidance and consultancy services for students seeking to study abroad,
          including university selection, visa assistance, and admission support.
        </p>

        <h2 className="text-lg md:text-xl font-semibold text-gray-800 mt-6">
          3. User Responsibilities
        </h2>
        <p className="text-sm md:text-base text-gray-700">
          Users must provide accurate and complete information while using our services. Any misrepresentation
          may lead to termination of services without a refund.
        </p>

        <h2 className="text-lg md:text-xl font-semibold text-gray-800 mt-6">
          4. Payment & Refund Policy
        </h2>
        <p className="text-sm md:text-base text-gray-700">
          Payments must be made in full before availing services. Refunds are subject to our refund policy.
        </p>

        <h2 className="text-lg md:text-xl font-semibold text-gray-800 mt-6">
          5. Limitation of Liability
        </h2>
        <p className="text-sm md:text-base text-gray-700">
          We are not responsible for any losses due to visa rejections, university rejections, or third-party failures.
        </p>

        <h2 className="text-lg md:text-xl font-semibold text-gray-800 mt-6">
          6. Changes to Terms
        </h2>
        <p className="text-sm md:text-base text-gray-700">
          Vidhyavaaradhi reserves the right to modify these terms at any time. Users will be notified via email or website updates.
        </p>

        <h2 className="text-lg md:text-xl font-semibold text-gray-800 mt-6">
          7. Contact Information
        </h2>
        <p className="text-sm md:text-base text-gray-700">
          For any questions, contact us at{" "}
          <a href="mailto:info@vidhyavaaradhi.com" className="text-blue-500 hover:underline">
            info@vidhyavaaradhi.com
          </a>.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
