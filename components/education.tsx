import BlurFade from "./magicui/blur-fade"
import { education, Education } from "@/constants/info"
import { ResumeCard } from "./resume-card"

export function _Education({ delay }: { delay: number }){
  return(
    <section id="education">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={delay * 7}>
          <h2 className="text-xl font-bold">Education</h2>
        </BlurFade>
        {education.map((e: Education, index) => (
          <BlurFade key={index} delay={delay * 8 + index * 0.05}>
            <ResumeCard 
              key={e.id}
              href={e.href}
              logoUrl={e.logoUrl}
              altText={e.school}
              title={e.school}
              subtitle={e.degree}
              description={e.desc}
              period={e.duration}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  )
}