import {
    Card,
    CardContent,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import Contact from "./Contact"
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";


export default function HomePage(){
    const desc = "I'm a certified cloud developer - associate and software development engineer based in New York. I have interests in full-stack web development, cloud computing, and helping \
                    businesses scale their architecture. ";

    return(
        <>
            <div className="flex px-1 justify-center items-center">
                <Card className="w-full md:w-4/5 md:h-auto bg-zinc-800 text-neutral-200 mb-9 border-none rounded-2xl bg-[url('/images/23.jpg')] bg-cover bg-center">
                    <CardContent>
                        <div className="p-5 md:p-12">
                            <h1 className="text-3xl md:text-5xl lg:text-6xl leading-10 font-semibold mb-5">Shaad<span className="text-sky-800">Lee Hue</span></h1>
                            <h2 className="text-normal md:text-lg mb-5 font-semibold"><span className='bg-gradient-to-r text-transparent bg-clip-text from-orange-300 to-sky-800'>Experimental</span> Developer</h2>
                            <h3 className="text-sm sm:text-normal md:text-base font-semibold">{desc}</h3>
                            <Button className="mt-14 rounded-full bg-sky-900 px-5 py-1 font-medium text-neutral-200 dark:hover:bg-black">
                                <Link href='CV.pdf' target="_blank" rel="noopener noreferrer" locale={false}>
                                    Check Resume <MdArrowOutward className="inline top-0"/>
                                </Link>
                            </Button>
                        </div>
                        
                    </CardContent>
                </Card>
            </div>
            <div className="flex mx-auto my-5">
                <Contact />
            </div>
        </>
    )
}