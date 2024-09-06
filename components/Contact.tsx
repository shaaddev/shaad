import Link from "next/link"
import BlurFade from "./magicui/blur-fade"
import { Button } from "./ui/button"

export default function Contact({ delay }: {delay: number}) {
    return(
        <section id="contact">
            <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12 ">
              <BlurFade delay={delay * 16}>
                <div className="space-y-3">
                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                    Contact
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Get in Touch
                  </h2>
                  <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Want to chat? Just shoot me a dm{" "}
                    <Link
                      href='https://www.linkedin.com/in/rleehue-joseph/'
                      className="text-blue-500 hover:underline"
                    >
                      with a direct question on linkedin
                    </Link>{" "}
                    or send me an email
                  </p>
                  <Link href='/say_hi' className=" ">
                      <Button type="button" className="rounded-lg mt-5">
                        Say Hi
                      </Button>
                    </Link>
                </div>
              </BlurFade>
            </div>
        </section>
    )
}