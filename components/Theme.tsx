'use client'
import { BsSun, BsMoon } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function Theme(){
    const [mounted, setMounted] = useState(false)
    const {setTheme, resolvedTheme } = useTheme()

    useEffect(() => setMounted(true), [])

    if (!mounted) return

    const toggleTheme = () => {
        if (resolvedTheme === 'dark'){
            setTheme('light')
        } else if (resolvedTheme === 'light'){
            setTheme('dark')
        }
    }

    return (
        <button 
            onClick={toggleTheme}
            className={btn_style}    
        >
            {resolvedTheme === 'dark' ? 
            (<BsSun className={btn_size} aria-label='the sun'/>) : 
            (<BsMoon className={btn_size} aria-label='the moon'/>)}
        </button>
    )
}

const btn_style = 'fixed z-10 bottom-5 md:bottom-10 right-5 md:right-16 text-black dark:text-slate-200 p-2 rounded-full border border-black dark:border-white'
const btn_size = 'w-5 h-5'