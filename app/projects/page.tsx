import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { FaGithub } from "react-icons/fa";
import { IoMdLink } from "react-icons/io";

import Link from "next/link";


export default function Projects(){
    const projects = [
        {
            title: "Social Events (NextJS)",
            desc: "This is a web app intended to help persons of interest to promote their upcoming events. Originally created using the python framework Django.",
            techStack: "Next.js, PostgreSQL, Tailwind CSS",
            link: "https://github.com/shaaddev/SocialEventsNextJS",
            activeLink: "https://social-events-next-js.vercel.app/"
        },
        {
            title: "PS Captures (Static)",
            desc: "Video Gallery of a few clips from my PlayStation Captures. Using Next.js, Tailwind CSS and inspiration from vercel's image gallery template",
            techStack: "Next.js, Tailwind CSS, Material UI",
            link: "https://github.com/shaaddev/PSCapturesStatic",
            activeLink: "https://ps-captures-static.vercel.app/"
        },
        {
            title: "Eternal Brawlers",
            desc: "Top Down 2D Indie Surival Game built using the Unity Engine.",
            techStack: "Unity Engine, C#",
            link: "https://github.com/shaaddev/Eternal-Brawlers",
            activeLink: "https://shaaddev.itch.io/eternal-brawlers"
        },
        {
            title: "Social Events",
            desc: "A web app intended for patrons of Trinidad and Tobago to seek for the next party locations.",
            techStack: "Python (Django), HTML x CSS, JavaScript, Bootstrap, PostgreSQL",
            link: "https://github.com/shaaddev/SocialEvents",
        },
        {
            title: "shaad",
            desc: "Latest version of the personal website that you're currently on.",
            techStack: "Next.js, TailwindCSS, TypeScript",
            link: "https://github.com/shaaddev/shaad",
        },
        {
            title: "Inventory Data",
            desc: "This is a simple Inventory Management System that was built using C/C++ - 16 Jul 2021",
            techStack: "C/C++",
            link: "https://github.com/shaaddev/Inventory-Data"
        },
    ]
    return(
        <main className="flex flex-col items-center justify-between p-10 md:p-10">
            <h1 className="font-semibold text-zinc-200 text-2xl mb-5">PROJECTS</h1>
            <div className="flex flex-col justify-center gap-2 lg:grid lg:grid-cols-2">
                {projects.map((p: any) => (
                    <div key={p.title} className="flex flex-col items-center justify-center">
                        <Card  className="w-full md:w-4/5 h-auto bg-zinc-800 text-neutral-200 mb-5 border-none rounded-2xl p-2">
                            <CardHeader>
                                <CardDescription className="inline-flex text-slate-200 gap-2 text-xl">
                                    <Link href={p.link} target="_blank" className="hover:opacity-75"><FaGithub /></Link>
                                    <Link href={p.activeLink || "#" } target="_blank" className="hover:opacity-75"><IoMdLink/></Link>
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <h3 className="text-rose-700 my-5 text-xl font-semibold">{p.title}</h3>
                                <p className="text-left text-base font-medium mb-7">{p.desc}</p>
                                <p className="opacity-50 text-sm mb-5">{p.techStack}</p>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>
        </main>
    )
}