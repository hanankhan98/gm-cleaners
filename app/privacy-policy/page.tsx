import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | MZ Cleaners Manchester",
  description: "Read the Privacy Policy of MZ Cleaners. Learn how we collect, use, and protect your personal data when you use our cleaning services in Manchester.",
  alternates: {
    canonical: "https://www.mzcleaners.co.uk/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#f7fbff] text-[#1c2d3e] min-h-screen py-16 px-5 md:px-12">
      <div className="mx-auto max-w-[900px] bg-white rounded-2xl border border-[#dceaf5] p-8 md:p-14 shadow-[0_8px_30px_rgba(42,143,212,0.06)]">
        
        {/* Header */}
        <div className="border-b border-[#dceaf5] pb-8 mb-8">
          <span className="text-xs font-bold tracking-[2px] uppercase text-[#2a8fd4]">MZ Cleaners Legal Information</span>
          <h1 className="mt-2 font-plus-jakarta-sans text-3xl md:text-5xl font-bold text-[#0f4c81]">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-[#60788d]">
            Last updated: September 16, 2026
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-8 text-base leading-8 text-[#4a6278]">
          
          <section>
            <h2 className="font-plus-jakarta-sans text-xl font-bold text-[#0f4c81] mb-3">
              1. Introduction
            </h2>
            <p>
              Welcome to MZ Cleaners (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We operate the website <a href="https://mzcleaners.co.uk" className="text-[#2a8fd4] underline">mzcleaners.co.uk</a>, providing professional residential and commercial cleaning services across Manchester and Greater Manchester. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
            </p>
          </section>

          <section>
            <h2 className="font-plus-jakarta-sans text-xl font-bold text-[#0f4c81] mb-3">
              2. Information We Collect
            </h2>
            <p className="mb-3">
              We may collect, use, store, and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Identity Data:</strong> Includes first name, last name, username, or similar identifier.</li>
              <li><strong>Contact Data:</strong> Includes billing address, service delivery address, email address, and telephone numbers.</li>
              <li><strong>Transaction Data:</strong> Includes details about payments to and from you and other details of services you have purchased from us.</li>
              <li><strong>Technical Data:</strong> Includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
              <li><strong>Usage Data:</strong> Includes information about how you use our website, products, and services.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-plus-jakarta-sans text-xl font-bold text-[#0f4c81] mb-3">
              3. How We Use Your Personal Data
            </h2>
            <p className="mb-3">
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To register you as a new customer or process your quote requests.</li>
              <li>To deliver and manage our cleaning services (residential, commercial, end-of-tenancy, etc.).</li>
              <li>To manage our relationship with you, including notifying you about changes to our terms or privacy policy.</li>
              <li>To administer and protect our business and website (including troubleshooting, data analysis, and system testing).</li>
              <li>To use data analytics to improve our website, services, marketing, and customer relationships.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-plus-jakarta-sans text-xl font-bold text-[#0f4c81] mb-3">
              4. Data Security
            </h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
            </p>
          </section>

          <section>
            <h2 className="font-plus-jakarta-sans text-xl font-bold text-[#0f4c81] mb-3">
              5. Your Legal Rights
            </h2>
            <p>
              Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, or to object to processing. If you wish to exercise any of these rights, please contact us.
            </p>
          </section>

          <section>
            <h2 className="font-plus-jakarta-sans text-xl font-bold text-[#0f4c81] mb-3">
              6. Contact Us
            </h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us at:
            </p>
            <div className="mt-3 bg-[#f0f6fc] p-4 rounded-xl border border-[#dceaf5]">
              <p><strong>Email:</strong> MzcleanersLtd@gmail.com</p>
              <p><strong>Phone:</strong> +44 7535 048548</p>
              <p><strong>Address:</strong> Suite 112a, 53 Derby Street, Manchester, Greater Manchester</p>
            </div>
          </section>

        </div>

      </div>
    </main>
  );
}