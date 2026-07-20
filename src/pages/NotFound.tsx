import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-hero px-4 text-center text-white">
      <p className="font-display text-7xl font-extrabold">404</p>
      <h1 className="mt-4 text-2xl font-semibold">Page not found</h1>
      <p className="mt-2 max-w-md text-white/70">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Button asChild variant="hero" className="mt-6">
        <Link to="/">Back to Home</Link>
      </Button>
    </div>
  );
}
