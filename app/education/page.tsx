import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


export default function Education(){
    const techwise_desc = "Selected among the top 120 students across select colleges for TechWise, a program offered by TalentSprint \
    and supported by Google that identifies and empowers capable students, preparing them for high-growth tech \
    careers. A holistic program cultivating Industry-Ready Skills in Python, Web Developement, DSA, and Corporate \
    Proficiency, TechWise enables its participants to be job ready." 

    const uwi_desc = "Graduated with an Associate Degree that mixes a variety of Information Technology (IT) disciplines, such as \
    information systems, programming, database systems, web design, hardware, and networking, with the business skills required to \
    get ready for a job in the IT sector. "

    const mercy_desc = "Currently studying Computer Science at Mercy University obtaining knowledge of programme creation and computer systems \
    analysis. Useful abilities in software engineering, computer architecture, operating systems, and computer networking"

    const education = [
        {   
            school: "Mercy University",
            title: "CS Major",
            duration: "FALL 2022 - SPRING 2026",
            degree: "Bachelor of Science - Computer Science",
            desc: mercy_desc
        },
        {
            school: "TechWise by Talentsprint, Powered by Google",
            title: "Student",
            duration: "MARCH 2023 - SEPTEMBER 2024",
            degree: "Certificate",
            desc: techwise_desc
        },
        {
            school: "UWI Roytec",
            title: "Information Systems Management",
            duration: "SEPTEMBER 2020 - AUGUST 2022",
            degree: "A.S. Information Systems Management - ADISM",
            desc: uwi_desc
        }
    ]
    return(
        <main className="flex flex-col items-center justify-between p-10 ">
            <h1 className="font-semibold text-zinc-200 text-2xl mb-5">EDUCATION</h1>
            {education.map((e: any) => (
                <div key={e.school} className="flex flex-col items-center justify-center">
                    <Card className="w-full md:w-4/5 lg:w-3/5 h-auto justify-center text-zinc-200 bg-zinc-800 border-none mb-10 rounded-2xl p-3">
                        <CardContent>
                            <h4 className="mt-5 text-base lg:text-xl font-semibold">{e.title + " @"} <span className="text-rose-700">{e.school}</span></h4> 
                            <p className="mt-5 text-sm font-semibold">{e.degree}</p>
                            <p className="mb-10 font-semibold text-sm">{e.duration}</p>
                            <p className="text-sm font-medium leading-8">{e.desc}</p>
                        </CardContent>
                    </Card>
                </div>
            ))}
        </main>
    )
}