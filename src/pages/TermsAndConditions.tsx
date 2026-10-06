import React from "react";
import {
  FileText,
  CreditCard,
  RefreshCcw,
  Code2,
  ShieldCheck,
  ExternalLink,
  Scale,
  Mail,
  ArrowUp,
} from "lucide-react";
import Seo from "../components/Seo";

const sections = [
  ["about", "01", "About Zoidics"],
  ["usage", "02", "Website Usage"],
  ["agreement", "03", "Service Enquiries and Project Agreement"],
  ["requirements", "04", "Project Requirements"],
  ["pricing", "05", "Pricing, Advance Payment and Handover"],
  ["scope", "06", "Scope, Changes and Revisions"],
  ["support", "07", "Support, Bug Fixes and Maintenance"],
  ["refund", "08", "Cancellation, Termination and Refund Policy"],
  ["ip", "09", "Intellectual Property"],
  ["third-party", "10", "Third-Party Services"],
  ["content", "11", "Website Content"],
  ["availability", "12", "Service Availability"],
  ["disclaimer", "13", "Disclaimer"],
  ["liability", "14", "Limitation of Liability"],
  ["confidentiality", "15", "Confidentiality"],
  ["external", "16", "External Links"],
  ["termination", "17", "Termination of Website Access"],
  ["changes", "18", "Changes to These Terms"],
  ["law", "19", "Governing Law and Jurisdiction"],
  ["contact", "20", "Contact Us"],
];

