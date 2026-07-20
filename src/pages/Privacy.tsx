import { PageHero } from "@/components/page-hero";
import { Seo } from "@/components/seo";

const sections = [
  { h: "Information We Collect", p: "We collect information you provide through enquiry forms — such as your name, mobile number, email, course of interest, qualification and city — to respond to your requests and share relevant program details." },
  { h: "How We Use Your Information", p: "Your information is used solely to provide course details, admissions guidance, placement support and important updates. We do not sell your personal data to third parties." },
  { h: "Data Security", p: "We implement reasonable technical and organizational measures to protect your personal information against unauthorized access, alteration or disclosure." },
  { h: "Cookies", p: "Our website may use cookies to enhance your browsing experience and analyze traffic. You can control cookies through your browser settings." },
  { h: "Third-Party Links", p: "Our website may contain links to external sites. We are not responsible for the privacy practices or content of those websites." },
  { h: "Your Rights", p: "You may request access to, correction of, or deletion of your personal data at any time by contacting us at info@ssmlec.com." },
  { h: "Updates to This Policy", p: "We may update this privacy policy periodically. Changes will be posted on this page with a revised effective date." },
];

export default function PrivacyPage() {
  return (
    <>
      <Seo
        meta={[
          { title: "Privacy Policy | SSMLEC" },
          {
            name: "description",
            content:
              "Read the SSM Learning Excellence Centre privacy policy on how we collect, use and protect your information.",
          },
          { property: "og:url", content: "/privacy" },
        ]}
        links={[{ rel: "canonical", href: "/privacy" }]}
      />
      <PageHero eyebrow="Legal" title="Privacy Policy" subtitle="Your privacy matters to us. Here's how we handle your information." crumbs={[{ label: "Privacy Policy" }]} />
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl space-y-8 px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-muted-foreground">Last updated: June 2026</p>
          {sections.map((s) => (
            <div key={s.h}>
              <h2 className="font-display text-xl font-bold">{s.h}</h2>
              <p className="mt-2 text-muted-foreground">{s.p}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
