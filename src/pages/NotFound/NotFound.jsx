import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { notFoundContent } from "@/data/notFound/notFound";
import { ROUTES } from "@/config/routes";

export default function NotFound() {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-foreground">
          {notFoundContent.title}
        </h1>
        <p className="mb-4 text-xl text-muted-foreground">
          {notFoundContent.message}
        </p>
        <Link
          to={ROUTES.HOME}
          className="text-navy underline hover:text-navy/90"
        >
          {notFoundContent.cta}
        </Link>
      </div>
    </div>
  );
}
