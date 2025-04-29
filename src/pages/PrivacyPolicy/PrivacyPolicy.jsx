import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Effective Date: 04/30/2025</p>

      <p className="mb-6">
        At Evertrust Builders, we value your privacy and are committed to
        protecting your personal information. This Privacy Policy explains how
        we collect, use, and safeguard your information when you visit our
        website.
      </p>

      <Section title="1. Information We Collect">
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Personal Information:</strong> Such as your name, email
            address, phone number, and any other details you provide via our
            contact forms or service inquiries.
          </li>
          <li>
            <strong>Non-Personal Information:</strong> Such as your IP address,
            browser type, and browsing activity, automatically collected through
            cookies or other tracking technologies.
          </li>
        </ul>
      </Section>

      <Section title="2. How We Use Your Information">
        <ul className="list-disc pl-6 space-y-2">
          <li>Responding to your inquiries and providing our services.</li>
          <li>
            Communicating about project updates, promotions, or company news.
          </li>
          <li>Improving our website and customer experience.</li>
          <li>Ensuring compliance with legal requirements.</li>
        </ul>
      </Section>

      <Section title="3. Sharing Your Information">
        <p className="mb-2">
          We do not sell your personal information. However, we may share your
          information with:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Service Providers and Contractors:</strong> To facilitate
            our construction projects and services.
          </li>
          <li>
            <strong>Legal Authorities:</strong> When required by law or to
            protect our rights and property.
          </li>
        </ul>
      </Section>

      <Section title="4. Cookies and Tracking Technologies">
        <p className="mb-2">
          Our website uses cookies to enhance your browsing experience by:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Remembering your preferences and settings.</li>
          <li>Analyzing website traffic and visitor behavior.</li>
        </ul>
        <p className="mt-2">
          You can manage cookie settings through your browser; however,
          disabling cookies may affect certain features on our website.
        </p>
      </Section>

      <Section title="5. Data Security">
        <p>
          We take appropriate measures to protect your information from
          unauthorized access, alteration, or disclosure. However, no method of
          online transmission is entirely secure, so we cannot guarantee
          complete security.
        </p>
      </Section>

      <Section title="6. Your Rights">
        <ul className="list-disc pl-6 space-y-2">
          <li>Access, update, or delete your personal information.</li>
          <li>
            Opt-out of marketing communications via the “unsubscribe” link in
            our emails.
          </li>
          <li>Request details of the information we hold about you.</li>
        </ul>
        <p className="mt-2">
          To exercise these rights, please contact us at{" "}
          <a href="mailto:EvertrustBuilders@gmail.com" className="text-blue-600 underline">
          EvertrustBuilders@gmail.com
          </a>
          .
        </p>
      </Section>

      <Section title="7. Third-Party Links">
        <p>
          Our website may contain links to third-party websites. We are not
          responsible for their privacy practices or content. Please review
          their policies before engaging with them.
        </p>
      </Section>

      <Section title="8. Updates to This Privacy Policy">
        <p>
          We reserve the right to update this Privacy Policy as needed. Changes
          will be posted on this page with an updated effective date.
        </p>
      </Section>

      <Section title="9. Contact Us">
        <p>
          If you have any questions or concerns about this Privacy Policy,
          please contact us at{" "}
          <a href="mailto:EvertrustBuilders@gmail.com" className="text-blue-600 underline">
          EvertrustBuilders@gmail.com
          </a>
          .
        </p>
      </Section>
    </div>
  );
};

const Section = ({ title, children }) => (
  <section className="mb-8">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <div className="text-gray-700 text-sm">{children}</div>
  </section>
);

export default PrivacyPolicy;
