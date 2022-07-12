import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css';

class Home extends React.Component {
    onClick = (e) => {
        e.preventDefault()
    }
    render(){
        function openNav(){
            document.getElementById("home-nav").style.width = "100%";
        }

        function closeNav(){
            document.getElementById("home-nav").style.width = "0";
        }

        return (
            <div>
                <div className="home-Nav" id="home-nav">   
                    <span id="closebtn" onClick={closeNav}>&times;</span>
                    <Link to="/"><h2>Home</h2></Link>
                    <Link to="/about"><h2>About</h2></Link>
                    <Link to="/experience"><h2>Experience</h2></Link>
                    <Link to="/projects"><h2>Projects</h2></Link>s
                </div>

                <span className="openbtn" onClick={openNav}>&#9776;</span>

                <h1 id="home-hangul">샤드</h1>

                <section id="home-section"> 

                    <img id="home-background" src={'/images/background/light.jpeg'} alt="light" />
                    <div className="home-background-color"></div>

                    <h3 className="home-title">.Home</h3>
                    <span>
                        <h2>Hello, <strong className="name">Shaad</strong> here.</h2> <br/>
                        <h3>I build sometimes</h3> <br/>
                        <h3>I'm an aspiring software development engineer based in Trinidad and Tobago. I have interests in web development, machine learning, cloud applications, 
                            and everything in between.
                        </h3> <br/> <br/>
                        <h3><a href="mailto:rashaadleehue1@gmail.com" target="">Say Hi!</a></h3>
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