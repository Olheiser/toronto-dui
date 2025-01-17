import React from "react"
import styles from "@/styles/Subpage.module.css";
import LeadForm from "../../components/LeadForm";
import PageHeader from "../../components/PageHeader";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refusing a Breathalyzer or Drug Test | Toronto Impaired Driving Lawyer",
  description: "Refused a breathalyzer or drug test in Toronto? Learn how a skilled impaired driving lawyer can defend you against serious penalties. Call (647) 697-2876 today.",
};

export default function Page() {
    return (
        <main className={styles.pageBody}>
            <PageHeader title="Refusing a Breathalyzer or Drug Test"/>
            <div className={styles.pageContainer}>
                <article className={styles.pageContent}>
                    <p className={styles.contentBreak}>Refusing to comply with a lawful demand for a breathalyzer or drug test is a significant criminal offence. This refusal is treated with similar severity as impaired driving, carrying substantial penalties.</p>

                    <h2>Refusing a Breathalyzer or Drug Test: Criminal Code Definition</h2>
                    <p>Refusing a breathalyzer or drug test is defined under <a href="https://laws-lois.justice.gc.ca/eng/acts/c-46/section-320.15.html#:~:text=320.15%20(1)%20Everyone%20commits%20an,under%20section%20320.27%20or%20320.28.">Section 320.15 of the Criminal Code</a>.</p>
                    <blockquote className={styles.contentBreak}>
                        <p><strong>320.15 (1):</strong> Everyone commits an offence who, knowing that a demand has been made, fails or refuses to comply, without reasonable excuse, with a demand made under section 320.27 or 320.28.</p>
                    </blockquote>

                    <h2>Elements of Refusing a Breathalyzer or Drug Test</h2>
                    <p>To prove refusal, the Crown must establish:</p>
                    <ul className={`${styles.contentBreak} ${styles.contentList}`}>
                        <li>The identity of the accused.</li>
                        <li>The date and location of the incident.</li>
                        <li>That a lawful demand was made by a police officer.</li>
                        <li>That the accused failed or refused to comply without a reasonable excuse.</li>
                    </ul>

                    <h2>Potential Penalties for Refusing a Breathalyzer or Drug Test</h2>
                    <p>Penalties for refusing a breathalyzer or drug test vary based on the circumstances and history of offences:</p>
                    <ul className={`${styles.contentList}`}>
                        <li><strong>First Offence:</strong> Minimum fine of $2,000.</li>
                        <li><strong>Second Offence:</strong> Minimum 30 days imprisonment.</li>
                        <li><strong>Subsequent Offences:</strong> Minimum 120 days imprisonment.</li>
                        <li><strong>Indictable Offence:</strong> Up to 10 years in prison.</li>
                    </ul>
                    <p className={styles.contentBreak}><Link href="/penalties-and-sentencing/">Click here to learn more about the potential penalties for refusing a breathalyzer or drug test.</Link></p>

                    <h2>Defences Available for Refusing a Breathalyzer or Drug Test</h2>
                    <p>Possible defences against charges of refusing a breathalyzer or drug test include:</p>
                    <ul className={`${styles.contentList}`}>
                        <li><strong>Lack of a Lawful Demand:</strong> Challenging the legality of the police officer&apos;s demand.</li>
                        <li><strong>Reasonable Excuse for Refusal:</strong> For instance, a medical condition that prevents compliance.</li>
                        <li><strong>Mistake or Misunderstanding:</strong> Arguing that the accused did not understand the nature of the demand.</li>
                        <li><strong>Improper Procedures:</strong> Demonstrating that the police did not follow correct legal or procedural guidelines.</li>
                    </ul>
                    <p className={styles.contentBreak}><Link href="/penalties-and-sentencing/defences-available-for-dui-charges">Click here to learn more about the potential defences available for refusing a breathalyzer or drug test charges.</Link></p>

                    <h2>Speak to an Experienced Impaired Driving Lawyer Today</h2>
                    <p className={styles.contentBreak}>Successfully navigating impaired driving or DUI charges requires legal expertise and a strong defence strategy. A skilled impaired driving lawyer can help reduce penalties, negotiate favourable plea agreements, and provide representation in court to protect your future. Don&apos;t face these charges alone—speak to a qualified DUI lawyer today. Call <a href="tel:6476972876">(647) 697-2876</a> for a free consultation and take the first step toward protecting your rights.</p>
                </article>
                <aside className={styles.form}>
                    <LeadForm />
                </aside>
            </div>
        </main>
    )
}