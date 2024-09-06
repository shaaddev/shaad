import Markdown from 'react-markdown'
import BlurFade from "./magicui/blur-fade";
import { about } from '@/constants/info';

export function About({ delay }: { delay: number }){
  return(
    <section id="about">
      <BlurFade delay={delay * 3}>
        <h2 className='text-xl font-bold'>About</h2>
      </BlurFade>
      <BlurFade delay={delay * 4}>
        <Markdown className='prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert'>
          {about.summary}
        </Markdown>
      </BlurFade>
    </section>
  )
}