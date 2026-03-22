import React from "react"
import styles from "@/styles/Subpage.module.css";
import LeadForm from "../components/LeadForm";
import PageHeader from "../components/PageHeader";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Penalties and Sentencing | Toronto Impaired Driving Lawyer",
  description: "Concerned about penalties and sentencing for impaired driving in Toronto? Discover how a skilled DUI lawyer can defend your case. Call (647) 697-2876 today.",
};

export default function Page() {
    return (
    <main className={styles.pageBody}>
        <PageHeader title="Penalties and Sentencing"/>
        <div className={styles.pageContainer}>
            <article className={styles.pageContent}>
                <p><Link href="/practice-areas/impaired-driving">Impaired driving</Link> in Canada is regarded with severe gravity and carries hefty penalties that can have long-lasting effects on your life. Knowing the potential outcomes of a conviction is vital for anyone facing these charges.</p>
                <p className={styles.contentBreak}>The penalties for <Link href="/practice-areas/impaired-driving">impaired driving</Link> vary depending on the nature of the offence and the specifics of each case. Seeking legal counsel is essential to navigate these complexities and mitigate potential consequences.</p>

                <h2><Link href="/practice-areas/impaired-driving">Impaired Driving</Link></h2>
                <p><strong>Minimum and Maximum Penalties</strong></p>
                    <ul className={`${styles.contentList}`}>
                        <li><strong>Summary Conviction:</strong> For a first offence, a minimum fine of $1,000.</li>
                        <li><strong>Indictable Conviction:</strong> For repeated offences, penalties can escalate to 30 days in jail for a second offence and 120 days for third and subsequent offences. The maximum penalty under indictment can reach up to 10 years in prison.</li>
                    </ul>
                <p className={styles.contentBreak}><Link href="/practice-areas/impaired-driving">Learn more about Impaired Driving Charges</Link></p>
                

                <h2><Link href="/practice-areas/refusing-a-breathalyzer-or-drug-test">Refusing a Breathalyzer or Drug Test</Link></h2>
                <p><strong>Minimum and Maximum Penalties</strong></p>
                    <ul className={`${styles.contentList}`}>
                        <li><strong>Summary Conviction:</strong> Minimum fine of $2,000 for a first offence.</li>
                        <li><strong>Indictable Conviction:</strong> Subsequent offences can lead to jail time, akin to penalties for impaired driving.</li>
                    </ul>
                <p className={styles.contentBreak}><Link href="/practice-areas/refusing-a-breathalyzer-or-drug-test">Learn more about Refusing a Breathalyzer or Drug Test Charges</Link></p>

                <h2><Link href="/practice-areas/driving-over-08">Driving Over .08</Link></h2>
                <p><strong>Minimum and Maximum Penalties</strong></p>
                    <ul className={`${styles.contentList}`}>
                        <li><strong>Summary Conviction:</strong> Similar penalties to impaired driving, starting with a $1,000 fine for a first offence and increasing for subsequent offences.</li>
                    </ul>
                <p className={styles.contentBreak}><Link href="/practice-areas/driving-over-08">Learn more about Driving Over .08 Charges</Link></p>

                <h2><Link href="/practice-areas/dangerous-driving">Dangerous Driving</Link></h2>
                <p><strong>Minimum and Maximum Penalties</strong></p>
                    <ul className={`${styles.contentList}`}>
                        <li><strong>Summary Conviction:</strong> Up to 10 years imprisonment if no bodily harm or death is involved.</li>
                        <li><strong>Indictable Conviction:</strong> If the offence results in bodily harm, up to 14 years; if death occurs, the maximum is life imprisonment.</li>
                    </ul>
                <p className={styles.contentBreak}><Link href="/practice-areas/dangerous-driving">Learn more about Dangerous Driving Charges</Link></p>

                <h2><Link href="/practice-areas/failure-to-stop-at-an-accident">Failure to Stop at an Accident</Link></h2>
                <p><strong>Minimum and Maximum Penalties</strong></p>
                    <ul className={`${styles.contentList}`}>
                        <li><strong>Summary Conviction:</strong> Up to 2 years less a day in jail.</li>
                        <li><strong>Indictable Conviction:</strong> Up to 10 years imprisonment; increases to 14 years if resulting in bodily harm, and life if resulting in death.</li>
                    </ul>
                <p className={styles.contentBreak}><Link href="/practice-areas/failure-to-stop-at-an-accident">Learn more about Failure to Stop at an Accident Charges</Link></p>

                <h2><Link href="/practice-areas/flight-from-a-peace-officer">Flight From a Peace Officer</Link></h2>
                <p><strong>Minimum and Maximum Penalties</strong></p>
                    <ul className={`${styles.contentList}`}>
                        <li><strong>Summary Conviction:</strong> Up to 2 years less a day in jail.</li>
                        <li><strong>Indictable Conviction:</strong> Up to 10 years imprisonment.</li>
                    </ul>
                <p className={styles.contentBreak}><Link href="/practice-areas/flight-from-a-peace-officer">Learn more about Flight From a Peace Officer Charges</Link></p>

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