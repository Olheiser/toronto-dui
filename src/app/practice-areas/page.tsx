import React from "react"
import styles from "@/styles/Subpage.module.css";
import LeadForm from "../components/LeadForm";
import PageHeader from "../components/PageHeader";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Practice Areas | Toronto Impaired Driving Lawyer",
  description: "Explore our practice areas and learn how a Toronto impaired driving lawyer can assist with your criminal defence needs. Call (647) 697-2876 today.",
};

export default function Page() {
    return (
    <main className={styles.pageBody}>
        <PageHeader title="Practice Areas"/>
        <div className={styles.pageContainer}>
            <article className={styles.pageContent}>
                <h2 className={styles.headingLink}><Link href="/practice-areas/impaired-driving">Impaired Driving</Link></h2>
                <p><strong><Link href="/practice-areas/impaired-driving">Impaired driving</Link></strong> is when a person&apos;s ability to operate a vehicle is impaired by alcohol or drugs. This dangerous behavior is illegal and can result in severe penalties such as fines, license suspension, and jail time.</p>
                <p className={styles.contentBreak}><Link href="/practice-areas/impaired-driving">Learn more about Impaired Driving Charges</Link></p>
                

                <h2 className={styles.headingLink}><Link href="/practice-areas/refusing-a-breathalyzer-or-drug-test">Refusing a Breathalyzer or Drug Test</Link></h2>
                <p><strong><Link href="/practice-areas/refusing-a-breathalyzer-or-drug-test">Refusing to comply with a lawful demand for a breathalyzer or drug test</Link></strong> is a criminal offence. If you refuse, you can face similar penalties to those for impaired driving, including fines and imprisonment.</p>
                <p className={styles.contentBreak}><Link href="/practice-areas/refusing-a-breathalyzer-or-drug-test">Learn more about Refusing a Breathalyzer or Drug Test Charges</Link></p>

                <h2 className={styles.headingLink}><Link href="/practice-areas/driving-over-08">Driving Over .08</Link></h2>
                <p><strong><Link href="/practice-areas/driving-over-08">Driving Over .08</Link></strong> refers to operating a vehicle with a blood alcohol concentration (BAC) of over 80 milligrams of alcohol in 100 milliliters of blood. This offence is strictly enforced and can lead to severe consequences.</p>
                <p className={styles.contentBreak}><Link href="/practice-areas/driving-over-08">Learn more about Driving Over .08 Charges</Link></p>

                <h2 className={styles.headingLink}><Link href="/practice-areas/dangerous-driving">Dangerous Driving</Link></h2>
                <p><strong><Link href="/practice-areas/dangerous-driving">Dangerous driving</Link></strong> occurs when a person operates a vehicle in a manner that is dangerous to the public, considering all circumstances. It includes behaviors such as excessive speeding, aggressive driving, or driving under adverse conditions.</p>
                <p className={styles.contentBreak}><Link href="/practice-areas/dangerous-driving">Learn more about Dangerous Driving Charges</Link></p>

                <h2 className={styles.headingLink}><Link href="/practice-areas/failure-to-stop-at-an-accident">Failure to Stop at an Accident</Link></h2>
                <p><strong><Link href="/practice-areas/failure-to-stop-at-an-accident">Failure to stop at the scene of an accident</Link></strong>, especially when someone is injured or there is significant property damage, is a serious offence. It is mandatory to stop, provide your information, and offer assistance if needed.</p>
                <p className={styles.contentBreak}><Link href="/practice-areas/failure-to-stop-at-an-accident">Learn more about Failure to Stop at an Accident Charges</Link></p>

                <h2 className={styles.headingLink}><Link href="/practice-areas/flight-from-a-peace-officer">Flight From a Peace Officer</Link></h2>
                <p><strong><Link href="/practice-areas/flight-from-a-peace-officer">Flight from a peace officer</Link></strong> involves fleeing from the police when signaled to stop. This act is illegal and can lead to significant legal consequences, including fines and imprisonment.</p>
                <p className={styles.contentBreak}><Link href="/practice-areas/flight-from-a-peace-officer">Learn more about Flight From a Peace Officer Charges</Link></p>

                <h2 className={styles.headingLink}>Speak to an Experienced Impaired Driving Lawyer Today</h2>
                    <p className={styles.contentBreak}>Successfully navigating impaired driving or DUI charges requires legal expertise and a strong defence strategy. A skilled impaired driving lawyer can help reduce penalties, negotiate favourable plea agreements, and provide representation in court to protect your future. Don&apos;t face these charges alone—speak to a qualified DUI lawyer today. Call <a href="tel:6476972876">(647) 697-2876</a> for a free consultation and take the first step toward protecting your rights.</p>
            </article>
            <aside className={styles.form}>
                <LeadForm />
            </aside>
        </div>
    </main>
    )
}