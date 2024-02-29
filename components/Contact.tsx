import Link from "next/link"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


export default function Contact(){
    return(
        <>
            <div className="flex flex-col ">
                <ul className="flex flex-row gap-5 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8 text-black dark:text-neutral-200">
                    <li>
                        <Link href="https://github.com/shaaddev" target="_blank">
                            <FaGithub className="inline mr-1"/>
                            <p className="inline align-middle hover:bg-gradient-to-r hover:text-transparent hover:bg-clip-text hover:from-green-400 hover:to-blue-500">Github</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.linkedin.com/in/rleehue-joseph/" target="_blank">
                            <FaLinkedin className="inline mr-1"/>
                            <p className="inline align-middle hover:bg-gradient-to-r hover:text-transparent hover:bg-clip-text hover:from-blue-500 hover:to-pink-500">Linkedin</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/say_hi" target="">
                            <MdEmail className="inline mr-1"/>
                            <p className="inline align-middle hover:bg-gradient-to-r hover:text-transparent hover:bg-clip-text hover:from-pink-500 hover:to-yellow-500">Say Hi</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}