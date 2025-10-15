import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="select-none ">
      <h1
        className=" font-semibold tracking-tight text-center mb-8"
        style={{
          fontSize: "clamp(2.75rem, 6vw + 1rem, 6rem)",
          lineHeight: 1.05,
        }}
      >
        Shaad is building{" "}
        <span>
          <Link
            href="https://masira.store/"
            className="hover:underline hover:cursor-ne-resize"
            target="_blank"
            rel="noopener noreferrer"
          >
            Masira.
          </Link>
        </span>
      </h1>
      <section className="flex flex-row justify-center gap-3">
        <div className="flex flex-row items-center gap-3">
          <Button
            asChild
            variant="link"
            className="w-full max-w-xs text-muted-foreground"
          >
            <Link
              href="https://github.com/shaaddev"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 ease-in-out hover:text-primary"
            >
              GitHub
            </Link>
          </Button>
          <Button
            asChild
            variant="link"
            className="w-full max-w-xs text-muted-foreground"
          >
            <Link
              href="https://www.linkedin.com/in/rleehue-joseph/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 ease-in-out hover:text-primary"
            >
              LinkedIn
            </Link>
          </Button>
          <Button
            asChild
            variant="link"
            className="w-full max-w-xs text-muted-foreground"
          >
            <Link
              href="/CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 ease-in-out hover:text-primary"
            >
              Resume
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
