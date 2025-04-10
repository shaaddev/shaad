import { projects } from "@/constants/info";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Github, Globe } from "lucide-react";
import { buttonVariants } from "./ui/button";

export function Projects() {
  return (
    <section id="projects">
      <div className="flex min-h-0 flex-col gap-y-3 my-12">
        <h2 className="text-xl font-bold mb-5">Projects</h2>
        {projects.map((project, index) => (
          <div key={index} className="flex flex-row justify-between">
            <div className="flex flex-col items-start leading-8 gap-2 mb-5">
              <h2 className="text-sm sm:text-md font-medium">
                {project.title}
              </h2>
              <p className="text-sm sm:text-sm text-muted-foreground">
                {project.dates}
              </p>
              {project.techStack && project.techStack.length > 0 && (
                <div className="flex flex-row gap-1">
                  <p className="hidden text-sm sm:block text-muted-foreground">
                    {project.techStack.join(", ")}
                  </p>
                </div>
              )}
            </div>
            <div className="flex gap-2">
              <Link
                href={`${project.activeLink}`}
                target="_blank"
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" })
                )}
              >
                <Globe className="w-4 h-4" />
              </Link>
              <Link
                href={`${project.link}`}
                target="_blank"
                className={cn(
                  buttonVariants({ variant: "outline", size: "sm" })
                )}
              >
                <Github className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
