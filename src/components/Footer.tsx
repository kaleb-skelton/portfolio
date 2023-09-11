import React, { useRef } from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
////////////////////////////////////
/*
export const ContactUs = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_s99wtwd', 'template_exhdgod', form.current, 'yy9EmUFAAGuR5xMeo')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      );
    }; */
////////////////////////////////////
function Footer() {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_s99wtwd', 'template_exhdgod', form.current, 'yy9EmUFAAGuR5xMeo')
        .then((result) => {
            console.log(result.text);
            console.log("Email sent successfully!");
            console.log(name);
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        
      <div className='footer-container'>
        <section className='footer-subscription'>
          <p className='footer-subscription-heading'>
            Join to receive updates on my projects or to contact me.
          </p>
          <p className='footer-subscription-text'>
            You can unsubscribe at any time.
          </p>
          <div className='input-areas'>
           <form ref={form} onSubmit={sendEmail}>
              <input
                className='footer-input'
                name='from_name'
                type='email'
                placeholder='example@gmail.com'
              />
              <input id="newsletter" type="submit" value="Subscibe" />
            </form>
          </div>
          </section>
      
          <section className='social-media'>
          <div className='social-media-wrap'>
            <div className='footer-logo'>
              <Link to='/' className='social-logo'>
                Skelton Portfolio
                <i className='fas fa-code' />
              </Link>
            </div>
            <small className='website-rights'>KTI © 2023</small>
            <div className='social-icons'>
              <Link
                className='social-icon-link facebook'
                to='https://www.facebook.com/kaleb.skelton.10'
                target='_blank'
                aria-label='Facebook'
              >
                <i className='fab fa-facebook-f' />
              </Link>
              <Link
                className='social-icon-link instagram'
                to='https://www.instagram.com/kaleb.skelton/'
                target='_blank'
                aria-label='Instagram'
              >
                <i className='fab fa-instagram' />
              </Link>
              <Link
                className='social-icon-link twitter'
                to='https://www.twitter.com/skelton_kaleb'
                target='_blank'
                aria-label='Twitter'
              >
                <i className='fab fa-twitter' />
              </Link>
           
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  export default Footer;