import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import LogoAsset from "@/assets/SSM-Lec-Logo.png";

export function Logo({ light = false, className }: { light?: boolean; className?: string }) {
  return (
    <Link to="/" className={cn("group flex items-center", className)} aria-label="SSM Learning Excellence Centre home">
      <span
        className={cn(
          "inline-flex items-center rounded-sm transition-transform group-hover:scale-[1.02]",
          light && "bg-white p-1.5 shadow-soft",
        )}
      >
        <img
          src={LogoAsset}
          alt="SSM Learning Excellence Centre logo"
          // width={560}
          // height={330}
          className="h-11 w-auto sm:h-12"
        />
      </span>
    </Link>
  );
}
