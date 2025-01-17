import React from "react"
import styles from "@/styles/Subpage.module.css";
import LeadForm from "../../components/LeadForm";
import PageHeader from "../../components/PageHeader";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dangerous Driving | Toronto Impaired Driving Lawyer",
  description: "Charged with dangerous driving in Toronto? Speak with an experienced impaired driving lawyer to protect your rights. Call (647) 697-2876 for a free consultation today.",
};

export default function Page() {
    return (
        <main className={styles.pageBody}>
            <PageHeader title="Dangerous Driving"/>
            <div className={styles.pageContainer}>
                <article className={styles.pageContent}>
                    <p className={styles.contentBreak}>Dangerous driving is a criminal offence that involves operating a vehicle in a manner that is dangerous to the public. This offence can result in severe penalties, especially if it causes bodily harm or death.</p>

                    <h2>Dangerous Driving: Criminal Code Definition</h2>
                    <p>Dangerous driving is defined under <a href="https://laws-lois.justice.gc.ca/eng/acts/c-46/section-320.13.html?wbdisable=true#:~:text=320.13%20(1)%20Everyone%20commits%20an,is%20dangerous%20to%20the%20public.">Section 320.13 of the Criminal Code:</a></p>
                    <blockquote className={styles.contentBreak}>
                        <p><strong>320.13 (1):</strong> Everyone commits an offence who operates a conveyance in a manner that, having regard to all of the circumstances, is dangerous to the public.</p>
                    </blockquote>

                    <h2>Elements of Dangerous Driving</h2>
                    <p>To prove dangerous driving, the Crown must establish:</p>
                    <ul className={`${styles.contentBreak} ${styles.contentList}`}>
                        <li>The identity of the accused.</li>
                        <li>The date and location of the incident.</li>
                        <li>That the accused was operating a vehicle.</li>
                        <li>That the manner of driving was dangerous to the public.</li>
                    </ul>

                    <h2>Potential Penalties for Dangerous Driving</h2>
                    <p>Penalties for dangerous driving include:</p>
                    <ul className={`${styles.contentList}`}>
                        <li><strong>Summary Conviction:</strong> Up to 2 years less a day in prison and/or a fine.</li>
                        <li><strong>Indictable Offence:</strong> Up to 10 years in prison if no bodily harm or death occurs; up to 14 years for causing bodily harm and life imprisonment if it results in death.</li>
                    </ul>
                    <p className={styles.contentBreak}><Link href="/penalties-and-sentencing">Click here to learn more about the potential penalties for dangerous driving.</Link></p>

                    <h2>Defences Available for Dangerous Driving</h2>
                    <p>Possible defences include:</p>
                    <ul className={`${styles.contentList}`}>
                        <li>Lack of intent to drive dangerously.</li>
                        <li>Mechanical failure of the vehicle.</li>
                        <li>Medical emergencies.</li>
                        <li>Absence of actual danger to the public.</li>
                    </ul>
                    <p className={styles.contentBreak}><Link href="/penalties-and-sentencing/defences-available-for-dui-charges">Click here to learn more about the potential defences available for dangerous driving charges.</Link></p>

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