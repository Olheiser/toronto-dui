import React from "react"
import styles from "@/styles/Subpage.module.css";
import LeadForm from "../../components/LeadForm";
import PageHeader from "../../components/PageHeader";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Repeat DUI Charges | Toronto Impaired Driving Lawyer",
  description: "Facing repeat DUI charges in Toronto? Learn how an experienced impaired driving lawyer can fight for the best outcome. Call (647) 697-2876 for a free consultation today.",
};

export default function Page() {
    return (
        <main className={styles.pageBody}>
            <PageHeader title="Repeat DUI Charges"/>
            <div className={styles.pageContainer}>
                    <article className={styles.pageContent}>
                        <p className={styles.contentBreak}>In Ontario, impaired driving laws apply to any operation of a vehicle (cars, boats, snowmobiles, etc.) while under the influence of alcohol, cannabis, or other drugs. Repeat DUI charges bring significantly harsher penalties than a first-time offence and can impact your ability to drive, your freedom, and even your employment.</p>

                        <h2>Penalties and Consequences for a Second DUI Offence</h2>
                        <ul className={`${styles.contentList}`}>
                            <li><strong>Licence Suspension:</strong> Three-year minimum suspension; 90-day immediate roadside suspension and 7-day vehicle impoundment when charged.</li>
                            <li><strong>Jail Time:</strong> Minimum 30 days, with a maximum of up to 10 years if there are aggravating factors.</li>
                            <li><strong>Fines and Financial Penalties:</strong> Minimum $1,000 fine, plus costs for the ignition interlock device, mandatory “Back on Track” education program, and licence reinstatement fees.</li>
                            <li><strong>Ignition Interlock Requirement:</strong> Mandatory for three years upon licence reinstatement.</li>
                        </ul>
                        <p className={styles.contentBreak}><strong>Facing your 2nd DUI?</strong> Call <a href="tel:6476972876">(647) 697-2876</a> to receive a free consultation with an impaired driving lawyer.</p>

                        <h2>Penalties and Consequences for a Third DUI Offence</h2>
                        <ul className={`${styles.contentList}`}>
                            <li><strong>Licence Suspension:</strong> Lifetime suspension, with reinstatement possible after 10 years under strict conditions.</li>
                            <li><strong>Jail Time:</strong> Minimum 120 days, with a maximum of 14 years for causing bodily harm, and up to life imprisonment if someone is killed.</li>
                            <li><strong>Higher Fines and Financial Penalties:</strong> Substantially higher fines than for a second offence, plus extensive costs for licence reinstatement and mandatory education programs.</li>
                            <li><strong>Ignition Interlock:</strong> Typically required for at least six years upon reinstatement, or possibly for life.</li>
                        </ul>
                        <p className={styles.contentBreak}><strong>Are you facing your 3rd DUI?</strong> Call <a href="tel:6476972876">(647) 697-2876</a> for a complimentary consultation with an impaired driving lawyer.</p>

                        <h2>Defending Against Repeat DUI Charges</h2>
                        <p className={styles.contentH3Break}>If you&apos;re facing a second or third DUI charge, it&apos;s essential to understand your rights. The Canadian Charter of Rights and Freedoms protects you from unlawful searches, seizures, and detentions. An experienced DUI lawyer can analyze evidence, challenge the accuracy of sobriety tests, and negotiate with the Crown to minimize penalties or, in some cases, seek a dismissal of charges.</p>

                        <h3>Key Takeaways for the Accused</h3>
                        <ul className={`${styles.contentBreak} ${styles.contentList}`}>
                            <li><strong>Don&apos;t Plead Guilty Without Legal Advice:</strong> The stakes are high for repeat offenders. Contacting a lawyer ensures that you understand the full implications of a guilty plea and explore all available defences.</li>
                            <li><strong>Know Your Rights:</strong> A qualified DUI lawyer can help ensure that all evidence against you was collected legally and that your rights were respected during the arrest process.</li>
                            <li><strong>Consider the Long-Term Impact:</strong> The repercussions of a repeat DUI conviction go beyond immediate penalties.</li>
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