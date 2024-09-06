import { about } from "@/constants/info"
import BlurFade from "./magicui/blur-fade"
import { Badge } from "./ui/badge"

export function Skills( { delay }: { delay: number }){
  return(
    <section id="skills">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={delay * 9}>
          <h2 className="text-xl font-bold">Skills</h2>
        </BlurFade>
        <div className="flex flex-wrap gap-1">
          {about.skills.map((skill: string, index) => (
            <BlurFade key={skill} delay={delay * 10 + index * 0.05}>
              <Badge key={skill} className="rounded-lg">{skill}</Badge>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  )
}