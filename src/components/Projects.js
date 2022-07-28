import React from "react";
import { Link } from 'react-router-dom';
import '../css/Projects.css';

class Projects extends React.Component {
    onClick = (e) => {
        e.preventDefault()
    }
    render() {
        function openNav(){
            document.getElementById("proj-nav").style.width = "100%";
        }

        function closeNav(){
            document.getElementById("proj-nav").style.width = "0";
        }

        const projects = {
            "Social Events" : {
                desc: "A web app intended for patrons of Trinidad and Tobago to seek for the next party locations.",
                techStack: "Python (Django), HTML x CSS, JavaScript, Bootstrap, PostgreSQL",
                link: "https://github.com/shaaddev"
            },
            "shaad" : {
                desc: "Portfolio of the developer that created this website.",
                techStack: "React.js, HTML x CSS",
                link: "https://github.com/shaaddev/shaad"
            },
            "Roytec Airlines" : {
                desc: "A school project that was done with static scripting, then migrated into django for backend development.",
                techStack: "Python (Django), HTML x CSS, JavaScript, Bootstrap, SQLite",
                link: "https://github.com/shaaddev/airlineweb"
            }
        }

        return (
            <div>

                <div className="proj-Nav" id="proj-nav">
                    <h1 className="proj-nav-hangul">샤드</h1>      
                    <span id="proj-closebtn" onClick={closeNav}>&times;</span>
                    <Link to="/"><h2>Home</h2></Link>
                    <Link to="/about"><h2>About</h2></Link>
                    <Link to="/experience"><h2>Experience</h2></Link>
                    <Link to="/projects"><h2>Projects</h2></Link>

                    <ul className='nav-icons'>
                        <li><a href="mailto:rashaadleehue1@gmail.com" target=""><img className="nav-mail" src={'images/logos/mail.png'} alt="mail"/></a></li>
                        <li><a href="https://www.linkedin.com/in/rashaadleehue-joseph/" target="_blank" rel='noreferrer'><img className="nav-linkedin" src={'images/logos/linkedin.png'} alt="link"/></a></li>
                        <li><a href="https://github.com/shaaddev" target="_blank" rel='noreferrer'><img className="nav-git" src={'images/logos/github.png'} alt="git"/></a></li>
                    </ul>
                </div>

                <span className="proj-openbtn" onClick={openNav}>&#9776;</span>


                <section className="project-section">
                    <img className="project-image" src={"/images/videos/donald-angry.gif"} alt="snow"></img>
                    <div className="projects-background-color"></div>
                    <h1 id="project-hangul">샤드</h1>

                    <h3 className='project-title'>.Projects</h3>

                    {Object.keys(projects).map(key => (
                        <div className="project-list">
                            <a href={projects[key]["link"]} target="_blank" rel="noreferrer"><img className="list-git" src={'images/logos/github.png'} alt="git"/></a>
                            <h3 className="proj-list-title">{key}</h3>
                            <p className="proj-list-desc">{projects[key]["desc"]}</p>
                            <p className="proj-list-techStack">{projects[key]["techStack"]}</p>
                        </div>
                    ))}
                    
                </section>

                <div className="project-contact">
                    <ul>
                        <li>
                            <a href="mailto:rashaadleehue1@gmail.com" target="">
                                <img className="project-email-logo"  src={'images/logos/mail.png'} alt="Email"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/rashaadleehue-joseph/" target="_blank" rel='noreferrer'>
                                <img className="project-linkedin-logo"  src={'images/logos/linkedin.png'} alt="Linkedin"/>
                            </a>
                        </li>   
                        <li>
                            <a href="https://github.com/shaaddev" target="_blank" rel='noreferrer'>
                                <img className="project-github-logo" src={'images/logos/github.png'} alt="Github"/>
                            </a>
                        </li>
                    </ul>
                </div>

                <div id="project-bottom">
                    <p>Made By <b>R.L.H</b> <br/> All rights reserved ©</p>
                </div>
            </div>
        )
    }
}

export default Projects;