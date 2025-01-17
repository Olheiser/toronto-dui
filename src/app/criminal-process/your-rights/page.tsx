import React from "react"
import styles from "@/styles/Subpage.module.css";
import LeadForm from "../../components/LeadForm";
import PageHeader from "../../components/PageHeader";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Rights | Toronto Impaired Driving Lawyer",
  description: "Need a Toronto impaired driving lawyer to protect your rights? Call (647) 697-2876 for expert defence and legal advice today.",
};

export default function Page() {
    return (
        <main className={styles.pageBody}>
            <PageHeader title="Your Rights"/>
            <div className={styles.pageContainer}>
                <article className={styles.pageContent}>
                    <h2>The Charter of Rights</h2>
                    <p>Your rights and limits on police powers are set out in the Canadian Charter of Rights and Freedoms, which is part of the Constitution of Canada. Some of your rights include:</p>
                    <ul className={`${styles.contentBreak} ${styles.contentList}`}>
                        <li>Not to have to give evidence against yourself (the right to remain silent);</li>
                        <li>Not to be unreasonably searched or to have your property seized;</li>
                        <li>Not to be detained or held in prison without reason;</li>
                        <li>To be told why you are being arrested or detained;</li>
                        <li>To speak to a lawyer when you are arrested or detained;</li>
                        <li>To be told that you have the right to right speak to a lawyer.</li>
                    </ul>
                    <h2>Conversations with the Police</h2>
                    <p className={styles.contentBreak}>The police are allowed to strike up a conversation with anyone, but be aware that when they talk to you they may be trying to find a reason to detain you or arrest you. If you do not want to talk to a police officer, simply ask “Am I free to go?” If the officer says “yes”, you need not say anything to the officer and you may leave. If the officer says that you are not free to leave, then you are being detained.</p>
                    <h2>Driving a Vehicle</h2>
                    <p className={styles.contentH3Break}>Some of your rights are different when you are driving a vehicle. For example, an officer can stop you on a roadway without reason to check for proper licensing, sobriety, fitness of your vehicle and/or registration. You must provide identification and give your name and address if you are stopped on a roadway. If you have been in an accident, you might be required to give a statement to the police.</p>
                    <h3>Vehicle Searches</h3>
                    <p>Police cannot randomly search your vehicle. A police officer can only search your vehicle in four circumstances:</p>
                    <ul className={`${styles.contentBreak} ${styles.contentList}`}>
                        <li>Permission is given to police to search the vehicle;</li>
                        <li>The police officer has reasonable and probable grounds to believe you have committed a criminal offence (e.g. smell of marijuana in vehicle);</li>
                        <li>You have been arrested and the search is incidental to the arrest;</li>
                        <li>The police have a warrant to search your vehicle.</li>
                    </ul>
                    <h2>Being Detained by Police</h2>
                    <p className={styles.contentH3Break}>If you are detained by a police officer, you have the right to know why. You can ask why you are being detained. In order to detain you, an officer must have reasonable grounds to suspect that you are connected to a crime. You have the right to remain silent (unless you are driving a car and are required to give an accident report). If you do not want to answer questions, you may say to an officer “I want to remain silent.” An officer who is detaining you may perform a quick ‘pat-down’ search of your person to make sure you do not have any weapons.</p>
                    <h3>Arrest</h3>
                    <p className={styles.contentH3Break}>You have the right to know that you are being arrested and what you are being arrested for. Depending on the situation, the officer will read you or explain to you certain rights, including your right to speak to a lawyer. They will usually also say something like “You need not say anything. You have nothing to hope from any promise or favour and nothing to fear from any threat whether or not you say anything. Anything you do say may be used as evidence.”</p>
                    <h3>Being Interrogated by Police</h3>
                    <p>Remember these three things when you are at the police station and the police are interrogating you.</p>
                    <ul className={`${styles.contentBreak} ${styles.contentList}`}>
                        <li>The police are permitted to lie to you! Including about the evidence they have against you although there are limits to how far they can go;</li>
                        <li>You have the right to remain silent. You are not required to give a statement at the police station nor while in your vehicle subject to certain exceptions;</li>
                        <li>You have the right to speak to a lawyer but you must take action in exercising this right. Ask to speak to a lawyer and call a lawyer as soon as possible. You may be given the option of calling a legal aid lawyer.</li>
                    </ul>
                    <h2>Speak to an Experienced Impaired Driving Lawyer Today</h2>
                    <p>Successfully navigating impaired driving or DUI charges requires legal expertise and a strong defence strategy. A skilled impaired driving lawyer can help reduce penalties, negotiate favourable plea agreements, and provide representation in court to protect your future. Don&apos;t face these charges alone—speak to a qualified DUI lawyer today. Call <a href="tel:6476972876">(647) 697-2876</a> for a free consultation and take the first step toward protecting your rights.</p>
                </article>
                <aside className={styles.form}>
                    <LeadForm />
                </aside>
            </div>
        </main>
    )
}