import Link from "next/link";

export default function Navbar(){
    return(
        <nav className="block top-0 z-10 mt-10 w-full max-w-full px-4 py-2 text-black dark:text-white bg-white dark:bg-neutral-900 border rounded-none h-max border-none bg-opacity-30 dark:backdrop-blur-2xl dark:backdrop-saturate-200 lg:px-8 lg:py-4">
            <div className="flex items-center justify-center text-black dark:text-slate-200">
                <div className="flex items-center gap-4">
                    <div className="block mr-4">
                        <ul className="flex flex-row gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                            <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                <Link href="/" className="flex items-center text-base font-medium">Home</Link>
                            </li>
                            <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                <Link href="/profile" className="flex items-center text-base font-medium">Profile</Link>
                            </li>
                            <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                <Link href="/about" className="flex items-center text-base font-medium">About</Link>
                            </li>
                            <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                <Link href="/education" className="flex items-center text-base font-medium">Education</Link>
                            </li>
                            <li className="block p-1 font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                                <Link href="/projects" className="flex items-center text-base font-medium">Projects</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}