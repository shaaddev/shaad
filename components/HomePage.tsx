import {
    Card,
    CardContent,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import Contact from "./Contact"
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

export default function HomePage(){
    const desc = "I'm a certified AWS developer - associate and software development engineer based in New York. I have interests in full-stack web development, cloud computing, and DevOps.";

    return(
        <>
            <div className="flex px-1 justify-center items-center">
              <div className="m-2 lg:my-12 lg:mx-48">
                  <h1 className="text-3xl md:text-5xl lg:text-6xl leading-10 font-semibold mb-5">
                      Shaad 
                      <span className="ml-2 bg-gradient-to-r text-transparent bg-clip-text from-rose-300 to-sky-600 mr-1">
                          Lee Hue
                      </span>
                  </h1>
                  <h2 className="text-normal md:text-lg mb-5 font-medium">
                      <span className='bg-gradient-to-r text-transparent bg-clip-text from-rose-300 to-sky-600 mr-1'>
                          Experimental
                      </span>
                      Developer
                  </h2>
                  <h3 className="text-sm sm:text-normal md:text-base font-medium">{desc}</h3>
                  <Button className="mt-14 rounded-full bg-sky-900 px-5 py-1 font-medium text-neutral-200 dark:hover:bg-black">
                      <Link href='CV.pdf' target="_blank" rel="noopener noreferrer" locale={false}>
                          Check Resume <MdArrowOutward className="inline top-0"/>
                      </Link>
                  </Button>
                </div>
            </div>
            <div className="flex mx-auto my-5">
                <Contact />
            </div>
        </>
    )
}