import React from "react";
import Image from 'next/image';
import styles from "@/styles/Header.module.css";
import HamburgerMenu from "./HamburgerMenu";
import logo from "../../../public/toronto-criminal-lawyer.webp";
import Link from "next/link";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <Link href="/">
                    <Image 
                        src={logo}
                        alt="Toronto Criminal Lawyer Logo"
                        width={250}
                        height={75}
                        className={styles.logo}
                    />
                </Link>
                <nav>
                    <HamburgerMenu />
                </nav>
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
    )
}

export default Header;

