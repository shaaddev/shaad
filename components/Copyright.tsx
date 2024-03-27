export default function Copyright(){
    return(
        <div className="fixed bottom-2 left-5 -z-10 hidden lg:block font-medium">
            <p 
                className="text-sm text-slate-800 dark:text-slate-300"
            >
                &copy; {new Date().getFullYear()} Made by 
                <span className="text-[#009be6]"> S.L.H</span>
            </p>
        </div>
    )
}