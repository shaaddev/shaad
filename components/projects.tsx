import BlurFade from "./magicui/blur-fade"
import { ProjectCard } from "./project-card"
import { projects } from "@/constants/info"

export function Projects({ delay }: { delay: number }){
  return(
    <section id="projects">
      <div className="space-y-12 w-full py-12">
        <BlurFade delay={delay * 11}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Projects
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Check out my latest work
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed tracking-tight">
                {`I've worked on a variety of projects, from simple websites to complex web applications.
                Here are a few of my favourites`}
              </p>
            </div>
          </div>
        </BlurFade>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
          {projects.map((p, index) => (
            <BlurFade key={index} delay={delay * 12 + index * 0.05}>
              <ProjectCard 
                href={p.activeLink}
                key={index}
                title={p.title}
                description={p.desc}
                tags={p.techStack}
                image={p.image}
                link={p.link}
                dates={p.dates}
                links={p.links}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  )
}