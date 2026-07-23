import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Seo } from "@/components/seo";
 import {Link} from "react-router-dom";
import im from "../assets/about-lab.jpg"

import corporateImg from "../assets/hero-bg.jpg";
import studentImg from "../assets/home-about-1.png";
import eventImg from "../assets/home-2nd-photo.jpg";


const captions = [
  {
    title: "Corporate Training",
    image: corporateImg,
    link: "/gallery/corporate-training",
  },
  {
    title: "Students Training",
    image: studentImg,
    link: "/gallery/students-training",
  },
  {
    title: "Events",
    image: eventImg,
    link: "/gallery/events",
  },
];
export default function GalleryPage() {
  return (
    <>
      <Seo
        meta={[
          { title: "SSM Learning Excellence Centre" },
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

      <PageHero title="Gallery" subtitle="A glimpse into our labs, classrooms, events and the technocrats we shape every day." crumbs={[{ label: "Gallery" }]} />
      <section className="py-16 sm:py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* <SectionHeading eyebrow="Moments" title="Explore our campus & events" /> */}
         

          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-3">
            {captions.map((item, i) => (
              <Reveal key={item.title} delay={(i % 4) * 0.05}>
                <Link to={item.link}>
                  <div className="card-hover group relative aspect-square overflow-hidden rounded-2xl border shadow-soft cursor-pointer">

                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />

                    <div className="absolute inset-0 flex items-end p-4">
                      <p className="font-display text-xl font-bold text-white">
                        {item.title}
                      </p>
                    </div>

                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
