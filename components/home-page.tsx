import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Download } from "lucide-react";
import BlurFade from "./magicui/blur-fade";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


export function HomePage({ delay }: { delay: number }) {
    const desc = "Certified AWS developer - associate and software development engineer based in New York with interests in full-stack web development, cloud computing, and DevOps.";

    return(
        <section id="hero">
          <div className="mx-auto w-full max-w-2xl space-y-8">
            <div className="gap-2 flex justify-between">
              <div className="flex flex-1 flex-col space-y-1.5">
                <BlurFade
                  delay={delay}
                  yOffset={8}
                  className="tracking-tighter"
                >
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Shaad
                    <span className="ml-2 bg-gradient-to-r text-transparent bg-clip-text from-rose-300 to-sky-600">
                      Lee Hue
                    </span>
                  </h1>
                  <h2 className="text-normal md:text-lg mb-5 font-medium">
                    <span className="mr-2 bg-gradient-to-r text-transparent bg-clip-text from-rose-300 to-sky-600">
                      Experimental
                    </span>
                    Developer
                  </h2>
                </BlurFade>
                <BlurFade delay={delay} yOffset={8}>
                  <p className="text-sm sm:text-normal md:text-base font-medium">{desc}</p>
                  <Button className="mt-14 rounded-full bg-sky-900 px-5 py-1 font-medium text-neutral-200 dark:hover:bg-slate-150 dark:hover:text-black">
                    <Link href="CV.pdf" target="_blank" rel="noopener noreferrer" locale={false}>
                      Check Resume <Download className="inline ml-2 size-4"/>
                    </Link>
                  </Button>
                </BlurFade>
              </div>
              <BlurFade delay={delay}>
                <Avatar className="size-28 border">
                  <AvatarImage alt='Donald Duck' src='/sleep.jpg' className="object-cover"/>
                  <AvatarFallback>SLH</AvatarFallback>
                </Avatar>
              </BlurFade>
            </div>
          </div>
        </section>
    )
}