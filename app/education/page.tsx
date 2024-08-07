import {
    Card,
    CardContent
} from "@/components/ui/card"
import { education, Education } from "@/constants/info"

export default function EducationPage(){
    
    return(
        <main className="flex flex-col items-center justify-between p-10 lg:mx-48 xl:mx-72 2xl:mx-96">
            <h1 className="font-semibold text-black dark:text-zinc-200 text-2xl mb-5">EDUCATION</h1>
            {education.map((e: Education) => (
                <div key={e.id} className="flex flex-col items-center justify-center">
                    <Card className="w-full h-auto text-black dark:text-zinc-200 bg-neutral-50 shadow shadow-black/10 dark:bg-zinc-800 border-none mb-10 rounded-2xl p-0 lg:p-3">
                        <CardContent>
                            <h4 className="mt-5 text-base lg:text-xl font-semibold">{e.title + " @"} <span className="text-rose-600">{e.school}</span></h4> 
                            <p className="mt-5 text-sm font-semibold">{e.degree}</p>
                            <p className="mb-10 font-semibold text-sm">{e.duration}</p>
                            <p className="text-sm font-normal leading-8 break-words">{e.desc}</p>
                        </CardContent>
                    </Card>
                </div>
            ))}
        </main>
    )
}