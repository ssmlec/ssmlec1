import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { CourseCard } from "@/components/course-card";
import { Reveal } from "@/components/reveal";
import { Seo } from "@/components/seo";
import { categoryMeta, coursesByCategory, type CourseCategory } from "@/lib/site-data";

const categories = Object.keys(categoryMeta) as CourseCategory[];

export default function CoursesPage() {
  return (
    <>
      <Seo
        meta={[
          { title: "Courses — Industrial Automation, AI Software & CAD Design | SSMLEC" },
          {
            name: "description",
            content:
              "Explore SSMLEC's career-focused courses across Industrial Automation, AI-integrated Software Technologies and CAD Design. Hands-on labs and placement support included.",
          },
          { property: "og:title", content: "SSMLEC Courses" },
          { property: "og:description", content: "Industrial Automation, AI Software & CAD Design programs." },
          { property: "og:url", content: "/courses" },
        ]}
        links={[{ rel: "canonical", href: "/courses" }]}
      />
      <PageHero
        eyebrow="Our Programs"
        title="Courses built for real careers"
        subtitle="Three specialized tracks — Industrial Automation, AI Software Technologies and CAD Design — each with hands-on labs, expert mentorship and dedicated placement support."
        crumbs={[{ label: "Courses" }]}
      />

      {categories.map((cat) => {
        const meta = categoryMeta[cat];
        const Icon = meta.icon;
        const list = coursesByCategory(cat);
        return (
          <section key={cat} id={cat} className="scroll-mt-24 py-16 sm:py-20 odd:bg-gradient-soft">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-gradient-brand text-white shadow-accent">
                  <Icon className="size-7" />
                </span>
                <div>
                  <SectionHeading align="left" title={meta.label} subtitle={meta.blurb} className="max-w-none" />
                </div>
              </div>
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {list.map((c, i) => (
                  <Reveal key={c.slug} delay={i * 0.05}>
                    <CourseCard course={c} />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
