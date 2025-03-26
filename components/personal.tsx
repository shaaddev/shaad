import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { Link } from "next-view-transitions";

export function Personal() {
  const route = [
    { name: "Resume", url: "/CV.pdf" },
    { name: "Notes", url: "/w" },
  ];

  return (
    <section id="personal">
      <div className="flex min-h-0 flex-col gap-y-3 my-12">
        <h2 className="text-xl font-bold">Personal</h2>
        <div className="flex flex-row gap-2">
          {route.map((r) => (
            <Link
              key={r.name}
              href={r.url}
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
            >
              {r.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
