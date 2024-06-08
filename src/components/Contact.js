import React, { useRef, useState } from 'react';
import { MdPhone, MdEmail } from 'react-icons/md'; // Importing phone and email icons
import { FaFacebook, FaTwitter, FaInstagram, FaReddit, FaGithub } from 'react-icons/fa'; // Importing social media icons
import emailjs from '@emailjs/browser';
import './Contact.css';

export const Contact = () => {
  const form = useRef();
  const [notification, setNotification] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ypi0cpj', 'template_d2tdk1r', form.current, {
        publicKey: '8ywQ0HEygtTgVD3BW',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setNotification('Message sent successfully!');
          form.current.reset(); // Clear the form
          setTimeout(() => {
            setNotification(''); // Hide notification after 3 seconds
          }, 3000);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setNotification('Failed to send message.');
          setTimeout(() => {
            setNotification(''); // Hide notification after 3 seconds
          }, 3000);
        }
      );
  };

  return (
    <div className="contact-container" id='contact'>
      <div className="contact-form-container">
        <h2>Contact Me</h2>
        {notification && (
          <div className="notification">
            {notification}
            <div className="progress-bar"></div>
          </div>
        )}
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <label>Name</label>
          <input type="text" name="from_name" required />
          <label>Email</label>
          <input type="email" name="from_email" required />
          <label>Message</label>
          <textarea name="message" required />
          <input type="submit" value="Send" />
        </form>
      </div>
      <div className="contact-details-container">
        <h2>Contact Details</h2>
        <p>
          <MdPhone /> Phone: 0115112760
        </p>
        <p>
          <MdEmail /> Email: kaluhilance4@gmail.com
        </p>
        <div className="social-media-links">
          <a href="https://www.facebook.com/profile.php?id=61560283070600">
            <FaFacebook />
          </a>
          <a href="https://x.com/Kaluhi2">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/its.kaluh_i/">
            <FaInstagram />
          </a>
          <a href="https://www.reddit.com/user/CleanGarbage001/">
            <FaReddit />
          </a>
          <a href="https://github.com/Blindtroop">
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
