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

        return (
            <div>

                <div className="exp-Nav" id="exp-nav">   
                    <span id="exp-closebtn" onClick={closeNav}>&times;</span>
                    <Link to="/"><h2>Home</h2></Link>
                    <Link to="/about"><h2>About</h2></Link>
                    <Link to="/experience"><h2>Experience</h2></Link>
                    <Link to="/projects"><h2>Projects</h2></Link>
                </div>

                <span className="exp-openbtn" onClick={openNav}>&#9776;</span>


                <section id="ex-section">

                    <img className="exp-image" src={'/images/videos/donald-sleepy.gif'} alt="experience" /> 
                    <div className="ex-background-color"></div> 

                    <h1 id="exp-hangul">샤드</h1>

                    <h3>.Experience</h3>
                    <p>
                       Coming Soon.

                    </p>
                </section>

                <div className="exp-contact">
                    <ul>
                        <li>
                            <a href="mailto:rashaadleehue1@gmail.com" target="">
                                <img id="exp-email-logo"  src={'images/logos/gmail.png'} alt="Email"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/rashaadleehue-joseph/" target="_blank" rel='noreferrer'>
                                <img id="exp-linkedin-logo"  src={'images/logos/linkedin.png'} alt="Linkedin"/>
                            </a>
                        </li>   
                        <li>
                            <a href="https://github.com/shaaddev" target="_blank" rel='noreferrer'>
                                <img id="exp-github-logo" src={'images/logos/github.png'} alt="Github"/>
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