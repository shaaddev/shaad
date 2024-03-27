'use client'
import { BsSun, BsMoon } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';

export default function Theme(){
    const [mounted, setMounted] = useState(false)
    const {setTheme, resolvedTheme } = useTheme()

    useEffect(() => setMounted(true), [])

    if (!mounted) return

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