import React from "react";
import Link from "next/link";
import Image from 'next/image';
import styles from "@/styles/Footer.module.css";
import logo from "../../../public/toronto-criminal-lawyer.webp";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <section className={styles.footerTopRow}>
                    <div className={styles.footerContactSection}>
                        <Link href="/">
                            <Image 
                                src={logo}
                                alt="Toronto Criminal Lawyer Logo"
                                width={250}
                                height={75}
                                className={styles.logo}
                            />
                        </Link>
                        
                        <p><strong>Contact us<br /> Day or Night 24/7</strong></p>
                        <ul className={styles.footerAddress}>
                            <li>478 Richmond St W</li>
                            <li>Richmond Place</li>
                            <li>Toronto, Ontario M5V 1Y2</li>
                        </ul>
                        <ul className={styles.footerContact}>
                            <li><strong>Office Phone: </strong><a href="tel:6476972876">(647) 697-2876</a></li>
                            <li><strong>Fax: </strong><a href="tel:8555751777">(855) 575-1777</a></li>
                            <li><strong>Email: </strong><a href="mailto:nick@nprobinson.com">nick@nprobinson.com</a></li>
                        </ul>
                        <div>
                            <a href="tel:6476972876">
                                <button className={styles.footerCTA}>Free Consultation</button>
                            </a>
                            
                        </div>
                    </div>
                    <section className={styles.footerPracticeAreasContainer}>
                        <div className={styles.footerSitemap}>
                            <h2>Sitemap</h2>
                            <ul className={styles.footerUl}>
                                <li><Link href="/criminal-process">Criminal Process</Link></li>
                                <li><Link href="/criminal-process/can-i-beat-the-charges">Can I Beat the Charges?</Link></li>
                                <li><Link href="/criminal-process/should-i-plead-guilty">Should I Plead Guilty?</Link></li>
                                <li><Link href="/criminal-process/how-to-get-your-drivers-licence-reinstated">How to Get Your Driver&apos;s Licence Reinstated</Link></li>
                                <li><Link href="/criminal-process/your-rights">Your Rights</Link></li>
                                <li><Link href="/criminal-process/faq">FAQ</Link></li>
                                <li><Link href="/penalties-and-sentencing">Penalties &amp; Sentencing</Link></li>
                                <li><Link href="/penalties-and-sentencing/cannabis-dui-charges">Cannabis DUI Charges</Link></li>
                                <li><Link href="/penalties-and-sentencing/commercial-driver-dui">Commercial Driver DUI</Link></li>
                                <li><Link href="/penalties-and-sentencing/defences-available-for-dui-charges">Defences Available for DUI Charges</Link></li>
                                <li><Link href="/penalties-and-sentencing/repeat-dui-charges">Repeat DUI Charges</Link></li>
                                <li><Link href="/penalties-and-sentencing/young-and-novice-driver-dui">Young and Novice Driver DUI</Link></li>
                            </ul>
                        </div>
                        <div className={styles.footerPracticeAreas}>
                            <h2><Link href="/practice-areas">Practice Areas</Link></h2>
                            <ul className={styles.footerUl}>
                                <li><Link href="/practice-areas/impaired-driving">Impaired Driving</Link></li>
                                <li><Link href="/practice-areas/dangerous-driving">Dangerous Driving</Link></li>
                                <li><Link href="/practice-areas/failure-to-stop-at-an-accident">Failure to Stop at an Accident</Link></li>
                                <li><Link href="/practice-areas/flight-from-a-peace-officer">Flight From Peace Officer</Link></li>
                                <li><Link href="/practice-areas/refusing-a-breathalyzer-or-drug-test">Refusing a Breathalyzer or Drug Test</Link></li>
                                <li><Link href="/practice-areas/driving-over-08">Driving Over .08</Link></li>
                            </ul>
                        </div>
                    </section>
                </section>

            </div>
            <section className={styles.legalContainer}>
                <div className={styles.legalDiv}>
                    <p className={styles.copyright}>Copyright © 2024 Toronto Impaired Driving Lawyer. All Rights Reserved. <a href="https://directory.canadacriminallawyer.ca/terms-of-service/">Terms of Service.</a> <a href="https://canadacriminallawyer.ca/privacy-policy/">Privacy Policy and Website Agreement.</a></p>
                    <p className={styles.termsOfService}><em>The information provided on this website is Not Legal Advice, is provided for discussion purposes only, may not be accurate and is not intended to substitute for the advice of a lawyer. Reliance upon any information provided would not be grounds to advance a claim against N.P. Robinson Law Professional Corporation. You would need to retain a lawyer to discuss your specific fact scenario for a formal legal opinion.</em></p>
                </div>
            </section>
        </footer>
    )
}

export default Footer;

