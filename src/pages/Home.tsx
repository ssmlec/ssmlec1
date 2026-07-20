import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  Star,
  Quote,
  CheckCircle2,
  Sparkles,
  Building2,
  TrendingUp,
  Users,
  Award,
} from "lucide-react";

import heroBg from "@/assets/Background2.png";
import aboutLab from "@/assets/heroimg.png";
import aboutLab1 from "@/assets/home-about-1.png";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Reveal } from "@/components/reveal";
import { Counter } from "@/components/counter";
import { SectionHeading } from "@/components/section-heading";
import { CourseCard } from "@/components/course-card";
import { PartnerMarquee } from "@/components/partner-marquee";
import { EnquiryDialog } from "@/components/enquiry-dialog";
import { EnquiryForm } from "@/components/enquiry-form";
import { Seo } from "@/components/seo";
import {
  categoryMeta,
  courses,
  coursesByCategory,
  featuredCourseSlugs,
  getCourse,
  stats,
  whyChoose,
  testimonials,
  successStories,
  blogPosts,
  generalFaqs,
  videoTestimonials,
  type CourseCategory,
} from "@/lib/site-data";

const categories = Object.keys(categoryMeta) as CourseCategory[];
const featured = featuredCourseSlugs.map(getCourse).filter(Boolean);


