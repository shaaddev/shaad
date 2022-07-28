import React from "react";
import { Link } from 'react-router-dom';
import '../css/Experience.css';


class Experience extends React.Component {
    onClick = (e) => {
        e.preventDefault()
    }
    render() {
        function openNav(){
            document.getElementById("exp-nav").style.width = "100%";
        }

        function closeNav(){
            document.getElementById("exp-nav").style.width = "0";
        }

        const experience = {
            "Digi-Data" : {
                jobTitle: "Web Developer Intern @",
                duration: "JUNE 2022 - JULY 2022",
                desc: [
                    "Built proof of concept form using .NET for clients",
                    "Connected client .NET website with SQL Server",
                    "Created sample project (under maintenance page using CMS)",
                    "Migrated pages built to live environment using a WordPress Migrations plugin"
                ]
            }
        }

        return (
            <div>

                <div className="exp-Nav" id="exp-nav">   
                    <h1 className="exp-nav-hangul">샤드</h1>   
                    <span id="exp-closebtn" onClick={closeNav}>&times;</span>
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

                <span className="exp-openbtn" onClick={openNav}>&#9776;</span>


                <section className="ex-section">

                    <img className="exp-image" src={'/images/videos/donald-sleepy.gif'} alt="experience" /> 
                    <div className="ex-background-color"></div> 

                    <h1 id="exp-hangul">샤드</h1>

                    <h3 className="exp-title">.Experience</h3>
                    
                    <div className="exp-listing">
                        {Object.keys(experience).map(key => (
                            <>
                                {/* <h3 className="exp-list-head">{key}</h3> */}
                                <h4 className="exp-list-title">{experience[key]["jobTitle"] + " "} <c>{key}</c></h4>
                                <p className="exp-list-duration">{experience[key]["duration"]}</p>
                                <ul className="exp-list-desc">
                                    {experience[key]["desc"].map(function (item) {
                                        return (
                                            <li>{item}</li>
                                        )
                                    })}
                                </ul>
                            </>
                        ))}
                    </div>
                </section>

                <div className="exp-contact">
                    <ul>
                        <li>
                            <a href="mailto:rashaadleehue1@gmail.com" target="">
                                <img className="exp-email-logo"  src={'images/logos/mail.png'} alt="Email"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/rashaadleehue-joseph/" target="_blank" rel='noreferrer'>
                                <img className="exp-linkedin-logo"  src={'images/logos/linkedin.png'} alt="Linkedin"/>
                            </a>
                        </li>   
                        <li>
                            <a href="https://github.com/shaaddev" target="_blank" rel='noreferrer'>
                                <img className="exp-github-logo" src={'images/logos/github.png'} alt="Github"/>
                            </a>
                        </li>
                    </ul>
                </div>

                <div id="exp-bottom">
                    <p>Made By <b>R.L.H</b> <br/> All rights reserved ©</p>
                </div>
            </div>
        )
    }
}

export default Experience;