import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Contact from "./Contact"
  

export default function HomePage(){
    const desc = "I'm an aspiring software development engineer based in New York. I have interests in full-stack web development, cloud computing, machine learning, and everything in between.";

    return(
        <>
            <div className="flex px-1 justify-center items-center">
                <Card className="w-full md:w-4/5 md:h-[450px] bg-zinc-800 text-neutral-200 mb-9 border-none rounded-2xl bg-[url('/images/23.jpg')] bg-cover bg-center">
                    <CardContent>
                        <div className="p-5 md:p-12">
                            <h1 className="text-3xl md:text-5xl lg:text-6xl leading-10 font-semibold mb-5">Shaad <span className="text-sky-800">Lee Hue</span></h1>
                            <h2 className="text-normal md:text-lg mb-5 font-semibold"><span className='text-sky-800'>Experimental</span> Developer</h2>
                            <h3 className="text-sm sm:text-normal md:text-lg font-semibold">{desc}</h3>
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