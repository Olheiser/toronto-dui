import React from "react"
import styles from "@/styles/Subpage.module.css";
import LeadForm from "../../components/LeadForm";
import PageHeader from "../../components/PageHeader";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Failure to Stop at an Accident | Toronto Impaired Driving Lawyer",
  description: "Facing failure to stop at an accident charges in Toronto? Speak with an experienced impaired driving lawyer to explore your options. Call (647) 697-2876 today.",
};

export default function Page() {
    return (
        <main className={styles.pageBody}>
            <PageHeader title="Failure to Stop at an Accident"/>
            <div className={styles.pageContainer}>
                <article className={styles.pageContent}>
                    <p className={styles.contentBreak}>Failing to stop or remain at the scene of an accident is a serious criminal offence. It carries significant penalties and can have long-lasting effects on your personal and professional life.</p>

                    <h2>Failure to Stop at an Accident: Criminal Code Definition</h2>
                    <p>Failure to stop at an accident is defined under <a href="https://laws-lois.justice.gc.ca/eng/acts/c-46/section-320.16.html#:~:text=320.16%20(1)%20Everyone%20commits%20an,the%20conveyance%2C%20give%20their%20name">Section 320.16 of the Criminal Code:</a></p>
                    <blockquote className={styles.contentBreak}>
                        <p><strong>320.16 (1):</strong> Everyone commits an offence who operates a conveyance and who at the time of operating the conveyance knows that, or is reckless as to whether, the conveyance has been involved in an accident with a person or another conveyance and who fails, without reasonable excuse, to stop the conveyance, give their name and address and, if any person has been injured or appears to require assistance, offer assistance.</p>
                    </blockquote>

                    <h2>Elements of Failure to Stop at an Accident</h2>
                    <p>To prove failure to stop at an accident, the Crown must establish:</p>
                    <ul className={`${styles.contentBreak} ${styles.contentList}`}>
                        <li>The identity of the accused.</li>
                        <li>The date and location of the incident.</li>
                        <li>That the accused was operating a vehicle involved in an accident.</li>
                        <li>That the accused failed to stop, provide identification, or offer assistance.</li>
                    </ul>

                    <h2>Potential Penalties for Failure to Stop at an Accident</h2>
                    <p>Penalties for failure to stop at an accident include:</p>
                    <ul className={`${styles.contentList}`}>
                        <li><strong>Summary Conviction:</strong> Up to 2 years less a day in prison and/or a fine.</li>
                        <li><strong>Indictable Offence:</strong> Up to 10 years in prison if no bodily harm is involved, escalating to 14 years with bodily harm and up to life imprisonment if the accident results in death.</li>
                    </ul>
                    <p className={styles.contentBreak}><Link href="/penalties-and-sentencing">Click here to learn more about the potential penalties for failing to stop at an accident.</Link></p>

                    <h2>Defences Available for Failure to Stop at an Accident</h2>
                    <p>Possible defences include:</p>
                    <ul className={`${styles.contentList}`}>
                        <li>Lack of knowledge of the accident.</li>
                        <li>Fear for personal safety.</li>
                        <li>No legal duty to stop under given circumstances.</li>
                        <li>Reasonable excuse for failing to stop.</li>
                    </ul>
                    <p className={styles.contentBreak}><Link href="/penalties-and-sentencing/defences-available-for-dui-charges">Click here to learn more about the potential defences available for failure to stop at an accident charges.</Link></p>

                    <h2>Speak to an Impaired Driving Lawyer Today</h2>
                    <p className={styles.contentBreak}>If you&apos;re facing charges for failing to stop at an accident, a skilled criminal lawyer is essential. They can challenge the evidence, present mitigating factors, and advocate for reduced penalties or dismissal of charges. Call <a href="tel:6476972876">(647) 697-2876</a> to receive a free consultation today.</p>

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