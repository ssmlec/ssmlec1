import { Eye, Target, Flag, History, Users, Building, BadgeCheck, CheckCircle2 } from "lucide-react";

import aboutLab from "@/assets/about-page.jpeg";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Counter } from "@/components/counter";
import { Seo } from "@/components/seo";
import { stats } from "@/lib/site-data";
import { Sparkles } from "lucide-react";

const mvp = [
  {
    icon: Eye,
    title: "Our Vision",
    desc: "To become India's most trusted industry-led learning ecosystem, empowering individuals and organizations with future-ready skills that accelerate careers, drive innovation, and transform businesses.",
  },
  {
    icon: Target,
    title: "Our Mission",
    desc: [
      "Bridge the gap between academia and industry through experiential learning.",
      "Develop highly skilled professionals equipped for Industry 4.0 and beyond.",
      "Partner with enterprises to build agile, future-ready workforces.",
      "Deliver globally benchmarked learning experiences through technology, innovation, and industry expertise.",
      "Create meaningful career opportunities through skill development and industry partnerships.",
    ],
  },
  {
    icon: Flag,
    title: "Our Promise",
    desc: "At SSM Learning Excellence Centre, we believe that education should create measurable outcomes—not just certificates. Every program is designed to build competence, confidence, and career success while enabling organizations to develop skilled talent capable of delivering business impact from day one.",
  },
];

const timeline = [
  {
    year: "2023",
    items: [
      {
        title: "Founded",
        desc: "SSMLEC established as an industry-centered training facility.",
      },
      {
        title: "Automation Focus",
        desc: "Expanded into PLC, SCADA, and Industry 4.0 programs.",
      },
      {
        title: "AVEVA Partnership",
        desc: "Became an AVEVA Authorized Training Partner.",
      },
    ],
  },
  {
    year: "2025",
    items: [
      {
        title: "AI Integration",
        desc: "Launched AI-integrated software & data science tracks.",
      },
    ],
  },
  {
    year: "2026",
    items: [
      {
        title: "AutoCAD",
        desc: "Expanded AutoCAD training for Mechanical, Electrical, Civil, and Architecture.",
      },
      {
        title: "Corporate Clients",
        desc: "Successfully partnered with 45+ corporate clients.",
      },
      {
        title: "MoU",
        desc: "Signed Memorandums of Understanding with 11 colleges.",
      },
    ],
  },
];
const leadership = [
  {
    name: "Devershi Desai",
    role: "Head",
  },
  {
    name: "Hemin Motiwala",
    role: "BDM",
  },
  {
    name: "Dhaval Kansara",
    role: "BDC",
  },
  {
    name: "Nidhi Gandhi",
    role: "Trainer",
  },
  {
    name: "Chandni Joshi",
    role: "Trainer",
  },
  {
    name: "Nayan Kumar Singh",
    role: "Trainer",
  },
  {
    name: "Harshal Patel",
    role: "Trainer",
  },
  {
    name: "Khyati Patel",
    role: "Trainer",
  },
  {
    name: "Sakshi Shah",
    role: "Trainer",
  },
  {
    name: "Deepak Patel",
    role: "Trainer",
  },
];
const infrastructure = [
  "State-of-the-art automation labs",
  "Live PLC, SCADA & HMI training panels",
  "Modern AI/software computing labs",
  "CAD design lab",
];

const certifications = ["AVEVA Authorized Training Partner", "Industry 4.0 Skill Certification", "ISO-aligned Training Processes"];

