import { Phone, Mail, MapPin } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { EnquiryForm } from "@/components/enquiry-form";
import { Seo } from "@/components/seo";
import { contactInfo } from "@/lib/site-data";
import { FaqSection } from "./Home.tsx";

export default function ContactPage() {
  const items = [
    { icon: Phone, label: "Call Us", value: contactInfo.phone, href: `tel:${contactInfo.phone}` },
    { icon: Mail, label: "Email Us", value: contactInfo.email, href: `mailto:${contactInfo.email}` },
    { icon: MapPin, label: "Visit Us", value: contactInfo.address },
  ];
  return (
    <>
      <Seo
        meta={[
          { title: "Contact SSMLEC — Enquire About Courses & Admissions" },
          {
            name: "description",
            content:
              "Contact SSM Learning Excellence Centre for course details, admissions and placement support. Call, email or send an enquiry.",
          },
          { property: "og:title", content: "Contact SSMLEC" },
          { property: "og:url", content: "/contact" },
        ]}
        links={[{ rel: "canonical", href: "/contact" }]}
      />
      <PageHero eyebrow="Contact" title="Let's start your journey" subtitle="Have a question about a program, admissions or placements? We're here to help." crumbs={[{ label: "Contact" }]} />
      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:px-8">
          <div className="space-y-4">
            {items.map((it) => {
              const Icon = it.icon;
              const inner = (
                <div className="card-hover flex items-start gap-4 rounded-2xl border bg-card p-6 shadow-soft">
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-gradient-brand text-white"><Icon className="size-6" /></span>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground">{it.label}</p>
                    <p className="font-medium">{it.value}</p>
                  </div>
                </div>
              );
              return it.href ? <a key={it.label} href={it.href}>{inner}</a> : <div key={it.label}>{inner}</div>;
            })}
            <div className="overflow-hidden rounded-2xl border shadow-soft">
              <iframe
                title="SSMLEC location map"
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${encodeURIComponent(contactInfo.mapQuery)}&output=embed`}
              />
            </div>
          </div>
          <div className="rounded-2xl border bg-card p-6 shadow-glow sm:p-8">
            <h2 className="text-xl font-bold">Send an Enquiry</h2>
            <p className="mt-1 text-sm text-muted-foreground">Fill the form and our team will reach out shortly.</p>
            <div className="mt-6"><EnquiryForm /></div>
          </div>
        </div>
        <FaqSection/>
      </section>
    </>
  );
}
