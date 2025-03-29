import React from "react";
import pLogo from "./assets/pp.jpg";

const PrivacyPolicy = () => {
  return (
    <div className="w-full">
      {/* Full-Width Banner Image */}
      <div
        className="w-full h-40 sm:h-56 md:h-64 lg:h-72 xl:h-80 bg-cover bg-center"
        style={{
          backgroundImage: `url(${pLogo})`, // Using the imported image
        }}
      ></div>

      {/* Content Section with Proper Spacing */}
      <div className="max-w-4xl mx-auto py-10 px-6 md:px-12">
        <p className="text-sm md:text-base text-gray-700 mb-4">
          Welcome to Vidhyavaaradhi Overseas Consultancy. We respect your privacy and are committed to
          protecting your personal data. This Privacy Policy outlines how we collect, use, and safeguard
          your information.
        </p>

        <h2 className="text-lg md:text-xl font-semibold text-gray-800 mt-6">
          1. Information We Collect
        </h2>
        <p className="text-sm md:text-base text-gray-700">
          We collect personal information such as your name, email, phone number, and academic details
          when you register or inquire about our services.
        </p>

        <h2 className="text-lg md:text-xl font-semibold text-gray-800 mt-6">
          2. How We Use Your Information
        </h2>
        <p className="text-sm md:text-base text-gray-700">
          Your data is used to provide educational consultancy services, process applications, and keep
          you informed about study abroad opportunities.
        </p>

        <h2 className="text-lg md:text-xl font-semibold text-gray-800 mt-6">
          3. Data Protection
        </h2>
        <p className="text-sm md:text-base text-gray-700">
          We take appropriate security measures to protect your personal data from unauthorized access,
          alteration, or disclosure.
        </p>

        <h2 className="text-lg md:text-xl font-semibold text-gray-800 mt-6">
          4. Third-Party Sharing
        </h2>
        <p className="text-sm md:text-base text-gray-700">
          We do not sell or share your personal data with third parties, except as required for university
          applications, visa processing, or legal obligations.
        </p>

        <h2 className="text-lg md:text-xl font-semibold text-gray-800 mt-6">
          5. Cookies & Tracking
        </h2>
        <p className="text-sm md:text-base text-gray-700">
          Our website may use cookies to improve user experience and analyze website traffic. You can
          disable cookies in your browser settings.
        </p>

        <h2 className="text-lg md:text-xl font-semibold text-gray-800 mt-6">
          6. Your Rights
        </h2>
        <p className="text-sm md:text-base text-gray-700">
          You have the right to access, modify, or delete your personal data. To request changes, contact
          us at{" "}
          <a href="mailto:admin@vidhyavaaradhi.com" className="text-blue-500 hover:underline">
            admin@vidhyavaaradhi.com
          </a>.
        </p>

        <h2 className="text-lg md:text-xl font-semibold text-gray-800 mt-6">
          7. Changes to Privacy Policy
        </h2>
        <p className="text-sm md:text-base text-gray-700">
          We may update this Privacy Policy periodically. Any changes will be posted on this page.
        </p>

        <h2 className="text-lg md:text-xl font-semibold text-gray-800 mt-6">
          8. Contact Information
        </h2>
        <p className="text-sm md:text-base text-gray-700">
          For any privacy-related concerns, please contact us at{" "}
          <a href="mailto:info@vidhyavaaradhi.com" className="text-blue-500 hover:underline">
            info@vidhyavaaradhi.com
          </a>.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
