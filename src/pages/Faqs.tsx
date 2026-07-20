import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { EnquiryDialog } from "@/components/enquiry-dialog";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Seo } from "@/components/seo";
import { generalFaqs } from "@/lib/site-data";

export default function FaqsPage() {
  return (
    <>
      <Seo
        meta={[
          { title: "FAQs — Courses, Admissions & Placements | SSMLEC" },
          {
            name: "description",
            content: "Frequently asked questions about SSMLEC courses, admissions, certifications and placement support.",
          },
          { property: "og:title", content: "SSMLEC FAQs" },
          { property: "og:url", content: "/faqs" },
        ]}
        links={[{ rel: "canonical", href: "/faqs" }]}
        scripts={[
          {
            type: "application/ld+json",
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: generalFaqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          },
        ]}
      />
      <PageHero eyebrow="Help Center" title="Frequently asked questions" subtitle="Everything you need to know about our programs, admissions and placement support." crumbs={[{ label: "FAQs" }]} />
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Got Questions?" title="We've got answers" />
          <Accordion type="single" collapsible className="mt-10">
            {generalFaqs.map((f, i) => (
              <AccordionItem key={i} value={`f-${i}`} className="mb-3 rounded-xl border bg-card px-5 shadow-soft">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-10 flex flex-col items-center gap-4 rounded-2xl bg-gradient-hero p-8 text-center text-white shadow-glow">
            <h2 className="font-display text-xl font-bold">Still have questions?</h2>
            <p className="text-sm text-white/80">Our counselors are happy to help you choose the right path.</p>
            <EnquiryDialog title="Ask a question">
              <Button variant="accent">Contact Us</Button>
            </EnquiryDialog>
          </div>
        </div>
      </section>
    </>
  );
}
