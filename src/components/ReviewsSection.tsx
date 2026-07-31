import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

/**
 * Real learner reviews pulled from SSMLEC's Google Business listing.
 * Star ratings aren't included in the scraped review text, so every
 * card shows 5 stars as a reasonable default — swap in exact per-review
 * ratings here if you pull them from the Google Places API instead.
 */
const reviews = [
  {
    name: "Ketan Patil",
    role: "AVEVA Automation Course",
    quote:
      "The course content was comprehensive, and the instructors Nidhi ma'am and Chandani ma'am were excellent, explaining concepts clearly.",
  },
  {
    name: "Vaibhav Singh",
    role: ".NET Developer Certification",
    quote:
      "I got the best training for .NET developer here. Harshal Patel sir trained me — he is the best trainer, I could not have got such good training anywhere else.",
  },
  {
    name: "Sahil Kayasth",
    role: "MERN Stack Development",
    quote:
      "The guidance and training provided by the mentors make the strongest foundation for new learners. I enrolled to learn MERN Stack and now work as a MERN Stack developer.",
  },
  {
    name: "Soni Shreya",
    role: "PLC & SCADA Internship",
    quote:
      "This internship gave me my first hands-on experience with PLC and SCADA systems. I learned to build ladder logic programs and how SCADA monitors processes through HMI screens.",
  },
  {
    name: "Rahul Birla",
    role: "Automation & Software Training",
    quote:
      "SSM Learning Centre is the best training platform for Automation (PLC & SCADA) and software training like SQL. Highly recommend visiting this training center.",
  },
  {
    name: "Krishna Patel",
    role: "Corporate Training Program",
    quote:
      "We are extremely happy and fully satisfied with the training. The office environment is very good, and each and every trainer is supportive and always ready to help.",
  },
  {
    name: "cse Rajput",
    role: "Data Science Internship",
    quote:
      "The Data Science internship made me industry-ready. My experience at SSM LEC is unbelievable.",
  },
  {
    name: "Dev Mehta",
    role: "PHP Laravel Training",
    quote:
      "I had a really great time learning Laravel and building a basic project on it. The team gives you hands-on knowledge and the tools to get started with a career in tech.",
  },
  {
    name: "Shibaji Bhaumik",
    role: "AVEVA MES Training",
    quote:
      "We got one month of hands-on training on AVEVA MES. The trainer was very supportive — highly recommend.",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);
}

export default function ReviewsSection() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = (newIndex: number, dir: number) => {
    setDirection(dir);
    setIndex((newIndex + reviews.length) % reviews.length);
  };

  const handlePrev = () => goTo(index - 1, -1);
  const handleNext = () => goTo(index + 1, 1);

  const r = reviews[index];

  return (
    <section className="py-20 sm:py-8">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <center>
      <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
            {/* Craft your inner{" "} */}
            <span className="bg-gradient-to-r from-accent to-[oklch(0.72_0.18_35)] bg-clip-text text-transparent">
              What our learners say
            </span>{" "}
            {/* & shape your future */}
          </h1>

          </center>
        <SectionHeading
          // eyebrow="Google Reviews"
          // title="What our learners say"
          subtitle="Real feedback from students, interns and professionals trained at SSMLEC."
        />

         

        <Reveal>
          <div className="relative mt-14">
            <div className="relative min-h-[280px] overflow-hidden">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.figure
                  key={r.name}
                  custom={direction}
                  initial={{ opacity: 0, x: direction >= 0 ? 60 : -60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction >= 0 ? -60 : 60 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="card-hover rounded-2xl border bg-card p-8 shadow-soft"
                >
                  <Quote className="size-8 text-accent/40" />
                  <div className="mt-2 flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="size-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <blockquote className="mt-4 text-base leading-relaxed text-foreground/90">
                    "{r.quote}"
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <span className="grid size-11 place-items-center rounded-full bg-gradient-brand text-sm font-bold text-white">
                      {initials(r.name)}
                    </span>
                    <div>
                      <p className="text-sm font-bold">{r.name}</p>
                      <p className="text-xs text-muted-foreground">{r.role}</p>
                    </div>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>

            {/* Prev / Next buttons */}
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous review"
              className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 grid size-11 place-items-center rounded-full bg-gradient-brand text-white shadow-accent transition-transform hover:scale-110 sm:-left-5"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next review"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 grid size-11 place-items-center rounded-full bg-gradient-brand text-white shadow-accent transition-transform hover:scale-110 sm:-right-5"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>

          {/* Dot indicators */}
          <div className="mt-8 flex justify-center gap-2">
            {reviews.map((rev, i) => (
              <button
                key={rev.name}
                type="button"
                onClick={() => goTo(i, i > index ? 1 : -1)}
                aria-label={`Go to review ${i + 1}`}
                className={
                  i === index
                    ? "h-2.5 w-6 rounded-full bg-gradient-brand transition-all"
                    : "h-2.5 w-2.5 rounded-full bg-muted transition-all hover:bg-accent/50"
                }
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
