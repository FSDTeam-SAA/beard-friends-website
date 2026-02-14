'use client'

export default function TermsPage() {
  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="container mx-auto">
        
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#18181B] mb-6">
          Terms & Conditions
        </h1>

        <p className="text-gray-600 mb-8">
          Last updated: February 2026
        </p>

        {/* Section */}
        <div className="space-y-8 text-[#4B4B4B] leading-relaxed">
          
          <div>
            <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
            <p>
              Welcome to our platform. These Terms and Conditions outline the rules
              and regulations for the use of our website and services. By accessing
              this website, you accept these terms in full.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">2. Use of Our Services</h2>
            <p>
              You agree to use our services only for lawful purposes and in a way
              that does not infringe the rights of others or restrict their use
              of the platform.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">3. User Accounts</h2>
            <p>
              Users are responsible for maintaining the confidentiality of their
              account information and for all activities that occur under their account.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">4. Intellectual Property</h2>
            <p>
              All content, trademarks, and materials on this website are the property
              of the company unless otherwise stated. Unauthorized use is prohibited.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">5. Limitation of Liability</h2>
            <p>
              We are not liable for any damages resulting from the use or inability
              to use our services, including but not limited to indirect or consequential damages.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">6. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Changes will
              be effective immediately upon posting on this page.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">7. Contact Us</h2>
            <p>
              If you have any questions about these Terms & Conditions, please
              contact us at support@example.com.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
