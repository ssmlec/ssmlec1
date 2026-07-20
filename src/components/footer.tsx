import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Facebook, Linkedin, Instagram, Youtube, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { categoryMeta, coursesByCategory, contactInfo, type CourseCategory } from "@/lib/site-data";

const categories = Object.keys(categoryMeta) as CourseCategory[];

const quickLinks = [
  { to: "/about", label: "About Us" },
  { to: "/courses", label: "Courses" },
  { to: "/placements", label: "Placements" },
  { to: "/gallery", label: "Gallery" },
  { to: "/blog", label: "Blog" },
  { to: "/events", label: "Events" },
  { to: "/faqs", label: "FAQs" },
  { to: "/contact", label: "Contact" },
];

export function Footer() {
  const [email, setEmail] = useState("");

  const subscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    toast.success("Subscribed!", { description: "You're on the SSMLEC newsletter." });
    setEmail("");
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
      <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-accent/20 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo light />
            <p className="mt-4 max-w-sm text-sm text-primary-foreground/70">
              Craft your inner technocrat and shape your professional future. An industry-centered
              Learning Excellence Centre for Automation, AI and Industry 4.0.
            </p>
            {/* <div className="mt-5 flex gap-2">
              {[
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Facebook, label: "Facebook" },
                { icon: Instagram, label: "Instagram" },
                { icon: Youtube, label: "YouTube" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid size-9 place-items-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-accent hover:bg-accent hover:text-white"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div> */}

            <div className="mt-5 flex gap-2">
                  {[
                    { 
                      icon: Linkedin, 
                      label: "LinkedIn", 
                      url: "https://www.linkedin.com/in/harshal-patel-70111a344/"
                    },
                    { 
                      icon: Facebook, 
                      label: "Facebook", 
                      url: "https://www.facebook.com/p/SSM-Learning-Excellence-Centre-61566556467100/"
                    },
                    { 
                      icon: Instagram, 
                      label: "Instagram", 
                      url: "https://www.instagram.com/ssmlec24/"
                    },
                    // { 
                    //   icon: Youtube, 
                    //   label: "YouTube", 
                    //   url: "https://www.youtube.com/@your-channel"
                    // },
                  ].map(({ icon: Icon, label, url }) => (
                    <a
                      key={label}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="grid size-9 place-items-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-accent hover:bg-accent hover:text-white"
                    >
                      <Icon className="size-4" />
                    </a>
                  ))}
                </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-primary-foreground/70 transition-colors hover:text-accent">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">Courses</h3>
            <ul className="space-y-2 text-sm">
              {categories.map((cat) => (
                <li key={cat}>
                  <Link to={`/courses#${cat}`} className="font-semibold text-primary-foreground/85 hover:text-accent">
                    {categoryMeta[cat].label}
                  </Link>
                  <ul className="mt-1 space-y-1">
                    {coursesByCategory(cat).slice(0, 2).map((c) => (
                      <li key={c.slug}>
                        <Link
                          to={`/courses/${c.slug}`}
                          className="text-xs text-primary-foreground/60 transition-colors hover:text-accent"
                        >
                          {c.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">Get in Touch</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
                <span>{contactInfo.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 shrink-0 text-accent" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-accent">{contactInfo.phone}</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 shrink-0 text-accent" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-accent">{contactInfo.email}</a>
              </li>
            </ul>

            {/* <form onSubmit={subscribe} className="mt-5">
              <label htmlFor="newsletter" className="mb-2 block text-xs font-semibold uppercase tracking-wide text-white">
                Newsletter
              </label>
              <div className="flex gap-2">
                <Input
                  id="newsletter"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="border-white/20 bg-white/10 text-white placeholder:text-white/50"
                />
                <Button type="submit" variant="accent" size="icon" aria-label="Subscribe">
                  <Send className="size-4" />
                </Button>
              </div>
            </form> */}
          </div>
        </div>
      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.134544025956!2d72.75712867587472!3d21.147043283704207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f9bef549299%3A0x6a4d5142101724c8!2sSSM%20Learning%20Excellence%20Centre!5e0!3m2!1sen!2sin!4v1784115735535!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe> */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-white/10">
          <iframe
            title="SSMLEC location map"
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.134544025956!2d72.75712867587472!3d21.147043283704207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f9bef549299%3A0x6a4d5142101724c8!2sSSM%20Learning%20Excellence%20Centre!5e0!3m2!1sen!2sin!4v1784115735535!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin`}
            className="h-56 w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm text-primary-foreground/60 sm:flex-row">
          <p>© {new Date().getFullYear()} SSM Learning Excellence Centre. All rights reserved.</p>
          <div className="flex gap-4">
            {/* <Link to="/privacy" className="hover:text-accent">Privacy Policy</Link> */}
            {/* <Link to="/terms" className="hover:text-accent">Terms &amp; Conditions</Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
