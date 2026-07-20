import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Seo } from "@/components/seo";

const captions = [
  "Automation Lab", "Live PLC Training", "AI & Software Lab", "CAD Design Studio",
  "Guest Lecture", "Placement Drive", "Hands-on Workshop", "Team Project",
  "Robotics Session", "Seminar Hall", "Student Achievements", "Campus Life",
];

export default function GalleryPage() {
  return (
    <>
      <Seo
        meta={[
          { title: "Gallery — Campus, Labs & Student Life | SSMLEC" },
          {
            name: "description",
            content:
              "Explore the SSMLEC gallery — modern labs, hands-on training, events and student life at our Learning Excellence Centre.",
          },
          { property: "og:title", content: "SSMLEC Gallery" },
          { property: "og:url", content: "/gallery" },
        ]}
        links={[{ rel: "canonical", href: "/gallery" }]}
      />
      <PageHero eyebrow="Gallery" title="Life at SSMLEC" subtitle="A glimpse into our labs, classrooms, events and the technocrats we shape every day." crumbs={[{ label: "Gallery" }]} />
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Moments" title="Explore our campus & events" />
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {captions.map((c, i) => (
              <Reveal key={c} delay={(i % 4) * 0.05}>
                <div className="card-hover group relative aspect-square overflow-hidden rounded-2xl border shadow-soft">
                  <div className={`h-full w-full bg-gradient-brand ${i % 3 === 1 ? "opacity-80" : i % 3 === 2 ? "opacity-90" : ""}`} style={{ filter: `hue-rotate(${(i * 24) % 360}deg)` }} />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-4">
                    <p className="font-display font-bold text-white">{c}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
