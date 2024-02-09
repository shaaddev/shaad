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

export default function Projects(){
    
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
                                    <Link href={p.activeLink || "" } target={p.activeLink ? "_blank" : "" } className="hover:opacity-75"><IoMdLink/></Link>
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