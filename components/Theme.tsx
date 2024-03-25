'use client'
import { BsSun, BsMoon } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';

export default function Theme(){
    const [mounted, setMounted] = useState(false)
    const {setTheme, resolvedTheme } = useTheme()

    useEffect(() => setMounted(true), [])

    if (!mounted) return (
        <Image 
            src='data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=='
            width={20}
            height={20}
            sizes='20x20'
            alt="toggle"
            priority={false}
            title="toggle"
        />
    )

    if (resolvedTheme === 'dark'){
        return (
            <button onClick={() => setTheme('light')} className='fixed z-10 bottom-5 md:bottom-10 right-5 md:right-16 text-black dark:text-slate-200 p-2 rounded-full border border-black dark:border-white' aria-label='sun'>
                <BsSun className='w-5 h-5 '/>
            </button>
        )
    }

    if (resolvedTheme === 'light'){
        return (
            <button onClick={() => setTheme('dark')} className='fixed z-10 bottom-5 md:bottom-10 right-5 md:right-16 text-black dark:text-slate-200 p-2 rounded-full border border-black dark:border-white' aria-label='moon'>
                <BsMoon className='w-5 h-5 '/>
            </button>
        )
    }
}