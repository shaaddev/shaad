import React from 'react';
import { Link } from 'react-router-dom';
import '../css/About.css';

class About extends React.Component {
    onClick = (e) => {
        e.preventDefault()
    }
    render() {
        function openNav(){
            document.getElementById("about-nav").style.width = "100%";
        }

        function closeNav(){
            document.getElementById("about-nav").style.width = "0";
        }

        return (
            <div>
                
                <div className="about-Nav" id="about-nav">   
                    <span id="about-closebtn" onClick={closeNav}>&times;</span>
                    <Link to="/"><h2>Home</h2></Link>
                    <Link to="/about"><h2>About</h2></Link>
                    <Link to="/experience"><h2>Experience</h2></Link>
                    <Link to="/projects"><h2>Projects</h2></Link>
                </div>

                <span className="about-openbtn" onClick={openNav}>&#9776;</span>

                <section id="about-section">
                    <div className='about-background-color'></div>

                    <h1 id="about-hangul">샤드</h1>

                    <h3 className='about-title'>.About</h3>

                    <div id="about-shape" className="background-shape"><img id="about-image" src={'/images/me/coe.jpg'} alt="nyc" /></div>

                    <p>
                        I am currently a second year <strong>Information Systems Management </strong> student at <strong> UWI School Of Business & Applied Studies Ltd.</strong> ❄️
                        <br/><br/><br/>
                        <strong>Skills</strong>: <br />
                        <strong>Python</strong> | <strong>Java</strong> | <strong>JavaScript ES6+</strong> | <strong>C++</strong> | <strong>Django</strong> | <strong>HTML x CSS</strong> |
                        <strong>Git</strong>
                        <br/><br/><br/>
                        In my spare time, I often play Video Games. And love listening to Music. 🎵 🎧
                    </p>


                </section>

                <div className="about-contact">
                    <ul>
                        <li>
                            <a href="mailto:rashaadleehue1@gmail.com" target="">
                                <img id="about-email-logo"  src={'images/logos/gmail.png'} alt="Email"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/rashaadleehue-joseph/" target="_blank" rel='noreferrer'>
                                <img id="about-linkedin-logo"  src={'images/logos/linkedin.png'} alt="Linkedin"/>
                            </a>
                        </li>   
                        <li>
                            <a href="https://github.com/shaaddev" target="_blank" rel='noreferrer'>
                                <img id="about-github-logo" src={'images/logos/github.png'} alt="Github"/>
                            </a>
                        </li>
                    </ul>
                </div>

                <div id="about-bottom">
                    <p>Made By <b>R.L.H</b> <br/> All rights reserved ©</p>
                </div>
            </div>
        )
    }
}

export default About;