import { Link } from "react-router-dom";
import { CalendarDays, ArrowRight } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { Seo } from "@/components/seo";
import { blogPosts } from "@/lib/site-data";

export default function BlogPage() {
  return (
    <>
      <Seo
        meta={[
          { title: "Blog — Insights on Automation, AI & Careers | SSMLEC" },
          {
            name: "description",
            content:
              "Read the SSMLEC blog for insights on Industry 4.0, AI, data analytics, CAD design and building a future-ready career.",
          },
          { property: "og:title", content: "SSMLEC Blog" },
          { property: "og:url", content: "/blog" },
        ]}
        links={[{ rel: "canonical", href: "/blog" }]}
      />
      <PageHero eyebrow="Blog" title="Insights & career guides" subtitle="Expert perspectives on automation, AI, data and the skills shaping tomorrow's workforce." crumbs={[{ label: "Blog" }]} />
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Latest Articles" title="From the SSMLEC desk" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 0.06}>
                <article className="card-hover flex h-full flex-col overflow-hidden rounded-2xl border bg-card shadow-soft">
                  <div className="h-40 bg-gradient-brand" style={{ filter: `hue-rotate(${i * 40}deg)` }} />
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-3 flex items-center gap-3">
                      <Badge variant="secondary">{p.category}</Badge>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground"><CalendarDays className="size-3.5" /> {p.read}</span>
                    </div>
                    <h2 className="font-display text-lg font-bold leading-snug">{p.title}</h2>
                    <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.excerpt}</p>
                    <Link to="/blog" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                      Read more <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
