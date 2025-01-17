import React from "react"
import styles from "@/styles/Subpage.module.css";
import LeadForm from "../../components/LeadForm";
import PageHeader from "../../components/PageHeader";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Driver DUI | Toronto Impaired Driving Lawyer",
  description: "Charged with a commercial driver DUI in Toronto? Nicholas Robinson specializes in impaired driving defence for commercial drivers. Call (647) 697-2876 for expert legal advice today.",
};

export default function Page() {
    return (
        <main className={styles.pageBody}>
            <PageHeader title="Commercial Driver DUI"/>
            <div className={styles.pageContainer}>
                <article className={styles.pageContent}>
                    <p>In Ontario, commercial drivers are held to a high standard when it comes to driving under the influence of alcohol or drugs. Ontario&apos;s zero-tolerance policy for alcohol and drugs in the systems of commercial drivers reflects the seriousness of these offences.</p>

                    <p>If you&apos;re a commercial driver facing DUI charges, here&apos;s what you should know about the specific regulations and consequences.</p>

                    <p className={styles.contentBreak}><strong>Commercial Driver facing a DUI charge?</strong> Call <a href="tel:6476972876">(647) 697-2876</a> for a free consultation with a DUI defence lawyer.</p>

                    <h2>Zero Tolerance for Commercial Drivers in Ontario</h2>
                    <p>Under Ontario law, commercial drivers are prohibited from having any detectable amount of alcohol or drugs in their system. This rule applies to anyone operating a vehicle requiring a Commercial Vehicle Operator&apos;s Registration (CVOR) or an A-F licence, which includes trucks, buses, and even certain construction equipment.</p>

                    <p className={styles.contentH3Break}>This zero-tolerance approach means that even a trace of alcohol or drugs can lead to serious repercussions.</p>

                    <h3>Immediate Penalties for Commercial Drivers in Ontario</h3>
                    <p>The penalties for commercial drivers who are caught with any drugs or alcohol in their system are strict, even for a first-time offence. Penalties include:</p>
                    <ul className={`${styles.contentList}`}>
                        <li><strong>First Offence:</strong> Immediate three-day licence suspension and a $250 fine.</li>
                        <li><strong>Second Offence:</strong> Immediate three-day licence suspension, required enrolment in an education or treatment program, and a $350 fine.</li>
                        <li><strong>Third Offence:</strong> Immediate three-day licence suspension, enrolment in an education or treatment program, six-month Ignition Interlock condition, and a $450 fine.</li>
                    </ul>
                    <p>In addition to these penalties, you must pay a licence reinstatement fee every time your licence is suspended.</p>

                    <p className={styles.contentH3Break}><strong>Worried about your career after a Commercial DUI charge?</strong> Contact <a href="tel:6476972876">(647) 697-2876</a> for a complimentary consultation.</p>

                    <h3>Potential for Criminal Charges for Commercial Drivers in Ontario</h3>
                    <p>Commercial drivers caught with a Blood Alcohol Concentration (BAC) of 80 mg or more per 100 ml of blood within two hours of driving face the following penalties:</p>
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