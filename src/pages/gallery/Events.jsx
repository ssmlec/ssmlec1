import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import e1 from "../../assets/about-page.jpeg"

import aiml from "../../assets/event/ppaiml.jpg"
import rgnpitplcscada from "../../assets/event/rngpitplcscada.jpg"
import ngpplcscada from "../../assets/event/ngpplcscada.jpg"
import laravel from "../../assets/student_training/laravel.png"
import automation from "../../assets/student_training/automation.png"
import autocad from "../../assets/event/rngpiyautocad.jpg"
import devops from "../../assets/event/ppdevops.jpg"
import ppphp from "../../assets/event/ppphp.jpg"

import malibavisit from "../../assets/event/malibavisit.jpg"

import {
  CalendarDays,
  MapPin,
  Clock,
  Search,
  ChevronDown,
  ImageIcon,
  Timer,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { EnquiryDialog } from "@/components/enquiry-dialog";

/**
 * ---------------------------------------------------------------------------
 * EVENTS DATA
 * `date` must be a real ISO string (YYYY-MM-DDTHH:mm:ss) so sorting and the
 * countdown timer work correctly. Replace `image` with real photos.
 * ---------------------------------------------------------------------------
 */
const events = [
  {
    id: "ev-01",
    title: "Industrial Visit",
    date: "2026-08-11T10:00:00",
    location: "Luxuria Business Hub",
    category: "Visit",
    description:
      "Industrial Visit Conducted at SSM LEC for Computer Science Students from Diwaliba Polytechnic College, Mahuva",
    image: malibavisit,
  },
  {
    id: "ev-02",
    title: "Devops Workshop",
    date: "2026-08-08T09:00:00",
    location: "P P Savani University Kosamba",
    category: "Campus Skill Development",
    description:
      "Campus Skill Development Program on Devops",
    image: devops,
  },
  
  {
    id: "ev-06",
    title: "AI & ML Workshop",
    date: "2026-08-10T09:00:00",
    location: "P P Savani University Kosamba",
    category: "Campus Skill Development",
    description:
      "Campus Skill Development Program on Devops",
    image: aiml,
  },
  {
    id: "ev-07",
    title: "PHP Laravel Workshop",
    date: "2026-08-13T09:00:00",
    location: "P P Savani University Kosamba",
    category: "Campus Skill Development",
    description:
      "Campus Skill Development Program on Devops",
    image: ppphp,
  },
  {
    id: "ev-04",
    title: "AutoCad 2D & 3D",
    date: "2026-02-29T09:30:00",
    location: "Gandhi College Surat",
    category: "Campus Skill Development",
    description:
      "Building future CAD designers.",
    image:autocad,
  },
  {
    id: "ev-05",
    title: "AutoCad 2D & 3D",
    date: "2026-06-29T09:30:00",
    location: "R. N. G. Patel Institute of Technology Bardoli",
    category: "Campus Skill Development",
    description:
      "Building future CAD designers.",
    image: autocad,
  },
  {
    id: "ev-08",
    title: "Automation ( PLC & SCADA )",
    date: "2026-07-06T09:30:00",
    location: "R. N. G. Patel Institute of Technology Bardoli",
    category: "Campus Skill Development",
    description:
      "Campus Skill Development Program on Industrial Automation.",
    image: rgnpitplcscada,
  },

  {
    id: "ev-09",
    title: "Automation ( PLC & SCADA )",
    date: "2026-05-06T09:30:00",
    location: "N. G. Patel Polytechnic  Bardoli",
    category: "Campus Skill Development",
    description:
      "Campus Skill Development Program on Industrial Automation.",
    image: ngpplcscada,
  },
   {
    id: "ev-10",
    title: "Workshop on Automation Basic & PLC programming",
    date: "2026-08-24T09:30:00",
    location: "GEC Surat",
    category: "Campus Skill Development",
    description:
      "Campus Skill Development Program on Automation Basic & PLC programming.",
    image: automation,
  },
  {
    id: "ev-11",
    title: "Workshop on Automation Basic & PLC programming",
    date: "2026-08-25T09:30:00",
    location: "GEC Surat",
    category: "Campus Skill Development",
    description:
      "Campus Skill Development Program on Automation Basic & PLC programming.",
    image: automation,
  },
];

function formatDatePart(iso) {
  const d = new Date(iso);
  return {
    day: d.toLocaleDateString(undefined, { day: "2-digit" }),
    month: d.toLocaleDateString(undefined, { month: "short" }),
    year: d.getFullYear(),
    weekday: d.toLocaleDateString(undefined, { weekday: "long" }),
    time: d.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" }),
  };
}

function useCountdown(targetIso) {
  const [remaining, setRemaining] = useState(() => new Date(targetIso) - new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setRemaining(new Date(targetIso) - new Date());
    }, 1000);
    return () => clearInterval(id);
  }, [targetIso]);

  const clamped = Math.max(0, remaining);
  const days = Math.floor(clamped / (1000 * 60 * 60 * 24));
  const hours = Math.floor((clamped / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((clamped / (1000 * 60)) % 60);
  const seconds = Math.floor((clamped / 1000) % 60);

  return { days, hours, minutes, seconds, isPast: remaining <= 0 };
}

export function EventsPage() {
  const [tab, setTab] = useState("upcoming"); // "upcoming" | "past"
  const [query, setQuery] = useState("");
  const [expandedId, setExpandedId] = useState(null);

  const now = useMemo(() => new Date(), []);

  const sorted = useMemo(
    () => [...events].sort((a, b) => new Date(a.date) - new Date(b.date)),
    []
  );

  const upcoming = sorted.filter((e) => new Date(e.date) >= now);
  const past = [...sorted.filter((e) => new Date(e.date) < now)].reverse();

  const nextEvent = upcoming[0];
  const countdown = useCountdown(nextEvent ? nextEvent.date : new Date().toISOString());

  const list = tab === "upcoming" ? upcoming : past;

  const filtered = list.filter(
    (e) =>
      query.trim() === "" ||
      e.title.toLowerCase().includes(query.trim().toLowerCase()) ||
      e.category.toLowerCase().includes(query.trim().toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white pt-28 pb-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-blue-600">
            What's Happening
          </p>
          <h1 className="text-3xl font-extrabold text-blue-900 sm:text-4xl">
            Events
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-sm text-gray-600 sm:text-base">
            Workshops, open houses, and milestones from campus life — upcoming and past.
          </p>
        </div>

        {/* Next event countdown hero */}
        {nextEvent && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-12 overflow-hidden rounded-3xl bg-gradient-brand text-white shadow-lg"
          >
            <div className="grid gap-6 p-6 sm:grid-cols-2 sm:p-10">
              <div className="flex flex-col justify-center">
                <span className="mb-2 inline-flex w-fit items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wide">
                  <Timer className="size-3.5" />
                  Up Next
                </span>
                <h2 className="text-2xl font-extrabold sm:text-3xl">
                  {nextEvent.title}
                </h2>
                <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-white/90">
                  <span className="flex items-center gap-1.5">
                    <CalendarDays className="size-4" />
                    {formatDatePart(nextEvent.date).weekday}, {formatDatePart(nextEvent.date).month}{" "}
                    {formatDatePart(nextEvent.date).day}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="size-4" />
                    {nextEvent.location}
                  </span>
                </div>
                <EnquiryDialog>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="mt-5 w-fit bg-white text-blue-700 hover:bg-white/90"
                  >
                    Reserve Your Spot
                  </Button>
                </EnquiryDialog>
              </div>

              {/* Countdown */}
              <div className="flex items-center justify-center gap-3 sm:gap-4">
                {[
                  { label: "Days", value: countdown.days },
                  { label: "Hrs", value: countdown.hours },
                  { label: "Min", value: countdown.minutes },
                  { label: "Sec", value: countdown.seconds },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="flex w-16 flex-col items-center rounded-2xl bg-white/15 py-3 backdrop-blur-sm sm:w-20"
                  >
                    <span className="text-2xl font-extrabold tabular-nums sm:text-3xl">
                      {String(value).padStart(2, "0")}
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-wide text-white/80">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Controls */}
        <div className="mb-8 flex flex-col items-center gap-4">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search events..."
              className="w-full rounded-full border border-blue-100 bg-blue-50/50 py-2.5 pl-10 pr-4 text-sm text-blue-900 placeholder:text-gray-400 outline-none transition-colors focus:border-blue-300 focus:bg-white"
            />
          </div>

          <div className="flex gap-2 rounded-full bg-blue-50 p-1">
            {[
              { key: "upcoming", label: `Upcoming (${upcoming.length})` },
              { key: "past", label: `Past (${past.length})` },
            ].map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setTab(key)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200",
                  tab === key
                    ? "bg-blue-900 text-white shadow-md"
                    : "text-blue-900 hover:bg-blue-100"
                )}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab + query}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative"
          >
            {filtered.length === 0 ? (
              <p className="py-16 text-center text-sm text-gray-400">
                No {tab} events match your search.
              </p>
            ) : (
              <div className="relative space-y-6 before:absolute before:left-[27px] before:top-2 before:bottom-2 before:w-px before:bg-blue-100 sm:before:left-[35px]">
                {filtered.map((event, idx) => {
                  const { day, month, time } = formatDatePart(event.date);
                  const isExpanded = expandedId === event.id;
                  const isPast = tab === "past";

                  return (
                    <motion.div
                      key={event.id}
                      layout
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.25, delay: idx * 0.04 }}
                      className="relative flex gap-4 pl-0 sm:gap-6"
                    >
                      {/* Date marker */}
                      <div
                        className={cn(
                          "z-10 flex size-14 shrink-0 flex-col items-center justify-center rounded-2xl border text-center sm:size-[70px]",
                          isPast
                            ? "border-gray-200 bg-gray-50 text-gray-400"
                            : "border-blue-100 bg-white text-blue-900 shadow-sm"
                        )}
                      >
                        <span className="text-lg font-extrabold leading-none sm:text-xl">
                          {day}
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-wide">
                          {month}
                        </span>
                      </div>

                      {/* Card */}
                      <button
                        onClick={() =>
                          setExpandedId(isExpanded ? null : event.id)
                        }
                        className={cn(
                          "flex-1 rounded-2xl border p-4 text-left transition-all duration-200 sm:p-5",
                          isPast
                            ? "border-gray-100 bg-gray-50/60 hover:bg-gray-50"
                            : "border-blue-100 bg-white hover:border-blue-200 hover:shadow-md"
                        )}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <span
                              className={cn(
                                "mb-1 inline-block rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide",
                                isPast
                                  ? "bg-gray-200 text-gray-500"
                                  : "bg-blue-50 text-blue-700"
                              )}
                            >
                              {event.category}
                            </span>
                            <h3
                              className={cn(
                                "text-base font-bold sm:text-lg",
                                isPast ? "text-gray-500" : "text-blue-900"
                              )}
                            >
                              {event.title}
                            </h3>
                            <div className="mt-1.5 flex flex-wrap items-center gap-3 text-xs text-gray-500 sm:text-sm">
                              <span className="flex items-center gap-1">
                                <Clock className="size-3.5" />
                                {time}
                              </span>
                              <span className="flex items-center gap-1">
                                <MapPin className="size-3.5" />
                                {event.location}
                              </span>
                            </div>
                          </div>
                          <ChevronDown
                            className={cn(
                              "size-4 shrink-0 text-gray-400 transition-transform",
                              isExpanded && "rotate-180"
                            )}
                          />
                        </div>

                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              className="overflow-hidden"
                            >
                              <div className="mt-4 grid gap-4 sm:grid-cols-[160px_1fr]">
                                <img
                                  src={event.image}
                                  alt={event.title}
                                  className="h-28 w-full rounded-xl object-cover sm:h-full"
                                />
                                <p className="text-sm leading-relaxed text-gray-600">
                                  {event.description}
                                </p>
                              </div>
                              {isPast ? (
                                <Link
                                  to="/gallery"
                                  onClick={(e) => e.stopPropagation()}
                                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-800"
                                >
                                  <ImageIcon className="size-4" />
                                  View photos
                                </Link>
                              ) : (
                                <div
                                  className="mt-4"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  {/* <EnquiryDialog>
                                    <Button variant="hero" size="sm">
                                      Reserve Your Spot
                                    </Button>
                                  </EnquiryDialog> */}
                                </div>
                              )}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </button>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default EventsPage;
