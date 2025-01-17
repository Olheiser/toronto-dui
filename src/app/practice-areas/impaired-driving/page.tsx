import React from "react"
import styles from "@/styles/Subpage.module.css";
import LeadForm from "../../components/LeadForm";
import PageHeader from "../../components/PageHeader";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impaired Driving | Toronto Impaired Driving Lawyer",
  description: "Charged with impaired driving in Toronto? Speak with a trusted DUI lawyer for expert legal guidance. Call (647) 697-2876 for a free consultation today.",
};

export default function Page() {
    return (
        <main className={styles.pageBody}>
            <PageHeader title="Impaired Driving"/>
            <div className={styles.pageContainer}>
                <article className={styles.pageContent}>
                    <p className={styles.contentBreak}><strong>Impaired driving</strong> is a serious criminal offence that endangers public safety. It involves operating a motor vehicle while under the influence of alcohol, drugs, or a combination of both, impairing a person&apos;s ability to drive responsibly.</p>

                    <h2>Impaired Driving: Criminal Code Definition</h2>
                    <p>Impaired driving is defined under <a href="https://laws-lois.justice.gc.ca/eng/acts/c-46/section-320.14.html">Section 320.14 of the Criminal Code:</a></p>
                    <blockquote className={styles.contentBreak}>
                        <p><strong>320.14 (1):</strong> Everyone commits an offence who:</p>
                        <p>(a) operates a conveyance while the person&apos;s ability to operate it is impaired to any degree by alcohol or a drug or by a combination of alcohol and a drug;</p>
                        <p>(b) subject to subsection (5), has, within two hours after ceasing to operate a conveyance, a blood alcohol concentration that is equal to or exceeds 80 mg of alcohol in 100 mL of blood;</p>
                        <p>(c) subject to subsection (6), has, within two hours after ceasing to operate a conveyance, a blood drug concentration that is equal to or exceeds the blood drug concentration for the drug that is prescribed by regulation; or</p>
                        <p>(d) subject to subsection (7), has, within two hours after ceasing to operate a conveyance, a blood alcohol concentration and a blood drug concentration that is equal to or exceeds the blood alcohol concentration and the blood drug concentration for the drug that are prescribed by regulation for instances where alcohol and that drug are combined.</p>
                    </blockquote>

                    <h2>Elements of Impaired Driving</h2>
                    <p>To establish impaired driving, the Crown must prove:</p>
                    <ul className={`${styles.contentBreak} ${styles.contentList}`}>
                        <li>The identity of the accused.</li>
                        <li>The date and location of the incident.</li>
                        <li>That the accused was operating a motor vehicle.</li>
                        <li>That the accused&apos;s ability to operate the vehicle was impaired by alcohol, drugs, or both.</li>
                    </ul>

                    <h2>Potential Penalties for Impaired Driving</h2>
                    <p>Penalties for impaired driving vary based on the circumstances and prior offences:</p>
                    <ul className={`${styles.contentList}`}>
                        <li><strong>First Offence:</strong> Minimum fine of $1,000.</li>
                        <li><strong>Second Offence:</strong> Minimum 30 days imprisonment.</li>
                        <li><strong>Subsequent Offences:</strong> Minimum 120 days imprisonment.</li>
                        <li><strong>Indictable Offence:</strong> Up to 10 years in prison.</li>
                    </ul>

                    <p className={styles.contentBreak}><Link href="/penalties-and-sentencing/">Click here to learn more about the potential penalties for refusing a breathalyzer or drug test.</Link></p>

                    <h2>Defences Available for Impaired Driving</h2>
                    <p>Several defences may apply in impaired driving cases, including:</p>
                    <ul className={`${styles.contentList}`}>
                        <li><strong>Improper Stop or Arrest:</strong> Contesting the legality of the vehicle stop or arrest.</li>
                        <li><strong>Faulty Breathalyzer or Drug Test:</strong> Demonstrating inaccuracies in test results or issues with equipment calibration.</li>
                        <li><strong>Medical Conditions:</strong> Providing evidence that symptoms mistaken for impairment were due to a medical issue.</li>
                        <li><strong>No Impairment:</strong> Arguing that the accused was not impaired at the time of driving, supported by credible evidence.</li>
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