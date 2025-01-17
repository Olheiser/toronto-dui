"use client"

import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from '@/styles/LeadForm.module.css';

const LeadForm = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);

    const form = useRef<HTMLFormElement | null>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (!form.current) {
            console.error("Form reference is undefined");
            return;
        }

        emailjs
            .sendForm("service_zlvlw4s", "template_igqv00e", form.current, {
                publicKey: "AP4HXf2HPRERJu4fd"
            })
            .then(
                () => {
                    console.log("SUCCESS!");
                    // Add form submission logic here (e.g., API call)
                    setFormSubmitted(true);
                },
                (error) => {
                    console.log("FAILED...", error.text);
                },
            );  
    };

    

    return (
        <form className={styles.form} onSubmit={handleSubmit} ref={form}>
            <h3>Let Us Call You Back</h3>
            <label htmlFor="fullName">Full Name</label>
            <input type="text" name="name" id="name" 
                required placeholder="name"/>

            <label htmlFor="email">Email Address</label>
            <input type="email" name="email" id="email" required placeholder="Your Email Address..." pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" />

            <label htmlFor="subject">How Can We Help You?</label>
            <input type="text" name="subject" id="subject" required placeholder="Subject..."/>

            <label htmlFor="phone">Phone Number</label>
            <input type="tel" name="phone" id="phone" required placeholder="Your Phone Number..."/>

            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" required placeholder="Your Message..."></textarea>

            <div className={styles.checkboxContainer}>
                <input type="checkbox" id="criminalMatter" name="criminalMatter" required />
                <label htmlFor="criminalMatter">
                    I have been, or expect to be, charged with a criminal offence.
                </label>
            </div>

            <button className={styles.submit} type="submit" disabled={formSubmitted}>
                {formSubmitted ? "Request Sent" : "Request a Callback"}
            </button>

            {formSubmitted && (
                <p className={styles.successMessage}>Thank you! We will contact you shortly.</p>
            )}
        </form>
    )
}

export default LeadForm;