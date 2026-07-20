import { Link, useParams } from "react-router-dom";
import {
  Clock,
  GraduationCap,
  Signal,
  Monitor,
  Download,
  ArrowRight,
  CheckCircle2,
  Briefcase,
  Wrench,
  Target,
  Rocket,
} from "lucide-react";
import { toast } from "sonner";

import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { EnquiryForm } from "@/components/enquiry-form";
import { EnquiryDialog } from "@/components/enquiry-dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Seo } from "@/components/seo";
import { categoryMeta, courses, getCourse } from "@/lib/site-data";

function CourseNotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-4 text-center">
      <h1 className="text-2xl font-bold">Course not found</h1>
      <Button asChild variant="hero">
        <Link to="/courses">Browse all courses</Link>
      </Button>
    </div>
  );
}

export default function CourseDetail() {
  const { slug } = useParams<{ slug: string }>();
  const course = getCourse(slug ?? "");

  if (!course) {
    return <CourseNotFound />;
  }

  const Icon = course.icon;
  const cat = categoryMeta[course.category];
  const related = courses.filter((c) => c.category === course.category && c.slug !== course.slug).slice(0, 3);

  const facts = [
    { icon: Clock, label: "Duration", value: course.duration },
    { icon: Signal, label: "Level", value: course.level },
    { icon: Monitor, label: "Mode", value: course.mode },
    { icon: GraduationCap, label: "Eligibility", value: course.eligibility },
  ];

  return (
    <>
      <Seo
        meta={[
          { title: `${course.title} | SSMLEC` },
          { name: "description", content: course.description },
          { property: "og:title", content: `${course.title} | SSMLEC` },
          { property: "og:description", content: course.description },
          { property: "og:type", content: "article" },
          { property: "og:url", content: `/courses/${course.slug}` },
        ]}
        links={[{ rel: "canonical", href: `/courses/${course.slug}` }]}
        scripts={[
          {
            type: "application/ld+json",
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Course",
              name: course.title,
              description: course.description,
              provider: {
                "@type": "EducationalOrganization",
                name: "SSM Learning Excellence Centre",
              },
            }),
          },
        ]}
      />
      <PageHero
        eyebrow={cat.label}
        title={course.title}
        subtitle={course.tagline}
        crumbs={[
          { label: "Courses", to: "/courses" },
          { label: course.title },
        ]}
      >
        <div className="flex flex-wrap gap-3">
          <EnquiryDialog defaultCourse={course.title} title={`Enquire: ${course.title}`}>
            <Button variant="accent" size="lg">Enquire Now <ArrowRight className="size-4" /></Button>
          </EnquiryDialog>
          {/* <Button
            variant="outline-light"
            size="lg"
            onClick={() => toast.success("Brochure request received", { description: `We'll email the ${course.title} brochure shortly.` })}
          >
            <Download className="size-4" /> Download Brochure
          </Button> */}
        </div>
      </PageHero>

      {/* Quick facts */}
      <section className="border-b bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          {facts.map((f) => {
            const FIcon = f.icon;
            return (
              <div key={f.label} className="flex items-start gap-3 py-6 pr-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-secondary text-accent">
                  <FIcon className="size-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{f.label}</p>
                  <p className="text-sm font-medium">{f.value}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.6fr_1fr] lg:px-8">
        <div className="space-y-14">
          {/* Overview */}
          <section>
            <div className="mb-5 flex items-center gap-3">
              <span className="grid size-12 place-items-center rounded-xl bg-gradient-brand text-white"><Icon className="size-6" /></span>
              <h2 className="text-2xl font-bold">Overview</h2>
            </div>
            <p className="text-muted-foreground">{course.description}</p>
          </section>

          {/* Curriculum timeline */}
          <section>
            <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
              <Target className="size-6 text-accent" /> Curriculum Timeline
            </h2>
            <ol className="relative space-y-6 border-l-2 border-dashed border-border pl-8">
              {course.curriculum.map((m, i) => (
                <Reveal key={m.title} delay={i * 0.05}>
                  <li className="relative">
                    <span className="absolute -left-[41px] grid size-7 place-items-center rounded-full bg-gradient-brand text-xs font-bold text-white">
                      {i + 1}
                    </span>
                    <div className="rounded-xl border bg-card p-4 shadow-soft">
                      <h3 className="font-bold">{m.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{m.detail}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </section>

          {/* Technologies / Software */}
          <section>
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
              <Wrench className="size-6 text-accent" /> {course.category === "designing" ? "Software Covered" : "Technologies Covered"}
            </h2>
            <div className="flex flex-wrap gap-2">
              {(course.software ?? course.technologies).map((t) => (
                <Badge key={t} variant="secondary" className="px-3 py-1.5 text-sm">{t}</Badge>
              ))}
            </div>
          </section>

          {/* Practical projects (if any) */}
          {course.projects && (
            <section>
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
                <Rocket className="size-6 text-accent" /> Practical Projects
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {course.projects.map((p) => (
                  <div key={p} className="flex items-center gap-2 rounded-xl border bg-card p-4 text-sm shadow-soft">
                    <CheckCircle2 className="size-5 shrink-0 text-accent" /> {p}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Skills & Outcomes */}
          <section className="grid gap-8 sm:grid-cols-2">
            <div>
              <h2 className="mb-4 text-xl font-bold">Skills You'll Gain</h2>
              <ul className="space-y-2">
                {course.skills.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="size-4 shrink-0 text-accent" /> {s}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-xl font-bold">Learning Outcomes</h2>
              <ul className="space-y-2">
                {course.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" /> {o}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Career path */}
          <section>
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
              <Briefcase className="size-6 text-accent" /> Career Path & Opportunities
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {course.careers.map((c) => (
                <div key={c} className="rounded-xl border bg-gradient-soft p-4 font-medium shadow-soft">{c}</div>
              ))}
            </div>
          </section>

          {/* Placement support */}
          <section className="rounded-2xl bg-gradient-hero p-8 text-white shadow-glow">
            <h2 className="text-2xl font-bold">Placement Support</h2>
            <p className="mt-3 max-w-xl text-white/80">
              Get end-to-end placement assistance — resume building, portfolio guidance, mock interviews
              and direct referrals to our 250+ hiring partners.
            </p>
            <Button asChild variant="accent" className="mt-6">
              <Link to="/placements">View Placement Dashboard <ArrowRight className="size-4" /></Link>
            </Button>
          </section>

          {/* FAQs */}
          <section>
            <h2 className="mb-4 text-2xl font-bold">FAQs</h2>
            <Accordion type="single" collapsible>
              {course.faqs.map((f, i) => (
                <AccordionItem key={i} value={`f-${i}`} className="mb-3 rounded-xl border bg-card px-5 shadow-soft">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </div>

        {/* Sticky enquiry sidebar */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl border bg-card p-6 shadow-glow">
            <h2 className="text-xl font-bold">Enquiry Form</h2>
            <p className="mt-1 text-sm text-muted-foreground">Get details, fees and next batch dates.</p>
            <div className="mt-5">
              <EnquiryForm compact defaultCourse={course.title} />
            </div>
          </div>
        </aside>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-gradient-soft py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading align="left" eyebrow="Related Programs" title={`More in ${cat.label}`} />
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {related.map((c) => (
                <Link
                  key={c.slug}
                  to={`/courses/${c.slug}`}
                  className="card-hover flex items-center gap-3 rounded-2xl border bg-card p-5 shadow-soft"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-gradient-brand text-white">
                    <c.icon className="size-5" />
                  </span>
                  <div>
                    <p className="font-semibold leading-snug">{c.title}</p>
                    <p className="text-xs text-muted-foreground">{c.duration}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