export default function AboutPage() {
  return (
    <>
      <Seo
        meta={[
          { title: "SSM Learning Excellence Centre" },
          {
            name: "description",
            content:
              "Learn about SSM Learning Excellence Centre — an industry-centered facility helping engineers become technocrats in Automation, AI and Industry 4.0.",
          },
          { property: "og:title", content: "About SSMLEC" },
          { property: "og:description", content: "Our mission, vision, history, leadership and infrastructure." },
          { property: "og:url", content: "/about" },
        ]}
        links={[{ rel: "canonical", href: "/about" }]}
      />
      {/* <PageHero
        eyebrow="About Us"
        title="Craft your inner technocrat"
        subtitle="SSM Learning Excellence Centre is an industry-centered gateway that turns aspiring engineers into industry-ready technocrats."
        crumbs={[{ label: "About" }]}
      /> */}
      <section className="relative overflow-hidden bg-gradient-hero pb-0 pt-32 text-white sm:pb-20 sm:pt-36">

        <section className="py-10 sm:py-2">

          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">

            <Reveal>
              <img src={aboutLab} alt="SSMLEC training facility" width={1280} height={960} loading="lazy" className="rounded-3xl shadow-glow" />

              {/* <div className="mt-8 grid grid-cols-2 gap-4">
                {stats.map((s) => (

                  <div key={s.label} className="rounded-2xl border bg-card p-5 shadow-soft">
                    <p className="font-display text-3xl font-extrabold text-gradient">
                      <Counter value={s.value} suffix={s.suffix} />
                    </p>
                    <p className="text-sm text-muted-foreground">{s.label}</p>
                  </div>
                ))}
              </div> */}

              <div className="mt-8 grid grid-cols-2 gap-4">
                {stats.map((s) => {
                  const Icon = s.icon;

                  return (

                    <div
                      key={s.label}
                      className="rounded-2xl border bg-card p-5 shadow-soft"
                    >
                      <div className="flex flex-col md:flex-row items-center gap-4">
                        <Icon className="size-10 text-primary" />

                        <div>
                          <p className="font-display text-3xl font-extrabold text-gradient">
                            <Counter value={s.value} suffix={s.suffix} />
                          </p>

                          <p className="text-sm text-muted-foreground">
                            {s.label}
                          </p>
                        </div>
                      </div>
                    </div>

                  );
                })}
              </div>
            </Reveal>



            <div>



              {/* <SectionHeading

                align="left"
                light={true}
                // eyebrow="Institute Overview"
                title="Transforming Potential into Professional Excellence"
                subtitle="SSM Learning Excellence Centre (SSM LEC) is the talent development and workforce transformation division of SSM Infotech Solutions, a trusted leader with over 25 years of expertise in Industrial Software, Industrial Automation, Digital Engineering, and Information Technology solutions.
            Established in April 2023, SSM LEC was founded with a clear vision—to bridge the gap between academic education and industry expectations by developing highly skilled, industry-ready professionals equipped for the future of engineering and digital transformation.
            Through a unique blend of experiential learning, industry-led curriculum, hands-on project exposure, and globally recognized certifications, we empower students, working professionals, and corporate teams with the competencies required to excel in today's technology-driven industrial ecosystem."
              /> */}

              <SectionHeading
                align="left"
                light={true}
                title={
                  <>
                    <span className="bg-gradient-to-r from-accent to-[oklch(0.72_0.18_35)] bg-clip-text text-transparent">
                      Transforming
                    </span>{" "}
                    Potential into Professional Excellence
                  </>
                }
                subtitle="SSM Learning Excellence Centre (SSM LEC) is the talent development and workforce transformation division of SSM Infotech Solutions, a trusted leader with over 25 years of expertise in Industrial Software, Industrial Automation, Digital Engineering, and Information Technology solutions.
Established in April 2023, SSM LEC was founded with a clear vision—to bridge the gap between academic education and industry expectations by developing highly skilled, industry-ready professionals equipped for the future of engineering and digital transformation.
Through a unique blend of experiential learning, industry-led curriculum, hands-on project exposure, and globally recognized certifications, we empower students, working professionals, and corporate teams with the competencies required to excel in today's technology-driven industrial ecosystem."
              />

            </div>
          </div>
        </section>

      </section>

      {/* Overview */}
      {/* <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <img src={aboutLab} alt="SSMLEC training facility" width={1280} height={960} loading="lazy" className="rounded-3xl shadow-glow" />

                  <div className="mt-8 grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl border bg-card p-5 shadow-soft">
                  <p className="font-display text-3xl font-extrabold text-gradient">
                    <Counter value={s.value} suffix={s.suffix} />
                  </p>
                  <p className="text-sm text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
          
          <div>
            <SectionHeading
              align="left"
              eyebrow="Institute Overview"
              title="Transforming Potential into Professional Excellence"
              subtitle="SSM Learning Excellence Centre (SSM LEC) is the talent development and workforce transformation division of SSM Infotech Solutions, a trusted leader with over 25 years of expertise in Industrial Software, Industrial Automation, Digital Engineering, and Information Technology solutions.
              Established in April 2023, SSM LEC was founded with a clear vision—to bridge the gap between academic education and industry expectations by developing highly skilled, industry-ready professionals equipped for the future of engineering and digital transformation.
              Through a unique blend of experiential learning, industry-led
               curriculum, hands-on project exposure, and globally recognized certifications, we empower students, working professionals, and corporate teams with the competencies required to excel in today's technology-driven industrial ecosystem."
            />
      
          </div>
        </div>
      </section> */}

      {/* Mission / Vision / Purpose */}
      {/* <section className="bg-gradient-soft py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="What Drives Us" title="Mission, Vision & Purpose" />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {mvp.map((m, i) => {
              const Icon = m.icon;
              return (
                <Reveal key={m.title} delay={i * 0.08}>
                  <div className="card-hover h-full rounded-2xl border bg-card p-7 shadow-soft">
                    <span className="grid size-12 place-items-center rounded-xl bg-gradient-brand text-white shadow-accent">
                      <Icon className="size-6" />
                    </span>
                    <h3 className="mt-5 text-xl font-bold">{m.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground">{m.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section> */}
      {/* Mission / Vision / Promise */}
      <section className="bg-gradient-soft py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* <SectionHeading eyebrow="What Drives Us" title="Mission, Vision & Purpose" /> */}
          <center>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
              {/* Craft your inner{" "} */}
              <span className="bg-gradient-to-r from-accent to-[oklch(0.72_0.18_35)] bg-clip-text text-transparent">
                What Drives Us
              </span>{" "}
              {/* & shape your future */}
            </h1>

          </center>


          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {mvp.map((m, i) => {
              const Icon = m.icon;

              return (
                <Reveal key={m.title} delay={i * 0.08}>
                  <div className="card-hover h-full rounded-2xl border bg-card p-7 shadow-soft">
                    <span className="grid size-12 place-items-center rounded-xl bg-gradient-brand text-white shadow-accent">
                      <Icon className="size-6" />
                    </span>

                    <h3 className="mt-5 text-xl font-bold">{m.title}</h3>

                    {Array.isArray(m.desc) ? (
                      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                        {m.desc.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="mt-3 text-sm text-muted-foreground">
                        {m.desc}
                      </p>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* History timeline */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* <SectionHeading eyebrow="Our Journey" title="A history of excellence" /> */}

          {/* ======================== */}
          <center>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
              {/* Craft your inner{" "} */}
              <span className="bg-gradient-to-r from-accent to-[oklch(0.72_0.18_35)] bg-clip-text text-transparent">
                Our Journey
              </span>{" "}
              {/* & shape your future */}
            </h1>

          </center>
          <center>
            <div className="text-center">
              <div className="text-center">
                <h2 className="mt-6 text-2xl font-bold leading-tight text-black sm:text-3xl lg:text-4xl">
                  A history of excellence
                </h2>
              </div>
            </div>

          </center>
          {/* ========================= */}
          <ol className="relative mt-14 space-y-8 border-l-2 border-dashed border-border pl-8">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.05}>
                <li className="relative">
                  <span className="absolute -left-[43px] grid size-8 place-items-center rounded-full bg-gradient-brand text-xs font-bold text-white">
                    <History className="size-4" />
                  </span>

                  <div className="rounded-2xl border bg-card p-5 shadow-soft">
                    <p className="font-display text-lg font-extrabold text-accent">
                      {t.year}
                    </p>

                    <div className="mt-3 space-y-4">
                      {t.items.map((item, index) => (
                        <div
                          key={index}
                          className={
                            index !== t.items.length - 1
                              ? "border-b border-border pb-3"
                              : ""
                          }
                        >
                          <h3 className="font-bold">{item.title}</h3>
                          <p className="mt-1 text-sm text-muted-foreground">
                            {item.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-gradient-soft py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* <SectionHeading eyebrow="Leadership" title="Meet the team behind SSMLEC" /> */}
          <center>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
              {/* Craft your inner{" "} */}
              <span className="bg-gradient-to-r from-accent to-[oklch(0.72_0.18_35)] bg-clip-text text-transparent">
                Leadership
              </span>{" "}
              {/* & shape your future */}
            </h1>

          </center>
          <center>
            <div className="text-center">
              <div className="text-center">
                <h2 className="mt-6 text-2xl font-bold leading-tight text-black sm:text-3xl lg:text-4xl">
                  Meet the team behind SSMLEC
                </h2>
              </div>
            </div>

          </center>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {leadership.map((l, i) => (
              <Reveal key={l.name} delay={i * 0.06}>
                <div className="card-hover rounded-2xl border bg-card p-6 text-center shadow-soft">
                  <div className="mx-auto grid size-20 place-items-center rounded-full bg-gradient-brand text-2xl font-bold text-white">
                    {l.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                  </div>
                  <h3 className="mt-4 font-bold">{l.name}</h3>
                  <p className="text-sm text-accent">{l.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure & Certifications */}
      <section className="py-20 sm:py-28">
        <center>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
            {/* Craft your inner{" "} */}
            <span className="bg-gradient-to-r from-accent to-[oklch(0.72_0.18_35)] bg-clip-text text-transparent">
              Infrastructure & Certifications
            </span>{" "}
            {/* & shape your future */}
          </h1>

        </center>
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            {/* <SectionHeading align="left" eyebrow="Infrastructure" title="World-class facilities" /> */}


            <ul className="mt-8 grid gap-3">
              {infrastructure.map((f) => (
                <li key={f} className="flex items-center gap-3 rounded-xl border bg-card p-4 text-sm shadow-soft">
                  <Building className="size-5 shrink-0 text-accent" /> {f}
                </li>
              ))}
            </ul>
          </div>
          <div>
            {/* <SectionHeading align="left" eyebrow="Certifications" title="Recognized & accredited" /> */}
            <ul className="mt-8 grid gap-3">
              {certifications.map((c) => (
                <li key={c} className="flex items-center gap-3 rounded-xl border  p-4 text-sm font-medium shadow-soft">
                  <BadgeCheck className="size-5 shrink-0 text-accent" /> {c}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center gap-3 rounded-2xl bg-gradient-hero p-6 text-white shadow-glow">
              <Users className="size-8" />
              <div>
                <p className="font-display text-lg font-bold">Join 800+ technocrats</p>
                <p className="text-sm text-white/70">who launched their careers with SSMLEC.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}