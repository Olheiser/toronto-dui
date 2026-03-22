import React from "react"
import styles from "@/styles/Subpage.module.css";
import LeadForm from "../../components/LeadForm";
import PageHeader from "../../components/PageHeader";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cannabis DUI Charges | Toronto Impaired Driving Lawyer",
  description: "Facing cannabis DUI charges in Toronto? Learn how Nicholas Robinson, an experienced impaired driving lawyer, can defend your case. Call (647) 697-2876 today.",
};

export default function Page() {
    return (
        <main className={styles.pageBody}>
            <PageHeader title="Cannabis DUI Charges"/>
            <div className={styles.pageContainer}>
                <article className={styles.pageContent}>
                    <p className={styles.contentBreak}>Driving while impaired by cannabis is illegal and carries serious penalties in Ontario. Whether the cannabis is consumed legally or not, operating a vehicle under its influence endangers public safety and can result in significant legal consequences. This applies to all types of vehicles, including cars, boats, and off-road vehicles.</p>

                    <h2>What is Cannabis-Impaired Driving?</h2>
                    <p>Cannabis impairs your driving ability by affecting reaction time, coordination, and decision-making skills. In Ontario, if your ability to drive is compromised due to cannabis use, you can be charged with impaired driving, regardless of the amount consumed. Additionally, Ontario enforces zero-tolerance policies for specific drivers, such as young and novice drivers, who cannot have any detectable cannabis in their system.</p>

                    <p className={styles.contentBreak}><strong>Charged with a Cannabis DUI?</strong> Call <a href="tel:6476972876">(647) 697-2876</a> for a free consultation with an experienced impaired driving lawyer.</p>

                    <h2>Penalties for Cannabis-Impaired Driving in Ontario</h2>
                    <p>If police determine you are driving while impaired by cannabis, you face immediate penalties under Ontario&apos;s regulations:</p>
                    <ul className={`${styles.contentList}`}>
                        <li><strong>Immediate Licence Suspension:</strong>
                            <ul className={`${styles.contentList}`}>
                                <li><strong>First Offence:</strong> 3-day roadside suspension.</li>
                                <li><strong>Second Offence:</strong> 7-day roadside suspension, mandatory education or treatment programs.</li>
                                <li><strong>Third Offence:</strong> 30-day suspension, mandatory education or treatment programs, and a 6-month ignition interlock condition upon reinstatement.</li>
                            </ul>
                        </li>
                        <li><strong>Vehicle Impoundment:</strong> Up to 7 days for each offence.</li>
                        <li><strong>Fines:</strong> $250 for a first offence, increasing with subsequent offences.</li>
                        <li><strong>Licence Suspension upon Conviction:</strong> At least 1 year for a first offence, with longer suspensions for repeat offenders.</li>
                    </ul>
                    <p className={styles.contentBreak}>Ontario&apos;s penalties escalate for repeat offences and may include mandatory education programs, installation of an ignition interlock device, and higher fines.</p>

                    <h2>Penalties for Cannabis-Impaired Driving Under the Criminal Code of Canada</h2>
                    <p>In addition to Ontario&apos;s penalties, federal laws under the Criminal Code of Canada set prohibited levels for THC in the blood and specify the following penalties:</p>
                    
                    <h3>Prohibited THC Levels:</h3>
                    <ul className={`${styles.contentList}`}>
                        <li><strong>2 to 5 nanograms (ng) of THC per millilitre (ml) of blood:</strong> Summary conviction with a maximum $1,000 fine.</li>
                        <li><strong>5 ng or more of THC per ml of blood:</strong> Offence carries stiffer penalties, similar to alcohol-impaired driving.</li>
                        <li><strong>Combination of 50 mg of alcohol per 100 ml of blood and 2.5 ng or more of THC per ml of blood:</strong> Considered a serious offence with escalating penalties.</li>
                    </ul>

                    <h3>Penalties for Drug-Impaired Driving:</h3>
                    <ul className={`${styles.contentList}`}>
                        <li><strong>1st DUI:</strong> Minimum $1,000 fine.</li>
                        <li><strong>2nd DUI:</strong> Minimum 30 days in jail.</li>
                        <li><strong>3rd DUI:</strong> Minimum 120 days in jail, with a maximum penalty of 10 years.</li>
                    </ul>
                    <p>Convictions for drug-impaired driving at the federal level can lead to severe outcomes, including up to 14 years imprisonment if the offence results in bodily harm, or a life sentence if it causes death.</p>

                    <p className={styles.contentBreak}><strong>Accused of driving under the influence of cannabis?</strong> Call <a href="tel:6476972876">(647) 697-2876</a> for expert legal advice at no cost.</p>

                    <h2>Detection of Cannabis Impairment</h2>
                    
                    <p><strong>Oral Fluid Drug Screeners:</strong></p>
                    <p>Police officers may use roadside oral fluid tests to detect THC. These tests are quick and accurate, confirming the presence of cannabis in the system. A positive result, combined with signs of impairment, can lead to further testing, such as a blood sample.</p>

                    <p><strong>Standard Field Sobriety Tests (SFSTs) and Drug Recognition Expert (DRE) Evaluations</strong></p>
                    <p className={styles.contentBreak}>If impairment is suspected, officers may require drivers to complete a sobriety test or undergo a DRE evaluation. Refusal to comply can lead to additional charges and penalties.</p>

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