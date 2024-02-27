import {
    Card,
    CardContent
} from "@/components/ui/card"
import { education } from "@/constants/info"

export default function Education(){
    
    return(
        <main className="flex flex-col items-center justify-between p-10 ">
            <h1 className="font-semibold text-black dark:text-zinc-200 text-2xl mb-5">EDUCATION</h1>
            {education.map((e: any) => (
                <div key={e.id} className="flex flex-col items-center justify-center">
                    <Card className="w-full md:w-4/5 lg:w-3/5 2xl:w-2/5 h-auto text-black dark:text-zinc-200 bg-neutral-50 shadow shadow-black/10 dark:bg-zinc-800 border-none mb-10 rounded-2xl p-3">
                        <CardContent>
                            <h4 className="mt-5 text-base lg:text-xl font-semibold">{e.title + " @"} <span className="text-rose-700">{e.school}</span></h4> 
                            <p className="mt-5 text-sm font-semibold">{e.degree}</p>
                            <p className="mb-10 font-semibold text-sm">{e.duration}</p>
                            <p className="text-sm font-medium leading-8 break-words">{e.desc}</p>
                        </CardContent>
                    </Card>
                </div>
            ))}
        </main>
    )
}