export default function Home() {
  return (
    <>
      <Seo
        meta={[
          { title: "SSMLEC — Automation, AI & Industry 4.0 Training | Learning Excellence Centre" },
          {
            name: "description",
            content:
              "Craft your inner technocrat with SSMLEC. Premium Industrial Automation, AI Software and CAD Design programs with hands-on labs, expert mentors and 250+ hiring partners.",
          },
          { property: "og:title", content: "SSMLEC — Learning Excellence Centre" },
          {
            property: "og:description",
            content: "Industry 4.0, Automation & AI training with dedicated placement support.",
          },
        ]}
      />
      <Hero />
      <PartnersStrip />
      <About />
      <WhyChoose />
      {/* <StatsBand /> */}
      {/* <FeaturedCourses /> */}
      {/* <PlacementHighlights /> */}
      {/* <SuccessStories /> */}
      {/* <Testimonials /> */}
      {/* <VideoTestimonials /> */}
      {/* <GalleryPreview /> */}
      {/* <FaqSection /> */}
      {/* <BlogPreview /> */}
      {/* <ContactCta /> */}
    </>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden pt-28 text-white">
      <img
        src={heroBg}
        alt=""
        width={1920}
        height={1280}
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-24 size-64 animate-float rounded-full bg-accent/25 blur-3xl" />
        <div className="absolute bottom-16 right-[10%] size-72 animate-float-slow rounded-full bg-primary/40 blur-3xl" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-md">
            <Sparkles className="size-4 text-accent" />
            AVEVA Authorized Training Partner
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
            Craft your inner{" "}
            <span className="bg-gradient-to-r from-accent to-[oklch(0.72_0.18_35)] bg-clip-text text-transparent">
              technocrat
            </span>{" "}
            & shape your future
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/75">
            An industry-centered Learning Excellence Centre for Automation, AI and Industry 4.0.
            Learn from experts, build real projects and launch a career at leading companies.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="accent" size="xl">
              <Link to="/courses">
                Explore Courses <ArrowRight className="size-5" />
              </Link>
            </Button>
            <EnquiryDialog>
              <Button variant="outline-light" size="xl">
                <Play className="size-4" /> Book Free Counseling
              </Button>
            </EnquiryDialog>
          </div>
          <div className="mt-10 flex flex-wrap gap-8">
            {stats.slice(0, 3).map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl font-extrabold">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="text-sm text-white/60">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:block"
        >
          <div className="glass overflow-hidden rounded-3xl p-2">
            <img
              src={aboutLab}
              alt="Students training on industrial automation equipment at SSMLEC"
              width={1280}
              height={960}
              className="h-[420px] w-full rounded-2xl object-cover"
            />
          </div>
          <motion.div
            className="glass absolute -bottom-6 -left-6 flex items-center gap-3 rounded-2xl p-4"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            {/* <span className="grid size-11 place-items-center rounded-xl bg-gradient-brand text-white">
              <Award className="size-5" />
            </span> */}
            {/* <div>
              <p className="font-display text-xl font-bold text-white">95%</p>
              <p className="text-xs text-white/70">Placement Rate</p>
            </div> */}
          </motion.div>
          <motion.div
            className="glass absolute -right-4 top-8 flex items-center gap-3 rounded-2xl p-4"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            <span className="grid size-11 place-items-center rounded-xl bg-accent text-white">
              <Users className="size-5" />
            </span>
            <div>
              <p className="font-display text-xl font-bold text-[#343968]">800+</p>
              <p className="text-xs text-[#343968]">Learners</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function PartnersStrip() {
  return (
    <section className=" bg-muted/40 py-8">
      <p className="mb-5 text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground">
        Empowering Leading Organizations Through Training
      </p>
      <PartnerMarquee />
    </section>
  );
}

const aboutPoints = [
  "Industry-based skill development & enhancement",
  "Hands-on live projects to become job-ready",
  "Direct training from industry experts",
  "Gateway to domestic & multinational companies",
];

function About() {
  return (
   <section className="py-20 sm:py-8" style={{padding:"30px 200px 30px 200px"}}>
  <div className="mx-auto grid max-w-8xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">

    {/* Left Image */}
    <Reveal className="relative">
      <img
        src={aboutLab1}
        alt="SSMLEC industrial automation training lab"
        loading="lazy"
        className="h-[450px] w-full rounded-3xl object-cover shadow-glow"
      />

      {/* Floating Badge */}
      <div className="absolute bottom-6 right-6 rounded-2xl bg-gradient-brand px-6 py-4 text-white shadow-accent">
        <p className="font-display text-3xl font-extrabold">3.5+</p>
        <p className="text-sm text-white/80">Years of Excellence</p>
      </div>
    </Reveal>

    {/* Right Content */}
    <div className="flex flex-col justify-center">
      <SectionHeading
        align="left"
        title="An industry-centered gateway to Industry 4.0 careers"
        subtitle="The Learning Excellence Centre helps aspiring technocrats deepen their skills in software, automation and IT, and launch professional careers at leading national and international companies."
      />

      <ul className="mt-8 grid gap-3 sm:grid-cols-2">
        {aboutPoints.map((p, i) => (
          <Reveal key={p} delay={i * 0.08}>
            <li className="flex items-start gap-2 rounded-xl border bg-card p-3 text-sm shadow-soft">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <span>{p}</span>
            </li>
          </Reveal>
        ))}
      </ul>

      <div className="mt-8">
        <Button asChild variant="hero" size="lg">
          <Link to="/about">
            Learn More About Us
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>

  </div>
</section>
  );
}

function WhyChoose() {
  return (
    <section className="bg-gradient-soft py-20 sm:py-8">
      <center>
      <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
            {/* Craft your inner{" "} */}
            <span className="bg-gradient-to-r from-accent to-[oklch(0.72_0.18_35)] bg-clip-text text-transparent">
              Why Choose Us
            </span>{" "}
            {/* & shape your future */}
          </h1>

          </center>
           <center>
      <div className="text-center">
 <div className="text-center">
  <h2 className="mt-6 text-2xl font-bold leading-tight text-black sm:text-3xl lg:text-4xl">
    Everything you need to become job-ready
  </h2>
</div>
</div>
          
          </center>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          // eyebrow=""
          // title="Everything you need to become job-ready"
          subtitle="A premium learning experience engineered around real industry outcomes."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={i * 0.06}>
                <div className="card-hover group h-full rounded-2xl border bg-card p-6 shadow-soft">
                  <span className="grid size-12 place-items-center rounded-xl bg-gradient-brand text-white shadow-accent transition-transform group-hover:scale-110">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function StatsBand() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-16 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.12),transparent_60%)]" />
      <div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} className="text-center">
            <p className="font-display text-4xl font-extrabold sm:text-5xl">
              <Counter value={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-2 text-sm text-white/70">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function FeaturedCourses() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Featured Courses"
          title="Explore our career-focused programs"
          subtitle="Choose from Industrial Automation, AI Software Technologies and CAD Design tracks."
        />

        <Tabs defaultValue="all" className="mt-12">
          <TabsList className="mx-auto flex h-auto max-w-2xl flex-wrap justify-center gap-1 rounded-full bg-secondary p-1.5">
            <TabsTrigger value="all" className="rounded-full px-4 py-2 text-sm data-[state=active]:bg-gradient-brand data-[state=active]:text-white">
              All
            </TabsTrigger>
            {categories.map((cat) => (
              <TabsTrigger
                key={cat}
                value={cat}
                className="rounded-full px-4 py-2 text-sm data-[state=active]:bg-gradient-brand data-[state=active]:text-white"
              >
                {categoryMeta[cat].label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="all" className="mt-10">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featured.map((c) => (
                <CourseCard key={c!.slug} course={c!} />
              ))}
            </div>
          </TabsContent>
          {categories.map((cat) => (
            <TabsContent key={cat} value={cat} className="mt-10">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {coursesByCategory(cat).map((c) => (
                  <CourseCard key={c.slug} course={c} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-12 text-center">
          <Button asChild variant="hero" size="lg">
            <Link to="/courses">
              View All {courses.length} Courses <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function PlacementHighlights() {
  const items = [
    { icon: Building2, label: "250+ Hiring Partners", value: "Accenture, TCS, Infosys, Siemens & more" },
    { icon: TrendingUp, label: "18 LPA Highest Package", value: "with 6 LPA average across programs" },
    { icon: Users, label: "12,000+ Learners", value: "trained and placed over 15+ years" },
  ];
  return (
    <section className="bg-gradient-soft py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Placement Highlights"
              title="A launchpad to top companies"
              subtitle="Our dedicated placement cell connects you directly with 250+ recruiting partners."
            />
            <div className="mt-8 space-y-4">
              {items.map((it, i) => {
                const Icon = it.icon;
                return (
                  <Reveal key={it.label} delay={i * 0.08}>
                    <div className="flex items-start gap-4 rounded-2xl border bg-card p-5 shadow-soft">
                      <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-gradient-brand text-white">
                        <Icon className="size-6" />
                      </span>
                      <div>
                        <p className="font-bold">{it.label}</p>
                        <p className="text-sm text-muted-foreground">{it.value}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
            <Button asChild variant="hero" size="lg" className="mt-8">
              <Link to="/placements">
                See Placement Dashboard <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
          <Reveal className="grid grid-cols-2 gap-5">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border bg-card p-6 text-center shadow-soft card-hover">
                <p className="font-display text-4xl font-extrabold text-gradient">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function SuccessStories() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Student Success Stories"
          title="Real learners. Real careers."
          subtitle="Meet a few of the technocrats we've helped launch."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {successStories.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.06}>
              <div className="card-hover h-full rounded-2xl border bg-card p-6 text-center shadow-soft">
                <div className="mx-auto grid size-16 place-items-center rounded-full bg-gradient-brand text-xl font-bold text-white">
                  {s.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <h3 className="mt-4 font-bold">{s.name}</h3>
                <p className="text-xs text-muted-foreground">{s.program}</p>
                <div className="mt-4 rounded-xl bg-secondary p-3">
                  <p className="text-sm font-semibold">{s.company}</p>
                  <p className="text-xs font-bold text-accent">{s.package}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-gradient-soft py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="What our learners say"
          subtitle="Trusted by thousands of engineers and professionals."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.06}>
              <figure className="card-hover h-full rounded-2xl border bg-card p-7 shadow-soft">
                <Quote className="size-8 text-accent/40" />
                <div className="mt-2 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="size-4 fill-accent text-accent" />
                  ))}
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-foreground/90">"{t.quote}"</blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-full bg-gradient-brand text-sm font-bold text-white">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                  <div>
                    <p className="text-sm font-bold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoTestimonials() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Video Testimonials"
          title="Hear it from our alumni"
          subtitle="Watch success stories from learners now thriving in the industry."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {videoTestimonials.map((v, i) => (
            <Reveal key={v.name} delay={i * 0.08}>
              <button className="group relative block aspect-video w-full overflow-hidden rounded-2xl bg-gradient-hero text-left shadow-soft">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.15),transparent_60%)]" />
                <span className="absolute left-1/2 top-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/20 backdrop-blur-md transition-transform group-hover:scale-110">
                  <span className="grid size-11 place-items-center rounded-full bg-accent text-white animate-pulse-ring">
                    <Play className="size-5 translate-x-0.5" />
                  </span>
                </span>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                  <p className="font-bold">{v.name}</p>
                  <p className="text-xs text-white/70">{v.role} · {v.company}</p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryPreview() {
  const tiles = [
    { label: "Automation Lab", span: "lg:col-span-2 lg:row-span-2" },
    { label: "Robotics Cell", span: "" },
    { label: "Classroom" , span: ""},
    { label: "Placement Drive", span: "" },
    { label: "Workshops", span: "" },
  ];
  return (
    <section className="bg-gradient-soft py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Gallery" title="Life at SSMLEC" subtitle="A glimpse of our labs, classrooms and events." />
        <div className="mt-12 grid auto-rows-[160px] grid-cols-2 gap-4 lg:grid-cols-4">
          {tiles.map((t, i) => (
            <Reveal key={t.label} delay={i * 0.05} className={t.span}>
              <div className="group relative h-full overflow-hidden rounded-2xl bg-gradient-hero shadow-soft">
                {i === 0 && (
                  <img src={aboutLab} alt="SSMLEC lab" loading="lazy" className="absolute inset-0 size-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-3 left-4 font-display font-bold text-white">{t.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/gallery">
              View Full Gallery <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <SectionHeading
            align="left"
            eyebrow="FAQ"
            title="Frequently asked questions"
            subtitle="Everything you need to know before enrolling."
          />
          <Button asChild variant="hero" size="lg" className="mt-8">
            <Link to="/faqs">View All FAQs <ArrowRight className="size-4" /></Link>
          </Button>
        </div>
        <Reveal>
          <Accordion type="single" collapsible className="w-full">
            {generalFaqs.slice(0, 5).map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="rounded-xl border bg-card px-5 mb-3 shadow-soft">
                <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

function BlogPreview() {
  return (
    <section className="bg-gradient-soft py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="From the Blog" title="Latest insights & guides" subtitle="Stay ahead with industry trends and career advice." />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {blogPosts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.06}>
              <Link
                to="/blog"
                className="card-hover flex h-full flex-col overflow-hidden rounded-2xl border bg-card shadow-soft"
              >
                <div className="relative flex h-32 items-center justify-center bg-gradient-hero">
                  <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                    {post.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs text-muted-foreground">{post.read}</p>
                  <h3 className="mt-2 line-clamp-3 font-bold leading-snug">{post.title}</h3>
                  <span className="mt-auto pt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                    Read more <ArrowRight className="size-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactCta() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-8 text-white shadow-glow sm:p-12">
          <div className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-accent/25 blur-3xl" />
          <div className="relative grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-extrabold sm:text-4xl">Ready to start your journey?</h2>
              <p className="mt-4 max-w-md text-white/75">
                Talk to our career counselors and find the perfect program for your goals. Free,
                no-obligation guidance.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-white/80">
                {["Personalized career counseling", "Hands-on, industry-aligned learning", "Guaranteed placement support"].map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <CheckCircle2 className="size-5 text-accent" /> {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass rounded-2xl p-6">
              <h3 className="mb-4 text-xl font-bold text-white">Get a Free Callback</h3>
              <EnquiryForm compact />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export {FaqSection}