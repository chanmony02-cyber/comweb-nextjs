import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { ROUTES } from "@/config/routes";

export function ProductInfoPanel({ name = "", description = "" }) {
  return (
    <div className="flex flex-col gap-6 pt-2">
      <h2 className="text-3xl font-bold text-navy font-display">{name}</h2>

      <p className="text-muted-foreground text-lg leading-relaxed font-sans">
        {description} {description} {description}
      </p>

      <div className="flex flex-wrap gap-6 mt-2">
        <Button
          asChild
          variant="outline"
          className="h-14 w-44 border-primary-blue text-lg text-primary-blue hover:border-primary-blue hover:bg-primary-blue hover:text-white font-display"
        >
          <a href="#">PDF Download</a>
        </Button>

        <Button
          asChild
          variant="outline"
          className="h-14 w-40 border-primary-blue text-lg text-primary-blue hover:border-primary-blue hover:bg-primary-blue hover:text-white font-display"
        >
          <Link to={ROUTES.CONTACT ?? "#"}>Contact Us</Link>
        </Button>
      </div>
    </div>
  );
}
