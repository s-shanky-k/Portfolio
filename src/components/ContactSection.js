import React from 'react';
import Button from './Button';
import './ContactSection.css';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

function ContactSection() {
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_oug9vrd', 'template_sh7pg2n', e.target, 'user_KqkXfrw38kAPok508Ps4u')
        .then((result) => {
                console.log("Printing Toast");
                toast.success("Message sent successfully!", {
                    position: "bottom-center",
                    theme: "dark"
                })
        }, (error) => {
            toast.error("Message was not sent :(", {
                position: "bottom-center",
                theme: "dark"
            })
        });
        e.target.reset();
    }

    return (
        <div className="contact-container" id="contact">
            <div className="contact-title">
                <i className="material-icons-outlined">alternate_email</i>
                <h1>Contact</h1>
            </div>
            <div className="contact-content">
                <div className="contact-text">
                    This what I am listening to now!
                </div>
                <div className="contact-form">
                    <form className='w-full' onSubmit={sendEmail}>
                        <div className="mb-6">
                            <label className="block mb-2 text-base font-medium text-white">Full Name</label>
                            <input type="text" id="name" name="name" className="text-base rounded-sm block w-72 p-2.5 border bg-[#121212] border-[#800f49] placeholder-gray-400 text-white" placeholder="Name" required />
                        </div>
                        <div className="mb-6">
                            <label  className="block mb-2 text-base font-medium text-white">Email Address</label>
                            <input type="email" id="email" name="email" className="text-base rounded-sm block w-72 p-2.5 border bg-[#121212] border-[#800f49] placeholder-gray-400 text-white" placeholder="name@example.com" required />
                        </div>
                        <div className="mb-6">
                            <label className="block mb-2 text-base font-medium text-white">Message</label>
                            <textarea type="text" id="message" name="message" className="text-base rounded-sm block h-28 w-full md:w-3/5 lg:w-2/5 p-2.5 border bg-[#121212] border-[#800f49] placeholder-gray-400 text-white" placeholder="Your Message" required />
                        </div>
                        <button type="submit"><Button props={{text:"Send Message"}}/></button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactSection;
