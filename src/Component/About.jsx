import React from 'react'
import "./About.css"

const About = () => {
    return (
        <>
          
             <div className="about__container">
                    <div className="about__img">
                        <img src="my.jpg" alt="loading" width="500px"/>
                    </div>
                    
                    <div className="detail">
                        <h2 className="about__subtitle">I'am Noor Muhammed</h2>
                        <p className="about__text">A Passionate aspiring Full Stack Developer skilled in MERN stack, moulded and shaped by Masai school’s intensive and
                        immersive learning. Looking forward to join a company where I will be able to contribute towards individual and company
                        growth.</p>   <br />  <br />
                     <h1 style={{fontSize:"40px"}}>Follow me</h1>
                    <div className="home__social">
                    <a target="blank" href="https://www.linkedin.com/in/noor-muhammed-a96a10116/" class="home__social-icon"><i class='bx bxl-linkedin'></i></a>
                    <a target="blank" href="https://twitter.com/noormuhammed143" class="home__social-icon"><i class='bx bxl-twitter' ></i></a>
                    <a target="blank" href="https://github.com/NOORMUHAMM" class="home__social-icon"><i class='bx bxl-github' ></i></a>
                </div>
                        <div className="location">
                            <span><i class='bx bxs-contact'></i><span style={{fontWeight:"bold"}}>Contact:</span>+917895488719</span><br/>
                            <span><i class='bx bx-mail-send'></i><span style={{fontWeight:"bold"}}>Email:</span>noormuhammed14@gmail.com</span><br/>
                             <span><i class='bx bxs-location-plus' ></i><span style={{fontWeight:"bold"}}>Location:</span>Dehradun</span>
                        </div>
                    </div>         
              </div>
        </>
    )
}

export default About