const TermsAndConditions: React.FC = () => {
  return (
    <>
    <Seo
      title="Terms & Conditions"
      description="Read the Terms and Conditions for using the Zoidics Software Solutions website, services, digital solutions, and communication channels."
      keywords="Zoidics terms and conditions, Zoidics Software Solutions terms, website terms and conditions, software services Chennai, web development terms, app development terms"
      url="https://zoidics.com/terms-and-conditions"
    />

    <main className="min-h-screen w-full bg-[#ffe9d9] font-['Sora',sans-serif] text-[#080808]">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-black/5">
        <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-orange-300/30 blur-3xl" />
        <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-pink-300/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm font-semibold backdrop-blur">
              <FileText size={17} />
              Legal Agreement
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl">
              Terms & Conditions
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-black/60 sm:text-lg">
              These Terms & Conditions govern your use of zoidics.com and your
              interaction with Zoidics services.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
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

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-10 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)]">
          {/* TABLE OF CONTENTS */}
          <aside className="hidden lg:block">
            <div className="sticky top-8 rounded-3xl border border-black/5 bg-white p-5 shadow-sm">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-black/40">
                On this page
              </p>

              <nav className="space-y-1">
                {sections.map(([id, number, title]) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    className="group flex items-start gap-3 rounded-xl px-3 py-2 text-sm text-black/60 transition hover:bg-[#ffe9d9] hover:text-black"
                  >
                    <span className="text-[10px] font-bold text-black/30">
                      {number}
                    </span>

                    <span className="leading-5">{title}</span>
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* CONTENT */}
          <article className="min-w-0 rounded-[28px] bg-white p-6 shadow-sm sm:rounded-[36px] sm:p-10 lg:p-14">
            <div className="mb-12 border-b border-black/10 pb-10">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white">
                <FileText size={24} />
              </div>

              <p className="text-base leading-8 text-black/70 sm:text-lg">
                Welcome to Zoidics Software Solutions ("Zoidics", "we", "our", or "us").
                These Terms & Conditions govern your use of zoidics.com and your
                interaction with our website and services. By accessing or using
                our website, you agree to these Terms & Conditions. If you do
                not agree, please do not use the website.
              </p>
            </div>

            {/* 1 */}
            <LegalSection id="about" number="01" title="About Zoidics">
              <p className="legal-text">
                Zoidics is a small, independent software development team based
                in Chennai, India. We work with startups, businesses, and
                individuals to build websites, mobile applications, AI
                solutions, automation systems, and custom software.
              </p>

              <p className="legal-text">
                We provide technology and software development services, which
                may include:
              </p>

              <LegalList
                items={[
                  "Web Development",
                  "Mobile App Development",
                  "AI Integration",
                  "AI Chatbots",
                  "Business Automation",
                  "SEO and Growth Services",
                  "E-commerce Solutions",
                  "Billing Systems",
                  "Cloud and Deployment Services",
                  "Custom Software Development",
                  "Other technology-related services",
                ]}
              />

              <p className="legal-text">
                Specific services, features, pricing, timelines, and
                deliverables vary depending on individual client requirements
                and are set out in the signed project agreement.
              </p>
            </LegalSection>

            {/* 2 */}
            <LegalSection id="usage" number="02" title="Website Usage">
              <p className="legal-text">
                You agree to use our website only for lawful purposes.
              </p>

              <p className="legal-text">You must not:</p>

              <LegalList
                items={[
                  "Attempt to gain unauthorized access to the website or its systems",
                  "Introduce viruses, malware, or other harmful code",
                  "Interfere with website operation",
                  "Copy or misuse website content without permission",
                  "Use the website for fraudulent or unlawful activities",
                  "Attempt to access information belonging to other users",
                ]}
              />

              <p className="legal-text">
                We reserve the right to restrict or terminate access to the
                website where necessary.
              </p>
            </LegalSection>

            {/* 3 */}
            <LegalSection
              id="agreement"
              number="03"
              title="Service Enquiries and Project Agreement"
            >
              <p className="legal-text">
                Information submitted through our website is treated as an
                enquiry or request for information. Submitting an enquiry does
                not create a client relationship, contract, or obligation for
                Zoidics to provide services.
              </p>

              <p className="legal-text">
                Before any project begins, Zoidics and the client will sign a
                written project agreement or quotation that sets out the scope,
                price, payment schedule, timeline, and deliverables.
              </p>

              <p className="legal-text">
                A project starts only after (a) the agreement is signed by both
                parties and (b) the advance payment is received.
              </p>

              <p className="legal-text">
                These Terms & Conditions apply to every project as a supplement
                to the signed agreement. If there is a conflict between these
                Terms and the signed agreement, the signed agreement prevails.
              </p>
            </LegalSection>

            {/* 4 */}
            <LegalSection
              id="requirements"
              number="04"
              title="Project Requirements"
            >
              <p className="legal-text">
                Clients are responsible for providing accurate and complete
                information, materials, access credentials, content,
                specifications, and approvals reasonably required to perform the
                agreed project.
              </p>

              <p className="legal-text">
                Delays caused by missing information, approvals, content,
                access, or other client dependencies may extend project
                timelines and will not be treated as a failure by Zoidics to
                deliver.
              </p>
            </LegalSection>

            {/* 5 */}
            <LegalSection
              id="pricing"
              number="05"
              title="Pricing, Advance Payment and Handover"
              icon={<CreditCard size={21} />}
            >
              <NumberedList
                items={[
                  <>
                    <strong>5.1 Advance payment:</strong> Advance payment is
                    compulsory for every project. No work begins until the
                    signed agreement and the advance payment are received.
                  </>,
                  <>
                    <strong>5.2:</strong> The advance is 50% of the total
                    project cost. The balance is payable as set out in the
                    signed agreement.
                  </>,
                  <>
                    <strong>5.3:</strong> Final deliverables including source
                    code, files, admin access, credentials, and deployment are
                    handed over only after 100% of the payment is received.
                  </>,
                  <>
                    <strong>5.4:</strong> Before full payment, the client may
                    only view meetings, demos, and watermarked images or
                    previews of the work. Previews are for review only and must
                    not be copied, published, or used commercially.
                  </>,
                  <>
                    <strong>5.5:</strong> Prices are exclusive of applicable
                    taxes including GST, payment gateway charges, domain,
                    hosting, and third-party licence or API costs, unless stated
                    in the agreement.
                  </>,
                  <>
                    <strong>5.6:</strong> Delayed payments may pause the project
                    and extend timelines.
                  </>,
                ]}
              />
            </LegalSection>

            {/* 6 */}
            <LegalSection
              id="scope"
              number="06"
              title="Scope, Changes and Revisions"
            >
              <p className="legal-text">
                <strong>6.1</strong> Work is limited to the scope in the signed
                agreement. Changes during the project may affect price and
                timeline and require written approval.
              </p>

              <p className="legal-text">
                <strong>6.2</strong> After full payment and handover, new
                features and substantial changes are not included. Reasonable
                small design or content changes may be provided at no additional
                charge as described in Section 7.3.
              </p>

              <p className="legal-text">
                <strong>6.3 Client Review and Acceptance:</strong> The client is
                responsible for reviewing the delivered work and providing
                feedback or approval within a reasonable period. Once the agreed
                deliverables are approved or put into use by the client, they
                will be considered accepted, subject to the lifetime bug-fix
                provisions in Section 7.
              </p>
            </LegalSection>

            {/* 7 */}
            <LegalSection
              id="support"
              number="07"
              title="Support, Bug Fixes and Maintenance"
              icon={<ShieldCheck size={21} />}
            >
              <p className="legal-text">
                <strong>7.1 Bug Fixes and Errors:</strong> Zoidics provides
                lifetime bug-fix support at no additional charge for bugs,
                errors, or issues in the functionality originally developed and
                delivered by Zoidics.
              </p>

              <p className="legal-text">
                This free bug-fix support applies as long as the issue is
                related to the original delivered work and has not been caused
                by changes made by the client, third parties, hosting providers,
                servers, domains, or external services.
              </p>

              <p className="legal-text">
                <strong>7.2 New Features and Additional Requirements:</strong>{" "}
                Any new feature, functionality, module, integration, or
                requirement requested after the agreed project scope has been
                completed will be evaluated based on the requirement and may
                involve an additional charge.
              </p>

              <p className="legal-text">
                <strong>7.3 Small Design and Content Changes:</strong>{" "}
                Reasonable small design adjustments and content changes to the
                delivered project may be provided at no additional charge,
                depending on the nature and extent of the requested changes.
                Major redesigns, extensive UI changes, or substantial
                content-related work may be treated as additional work.
              </p>

              <p className="legal-text">
                <strong>7.4 Server, Domain and Third-Party Services:</strong>{" "}
                Any costs related to third-party services or infrastructure
                required for the project, including domain names, hosting,
                servers, cloud services, APIs, payment gateways, email services,
                SMS services, software licenses, or other external services,
                will be borne by the client.
              </p>

              <p className="legal-text">
                <strong>7.5 Maintenance:</strong> Ongoing maintenance is
                separate from lifetime bug-fix support. Maintenance may include
                server management, regular updates, dependency updates, backups,
                monitoring, security updates, performance optimization, or other
                ongoing technical services.
              </p>
            </LegalSection>

            {/* 8 */}
            <LegalSection
              id="refund"
              number="08"
              title="Cancellation, Termination and Refund Policy"
              icon={<RefreshCcw size={21} />}
            >
              <p className="legal-text">
                <strong>8.1 If Zoidics fails to deliver:</strong> If Zoidics is
                unable to deliver the agreed project due to reasons solely
                attributable to Zoidics, and the failure is not caused by the
                client, the client will be entitled to a 100% refund of the
                amount paid to Zoidics.
              </p>

              <p className="legal-text">
                Before a refund is due, the client must provide written notice
                describing the issue, and Zoidics will have 15 days to remedy
                the failure or complete the agreed project.
              </p>

              <p className="legal-text">
                Third-party costs already paid on the client's behalf, including
                domain, hosting, licences, APIs, or other external services, are
                not refundable by Zoidics.
              </p>

              <p className="legal-text">
                <strong>8.2 If the client cancels the project:</strong> Advance
                and other payments are generally non-refundable. A partial
                refund of 40% to 60% of the amount paid may be considered only
                where the client voluntarily cancels the project before handover
                and the required conditions are met.
              </p>

              <LegalList
                items={[
                  "The cancellation request is made in writing to connect@zoidics.com",
                  "The project has not been handed over",
                  "The request is made within 7 days of the payment, or before the design/development stage begins, whichever is earlier",
                  "The client has not breached the project agreement and has provided all required materials, information, approvals, and access",
                ]}
              />

              <p className="legal-text">
                <strong>
                  8.3 Refund amount for eligible client cancellations:
                </strong>{" "}
                Where a partial refund is approved, the amount will depend on
                the work completed and costs incurred by Zoidics.
              </p>

              <LegalList
                items={[
                  "60% refund may apply where no project work has started",
                  "40% refund may apply where initial project work has already started",
                ]}
              />

              <p className="legal-text">
                <strong>
                  8.4 Client non-payment, breach, or failure to cooperate:
                </strong>{" "}
                Zoidics may pause or terminate the project after providing
                written notice and a reasonable opportunity to resolve the
                issue.
              </p>

              <p className="legal-text">
                If the project is terminated due to the client's non-payment,
                breach, or failure to cooperate, payments already made to
                Zoidics will be non-refundable, subject to applicable law.
              </p>

              <p className="legal-text">
                <strong>8.5 Additional features and new requirements:</strong>{" "}
                Any feature, functionality, module, integration, design change,
                or other requirement outside the original agreed scope will be
                treated as additional work.
              </p>

              <p className="legal-text">
                <strong>8.6 No refund in certain circumstances:</strong> No
                refund will be provided where the client cancels or terminates
                the project after handover, after the agreed design approval or
                development stage, due to non-payment or material breach,
                failure to provide required information, after approved
                additional work, or for third-party costs already paid.
              </p>

              <p className="legal-text">
                <strong>8.7 Refund processing:</strong> Approved refunds will be
                paid to the original payment method within 7–10 working days,
                after deducting applicable payment gateway fees and
                non-refundable third-party costs where applicable.
              </p>

              <p className="legal-text">
                <strong>8.8 Refund decisions and applicable law:</strong> Refund
                decisions will be communicated in writing. Nothing in this
                policy limits any rights or remedies that the client may have
                under applicable law.
              </p>
            </LegalSection>

            {/* 9 */}
            <LegalSection
              id="ip"
              number="09"
              title="Intellectual Property"
              icon={<Code2 size={21} />}
            >
              <p className="legal-text">
                Zoidics retains ownership of its pre-existing:
              </p>

              <LegalList
                items={[
                  "Source code",
                  "Frameworks",
                  "Libraries",
                  "Templates",
                  "Development methods",
                  "Tools",
                  "Components",
                  "Internal systems",
                  "Reusable technical assets",
                ]}
              />

              <p className="legal-text">
                Ownership or licence of project-specific deliverables passes to
                the client only after 100% payment is received, on the terms of
                the signed agreement. Until then, all rights remain with
                Zoidics.
              </p>

              <p className="legal-text">
                Clients must have the right or permission to provide us with any
                content, images, software, trademarks, data, or other materials
                used in their projects, and are responsible for any claims
                arising from them.
              </p>

              <p className="legal-text">
                Unless the client opts out in writing, Zoidics may show the
                finished work, excluding confidential information, in its
                portfolio and marketing.
              </p>
            </LegalSection>

            {/* 10 */}
            <LegalSection
              id="third-party"
              number="10"
              title="Third-Party Services"
            >
              <p className="legal-text">
                Projects may depend on third-party platforms, APIs, hosting
                providers, payment gateways, cloud services, software libraries,
                or other external services.
              </p>

              <p className="legal-text">
                Zoidics is not responsible for outages, policy changes, pricing
                changes, limitations, security incidents, or other issues caused
                by third-party providers.
              </p>
            </LegalSection>

            {/* 11 */}
            <LegalSection id="content" number="11" title="Website Content">
              <p className="legal-text">
                We make reasonable efforts to keep the information on our
                website accurate and current.
              </p>

              <p className="legal-text">
                Website content is provided for general informational purposes
                and may change without notice. We do not guarantee that it is
                always complete, accurate, or current.
              </p>
            </LegalSection>

            {/* 12 */}
            <LegalSection
              id="availability"
              number="12"
              title="Service Availability"
            >
              <p className="legal-text">
                We do not guarantee that the website or any particular service
                will always be available, uninterrupted, secure, or error-free.
              </p>

              <p className="legal-text">
                We may temporarily suspend or modify website functionality for
                maintenance, security, upgrades, or other operational reasons.
              </p>
            </LegalSection>

            {/* 13 */}
            <LegalSection id="disclaimer" number="13" title="Disclaimer">
              <p className="legal-text">
                To the maximum extent permitted by applicable law, the website
                and its general informational content are provided on an "as is"
                and "as available" basis.
              </p>

              <p className="legal-text">
                We do not guarantee that the website will meet every particular
                requirement or operate without interruption or errors.
              </p>
            </LegalSection>

            {/* 14 */}
            <LegalSection
              id="liability"
              number="14"
              title="Limitation of Liability"
            >
              <p className="legal-text">
                To the maximum extent permitted by applicable law, Zoidics will
                not be responsible for indirect, incidental, special,
                consequential, or other losses including loss of profit, data,
                or business arising from the use of our website or services.
              </p>

              <p className="legal-text">
                Zoidics' total liability for any claim relating to a project is
                limited to the amount actually paid by the client for that
                project.
              </p>

              <p className="legal-text">
                Specific liability and warranty terms may be set out in the
                signed project agreement.
              </p>
            </LegalSection>

            {/* 15 */}
            <LegalSection
              id="confidentiality"
              number="15"
              title="Confidentiality"
            >
              <p className="legal-text">
                Where a client provides confidential business or technical
                information for an agreed project, Zoidics will take reasonable
                measures to protect it.
              </p>

              <p className="legal-text">
                Specific obligations may be set out in the signed agreement or a
                separate confidentiality agreement.
              </p>
            </LegalSection>

            {/* 16 */}
            <LegalSection
              id="external"
              number="16"
              title="External Links"
              icon={<ExternalLink size={21} />}
            >
              <p className="legal-text">
                Our website may contain links to third-party websites.
              </p>

              <p className="legal-text">
                Zoidics does not control and is not responsible for third-party
                websites, their content, availability, security, or policies.
              </p>
            </LegalSection>

            {/* 17 */}
            <LegalSection
              id="termination"
              number="17"
              title="Termination of Website Access"
            >
              <p className="legal-text">
                We may restrict or terminate access to our website where
                reasonably necessary, including in cases of misuse, abuse,
                security risks, unlawful activity, or violation of these Terms &
                Conditions.
              </p>
            </LegalSection>

            {/* 18 */}
            <LegalSection
              id="changes"
              number="18"
              title="Changes to These Terms"
            >
              <p className="legal-text">
                We may update these Terms & Conditions from time to time.
                Changes take effect when published on this page and the "Last
                Updated" date will be changed.
              </p>

              <p className="legal-text">
                Changes do not affect a project agreement already signed, which
                continues on the terms in force at signing.
              </p>
            </LegalSection>

            {/* 19 */}
            <LegalSection
              id="law"
              number="19"
              title="Governing Law and Jurisdiction"
              icon={<Scale size={21} />}
            >
              <p className="legal-text">
                These Terms & Conditions are governed by the laws of India.
              </p>

              <p className="legal-text">
                Any dispute relating to the use of our website or services is
                subject to the exclusive jurisdiction of the courts at Chennai,
                Tamil Nadu, unless the signed project agreement states
                otherwise.
              </p>
            </LegalSection>

            {/* 20 */}
            <LegalSection
              id="contact"
              number="20"
              title="Contact Us"
              icon={<Mail size={21} />}
            >
              <div className="rounded-3xl bg-black p-6 text-white sm:p-8">
                <p className="text-xl font-bold">Zoidics Software Solutions</p>

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
            </LegalSection>
          </article>
        </div>
      </section>

      <button
        type="button"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        aria-label="Back to top"
        className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-black text-white shadow-xl transition hover:-translate-y-1"
      >
        <ArrowUp size={19} />
      </button>
    </main>
    </>
  );
};

function LegalSection({
  id,
  number,
  title,
  icon,
  children,
}: {
  id: string;
  number: string;
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="legal-section">
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

      {children}
    </section>
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

function NumberedList({ items }: { items: React.ReactNode[] }) {
  return (
    <div className="my-6 space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="rounded-2xl border border-black/5 bg-[#fafafa] p-5 text-base leading-7 text-black/70"
        >
          {item}
        </div>
      ))}
    </div>
  );
}

export default TermsAndConditions;
