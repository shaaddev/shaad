import { HomePage } from "@/components/home-page";
import { Gallery } from "@/components/gallery";
import { About } from "@/components/about";
import { _Education } from "@/components/education";
import { _Experience } from "@/components/experience";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import Contact from "@/components/contact";


export default function Home() {
  const delay = 0.04;
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <HomePage delay={delay}/>
      <Gallery delay={delay}/>
      <About delay={delay}/>
      <_Experience delay={delay}/>
      <_Education delay={delay}/>
      <Skills delay={delay}/>
      <Projects delay={delay}/>
      <Contact delay={delay}/>
    </main>
  );
}
