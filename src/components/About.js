import React from 'react';
import profilePic from './assets/lance2.png'; // Import your profile picture from the assets folder
import './about.css'; // Import your CSS file

function About() {
    return (
        <section className="about-section">
            <div className="about-content">
                <div className="about-image">
                    <img src={profilePic} alt="Profile" />
                </div>
                <div className="about-text">
                    <h2>About Me</h2>
                    <p>
                        Ummm, where to start? I am a frontend developer based in Nairobi, Kenya.
                        I am male and i have been coding for 2 years now. Well, i never really thought
                        this would be my career choice but here we are.
                    </p>
                    <p>
                        I was always fascinated by the web and how it works and especially the dynamic parts, the colors,
                        the visual beauty, animations and the overall user experience and this was during my highschool days back
                        in Kakamega High School. But as they say, I was limited by the technology of my time. it is in campus that I have 
                        been able to explore the web and learn how to create beautiful and user-friendly websites. 
                        I try to make my websites feel different and modern without losing the user experience.
                    </p>
                    <p>
                        Outside coding, I enjoy taking outdoor photography of random sceneries, playing alot of
                        video games and sports. I am always looking to learn new things and improve my skills and I always 
                        believe each day is a learning opportunity.
                    </p>
                    <p>
                        I am always open to new opportunities and collaborations. Feel free
                        to reach out.
                    </p>
                    <button className="contact-btn">Contact Me</button>
                </div>
            </div>
        </section>
    );
}

export default About;
