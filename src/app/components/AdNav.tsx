import React from "react";
import Image from 'next/image';
import styles from "@/styles/AdHdrFtr.module.css";
//import adStyles from "@/styles/AdHdrFtr.module.css";
import logo from "../../../public/toronto-criminal-lawyer.webp";
import cbc from "../../../public/cbc-logo.png";
import globalNews from "../../../public/global-news-logo.png"
import Link from "next/link";

const AdNav = () => {
    return (
        <>
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <Link href="/">
                <Image 
                    src={logo}
                    alt="Toronto Criminal Lawyer Logo"
                    width={250}
                    height={75}
                    className={styles.logo}
                /></Link>
                <div className={styles.navCTA}>
                    <a href="tel:6476972876" className={styles.navCTALink}>
                    <button className={styles.navCTAButton}>
                        <span className={styles.navCTATopRow}>(647) 697-2876</span>
                        <span className={styles.navCTABottomRow}>FREE CONSULTATION</span>
                    </button>
                    </a>
                </div>
            </div> 
        </header>
        <section className={styles.heroImage}>
                <div className={styles.heroContent}>
                    <h2>We Can Beat It</h2>
                    <h1>Top-Rated DUI Defence <br/>in the Greater Toronto Area</h1>
                    <div className={styles.asSeenRow}>
                        <p className={styles.asSeen}>As Seen On</p>
                        <div className={styles.newsRow}>
                            <a href="https://globalnews.ca/news/2606827/saskatchewan-has-highest-percentage-of-impaired-drivers/">
                                <Image 
                                src={globalNews}
                                alt="Global News Logo"
                                height={75}
                                className={styles.newsLogo}
                            /></a>
                            <a href="https://www.cbc.ca/news/canada/saskatchewan/regina-sexual-offence-court-sentence-9.7108937">
                                <Image 
                                src={cbc}
                                alt="CBC News Logo"
                                height={75}
                                className={styles.newsLogo}
                            /></a>
                        </div>
                        
                    </div>
                    <div className={styles.introButtonRow}>
                        <a href="tel:6476972876">
                        <button className={styles.introButton}>Call Now</button>
                        </a>
                    </div>
                </div>
        </section>
        
            <div className={styles.heroCards}>
                    <div className={styles.heroCard}>
                        <h3>1,400+</h3>
                        <h4>Clients<br/>Represented</h4>
                    </div>
                    <div className={styles.heroCard}>
                        <h3>100+</h3>
                        <h4>Successful<br/>Trial Matters</h4>
                    </div>
                    <div className={styles.heroCard}>
                        <h3>14+</h3>
                        <h4>Years Defending<br/>DUI Charges</h4>
                    </div>
                    <div className={styles.heroCard}>
                        <h3>60+</h3>
                        <h4>5/5 Star Ratings<br/>On Google</h4>
                    </div>
                </div>
        </>
    )
}

export default AdNav;

