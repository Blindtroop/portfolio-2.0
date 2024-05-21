import React, { useEffect, useState } from 'react';
import './Home.css'; // Import the CSS file
import sampleImage from './assets/lance.png'; // Adjust the path as needed

function TextImageSection() {
    const texts = [
        "I am profficient in the normal HTML, CSS and Javascript.",
        "I am also good in React and experience in Node.js.",
        "I am currently learning Vue.js and also looking to learn Angular.",
        "I plan to start making 3D websites using Spline Design and Framer.",
    ];

    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [index, setIndex] = useState(0);
    const typingSpeed = 100; // Adjust typing speed as needed
    const deleteSpeed = 50; // Adjust delete speed as needed
    const switchDelay = 1500; // Adjust delay between texts as needed
    const maxHeight = 100; // Adjust maximum height as needed

    useEffect(() => {
        const currentText = texts[currentIndex];
        const textLength = currentText.length;

        const timer = setTimeout(() => {
            setText(isDeleting ? currentText.substring(0, index - 1) : currentText.substring(0, index + 1));
            setIndex(isDeleting ? index - 1 : index + 1);

            if (!isDeleting && index === textLength) {
                setIsDeleting(true);
            }
            if (isDeleting && index === 0) {
                setIsDeleting(false);
                setCurrentIndex((currentIndex + 1) % texts.length);
            }
        }, isDeleting ? deleteSpeed : typingSpeed);

        // Clear timeout when component unmounts or when text changes
        return () => clearTimeout(timer);
    }, [text, index, isDeleting, texts, currentIndex]);

    return (
        <section className="text-image-section">
            <div className="text-content">
                <h2>Hi, I am Lance Kaluhi</h2>
                <p>
                    I am a Frontend developer based in Nairobi, Kenya.
                    I am currently 22 years old and I have been coding for 3 years.
                    I am passionate about creating beautiful and user-friendly websites.
                    I try to make my websites have a different feel and bring a modern look 
                    to the web. I am always looking to learn new things and improve my skills.
                </p>
                <h3 style={{ height: maxHeight }}>{text}</h3>
            </div>
            <div className="image-content">
                <img src={sampleImage} alt="Sample" />
            </div>
        </section>
    );
}

export default TextImageSection;
