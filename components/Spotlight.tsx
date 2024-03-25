'use client'
import Link from "next/link"
import * as React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
} from "@/components/ui/card"
import AutoPlay from 'embla-carousel-autoplay'
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"


export default function Spotlight(){
    const spotlight_projects = [
        {
            id: 1,
            title: "Compute Age",
            desc: "From the Terminal to the User Interface, originally created in Java, this web app helps you to calculate your age",
            techStack: "Next.js, Tailwind CSS, Shadcn",
            link: "https://github.com/shaaddev/ComputeAge",
            activeLink: "https://age.shaadleehue.com/",
            image: '/images/4.jpeg'
        },
        {
            id: 2,
            title: "Social Events",
            desc: "This is a web app intended to help persons of interest to promote their upcoming events. Originally created using the python framework Django.",
            techStack: "Next.js, PostgreSQL, Tailwind CSS, Shadcn, AWS",
            link: "https://github.com/shaaddev/SocialEventsNextJS",
            activeLink: "https://events.shaadleehue.com/",
            image: '/images/5.jpeg'
        },
        {
            id: 3,
            title: "Serenity Focus",
            desc: "A productivity tracker app developed by a group as part of the TechWise Program web development course, supported by Google and provided by TalentSprint",
            techStack: "Next.js, PostgreSQL, Tailwind CSS, DaisyUI",
            link: "https://github.com/TechWise-Project-2/SerenityFocus",
            activeLink: "https://serenityfocuss.com/",
            image: '/images/6.jpeg'
        },
    ]

    const plugin = React.useRef(
        AutoPlay({ delay: 3000, stopOnInteraction: true })
    )

    return(
        <>
            <Carousel
                plugins={[plugin.current]}
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
                className="hidden w-full md:max-w-xl lg:max-w-3xl  mx-auto transition-all md:block"
            >
                <CarouselContent>
                    {spotlight_projects.map((p) => (
                        <CarouselItem key={p.id} className="w-full">
                            <Card 
                                className="flex items-center justify-center rounded-3xl bg-cover bg-center w-full h-[500px]"
                                style={{ backgroundImage: `url(${p.image})` }}
                            >
                                <div className="flex place-self-end">
                                    <CardContent className="px-10 flex flex-col items-center justify-center z-10 place-self-end">
                                        <CardTitle>
                                            <div className="">
                                                <h1 className="text-2xl text-sky-500">{p.title}</h1>
                                            </div>
                                        </CardTitle>
                                        <CardDescription>
                                            <div className="text-slate-300 md:text-md lg:text-lg w-full">
                                                <p className="mb-4">{p.desc}</p>
                                                <p className="text-sky-500 md:text-xs lg:text-sm text-center">{p.techStack}</p>
                                            </div>
                                            <div className="flex flex-row gap-6 items-center justify-center mt-2 text-slate-300">
                                                <Link href={p.link} target="_blank" className="hover:opacity-75" aria-label="GitHub"><FaGithub className="w-5 h-5"/></Link>
                                                <Link href={p.activeLink} target={p.activeLink !== "" ? "_blank" : "" } className="hover:opacity-75" aria-label="external link"><FaExternalLinkAlt className="w-5 h-5"/></Link>
                                            </div>
                                        </CardDescription>
                                    </CardContent>
                                </div>
                            </Card>
                        </CarouselItem>
                    ))} 
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </>
    )
}