import { Link } from "react-router-dom";
import { ArrowRight, Clock, Download, GraduationCap, Signal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { EnquiryDialog } from "@/components/enquiry-dialog";
import { categoryMeta, type Course } from "@/lib/site-data";
import { toast } from "sonner";

export function CourseCard({ course }: { course: Course }) {
  const Icon = course.icon;
  return (
    <article className="card-hover group flex h-full flex-col overflow-hidden rounded-2xl border bg-card shadow-soft">
      <div className="relative flex h-36 items-center justify-center overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_55%)]" />
        <Icon className="size-14 text-white/90 transition-transform duration-500 group-hover:scale-110" />
        <Badge className="absolute left-3 top-3 bg-white/15 text-white backdrop-blur-md">
          {categoryMeta[course.category].label}
        </Badge>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold leading-snug">{course.title}</h3>
        <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{course.description}</p>

        <div className="mt-4 flex flex-wrap gap-3 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <Clock className="size-3.5 text-accent" /> {course.duration}
          </span>
          <span className="inline-flex items-center gap-1">
            <Signal className="size-3.5 text-accent" /> {course.level}
          </span>
        </div>

        <div className="mt-4">
          <p className="mb-1.5 flex items-center gap-1 text-xs font-semibold text-foreground">
            <GraduationCap className="size-3.5 text-accent" /> Eligibility
          </p>
          <p className="text-xs text-muted-foreground">{course.eligibility}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {course.skills.slice(0, 4).map((s) => (
            <span key={s} className="rounded-full bg-secondary px-2.5 py-1 text-[0.7rem] font-medium text-secondary-foreground">
              {s}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-col gap-2 pt-4 sm:flex-row">
          <Button asChild variant="hero" size="sm" className="flex-1">
            <Link to={`/courses/${course.slug}`}>
              View Details <ArrowRight className="size-4" />
            </Link>
          </Button>
          <EnquiryDialog defaultCourse={course.title} title={`Enquire: ${course.title}`}>
            <Button variant="outline" size="sm" className="flex-1">
              Enquire Now
            </Button>
          </EnquiryDialog>
        </div>
        {/* <Button
          variant="ghost"
          size="sm"
          className="mt-2 text-muted-foreground"
          onClick={() =>
            toast.success("Brochure request received", {
              description: `We'll email the ${course.title} brochure shortly.`,
            })
          }
        >
          <Download className="size-4" /> Download Brochure
        </Button> */}
      </div>
    </article>
  );
}
