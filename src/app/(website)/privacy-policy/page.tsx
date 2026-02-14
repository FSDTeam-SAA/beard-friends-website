'use client'

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="container mx-auto">

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#18181B] mb-6">
          Privacy Policy
        </h1>

        <p className="text-gray-600 mb-8">
          Last updated: February 2026
        </p>

        {/* Content */}
        <div className="space-y-8 text-[#4B4B4B] leading-relaxed">

          <div>
            <h2 className="text-xl font-semibold mb-2">
              1. Introduction
            </h2>
            <p>
              Your privacy is important to us. This Privacy Policy explains how
              we collect, use, and protect your personal information when you
              use our website and services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              2. Information We Collect
            </h2>
            <p>
              We may collect personal information such as your name, email
              address, contact details, and usage data when you register,
              interact with our services, or contact us.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              3. How We Use Your Information
            </h2>
            <p>
              Your information is used to provide and improve our services,
              communicate with you, personalize your experience, and ensure
              the security of our platform.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              4. Data Sharing
            </h2>
            <p>
              We do not sell or rent your personal information. Information may
              be shared with trusted third-party service providers only when
              necessary to operate our services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              5. Data Security
            </h2>
            <p>
              We implement appropriate technical and organizational measures
              to protect your personal data from unauthorized access, loss,
              or misuse.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              6. Cookies
            </h2>
            <p>
              Our website may use cookies to improve user experience, analyze
              traffic, and remember user preferences.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              7. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Updates will
              be posted on this page with a revised date.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              8. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please contact
              us at support@example.com.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
