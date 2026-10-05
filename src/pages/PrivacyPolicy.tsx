import React from "react";
import {
  ShieldCheck,
  Lock,
  Cookie,
  Database,
  Globe,
  UserCheck,
  Mail,
  ArrowUp,
} from "lucide-react";
import Seo from "../components/Seo";

const sections = [
  { id: "information", number: "01", title: "Information We Collect" },
  { id: "usage", number: "02", title: "How We Use Your Information" },
  { id: "communication", number: "03", title: "Enquiry and Communication" },
  { id: "consent", number: "04", title: "Consent" },
  { id: "cookies", number: "05", title: "Cookies & Technologies" },
  { id: "third-party", number: "06", title: "Third-Party Services" },
  { id: "international", number: "07", title: "International Processing" },
  { id: "security", number: "08", title: "Data Security" },
  { id: "retention", number: "09", title: "Data Retention" },
  { id: "rights", number: "10", title: "Your Privacy Rights" },
  { id: "grievance", number: "11", title: "Grievance & Contact" },
  { id: "children", number: "12", title: "Children's Privacy" },
  { id: "links", number: "13", title: "Third-Party Links" },
  { id: "changes", number: "14", title: "Changes to Policy" },
  { id: "contact", number: "15", title: "Contact Us" },
];

const PrivacyPolicy: React.FC = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
    <Seo
      title="Privacy Policy"
      description="Read the Zoidics Privacy Policy to learn how we collect, use, store, protect, and manage personal information when you visit our website or communicate with Zoidics Software Service."
      keywords="Zoidics privacy policy, Zoidics Software Service privacy policy, data protection, personal information, privacy policy Chennai, website privacy policy, data security, cookies policy"
      url="https://zoidics.com/privacy-policy"
    />
    <main className="min-h-screen w-full bg-[#ffe9d9] font-['Sora',sans-serif] text-[#080808]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-black/5">
        <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-orange-300/30 blur-3xl" />
        <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-pink-300/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm font-semibold backdrop-blur">
              <ShieldCheck size={17} />
              Privacy & Data Protection
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl">
              Privacy Policy
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-black/60 sm:text-lg">
              Learn how Zoidics collects, uses, stores, and protects your
              personal information when you use our website and communicate with
              us.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <div className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white">
                Last Updated: October 2, 2026
              </div>

              <a
                href="mailto:connect@zoidics.com"
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-medium transition hover:bg-black hover:text-white"
              >
                <Mail size={16} />
                connect@zoidics.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-10 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)]">
          {/* Desktop navigation */}
          <aside className="hidden lg:block">
            <div className="sticky top-8 rounded-3xl border border-black/5 bg-white p-5 shadow-sm">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-black/40">
                On this page
              </p>

              <nav className="space-y-1">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="group flex items-start gap-3 rounded-xl px-3 py-2.5 text-sm text-black/60 transition hover:bg-[#ffe9d9] hover:text-black"
                  >
                    <span className="text-[10px] font-bold text-black/30">
                      {section.number}
                    </span>

                    <span className="leading-5">{section.title}</span>
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <article className="min-w-0 rounded-[28px] bg-white p-6 shadow-sm sm:rounded-[36px] sm:p-10 lg:p-14">
            {/* Introduction */}
            <div className="mb-12 border-b border-black/10 pb-10">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white">
                <ShieldCheck size={24} />
              </div>

              <p className="text-base leading-8 text-black/70 sm:text-lg">
                Welcome to Zoidics Solution ("Zoidics", "we", "our", or "us").
                This Privacy Policy explains how Zoidics collects, uses, stores,
                and protects personal information when you visit zoidics.com,
                submit an enquiry, or communicate with us regarding our
                services.
              </p>

              <p className="mt-5 text-base leading-8 text-black/70 sm:text-lg">
                Zoidics is a small, independent software development team based
                in Chennai, India. We aim to handle personal information
                responsibly and in accordance with applicable Indian
                data-protection and privacy laws, including the Digital Personal
                Data Protection Act, 2023 and applicable rules and requirements
                as they come into force.
              </p>
            </div>

            {/* 1 */}
            <section id="information" className="scroll-mt-8">
              <SectionTitle
                number="01"
                title="Information We Collect"
                icon={<Database size={21} />}
              />

              <p className="legal-text">
                We may collect information that you voluntarily provide to us
                when you contact us, submit an enquiry, request a quotation, or
                communicate with us.
              </p>

              <LegalList
                items={[
                  "Name",
                  "Email address",
                  "Phone number",
                  "Company or business name",
                  "Project requirements",
                  "Budget or project-related information that you choose to provide",
                  "Messages and communications",
                  "Other information that you voluntarily provide",
                ]}
              />

              <p className="legal-text">
                We may also collect limited technical information automatically
                when you visit our website, such as:
              </p>

              <LegalList
                items={[
                  "IP address",
                  "Browser type",
                  "Device type",
                  "Operating system",
                  "Pages visited",
                  "Date and time of visits",
                  "Approximate website usage information",
                ]}
              />

              <p className="legal-text">
                We only request information that is reasonably necessary for the
                relevant purpose.
              </p>
            </section>

            {/* 2 */}
            <section id="usage" className="legal-section">
              <SectionTitle number="02" title="How We Use Your Information" />

              <p className="legal-text">
                We may use the information we collect to:
              </p>

              <LegalList
                items={[
                  "Respond to enquiries and messages",
                  "Understand your project requirements",
                  "Prepare quotations or project proposals",
                  "Communicate with you about our services",
                  "Provide requested information or services",
                  "Manage client relationships and projects",
                  "Improve our website and services",
                  "Maintain website security",
                  "Detect and prevent spam, abuse, fraud, or unauthorized activity",
                  "Maintain appropriate business and transaction records",
                  "Comply with applicable legal obligations",
                ]}
              />

              <div className="mt-6 rounded-2xl bg-[#ffe9d9] p-5">
                <p className="font-semibold">
                  We do not sell your personal information.
                </p>
              </div>
            </section>

            {/* 3 */}
            <section id="communication" className="legal-section">
              <SectionTitle
                number="03"
                title="Enquiry and Communication Information"
              />

              <p className="legal-text">
                When you contact Zoidics through our website, email, phone, or
                other communication channels, we may retain the information
                necessary to respond to your enquiry and maintain appropriate
                business records.
              </p>

              <p className="legal-text">
                Please avoid sending sensitive personal information that is not
                necessary for your enquiry.
              </p>
            </section>

            {/* 4 */}
            <section id="consent" className="legal-section">
              <SectionTitle
                number="04"
                title="Consent"
                icon={<UserCheck size={21} />}
              />

              <p className="legal-text">
                Where consent is required for processing, we may request your
                consent before collecting or using your personal information for
                the relevant purpose.
              </p>

              <p className="legal-text">
                Where you provide consent, you may withdraw it by contacting us
                at{" "}
                <a href="mailto:connect@zoidics.com" className="legal-link">
                  connect@zoidics.com
                </a>
                .
              </p>

              <p className="legal-text">
                Withdrawal of consent will not affect processing that was
                lawfully carried out before the withdrawal.
              </p>

              <p className="legal-text">
                Withdrawal of consent may also affect our ability to provide
                certain services or respond to an enquiry where the information
                is necessary for that purpose.
              </p>
            </section>

            {/* 5 */}
            <section id="cookies" className="legal-section">
              <SectionTitle
                number="05"
                title="Cookies and Similar Technologies"
                icon={<Cookie size={21} />}
              />

              <p className="legal-text">
                Our website may use cookies and similar technologies to:
              </p>

              <LegalList
                items={[
                  "Operate and improve website functionality",
                  "Understand website usage",
                  "Improve user experience",
                  "Maintain website security",
                ]}
              />

              <p className="legal-text">
                If we use analytics or other third-party technologies, those
                services may collect information according to their own privacy
                policies.
              </p>

              <p className="legal-text">
                You can control or disable cookies through your browser
                settings. Disabling certain cookies may affect some website
                functionality.
              </p>

              <p className="legal-text">
                If Google Analytics is actually installed on the website,
                information collected through Google Analytics may be processed
                according to Google's applicable policies.
              </p>
            </section>

            {/* 6 */}
            <section id="third-party" className="legal-section">
              <SectionTitle number="06" title="Third-Party Services" />

              <p className="legal-text">
                We may use third-party service providers to operate and support
                our website and services, including providers for:
              </p>

              <LegalList
                items={[
                  "Website hosting",
                  "Cloud infrastructure",
                  "Website security",
                  "Email communication",
                  "Contact forms",
                  "Analytics",
                  "Payment processing, where applicable",
                  "Other technical services necessary to operate our business",
                ]}
              />

              <p className="legal-text">
                These providers may process information on our behalf or
                independently according to their own terms and privacy policies.
              </p>

              <p className="legal-text">
                We only share information with third parties where reasonably
                necessary for the relevant business or service purpose, to
                comply with applicable law, or where otherwise permitted by law.
              </p>
            </section>

            {/* 7 */}
            <section id="international" className="legal-section">
              <SectionTitle
                number="07"
                title="International Data Processing"
                icon={<Globe size={21} />}
              />

              <p className="legal-text">
                Some service providers used by Zoidics may store or process
                information on servers located outside India.
              </p>

              <p className="legal-text">
                Where personal information is processed outside India, we will
                take reasonable steps to use appropriate service providers and
                handle such processing in accordance with applicable law.
              </p>
            </section>

            {/* 8 */}
            <section id="security" className="legal-section">
              <SectionTitle
                number="08"
                title="Data Security"
                icon={<Lock size={21} />}
              />

              <p className="legal-text">
                We take reasonable technical and organizational measures to
                protect personal information against unauthorized access,
                misuse, alteration, disclosure, loss, or destruction.
              </p>

              <p className="legal-text">
                However, no website, internet transmission, or electronic
                storage system can be guaranteed to be completely secure.
              </p>
            </section>

            {/* 9 */}
            <section id="retention" className="legal-section">
              <SectionTitle number="09" title="Data Retention" />

              <p className="legal-text">
                We retain personal information only for as long as reasonably
                necessary for the purpose for which it was collected, or for
                legitimate business, contractual, accounting, tax, legal,
                security, or dispute-resolution purposes.
              </p>

              <p className="legal-text">
                Enquiry information that does not result in a project may be
                retained for a reasonable period for business communication and
                record-keeping purposes and may subsequently be deleted or
                anonymized where appropriate.
              </p>

              <p className="legal-text">
                Information relating to projects, contracts, invoices, payments,
                and other business records may be retained for as long as
                necessary to comply with applicable legal and business
                requirements.
              </p>

              <p className="legal-text">
                When information is no longer required and there is no legal or
                legitimate reason to retain it, we may delete or anonymize it.
              </p>
            </section>

            {/* 10 */}
            <section id="rights" className="legal-section">
              <SectionTitle number="10" title="Your Privacy Rights" />

              <p className="legal-text">
                Subject to applicable law and any conditions or limitations that
                may apply, you may have rights regarding your personal
                information, including the ability to:
              </p>

              <LegalList
                items={[
                  "Request access to personal information we hold about you",
                  "Request correction of inaccurate or incomplete information",
                  "Request deletion or erasure of personal information where applicable",
                  "Withdraw consent where processing is based on consent",
                  "Raise a grievance regarding the processing of your personal information",
                  "Exercise other rights available to you under applicable law",
                ]}
              />

              <p className="legal-text">
                To make a privacy request or raise a grievance, contact:{" "}
                <a href="mailto:connect@zoidics.com" className="legal-link">
                  connect@zoidics.com
                </a>
                .
              </p>

              <p className="legal-text">
                We will review and respond to requests within the period
                required by applicable law.
              </p>
            </section>

            {/* 11 */}
            <section id="grievance" className="legal-section">
              <SectionTitle number="11" title="Grievance and Privacy Contact" />

              <p className="legal-text">
                For privacy-related questions, requests, or complaints, please
                contact:
              </p>

              <div className="my-5 rounded-2xl border border-black/10 bg-[#fafafa] p-5">
                <p className="font-semibold">Zoidics Solution</p>
                <a
                  href="mailto:connect@zoidics.com"
                  className="legal-link mt-1 inline-block"
                >
                  connect@zoidics.com
                </a>
              </div>

              <p className="legal-text">
                We will make reasonable efforts to review and address
                privacy-related complaints and requests in accordance with
                applicable law.
              </p>

              <p className="legal-text">
                Where applicable, you may also have the right to approach the
                relevant data-protection authority or Data Protection Board in
                accordance with applicable law.
              </p>
            </section>

            {/* 12 */}
            <section id="children" className="legal-section">
              <SectionTitle number="12" title="Children's Privacy" />

              <p className="legal-text">
                Our website and general software development services are not
                specifically directed toward children under 18.
              </p>

              <p className="legal-text">
                We do not knowingly collect personal information from children
                through our general enquiry process without the required consent
                or authorization where applicable under law.
              </p>

              <p className="legal-text">
                If you believe that a child has provided personal information to
                us without appropriate authorization, please contact us at{" "}
                <a href="mailto:connect@zoidics.com" className="legal-link">
                  connect@zoidics.com
                </a>{" "}
                so that we can review the matter and take appropriate action.
              </p>
            </section>

            {/* 13 */}
            <section id="links" className="legal-section">
              <SectionTitle number="13" title="Third-Party Links" />

              <p className="legal-text">
                Our website may contain links to third-party websites,
                platforms, or services.
              </p>

              <p className="legal-text">
                Zoidics does not control the privacy practices, content,
                security, or policies of third-party websites.
              </p>

              <p className="legal-text">
                We recommend reviewing the privacy policy of any third-party
                website before providing personal information.
              </p>
            </section>

            {/* 14 */}
            <section id="changes" className="legal-section">
              <SectionTitle
                number="14"
                title="Changes to This Privacy Policy"
              />

              <p className="legal-text">
                We may update this Privacy Policy from time to time to reflect
                changes in:
              </p>

              <LegalList
                items={[
                  "Our services",
                  "Technology",
                  "Business practices",
                  "Applicable laws or regulations",
                  "Privacy and data-protection requirements",
                ]}
              />

              <p className="legal-text">
                When we make changes, we will update the "Last Updated" date at
                the top of this policy.
              </p>
            </section>

            {/* 15 */}
            <section id="contact" className="legal-section">
              <SectionTitle
                number="15"
                title="Contact Us"
                icon={<Mail size={21} />}
              />

              <p className="legal-text">
                If you have any questions about this Privacy Policy, your
                personal information, or our privacy practices, please contact
                us:
              </p>

              <div className="mt-6 rounded-3xl bg-black p-6 text-white sm:p-8">
                <p className="text-lg font-bold">Zoidics Solution</p>

                <p className="mt-4 text-white/60">
                  Website: <span className="text-white">zoidics.com</span>
                </p>

                <a
                  href="mailto:connect@zoidics.com"
                  className="mt-2 inline-block text-white underline underline-offset-4"
                >
                  connect@zoidics.com
                </a>
              </div>
            </section>
          </article>
        </div>
      </section>

      {/* Back to top */}
      <button
        type="button"
        onClick={scrollTop}
        aria-label="Back to top"
        className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-black text-white shadow-xl transition hover:-translate-y-1"
      >
        <ArrowUp size={19} />
      </button>
    </main>
     </>
  );
};

function SectionTitle({
  number,
  title,
  icon,
}: {
  number: string;
  title: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="mb-5 flex items-start gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#ffe9d9] text-sm font-bold">
        {icon || number}
      </div>

      <div>
        <p className="mb-1 text-xs font-bold uppercase tracking-[0.15em] text-black/30">
          Section {number}
        </p>

        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          {title}
        </h2>
      </div>
    </div>
  );
}

function LegalList({ items }: { items: string[] }) {
  return (
    <ul className="my-6 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-base leading-7 text-black/70">
          <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-black/50" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}



export default PrivacyPolicy;
