import Link from "next/link";

const navItems = {
    '/': {
        name: 'Home'
    },
    '/profile': {
        name: 'Profile'
    },
    '/about': {
        name: 'About'
    },
    'education': {
        name: 'Education'
    },
    'projects': {
        name: 'Projects'
    },
}

export default function Navbar(){
    return(
        <nav className="block top-0 z-10 mt-10 w-full max-w-full px-4 py-2 text-black dark:text-white border rounded-none h-max border-none bg-opacity-30 dark:backdrop-blur-2xl dark:backdrop-saturate-200 lg:px-8 lg:py-4">
            <div className="flex items-center justify-center gap-4 text-black dark:text-slate-200">
                <ul className="flex flex-row gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                    {Object.entries(navItems).map(([path, {name}]) => (
                        <li key={path} className="block p-1 font-sans text-sm antialiased font-normal leading-normal">
                            <Link href={path} className="flex items-center text-base font-medium transition-all hover:opacity-60">{name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}