import React from "react"
import styles from "@/styles/Subpage.module.css";
import LeadForm from "../../components/LeadForm";
import PageHeader from "../../components/PageHeader";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flight From a Peace Officer | Toronto Impaired Driving Lawyer",
  description: "Charged with flight from a peace officer in Toronto? Consult a skilled impaired driving lawyer for expert legal defence. Call (647) 697-2876 for a free consultation today.",
};

export default function Page() {
    return (
        <main className={styles.pageBody}>
            <PageHeader title="Flight From a Peace Officer"/>
            <div className={styles.pageContainer}>
                <article className={styles.pageContent}>
                <p className={styles.contentBreak}>Fleeing from a peace officer is a serious criminal offence in Canada. It involves evading police when directed to stop and can result in severe legal consequences.</p>

                    <h2>Flight From a Peace Officer: Criminal Code Definition</h2>
                    <p>Flight from a peace officer is defined under <a href="https://laws-lois.justice.gc.ca/eng/acts/c-46/page-47.html#:~:text=320.17%20Everyone%20commits%20an%20offence,is%20reasonable%20in%20the%20circumstances.">Section 320.17 of the Criminal Code:</a></p>
                    <blockquote className={styles.contentBreak}>
                        <p><strong>320.17:</strong> Everyone commits an offence who operates a motor vehicle or vessel while being pursued by a peace officer and who fails, without reasonable excuse, to stop the motor vehicle or vessel as soon as is reasonable in the circumstances.</p>
                    </blockquote>

                    <h2>Elements of Flight From a Peace Officer</h2>
                    <p>To prove flight from a peace officer, the Crown must establish:</p>
                    <ul className={`${styles.contentBreak} ${styles.contentList}`}>
                        <li>The identity of the accused.</li>
                        <li>The date and location of the incident.</li>
                        <li>That the accused was operating a vehicle.</li>
                        <li>That the accused was pursued by a peace officer.</li>
                        <li>That the accused failed to stop as soon as reasonable.</li>
                    </ul>

                    <h2>Potential Penalties for Flight From a Peace Officer</h2>
                    <p>Penalties for flight from a peace officer include:</p>
                    <ul className={`${styles.contentList}`}>
                        <li><strong>Summary Conviction:</strong> Up to 2 years less a day in prison and/or a fine.</li>
                        <li><strong>Indictable Offence:</strong> Up to 10 years in prison.</li>
                    </ul>
                    <p className={styles.contentBreak}><Link href="/penalties-and-sentencing">Click here to learn more about the potential penalties for flight from a peace officer.</Link></p>

                    <h2>Defences Available for Flight From a Peace Officer</h2>
                    <p>Possible defences include:</p>
                    <ul className={`${styles.contentList}`}>
                        <li>Lack of knowledge of the police pursuit.</li>
                        <li>Reasonable excuse for failing to stop.</li>
                        <li>Mistaken identity.</li>
                        <li>Improper conduct by the police.</li>
                    </ul>
                    <p className={styles.contentBreak}><Link href="/penalties-and-sentencing/defences-available-for-dui-charges">Click here to learn more about the potential defences available for flight from a peace officer charges.</Link></p>

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