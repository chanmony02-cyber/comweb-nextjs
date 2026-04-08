import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export function NavDropdown({ label, items, triggerClassName = "" }) {
  const [open, setOpen] = useState(false);

  const itemClassName =
    "cursor-pointer rounded-lg px-5 py-3 text-lg font-medium outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[highlighted]:bg-primary-blue data-[highlighted]:text-accent-foreground focus:bg-primary-blue focus:text-accent-foreground";

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className={cn(
            "flex items-center gap-1 text-md font-medium text-foreground hover:text-navy transition-colors focus:outline-none",
            triggerClassName,
          )}
        >
          {label}
          <ChevronDown
            className={cn(
              "w-3.5 h-3.5 text-muted-foreground transition-transform",
              open && "rotate-180",
            )}
          />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="start"
        sideOffset={10}
        className="w-full rounded-xl border-border/60 p-2 shadow-lg"
      >
        {items.map((item) => (
          <DropdownMenuItem key={item.label} asChild className={itemClassName}>
            <Link to={item.href} className="w-full" onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
