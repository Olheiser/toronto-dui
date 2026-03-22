import React from "react"
import styles from "@/styles/Subpage.module.css";
import LeadForm from "../../components/LeadForm";
import PageHeader from "../../components/PageHeader";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Young and Novice Driver DUI | Toronto Impaired Driving Lawyer",
  description: "Facing a DUI as a young or novice driver in Toronto? Learn how Nicholas Robinson, a skilled impaired driving lawyer, can defend your rights. Call (647) 697-2876 today.",
};

export default function Page() {
    return (
        <main className={styles.pageBody}>
            <PageHeader title="Young and Novice Driver DUI"/>
            <div className={styles.pageContainer}>
                <article className={styles.pageContent}>
                    <p>If you&apos;re a young or novice driver in Ontario, any amount of alcohol or drugs in your system when driving can have serious consequences. Under Ontario&apos;s zero-tolerance policy, drivers aged 21 and under, or those holding a G1, G2, M1, or M2 licence, are prohibited from having any alcohol or drugs in their system while operating a vehicle.</p>

                    <p>This zero-tolerance rule reflects the increased risk that impaired driving presents to the driver, passengers, and everyone else on the road.</p>

                    <p className={styles.contentBreak}><strong>New to driving and facing a DUI charge?</strong> Call <a href="tel:6476972876">(647) 697-2876</a> to speak with an experienced impaired driving lawyer for free.</p>

                    <h2>What Constitutes an Offence?</h2>
                    <p className={styles.contentBreak}>Driving under the influence doesn&apos;t just mean having a high blood alcohol concentration (BAC); as a young or novice driver, even trace amounts of alcohol or drugs could lead to charges. Impairment can also come from prescription medications or over-the-counter drugs that affect your ability to drive. You&apos;ll face immediate penalties if a police officer detects any level of impairment or substances in your system.</p>

                    <h2>Immediate Penalties for Young and Novice Drivers in Ontario</h2>
                    <p className={styles.contentH3Break}>If you&apos;re caught with any drugs or alcohol in your system, you face immediate penalties, including:</p>
                    
                    <h3>First Offence:</h3>
                    <ul className={`${styles.contentList}`}>
                        <li>Immediate roadside licence suspension for 3 days</li>
                        <li>A fine of $60 to $1,000 if convicted</li>
                        <li>$250 administrative penalty</li>
                    </ul>
                    
                    <h3>Second Offence:</h3>
                    <ul className={`${styles.contentList}`}>
                        <li>Immediate roadside licence suspension for 7 days</li>
                        <li>A fine of $60 to $1,000 if convicted</li>
                        <li>$350 administrative penalty</li>
                        <li>Mandatory participation in an education or treatment program</li>
                    </ul>
                    
                    <h3>Third Offence:</h3>
                    <ul className={`${styles.contentList}`}>
                        <li>Immediate roadside licence suspension for 30 days</li>
                        <li>A fine of $60 to $1,000 if convicted</li>
                        <li>$450 administrative penalty</li>
                        <li>Mandatory education or treatment program</li>
                        <li>Six-month Ignition Interlock condition upon licence reinstatement</li>
                    </ul>

                    <p className={styles.contenH3tBreak}><strong>Facing a DUI charge as a Novice Driver?</strong> Call <a href="tel:6476972876">(647) 697-2876</a> for a complimentary consultation today.</p>

                    <h3>Potential for Criminal Charges for Young and Novice Drivers</h3>
                    <p>Young and novice drivers caught with a Blood Alcohol Concentration (BAC) of 80 mg or more per 100 ml of blood within two hours of driving face the following penalties:</p>
                    <ul className={`${styles.contentBreak} ${styles.contentList}`}>
                        <li><strong>First DUI:</strong> Minimum $1,000 fine, up to 10 years imprisonment</li>
                        <li><strong>Second DUI:</strong> Minimum 30 days imprisonment, up to 10 years imprisonment</li>
                        <li><strong>Third DUI:</strong> Minimum 120 days imprisonment, up to 10 years imprisonment</li>
                    </ul>

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