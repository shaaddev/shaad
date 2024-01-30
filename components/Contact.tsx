import Link from "next/link"
import { FaGithub, FaLinkedin } from "react-icons/fa";


export default function Contact(){
    return(
        <>
            <div className="flex flex-col ">
                <ul className="flex flex-row gap-5 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8 text-neutral-200">
                    <li>
                        <Link href="https://github.com/shaaddev" target="_blank">
                            <FaGithub className="inline mr-1"/>Github
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.linkedin.com/in/rleehue-joseph/" target="_blank">
                            <FaLinkedin className="inline mr-1"/>Linkedin
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}