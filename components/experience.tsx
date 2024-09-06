import BlurFade from "./magicui/blur-fade"
import { ResumeCard } from "./resume-card"
import { experience, Experience } from "@/constants/info"


export function _Experience({ delay }: { delay: number }){
  return(
    <section id="experience">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={delay * 5}>
          <h2 className="text-xl font-bold">Experience</h2>
        </BlurFade>
        {experience.map((e, index) => (
          <BlurFade key={index} delay={delay * 6 + index * 0.05}>
            <ResumeCard 
              key={e.company}
              href={e.href}
              logoUrl={e.logoUrl}
              altText={e.company}
              title={e.company}
              subtitle={e.title}
              period={e.duration}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  )
}