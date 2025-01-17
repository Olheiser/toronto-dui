import React from "react"
import styles from "@/styles/Subpage.module.css";
import LeadForm from "../components/LeadForm";
import PageHeader from "../components/PageHeader";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Criminal Process | Toronto Impaired Driving Lawyer",
  description: "Facing impaired driving charges in Toronto? Learn how a top Toronto DUI lawyer can navigate the legal process to protect your rights. Call (647) 697-2876 today.",
};

export default function Page() {
    return (
        <main className={styles.pageBody}>
            <PageHeader title="Criminal Process"/>
            <div className={styles.pageContainer}>
                <article className={styles.pageContent}>
                    <h2>Facing Impaired Driving Charges Can Be Overwhelming</h2>
                    <p className={styles.contentBreak}>Navigating the legal system after being charged with impaired driving or a DUI can be complex. To help you better understand the process, we&apos;ve outlined some key information below. This is not a substitute for legal advice—contact us at <a href="tel:6476972876">(647) 697-2876</a> for personalized guidance.</p>

                    <h2>Your First Court Appearance</h2>
                    <p>When charged with impaired driving, you&apos;ll typically be required to attend court on a specified date. This obligation may be outlined in a <strong>Promise to Appear</strong> or an <strong>Undertaking</strong>. If the prosecution believes you might not attend or poses a risk to public safety, they may request that the court keep you in custody. In such cases, a bail hearing (also known as a &quot;show cause&quot; hearing) will be necessary.</p>
                    <p className={styles.contentBreak}>You&apos;ll likely need to attend your first court date in person. In certain situations, a DUI lawyer can appear on your behalf if a <strong>Designation of Counsel</strong> document is filed with the court in advance.</p>

                    <h2>Reviewing Evidence (Disclosure)</h2>
                    <p className={styles.contentBreak}>Before deciding on your plea, your impaired driving lawyer will obtain and review all the evidence the prosecution intends to use. The Crown is obligated to disclose all relevant information about your case. Once the disclosure is reviewed, your impaired driving lawyer will provide an assessment of your options and discuss potential strategies to defend against your DUI charges. A retainer is typically required for this stage, as well as for any initial court appearances while awaiting full disclosure.</p>

                    <h2>Entering a Plea or Electing a Trial</h2>
                    <p className={styles.contentBreak}>After reviewing the evidence, you will need to decide whether to plead guilty or not guilty. In some cases, additional hearings, such as a <strong>preliminary inquiry</strong>, may be necessary before entering a plea. Your lawyer will ensure all evidence has been disclosed and reviewed thoroughly to protect your rights and determine the best course of action.</p>

                    <h2>Preparing for Trial</h2>
                    <p className={styles.contentBreak}>If you choose to proceed to trial, the date will usually be set several months after your last court appearance. You&apos;ll be required to provide an additional retainer for trial preparation. During the trial, the judge will consider all evidence, including witness testimony, police reports, and other materials. If your rights were violated during the investigation or arrest, your impaired driving lawyer may file a <strong>Charter Application</strong> to exclude certain evidence. These issues are typically addressed during the trial.</p>

                    <h2>Sentencing and Appeals</h2>
                    <p className={styles.contentBreak}>If convicted, sentencing may occur on the same day as the trial or on a separate date. In some cases, it&apos;s possible to appeal a conviction or sentence. Your impaired driving lawyer will advise you on whether an appeal is appropriate based on the circumstances of your case and the trial outcome.</p>

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