import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css';

class Home extends React.Component {

    render(){
        return (
            <div>
                <div className="home-navigation" id="home-header">  
                    <ul>
                        <li><Link to="/"><h2>.Home</h2></Link></li> 
                        <li><Link to="/about"><h2>.About</h2></Link></li> 
                        <li><Link to="/experience"><h2>.Experience</h2></Link></li> 
                        <li><Link to="/projects"><h2>.Projects</h2></Link></li>
                    </ul>
                </div>

                <h1 id="home-hangul">샤드</h1>

                <section id="home-section"> 

                    <img id="home-background" src={'/images/background/light.jpeg'} alt="light" />
                    <div className="home-background-color"></div>

                    <h3 className="home-title">.Home</h3>
                    <span>
                        <h2>Hello, <strong>Shaad</strong> here.</h2> <br/>
                        <h3>I build never</h3> <br/>
                    </span>
                    
                </section>

                <div className="home-contact">
                    <ul>
                        <li>
                            <a href="mailto:rashaadleehue1@gmail.com" target="">
                                <img id="home-email-logo"  src={'images/logos/gmail.png'} alt="Email"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/rashaadleehue-joseph/" target="_blank" rel='noreferrer'>
                                <img id="home-linkedin-logo"  src={'images/logos/linkedin.png'} alt="Linkedin"/>
                            </a>
                        </li>   
                        <li>
                            <a href="https://github.com/shaaddev" target="_blank" rel='noreferrer'>
                                <img id="home-github-logo" src={'images/logos/github.png'} alt="Github"/>
                            </a>
                        </li>
                    </ul>
                </div>

                <div id="home-bottom">
                    <p>Made By <b>R.L.H</b> <br/> All rights reserved ©</p>
                </div>

            </div>
        )
    }
}

export default Home;