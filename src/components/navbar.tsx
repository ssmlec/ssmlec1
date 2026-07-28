import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, ChevronDown, Phone, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { EnquiryDialog } from "@/components/enquiry-dialog";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { categoryMeta, coursesByCategory, type CourseCategory } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/placements", label: "Placements" },
  { to: "/gallery", label: "Gallery" },
  { to: "/blog", label: "Blog" },
  { to: "/Success_Stories", label: "Success_Stories" },
  { to: "/contact", label: "Contact" },
] as const;

const categories = Object.keys(categoryMeta) as CourseCategory[];

// Training menu: Corporate + Students training only
const trainingLinks = [
  { title: "Corporate Training", to: "/gallery/corporate-training" },
  { title: "Students Training", to: "/gallery/students-training" }, 
];

// Gallery and Events are now standalone top-level links
const GALLERY_LINK = "/gallery";
const EVENTS_LINK = "/gallery/events";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [trainingOpen, setTrainingOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg border-b border-blue-100 py-2"
          : "bg-white/80 backdrop-blur-xl shadow-lg border-b border-blue-100 py-2"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo />

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          <NavItem to="/" label="Home" scrolled={scrolled} />
          <NavItem to="/about" label="About" scrolled={scrolled} />

          {/* Courses mega menu */}
          <div
            className="relative"
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
          >
            <button
              className={cn(
                "flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-all duration-300",
                scrolled
                  ? "text-blue-900 hover:bg-blue-50 hover:text-blue-700"
                  : "text-blue-900 hover:bg-blue-50 hover:text-blue-700"
              )}
              aria-expanded={megaOpen}
            >
              Courses
              <ChevronDown
                className={cn(
                  "size-4 transition-transform",
                  megaOpen && "rotate-180"
                )}
              />
            </button>

            <AnimatePresence>
              {megaOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-1/2 top-full w-[min(92vw,880px)] -translate-x-1/2 pt-3"
                >
                  <div className="bg-white grid grid-cols-3 gap-2 rounded-2xl p-4">
                    {categories.map((cat) => {
                      const meta = categoryMeta[cat];
                      const Icon = meta.icon;

                      return (
                        <div key={cat} className="rounded-xl p-2">
                          <Link
                            to={`/courses#${cat}`}
                            className="mb-2 flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm font-bold text-blue-900"
                          >
                            <span className="grid size-8 place-items-center rounded-lg bg-gradient-brand text-white">
                              <Icon className="size-4" />
                            </span>

                            {meta.label}
                          </Link>

                          <ul className="space-y-0.5">
                            {coursesByCategory(cat).map((c) => (
                              <li key={c.slug}>
                                <Link
                                  to={`/courses/${c.slug}`}
                                  className="block rounded-lg px-2 py-1.5 text-xs text-gray-600 transition-colors hover:bg-blue-50 hover:text-blue-700"
                                >
                                  {c.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Training dropdown (Corporate + Students) */}
          <div
            className="relative"
            onMouseEnter={() => setTrainingOpen(true)}
            onMouseLeave={() => setTrainingOpen(false)}
          >
            <button
              className="flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-semibold text-blue-900 transition-all duration-300 hover:bg-blue-50 hover:text-blue-700"
              aria-expanded={trainingOpen}
            >
              Training
              <ChevronDown
                className={cn(
                  "size-4 transition-transform",
                  trainingOpen && "rotate-180"
                )}
              />
            </button>

            <AnimatePresence>
              {trainingOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-1/2 top-full w-56 -translate-x-1/2 pt-3"
                >
                  <div className="rounded-2xl border bg-white p-2 shadow-soft">
                    {trainingLinks.map((t) => (
                      <Link
                        key={t.to}
                        to={t.to}
                        className="block rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-700"
                      >
                        {t.title}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Gallery - standalone link */}
          {/* <NavItem to={GALLERY_LINK} label="Gallery" scrolled={scrolled} /> */}

          {/* Events - standalone link */}
          {/* <NavItem to={EVENTS_LINK} label="Events" scrolled={scrolled} /> */}

          {/* <NavItem to="/placements" label="Placements" scrolled={scrolled} /> */}
          {/* <NavItem to="/blog" label="Blog" scrolled={scrolled} /> */}
          {/* <NavItem to="/Success_Stories" label="Success Stories" scrolled={scrolled} /> */}
          <NavItem to="/faqs" label="FAQ" scrolled={scrolled} />
          <NavItem to="/contact" label="Contact" scrolled={scrolled} />
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <EnquiryDialog>
            <Button variant="hero" size="sm" className="hidden sm:inline-flex">
              <Phone className="size-4" /> Enquire Now
            </Button>
          </EnquiryDialog>

          {/* Mobile menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[88vw] max-w-sm overflow-y-auto p-0">
              <SheetHeader className="border-b p-4 text-left">
                <SheetTitle asChild>
                  <div className="flex items-center justify-between">
                    <Logo />
                    <Button variant="ghost" size="icon" onClick={() => setMobileOpen(false)} aria-label="Close menu">
                      <X className="size-5" />
                    </Button>
                  </div>
                </SheetTitle>
              </SheetHeader>
              <div className="p-4">
                <div className="flex flex-col">
                  {navLinks
                    .filter((l) => l.label !== "Blog" && l.label !== "Success_Stories" && l.label !== "Gallery")
                    .slice(0, 2)
                    .map((l) => (
                      <MobileLink key={l.to} to={l.to} label={l.label} onClick={() => setMobileOpen(false)} />
                    ))}

                  <Accordion type="single" collapsible>
                    <AccordionItem value="courses" className="border-none">
                      <AccordionTrigger className="py-3 text-base font-medium hover:no-underline">
                        Courses
                      </AccordionTrigger>
                      <AccordionContent>
                        {categories.map((cat) => (
                          <div key={cat} className="mb-3">
                            <p className="mb-1 px-2 text-xs font-bold uppercase tracking-wide text-accent">
                              {categoryMeta[cat].label}
                            </p>
                            {coursesByCategory(cat).map((c) => (
                              <Link
                                key={c.slug}
                                to={`/courses/${c.slug}`}
                                onClick={() => setMobileOpen(false)}
                                className="block rounded-lg px-2 py-1.5 text-sm text-muted-foreground hover:text-accent"
                              >
                                {c.title}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <Accordion type="single" collapsible>
                    <AccordionItem value="training" className="border-none">
                      <AccordionTrigger className="py-3 text-base font-medium hover:no-underline">
                        Training
                      </AccordionTrigger>
                      <AccordionContent>
                        {trainingLinks.map((t) => (
                          <Link
                            key={t.to}
                            to={t.to}
                            onClick={() => setMobileOpen(false)}
                            className="block rounded-lg px-2 py-1.5 text-sm text-muted-foreground hover:text-accent"
                          >
                            {t.title}
                          </Link>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <MobileLink to={GALLERY_LINK} label="Gallery" onClick={() => setMobileOpen(false)} />
                  <MobileLink to={EVENTS_LINK} label="Events" onClick={() => setMobileOpen(false)} />

                  {["/placements", "/blog", "/contact", "/faqs"].map((to) => {
                    const label = to.replace("/", "");
                    return (
                      <MobileLink
                        key={to}
                        to={to}
                        label={label.charAt(0).toUpperCase() + label.slice(1)}
                        onClick={() => setMobileOpen(false)}
                      />
                    );
                  })}
                </div>
                <EnquiryDialog>
                  <Button variant="hero" className="mt-4 w-full">
                    <Phone className="size-4" /> Enquire Now
                  </Button>
                </EnquiryDialog>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}

function NavItem({
  to,
  label,
  scrolled,
}: {
  to: string;
  label: string;
  scrolled: boolean;
}) {
  return (
    <NavLink
      to={to}
      end={to === "/"}
      className={({ isActive }) =>
        cn(
          "rounded-full px-3.5 py-2 text-sm font-semibold transition-all duration-300",
          scrolled
            ? "text-blue-900 hover:bg-blue-50 hover:text-blue-700"
            : "text-blue-900 hover:bg-blue-50 hover:text-blue-700",
          isActive &&
            (scrolled
              ? "bg-blue-100 text-blue-700"
              : "bg-white text-blue-700")
        )
      }
    >
      {label}
    </NavLink>
  );
}
function MobileLink({ to, label, onClick }: { to: string; label: string; onClick: () => void }) {
  return (
    <NavLink
      to={to}
      end={to === "/"}
      onClick={onClick}
      className={({ isActive }) =>
        cn(
          "border-b py-3 text-base font-medium text-foreground transition-colors hover:text-accent",
          isActive && "text-accent",
        )
      }
    >
      {label}
    </NavLink>
  );
}
