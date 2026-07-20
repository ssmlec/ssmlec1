import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "@/components/breadcrumbs";

export function PageHero({
  title,
  subtitle,
  eyebrow,
  crumbs,
  children,
}: {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  crumbs: Crumb[];
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-hero pb-16 pt-32 text-white sm:pb-20 sm:pt-36">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-10 size-72 animate-float rounded-full bg-accent/25 blur-3xl" />
        <div className="absolute right-0 top-1/3 size-80 animate-float-slow rounded-full bg-primary/40 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(255,255,255,0.12),transparent_60%)]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={crumbs} />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          {eyebrow && (
            <span className="mb-4 inline-flex rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white/90">
              {eyebrow}
            </span>
          )}
          <h1 className="text-4xl font-extrabold leading-[1.05] sm:text-5xl md:text-6xl">{title}</h1>
          {subtitle && <p className="mt-5 max-w-2xl text-lg text-white/75">{subtitle}</p>}
          {children && <div className="mt-8">{children}</div>}
        </motion.div>
      </div>
    </section>
  );
}
