import React from "react";
import { Link } from 'react-router-dom';
import '../css/Projects.css';

class Projects extends React.Component {
    render() {
        return (
            <div>

                <div className="project-navigation" id="project-header">
                    <input type="checkbox" id="nav-toggle-tab" className="nav-toggle"/>
                    <div className="inner-header">    
                    <ul>
                        <li><Link to="/"><h2>.Home</h2></Link></li> 
                        <li><Link to="/about"><h2>.About</h2></Link></li> 
                        <li><Link to="/experience"><h2>.Experience</h2></Link></li> 
                        <li><Link to="/projects"><h2>.Projects</h2></Link></li>
                    </ul>
                    </div>
                    <label htmlFor="nav-toggle-tab" className="nav-toggle-tab" ><span></span></label>
                </div>

                <section id="project-section">

                    <img id="project-image" src={'/images/background/area.jpeg'} alt="pro" />
                    <div className="projects-background-color"></div>

                    <h1 id="project-hangul">샤드</h1>

                    <h3 className='project-title'>.Projects</h3>

                    <p>Coming Soon.</p>
                    {/* <div className="git-project">
                        <a href="https://github.com/shaaddev/shaad" target="_blank" rel='noreferrer'><img className="git-logo" src={'images/logos/github.png'} alt="git"/></a>
                        <h2 className="title">shaad</h2>
                        <p className="description">
                            This is my personal website, which you are watching right now
                        </p>
                        <h4 className="skills">CSS, HTML, JavaScript</h4>
                    </div>
                    <div className="git-project">
                        <a href="https://github.com/shaaddev/airlineweb" target="_blank" rel='noreferrer'><img className="git-logo" src={'images/logos/github.png'} alt="git"/></a>
                        <h2 className="title">Airline Web</h2>
                        <p className="description">
                            This project was created to test my knowledge in the Django Framework
                        </p>
                        <h4 className="skills">CSS, HTML, Python, JavaScript</h4>
                    </div> */}
                </section>

                <div className="project-contact">
                    <ul>
                        <li>
                            <a href="mailto:rashaadleehue1@gmail.com" target="">
                                <img id="project-email-logo"  src={'images/logos/gmail.png'} alt="Email"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/rashaadleehue-joseph/" target="_blank" rel='noreferrer'>
                                <img id="project-linkedin-logo"  src={'images/logos/linkedin.png'} alt="Linkedin"/>
                            </a>
                        </li>   
                        <li>
                            <a href="https://github.com/shaaddev" target="_blank" rel='noreferrer'>
                                <img id="project-github-logo" src={'images/logos/github.png'} alt="Github"/>
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