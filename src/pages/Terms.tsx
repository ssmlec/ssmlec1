import { PageHero } from "@/components/page-hero";
import { Seo } from "@/components/seo";

const sections = [
  { h: "Acceptance of Terms", p: "By accessing and using the SSMLEC website, you agree to be bound by these terms and conditions and all applicable laws and regulations." },
  { h: "Use of Website", p: "You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of, or restrict the use of, this website by any third party." },
  { h: "Course Enrollment", p: "Enrollment in any program is subject to eligibility, availability and payment of applicable fees. Course details, schedules and fees may change at the institute's discretion." },
  { h: "Intellectual Property", p: "All content on this website — including text, graphics, logos and course material — is the property of SSMLEC and protected by applicable intellectual property laws." },
  { h: "Placement Support", p: "SSMLEC provides placement assistance and training support. While we make every effort to help learners, placement is not guaranteed and depends on individual performance and market conditions." },
  { h: "Limitation of Liability", p: "SSMLEC shall not be liable for any indirect, incidental or consequential damages arising from the use of this website or our services." },
  { h: "Governing Law", p: "These terms are governed by and construed in accordance with the laws of India, and any disputes shall be subject to the jurisdiction of the courts of Pune, Maharashtra." },
];

export default function TermsPage() {
  return (
    <>
      <Seo
        meta={[
          { title: "Terms & Conditions | SSMLEC" },
          {
            name: "description",
            content:
              "Read the terms and conditions governing the use of the SSM Learning Excellence Centre website and services.",
          },
          { property: "og:url", content: "/terms" },
        ]}
        links={[{ rel: "canonical", href: "/terms" }]}
      />
      <PageHero eyebrow="Legal" title="Terms & Conditions" subtitle="Please read these terms carefully before using our website and services." crumbs={[{ label: "Terms & Conditions" }]} />
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
