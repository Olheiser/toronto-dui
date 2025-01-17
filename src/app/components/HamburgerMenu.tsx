"use client"

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import styles from "@/styles/HamburgerMenu.module.css";

const HamburgerMenu = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

    const pathname = usePathname()
    const menuRef = useRef<HTMLDivElement>(null); // Reference for the menu

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    const handleDropdownToggle = (index: number) => {
        // If the same dropdown is clicked, close it; otherwise, open the new one
        setActiveDropdown(activeDropdown === index ? null : index);
    
        // Only update sub-dropdown state for mobile
        //if (typeof window !== "undefined" && window.innerWidth < 1000) {
            //setActiveSubDropdown(activeSubDropdown === index ? null : index);
        //}
    };

    const handleMouseEnter = (index: number) => {
        setActiveDropdown(index);
    };

    const handleMouseLeave = () => {
        setActiveDropdown(null);
    };

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setMenuOpen(false);
            }
        };

        if (menuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuOpen]);

    // Close menu when pathname changes
    useEffect(() => {
        if (menuOpen) {
            setMenuOpen(false); // Close the menu when navigating to a new page
            setActiveDropdown(null); // Reset dropdowns
        }
    }, [pathname]); // Trigger whenever the route changes


    return (
        <div ref={menuRef}>
            <button
                className={styles.hamburger}
                onClick={toggleMenu}
                aria-label={menuOpen ? "Open navigation menu" : "Close navigation menu"}
            >
                {menuOpen ? '✖' : '☰'}
            </button>
            <ul className={`${styles.menu} ${menuOpen ? styles.showMenu : ""}`}>
                <li 
                    onMouseEnter={typeof window !== "undefined" && window.innerWidth >= 1000 ? () => handleMouseEnter(0) : undefined}
                    onMouseLeave={typeof window !== "undefined" && window.innerWidth >= 1000 ? handleMouseLeave : undefined}
                >
                    <div className={styles.menuItemRow}>
                        <Link href="/criminal-process" className={pathname === "/criminal-process" ? styles.active : ""}>Criminal Process</Link>
                        <span 
                            className={styles.dropdownArrow}
                            onClick={() => handleDropdownToggle(0)}>
                            ▾
                        </span>
                    </div>
                    
                    <ul className={`${styles.dropdown} ${
                            activeDropdown === 0 ? styles.showDropdown : ""
                        }`}>
                        <li><Link href="/criminal-process/can-i-beat-the-charges" className={pathname === "/criminal-process/can-i-beat-the-charges" ? styles.active : ""}>Can I Beat the Charges?</Link></li>
                        <li><Link href="/criminal-process/should-i-plead-guilty" className={pathname === "/criminal-process/should-i-plead-guilty" ? styles.active : ""}>Should I Plead Guilty?</Link></li>
                        <li><Link href="/criminal-process/how-to-get-your-drivers-licence-reinstated" className={pathname === "/criminal-process/how-to-get-your-drivers-licence-reinstated" ? styles.active : ""}>How to Get Your Driver&apos;s Licence Reinstated</Link></li>
                        <li><Link href="/criminal-process/your-rights" className={pathname === "/criminal-process/your-rights" ? styles.active : ""}>Your Rights</Link></li>
                        <li><Link href="/criminal-process/faq" className={pathname === "/criminal-process/faq" ? styles.active : ""}>FAQ</Link></li>
                    </ul>
                </li>
                <li
                    >
                    <div className={styles.menuItemRow}>
                        <Link href="/practice-areas" className={pathname === "/practice-areas" ? styles.active : ""}>Practice Areas</Link>
                        <span 
                            className={styles.dropdownArrow}
                            onClick={() => handleDropdownToggle(1)}>
                            ▾
                        </span>
                    </div>
                    <ul className={`${styles.dropdown} 
                        ${activeDropdown === 1 ? styles.showDropdown : ""}`}
                    >
                        <li><Link href="/practice-areas/impaired-driving" className={pathname === "/practice-areas/impaired-driving" ? styles.active : ""}>Impaired Driving</Link></li>
                        <li><Link href="/practice-areas/driving-over-08" className={pathname === "/practice-areas/driving-over-08" ? styles.active : ""}>Driving Over .08</Link></li>
                        <li><Link href="/practice-areas/dangerous-driving" className={pathname === "/practice-areas/dangerous-driving" ? styles.active : ""}>Dangerous Driving</Link></li>
                        <li><Link href="/practice-areas/failure-to-stop-at-an-accident" className={pathname === "/practice-areas/failure-to-stop-at-an-accident" ? styles.active : ""}>Failure to Stop at an Accident</Link></li>
                        <li><Link href="/practice-areas/flight-from-a-peace-officer" className={pathname === "/practice-areas/flight-from-peace-officer" ? styles.active : ""}>Flight From a Peace Officer</Link></li>
                        <li><Link href="/practice-areas/refusing-a-breathalyzer-or-drug-test" className={pathname === "/practice-areas/refusing-a-breathalyzer-or-drug-test" ? styles.active : ""}>Refusing a Breathalyzer or Drug Test</Link></li>
                    </ul>
                </li>
                <li 
                    onMouseEnter={typeof window !== "undefined" && window.innerWidth >= 1000 ? () => handleMouseEnter(2) : undefined}
                    onMouseLeave={typeof window !== "undefined" && window.innerWidth >= 1000 ? handleMouseLeave : undefined}
                >
                    <div className={styles.menuItemRow}>
                        <Link href="/penalties-and-sentencing" className={pathname === "/penalties-and-sentencing" ? styles.active : ""}>Penalties &amp; Sentencing</Link>
                        <span 
                            className={styles.dropdownArrow}
                            onClick={() => handleDropdownToggle(2)}>
                            ▾
                        </span>
                    </div>
                    
                    <ul className={`${styles.dropdown} ${
                            activeDropdown === 0 ? styles.showDropdown : ""
                        }`}>
                        <li><Link href="/penalties-and-sentencing/defences-available-for-dui-charges" className={pathname === "/penalties-and-sentencing/defences-available-for-dui-charges" ? styles.active : ""}>Defences Available for DUI Charges</Link></li>
                        <li><Link href="/penalties-and-sentencing/repeat-dui-charges" className={pathname === "/penalties-and-sentencing/repeat-dui-charges" ? styles.active : ""}>Repeat DUI Charges</Link></li>
                        <li><Link href="/penalties-and-sentencing/young-and-novice-driver-dui" className={pathname === "/penalties-and-sentencing/young-and-novice-driver-dui" ? styles.active : ""}>Young and Novice Driver DUI</Link></li>
                        <li><Link href="/penalties-and-sentencing/commercial-driver-dui" className={pathname === "/penalties-and-sentencing/commercial-driver-dui" ? styles.active : ""}>Commercial Driver DUI</Link></li>
                        <li><Link href="/penalties-and-sentencing/cannabis-dui-charges" className={pathname === "/penalties-and-sentencing/cannabis-dui-charges" ? styles.active : ""}>Cannabis DUI Charges</Link></li>
                    </ul>
                </li>
                
            </ul>
        </div>
    )
}

export default HamburgerMenu;