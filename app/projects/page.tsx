import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
} from "@/components/ui/card"
import { FaGithub } from "react-icons/fa";
import { IoMdLink } from "react-icons/io";
import Link from "next/link";
import { projects } from "@/constants/info";

interface Projects {
    id: number;
    link: string;
    activeLink: string;
    title: string;
    desc: string;
    techStack: string;
}

export default function Projects(){
    
    return(
        <main className="flex flex-col items-center justify-between p-10">
            <h1 className="font-semibold text-black dark:text-zinc-200 text-2xl mb-5 lg:mb-0">PROJECTS</h1>
            <div className="flex flex-col justify-center md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-4 md:p-10 xl:p-24">
                {projects.map((p: Projects) => (
                    <div key={p.id} className="flex flex-col items-center justify-center">
                        <Card  className="w-full h-auto md:w-full md:h-full mb-5 lg:mb-0 text-black bg-neutral-50 shadow shadow-black/10 dark:bg-zinc-800 dark:text-neutral-200 border-none rounded-2xl p-2">
                            <CardHeader>
                                <CardDescription className="inline-flex text-black dark:text-slate-200 gap-2 text-xl">
                                    <Link href={p.link} target="_blank" className="hover:opacity-75"><FaGithub /></Link>
                                    <Link href={p.activeLink} target={p.activeLink !== "" ? "_blank" : "" } className="hover:opacity-75"><IoMdLink/></Link>
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <h3 className="text-rose-700 my-5 text-xl font-semibold">{p.title}</h3>
                                <p className="text-left text-sm  leading-8 mb-7">{p.desc}</p>
                                <p className="opacity-50 text-sm mb-5">{p.techStack}</p>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>
        </main>
    )
}