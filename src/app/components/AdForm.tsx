"use client"

import React, { useState, useRef, FormEvent } from "react";
import styles from '@/styles/AdForm.module.css';

interface LawmaticsPayload {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    case_blurb: string;
    general_field_4805: boolean;
}

const AdForm = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const form = useRef<HTMLFormElement | null>(null);

    const LAWMATICS_URL = 'https://api.lawmatics.com/v1/forms/8c1cd62c-d6d3-40f8-bcee-aae058d16f31/submit';

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (!form.current) {
            console.error("Form reference is undefined");
            return;
        }

        // Check form validity
        if (!form.current.checkValidity()) {
            form.current.reportValidity();
            return;
        }

        setIsSubmitting(true);
        setError(null);

        // Get form data
        const formData = new FormData(form.current);
        
        // Extract and process names (assuming full name field needs to be split)
        const fullName = formData.get('name') as string;
        const nameParts = fullName.trim().split(' ');
        const firstName = nameParts[0] || '';
        const lastName = nameParts.slice(1).join(' ') || '';

        // Build the payload for Lawmatics
        const payload: LawmaticsPayload = {
            first_name: firstName,
            last_name: lastName,
            email: formData.get('email') as string,
            phone: formData.get('phone') as string,
            case_blurb: formData.get('message') as string,
            general_field_4805: formData.get('criminalMatter') === 'on'
        };

        try {
            const response = await fetch(LAWMATICS_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                const errorBody = await response.text();
                console.error('Lawmatics API error:', response.status, errorBody);
                throw new Error(`API error: ${response.status}`);
            }

            // Success
            console.log("SUCCESS! Form submitted to Lawmatics");
            setFormSubmitted(true);
            form.current.reset();
            
        } catch (err) {
            console.error("Failed to submit to Lawmatics:", err);
            setError("Something went wrong. Please try again or call us directly.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit} ref={form} noValidate>
            <input 
                type="text" 
                name="name" 
                id="name" 
                required 
                placeholder="Your full name..." 
                autoComplete="name"
            />

            <input 
                type="email" 
                name="email" 
                id="email" 
                required 
                placeholder="Your Email Address..." 
                pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" 
                autoComplete="email"
            />

            <input 
                type="tel" 
                name="phone" 
                id="phone" 
                required 
                placeholder="Your Phone Number..." 
                autoComplete="tel"
            />

            <textarea 
                name="message" 
                id="message" 
                required 
                placeholder="Briefly describe your situation…"
            ></textarea>

            <div className={styles.checkboxContainer}>
                <input 
                    type="checkbox" 
                    id="criminalMatter" 
                    name="criminalMatter" 
                    required 
                />
                <label htmlFor="criminalMatter">
                    I have been, or expect to be, charged with a criminal offence. <span style={{color: 'red'}}>*</span>
                </label>
            </div>

            <button 
                className={styles.submit} 
                type="submit" 
                disabled={formSubmitted || isSubmitting}
            >
                {isSubmitting ? "Sending..." : formSubmitted ? "Request Sent" : "Request a Callback"}
            </button>

            {formSubmitted && (
                <p className={styles.successMessage}>
                    Thank you — we've received your message and will be in touch shortly.
                </p>
            )}

            {error && (
                <p className={styles.errorMessage}>
                    {error}
                </p>
            )}
        </form>
    );
}

export default AdForm;