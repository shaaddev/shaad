'use client';
import { BsSun, BsMoon } from 'react-icons/bs';
import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

export default function Theme(){
    const [theme, setTheme] = useState<Theme>('dark');

    const toggleTheme = () => {
        if (theme === 'light'){
            setTheme('dark');
            window.localStorage.setItem('current_mode', 'dark');
            document.documentElement.classList.add('dark');
        } else {
            setTheme('light');
            window.localStorage.setItem('current_mode', 'light');
            document.documentElement.classList.remove('dark');
        }
    }

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme') as Theme | null;

        if (localTheme){
            setTheme(localTheme)

            if (localTheme === 'dark'){
                document.documentElement.classList.add('dark');
            }
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark')
            document.documentElement.classList.add('dark');
        }
    }, [])

    return (
        <button onClick={toggleTheme} className='fixed z-10 bottom-5 md:bottom-10 right-5 md:right-16 text-black dark:text-slate-200 p-2 rounded-full border border-black dark:border-white'>
            {theme === 'light' ? (<BsSun className='w-5 h-5 '/>) : ( <BsMoon className='w-5 h-5' /> )}
        </button>
    )
}