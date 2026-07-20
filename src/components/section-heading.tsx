import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && (
        
        <span
          className={cn(
            "inline-flex items-center gap-4 rounded-full border border-white/25 bg-white/10 px-4 mx-4 py-1.5 text-sm font-medium backdrop-blur-md",
            light
              ? "border-white/30 text-white/90"
              : "border-accent/30 bg-accent/10 text-accent",
          )}

          style={{margin:"50px 0px"}}
        >
          <Sparkles className="size-4 text-accent" />

          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl font-bold sm:text-4xl md:text-[2.6rem] md:leading-[1.1]",
          light ? "text-white" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={cn("mt-4 text-base sm:text-lg", light ? "text-white/70" : "text-muted-foreground")}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
