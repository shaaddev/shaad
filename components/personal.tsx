import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { Link } from "next-view-transitions";

export function Personal() {
  const route = [
    { name: 'Contact Me', url: '/say_hi'},
    { name: 'Resume', url: '/CV.pdf'}
  ]

  return (
    <div className="flex flex-row gap-2 my-5">
      {route.map((r) => (
        <Link
          key={r.name}
          href={r.url}
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: "outline", size: "sm", }))}
        >
          {r.name}
        </Link>
      ))}
    </div>
  )
}