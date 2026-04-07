import Link from "next/link";
import { ROUTES } from "@/config/routes";
import { getNotFoundContent } from "@/services/notFound";

export default function NotFound() {
  const notFoundContent = getNotFoundContent();
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
          href={ROUTES.HOME}
          className="text-navy underline hover:text-navy/90"
        >
          {notFoundContent.cta}
        </Link>
      </div>
    </div>
  );
}
