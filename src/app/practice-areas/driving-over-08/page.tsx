import React from "react"
import styles from "@/styles/Subpage.module.css";
import LeadForm from "../../components/LeadForm";
import PageHeader from "../../components/PageHeader";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Driving Over .08 | Toronto Impaired Driving Lawyer",
  description: "Charged with driving over .08 in Toronto? Consult a skilled impaired driving lawyer for expert legal defence. Call (647) 697-2876 for a free consultation today.",
};

export default function Page() {
    return (
        <main className={styles.pageBody}>
            <PageHeader title="Driving Over .08"/>
            <div className={styles.pageContainer}>
                <article className={styles.pageContent}>
                    <p className={styles.contentBreak}>Driving with a blood alcohol concentration (BAC) over .08 is a serious criminal offence, posing significant dangers to public safety and carrying severe legal consequences.</p>

                    <h2>Driving Over .08: Criminal Code Definition</h2>
                    <p>Driving over .08 is defined under <a href="https://laws-lois.justice.gc.ca/eng/acts/c-46/section-320.14.html">Section 320.14(1)(b) of the Criminal Code:</a></p>
                    <blockquote className={styles.contentBreak}>
                        <p><strong>320.14 (1):</strong> Everyone commits an offence who:</p>
                        <p>(b) subject to subsection (5), has, within two hours after ceasing to operate a conveyance, a blood alcohol concentration that is equal to or exceeds 80 mg of alcohol in 100 mL of blood;</p>
                    </blockquote>

                    <h2>Elements of Driving Over .08</h2>
                    <p>To prove driving over .08, the Crown must establish:</p>
                    <ul className={`${styles.contentList}`}>
                        <li>The identity of the accused.</li>
                        <li>The date and location of the incident.</li>
                        <li>That the accused was operating a vehicle.</li>
                        <li>That the accused&apos;s BAC was over .08 at the time of driving.</li>
                    </ul>

                    <h2>Potential Penalties for Driving Over .08</h2>
                    <p>Penalties for driving over .08 vary based on the offence history:</p>
                    <ul className={`${styles.contentList}`}>
                        <li><strong>First Offence:</strong> Minimum fine of $1,000.</li>
                        <li><strong>Second Offence:</strong> Minimum 30 days imprisonment.</li>
                        <li><strong>Subsequent Offences:</strong> Minimum 120 days imprisonment.</li>
                        <li><strong>Indictable Offence:</strong> Up to 10 years in prison.</li>
                    </ul>
                    <p className={styles.contentBreak}><Link href="/penalties-and-sentencing">Click here to learn more about the potential penalties for driving over .08.</Link></p>

                    <h2>Defences Available for Driving Over .08</h2>
                    <p>Possible defences against charges of driving over .08 include:</p>
                    <ul className={`${styles.contentList}`}>
                        <li><strong>Timing of the BAC Test:</strong> Arguing the test was not conducted within two hours of driving.</li>
                        <li><strong>Faulty or Improperly Calibrated Testing Equipment:</strong> Demonstrating inaccuracies in the BAC measurement.</li>
                        <li><strong>Violation of Charter Rights:</strong> Highlighting any breaches of the accused&apos;s rights during the investigative process.</li>
                    </ul>
                    <p className={styles.contentBreak}><Link href="/penalties-and-sentencing/defences-available-for-dui-charges">Click here to learn more about the potential defences available for driving over .08 charges.</Link></p>

                    <h2>Speak to an Impaired Driving Lawyer Today</h2>
                    <p className={styles.contentBreak}>Navigating charges of driving over .08 requires expert legal guidance. A skilled criminal lawyer can scrutinize the evidence, challenge the accuracy of the BAC readings, and ensure your rights are protected throughout the legal process. They can develop a comprehensive defence strategy to mitigate the consequences of the charge. Call <a href="tel:6476972876">(647) 697-2876</a> to receive a free consultation with a criminal lawyer today.</p>

                </article>
                <aside className={styles.form}>
                    <LeadForm />
                </aside>
            </div>
        </main>
    )
}