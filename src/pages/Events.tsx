import { MapPin, CalendarDays } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { EnquiryDialog } from "@/components/enquiry-dialog";
import { Button } from "@/components/ui/button";
import { Seo } from "@/components/seo";
import { events } from "@/lib/site-data";

export default function EventsPage() {
  return (
    <>
      <Seo
        meta={[
          { title: "Events — Bootcamps, Webinars & Placement Drives | SSMLEC" },
          {
            name: "description",
            content:
              "Join upcoming SSMLEC events — bootcamps, webinars, placement drives and open house sessions on automation, AI and more.",
          },
          { property: "og:title", content: "SSMLEC Events" },
          { property: "og:url", content: "/events" },
        ]}
        links={[{ rel: "canonical", href: "/events" }]}
      />
      <PageHero eyebrow="Events" title="Upcoming events & workshops" subtitle="Bootcamps, webinars, placement drives and open house sessions to accelerate your career." crumbs={[{ label: "Events" }]} />
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="What's Next" title="Reserve your spot" />
          <div className="mt-12 space-y-5">
            {events.map((e, i) => {
              const d = new Date(e.date);
              return (
                <Reveal key={e.title} delay={i * 0.05}>
                  <div className="card-hover flex flex-col gap-4 rounded-2xl border bg-card p-6 shadow-soft sm:flex-row sm:items-center">
                    <div className="grid w-20 shrink-0 place-items-center rounded-xl bg-gradient-brand py-3 text-white">
                      <span className="font-display text-2xl font-extrabold">{d.getDate()}</span>
                      <span className="text-xs uppercase">{d.toLocaleString("en", { month: "short" })}</span>
                    </div>
                    <div className="flex-1">
                      <Badge variant="secondary" className="mb-2">{e.type}</Badge>
                      <h2 className="font-display text-lg font-bold">{e.title}</h2>
                      <p className="mt-1 text-sm text-muted-foreground">{e.desc}</p>
                      <div className="mt-2 flex flex-wrap gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1"><CalendarDays className="size-3.5" /> {d.toLocaleDateString("en", { day: "numeric", month: "long", year: "numeric" })}</span>
                        <span className="flex items-center gap-1"><MapPin className="size-3.5" /> {e.location}</span>
                      </div>
                    </div>
                    <EnquiryDialog title={`Register: ${e.title}`} defaultCourse={e.title}>
                      <Button variant="accent">Register</Button>
                    </EnquiryDialog>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
