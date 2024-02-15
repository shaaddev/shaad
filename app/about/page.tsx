

export default function About(){
    const skills = ['Python', 'TypeScript', 'JavaScript ES6+', 'React.js/Next.js', 'Django/Flask', 'Java', 'Git', 'AWS']

    return(
        <main className="flex flex-col items-center justify-between p-10 md:p-10">
            <h1 className="font-semibold text-black dark:text-zinc-200 text-2xl mb-5">ABOUT</h1>
            <div className="text-black dark:text-zinc-200 lg:w-3/5 2xl:w-2/5">
                <p className="mb-10 font-semibold">I am currently a second year <strong className='text-green-700'> Computer Science </strong> major (Bachelor of Science) at <strong className='text-green-700'> Mercy University, Dobbs Ferry.</strong></p>
                <b>Skills:</b>
                <div className="grid gap-4 my-5 grid-cols-2">
                    {skills.map(function(skill){
                        return(
                            <ul key={skill} className="">
                                <li className="px-2 py-5 hover:bg-slate-200 hover:bg-opacity-5 hover:cursor-pointer">{skill}</li>
                            </ul>
                        )
                    })}
                </div>
                <p className="font-semibold">Seeking a challenging role within a progressive organization to provide the opportunity to utilize my skills as a <strong className="text-green-700">Software Development Engineer.</strong></p>
            </div>
        </main>
    )
}