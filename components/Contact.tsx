import Link from "next/link"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const contactItems = [
    {
        name: "Github",
        icon: <FaGithub className="inline mr-2"/>,
        link: "https://github.com/shaaddev",
        target: '_blank'
    },
    {
        name: "Linkedin",
        icon: <FaLinkedin className="inline mr-2"/>,
        link: "https://www.linkedin.com/in/rleehue-joseph/",
        target: '_blank'
    },
    {
        name: "Hire Me",
        icon: <MdEmail className="inline mr-2"/>,
        link: "/say_hi",
        target: ''
    }
]

export default function Contact(){
    return(
        <>
            <div className="flex flex-col ">
                <ul className="flex flex-row gap-5 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8 text-black dark:text-neutral-200">
                    {contactItems.map((c) => (
                        <li key={c.name}>
                            <Link href={c.link} target={c.target}>
                                {c.icon}
                                <p className={`inline align-middle hover:bg-gradient-to-r hover:text-transparent hover:bg-clip-text
                                    ${c.name === 'Github' ? 'hover:from-green-400 hover:to-blue-500' : '' }
                                    ${c.name === 'Linkedin' ? 'hover:from-blue-500 hover:to-pink-500' : '' }
                                    ${c.name === 'Hire Me' ? 'hover:from-pink-500 hover:to-yellow-500' : '' }
                                    `}>
                                    {c.name}
                                </p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}