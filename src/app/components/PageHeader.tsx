import React from 'react';
//import Link from 'next/link';
import styles from "@/styles/PageHeader.module.css";
import Breadcrumbs from './Breadcrumbs';

interface BreadcrumbProps {
    title: string,
    //breadcrumbs: [],
}

const PageHeader = ({ title}: BreadcrumbProps) => {
    return (
        <section className={styles.pageHeader}>
            <div className={styles.pageHeaderContainer}>
                    <h1 className={styles.pageTitle}>{title}</h1>
                    <hr className={styles.pageHeaderDivider} />
                    <Breadcrumbs />
            </div>
        </section>
    )
}

export default PageHeader;
