import React from 'react';
import { Link } from 'react-router-dom';
import '../css/About.css';

class About extends React.Component {
    render() {
        return (
            <div>
                <div className="about-navigation" id="about-header"> 
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

                <section id="about-section">
                    <div className='about-background-color'></div>

                    <h1 id="about-hangul">샤드</h1>

                    <h3 className='about-title'>.About</h3>

                    <div id="about-shape" class="background-shape"><img id="about-image" src={'/images/me/nyc.jpg'} alt="nyc" /></div>
                    <div id="info" class="info-at-bottom" ><span><strong>Rashaad Lee Hue-Joseph</strong></span></div>


                    <p>
                        I am currently studying <strong>Information Systems Management </strong> at <strong> UWI School Of Business & Applied Studies Ltd.</strong> 
                        <br/><br/><br/>
                        <strong>Skills</strong>: <br />
                        <strong>Python</strong> | <strong>Java</strong> | <strong>JavaScript ES6+</strong> | <strong>C++</strong> | <strong>React.js</strong> |  <strong>HTML x CSS</strong> |
                        <strong>Git</strong>
                        <br/>
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