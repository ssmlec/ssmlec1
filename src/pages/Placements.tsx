import { Building2, TrendingUp, Award, Users, FileText, UserCheck, Target, Handshake } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Counter } from "@/components/counter";
import { PartnerMarquee } from "@/components/partner-marquee";
import { EnquiryDialog } from "@/components/enquiry-dialog";
import { Button } from "@/components/ui/button";
import { Seo } from "@/components/seo";
import { partners, testimonials } from "@/lib/site-data";

const salaryPackages = [
  { role: "Automation Engineer", package: "₹4 – 9 LPA" },
  { role: "AI / Full Stack Developer", package: "₹5 – 12 LPA" },
  { role: "Data Analyst / Scientist", package: "₹4 – 18 LPA" },
];

const dashStats = [
  { icon: TrendingUp, value: 92, suffix: "%", label: "Placement Rate" },
  { icon: Building2, value: 250, suffix: "+", label: "Hiring Partners" },
  { icon: Award, value: 18, prefix: "₹", suffix: " LPA", label: "Highest Package" },
  { icon: Users, value: 12000, suffix: "+", label: "Learners Placed" },
];

const process = [
  { icon: FileText, title: "Profile Building", desc: "Resume, LinkedIn and portfolio optimization with mentors." },
  { icon: Target, title: "Skill Readiness", desc: "Aptitude, technical and domain assessments." },
  { icon: UserCheck, title: "Mock Interviews", desc: "HR + technical mock rounds with real feedback." },
  { icon: Handshake, title: "Company Drives", desc: "Direct referrals and on-campus/virtual drives." },
];

export default function PlacementsPage() {
  return (
    <>
      <Seo
        meta={[
          { title: "Placements — Hiring Partners, Packages & Success Stories | SSMLEC" },
          {
            name: "description",
            content:
              "SSMLEC placement dashboard — 250+ hiring companies, salary packages up to ₹18 LPA, 92% placement rate and dedicated career support.",
          },
          { property: "og:title", content: "SSMLEC Placements" },
          { property: "og:description", content: "250+ hiring partners and strong placement outcomes." },
          { property: "og:url", content: "/placements" },
        ]}
        links={[{ rel: "canonical", href: "/placements" }]}
      />
      <PageHero
        eyebrow="Placements"
        title="Your career, our commitment"
        subtitle="A premium placement ecosystem connecting our technocrats with 250+ leading companies across automation, IT and manufacturing."
        crumbs={[{ label: "Placements" }]}
      >
        <EnquiryDialog title="Talk to our placement team">
          <Button variant="accent" size="lg">Talk to Placement Cell</Button>
        </EnquiryDialog>
      </PageHero>

      {/* Dashboard counters */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {dashStats.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.label} delay={i * 0.06}>
                  <div className="card-hover rounded-2xl border bg-card p-7 text-center shadow-soft">
                    <span className="mx-auto grid size-12 place-items-center rounded-xl bg-gradient-brand text-white shadow-accent">
                      <Icon className="size-6" />
                    </span>
                    <p className="mt-4 font-display text-4xl font-extrabold text-gradient">
                      <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
                    </p>
                    <p className="text-sm text-muted-foreground">{s.label}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Salary packages */}
      <section className="bg-gradient-soft py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Salary Packages" title="Where our learners land" />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {salaryPackages.map((p, i) => (
              <Reveal key={p.role} delay={i * 0.06}>
                <div className="card-hover rounded-2xl border bg-card p-7 shadow-soft">
                  <p className="text-sm text-muted-foreground">{p.role}</p>
                  <p className="mt-2 font-display text-3xl font-extrabold text-gradient">{p.package}</p>
                  <p className="mt-1 text-xs text-muted-foreground">Average CTC range</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring companies */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Hiring Companies" title="Trusted by 250+ recruiters" subtitle="Our alumni work at leading national and multinational companies." />
        </div>
        <div className="mt-12 space-y-4">
          <PartnerMarquee partners={partners} />
          <PartnerMarquee partners={[...partners].reverse()} reverse />
        </div>
      </section>

      {/* Placement process */}
      <section className="bg-gradient-soft py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Placement Process" title="A structured path to your dream job" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.title} delay={i * 0.06}>
                  <div className="card-hover relative h-full rounded-2xl border bg-card p-6 shadow-soft">
                    <span className="font-display text-5xl font-extrabold text-secondary">{i + 1}</span>
                    <Icon className="absolute right-6 top-6 size-6 text-accent" />
                    <h3 className="mt-2 font-bold">{p.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Alumni testimonials */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Success Stories" title="Hear from our alumni" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.06}>
                <figure className="card-hover flex h-full flex-col rounded-2xl border bg-card p-7 shadow-soft">
                  <blockquote className="flex-1 text-sm text-muted-foreground">"{t.quote}"</blockquote>
                  <figcaption className="mt-5 flex items-center gap-3">
                    <span className="grid size-11 place-items-center rounded-full bg-gradient-brand font-bold text-white">
                      {t.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                    </span>
                    <div>
                      <p className="font-semibold">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
