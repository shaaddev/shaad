interface Projects {
    id: number;
    title: string;
    desc: string;
    techStack: string;
    link: string;
    activeLink: string;
}

interface Education {
    id: number;
    school: string;
    title: string;
    duration: string;
    degree: string;
    desc: string;
}

export const projects: Projects[] = [
    {
        id: 1,
        title: "Compute Age",
        desc: "From the Terminal to the User Interface, originally created in Java, this web app helps you to calculate your age",
        techStack: "Next.js,Tailwind CSS, Shadcn",
        link: "https://github.com/shaaddev/ComputeAge",
        activeLink: "https://age.shaadleehue.com/"
    },
    {
        id: 2,
        title: "Social Events (NextJS)",
        desc: "This is a web app intended to help persons of interest to promote their upcoming events. Originally created using the python framework Django.",
        techStack: "Next.js, PostgreSQL, Tailwind CSS, Shadcn",
        link: "https://github.com/shaaddev/SocialEventsNextJS",
        activeLink: "https://events.shaadleehue.com/"
    },
    {
        id: 3,
        title: "Serenity Focus",
        desc: "A productivity tracker app developed by a group as part of the TechWise Program web development course, supported by Google and provided by TalentSprint",
        techStack: "MongoDB, Express.js, HTML x CSS",
        link: "https://github.com/TechWise-Project-2/SerenityFocus",
        activeLink: "https://serenityfocuss.com/"
    },
    {
        id: 4,
        title: "PS Captures (Static)",
        desc: "Video Gallery of a few clips from my PlayStation Captures. Using Next.js, Tailwind CSS and inspiration from vercel's image gallery template",
        techStack: "Next.js, Tailwind CSS, Material UI",
        link: "https://github.com/shaaddev/PSCapturesStatic",
        activeLink: "https://ps-captures-static.vercel.app/"
    },
    {
        id: 5,
        title: "Eternal Brawlers",
        desc: "Top Down 2D Indie Surival Game built using the Unity Engine.",
        techStack: "Unity Engine, C#",
        link: "https://github.com/shaaddev/Eternal-Brawlers",
        activeLink: "https://shaaddev.itch.io/eternal-brawlers"
    },
    {
        id: 6,
        title: "Social Events",
        desc: "A web app intended for patrons of Trinidad and Tobago to seek for the next party locations.",
        techStack: "Python (Django), HTML x CSS, JavaScript, Bootstrap, PostgreSQL",
        link: "https://github.com/shaaddev/SocialEvents",
        activeLink: ""
    },
    {
        id: 7,
        title: "shaad",
        desc: "Latest version of the personal website that you're currently on.",
        techStack: "Next.js, TailwindCSS, Shadcn",
        link: "https://github.com/shaaddev/shaad",
        activeLink: ""
    }
]

const techwise_desc = "Selected among the top 120 students across select colleges for TechWise, a program offered by TalentSprint \
and supported by Google that identifies and empowers capable students, preparing them for high-growth tech \
careers. A holistic program cultivating Industry-Ready Skills in Python, Web Developement, DSA, and Corporate \
Proficiency, TechWise enables its participants to be job ready." 

const uwi_desc = "Graduated with an Associate Degree that mixes a variety of Information Technology (IT) disciplines, such as \
information systems, programming, database systems, web design, hardware, and networking, with the business skills required to \
get ready for a job in the IT sector. "

const mercy_desc = "Currently studying Computer Science at Mercy University obtaining knowledge of programme creation and computer systems \
analysis. Useful abilities in software engineering, computer architecture, operating systems, and computer networking."

export const education: Education[] = [
    {   
        id: 1,
        school: "Mercy University",
        title: "CS Major",
        duration: "FALL 2022 - SPRING 2026",
        degree: "Bachelor of Science - Computer Science",
        desc: mercy_desc
    },
    {
        id: 2,
        school: "TechWise by Talentsprint, Powered by Google",
        title: "Student",
        duration: "MARCH 2023 - SEPTEMBER 2024",
        degree: "Certificate",
        desc: techwise_desc
    },
    {
        id: 3,
        school: "UWI Roytec",
        title: "Information Systems Management",
        duration: "SEPTEMBER 2020 - AUGUST 2022",
        degree: "A.S. Information Systems Management - ADISM",
        desc: uwi_desc
    }
]