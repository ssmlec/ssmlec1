import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export interface Crumb {
  label: string;
  to?: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/70">
        <li>
          <Link to="/" className="inline-flex items-center gap-1 hover:text-white" aria-label="Home">
            <Home className="size-3.5" />
          </Link>
        </li>
        {items.map((c, i) => (
          <li key={i} className="flex items-center gap-1.5">
            <ChevronRight className="size-3.5 opacity-60" />
            {c.to && i < items.length - 1 ? (
              <Link to={c.to} className="hover:text-white">
                {c.label}
              </Link>
            ) : (
              <span className="font-medium text-white" aria-current="page">
                {c.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

