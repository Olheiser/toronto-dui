import React from "react"
import styles from "@/styles/Subpage.module.css";
import LeadForm from "../../components/LeadForm";
import PageHeader from "../../components/PageHeader";
import FAQAccordion from "@/app/components/FAQAccordion";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Toronto Impaired Driving Lawyer",
  description: "Get answers to your impaired driving questions from an experienced Toronto DUI lawyer. Call (647) 697-2876 for expert legal advice today.",
};

export default function Page() {
    return (
        <main className={styles.pageBody}>
            <PageHeader title="Frequently Asked Questions"/>
            <div className={styles.pageContainer}>
                <article className={`${styles.pageContent} ${styles.faqPageContainer}`}>
                    <FAQAccordion />
                </article>
                <aside className={styles.form}>
                    <LeadForm />
                </aside>
            </div>
        </main>
    )
}