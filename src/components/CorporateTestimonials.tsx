import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

/**
 * Corporate training testimonials — distinct from the consumer/Google
 * reviews slider (ReviewsSection.tsx). These are longer-form feedback
 * from corporate training participants, so no star rating is shown.
 *
 * NOTE: Sarang Barai (HOD, Automation) and Atul Mahalpure (Program Manager,
 * Unilever MES) appeared in the source material as names/roles without a
 * clearly attached quote. Rather than invent quotes for real people, I've
 * left placeholders below — send me their actual feedback text and I'll
 * drop it in.
 */
const corporateTestimonials = [
  {
    name: "Samuel Xavierraj",
    role: "Business R&D Specialist Professional, Hitachi Energy",
    quote:"I would like to thank you for conducting training on AVEVA OMI. The sessions were well structured, informative, and engaging. Your deep knowledge ofthe subject, clear explanations, and practical examples helped us understand the concepts effectively and gain confidence in using AVEVA OMI. We also appreciate the wayyou ensured active participation and addressed our questions with patience and clarity. Thank you once again for your dedication, professionalism, and commitment to delivering high-quality training. The learning experience was extremely valuable, and we look forward to applying these learnings in our work."
  },
  {
    name: "Sarang Barai",
    role: "HOD, Automation, Morimatsu",
    quote: "The training was well organized and provided valuable insights into the application and implementation of AVEVA Batch Management. I would also like to sincerely appreciate the trainer team for delivering the training in a highly professional and engaging manner. Her expertise, clear explanations, and willingness to address participants' queries greatly contributed to the effectiveness of the sessions. The overall feedback from our team has been positive, and we found the training beneficial for enhancing our understanding of the AVEVA Batch Management platform."
  },
  {
    name: "Atul Mahalpure",
    role: "Program Manager, Unilever MES, TCS",
    quote: "On behalf of our team, I would like to extend our heartfelt thanks to you for successfully delivering the AVEVA MES training and supporting our team through the certification process. We appreciate the time, effort, and dedication invested by your and your team throughout training. Thank you once again for your best support.",
  },
  {
    name: "Abhishek Jharekar",
    role: "Assistant Manager, BridgeStone",
    quote:
      "I wanted to take a moment to provide feedback on the recent Wonderware training program I attended. I found the training to be incredibly valuable and beneficial to my professional growth. The trainers demonstrated a deep understanding of the subject matter and were able to communicate complex ideas in an easily understandable way. The materials provided were comprehensive and served as an excellent resource both during and after the training sessions.",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);
}

export default function CorporateTestimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = (newIndex: number, dir: number) => {
    setDirection(dir);
    setIndex((newIndex + corporateTestimonials.length) % corporateTestimonials.length);
  };

  const handlePrev = () => goTo(index - 1, -1);
  const handleNext = () => goTo(index + 1, 1);

  const t = corporateTestimonials[index];

  return (
    <section className="bg-gradient-soft py-10 sm:py-14">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
         <center>
      <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
            {/* Craft your inner{" "} */}
            <span className="bg-gradient-to-r from-accent to-[oklch(0.72_0.18_35)] bg-clip-text text-transparent">
              What industry professionals say
            </span>{" "}
            {/* & shape your future */}
          </h1>

          </center>
        <SectionHeading
          // eyebrow="Corporate Training Feedback"
          // title="What industry professionals say"
          subtitle="Feedback from corporate teams who completed AVEVA and industrial software training with SSMLEC."
        />

        <Reveal>
          <div className="relative mt-14">
            <div className="relative min-h-[300px] overflow-hidden">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.figure
                  key={t.name}
                  custom={direction}
                  initial={{ opacity: 0, x: direction >= 0 ? 60 : -60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction >= 0 ? -60 : 60 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="card-hover rounded-2xl border bg-card p-8 shadow-soft"
                >
                  <Quote className="size-8 text-accent/40" />
                  <blockquote className="mt-4 text-base leading-relaxed text-foreground/90">
                    "{t.quote}"
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <span className="grid size-11 place-items-center rounded-full bg-gradient-brand text-sm font-bold text-white">
                      {initials(t.name)}
                    </span>
                    <div>
                      <p className="text-sm font-bold">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>

            {/* Prev / Next buttons */}
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 grid size-11 place-items-center rounded-full bg-gradient-brand text-white shadow-accent transition-transform hover:scale-110 sm:-left-5"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next testimonial"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 grid size-11 place-items-center rounded-full bg-gradient-brand text-white shadow-accent transition-transform hover:scale-110 sm:-right-5"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>

          {/* Dot indicators */}
          <div className="mt-8 flex justify-center gap-2">
            {corporateTestimonials.map((item, i) => (
              <button
                key={item.name}
                type="button"
                onClick={() => goTo(i, i > index ? 1 : -1)}
                aria-label={`Go to testimonial ${i + 1}`}
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
