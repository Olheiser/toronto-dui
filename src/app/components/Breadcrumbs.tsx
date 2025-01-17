"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "../../styles/PageHeader.module.css";

type Breadcrumb = { name: string; href: string | null };

const Breadcrumbs: React.FC = () => {
  const pathname = usePathname();

  const generateBreadcrumbs = (): Breadcrumb[] => {
    const pathParts = pathname.split("/").filter((part) => part !== ""); // Split and remove empty parts
    const exceptions = ["a", "of", "the"]; // Words not to capitalize

    const specialCases: Record<string, string> = {
        faq: "FAQ", // Ensure "FAQ" is always in all caps
        "should-i-plead-guilty": "Should I Plead Guilty?", // Include the question mark
        "can-i-beat-the-charges": "Can I Beat the Charges?", // Include the question mark
        "how-to-get-your-drivers-licence-reinstated": "How to Get Your Driver's Licence Reinstated",
        "defences-available-for-dui-charges": "Defences Available for DUI Charges",
        "repeat-dui-charges": "Repeat DUI Charges",
        "young-and-novice-driver-dui": "Young and Novice Driver DUI",
        "commercial-driver-dui": "Commercial Driver DUI",
        "cannabis-dui-charges": "Cannabis DUI Charges"
    };

    const breadcrumbs = pathParts.map((part, index) => {
        const href = "/" + pathParts.slice(0, index + 1).join("/"); // Reconstruct path for each breadcrumb

        const name =
            specialCases.hasOwnProperty(part.toLowerCase())
                ? specialCases[part.toLowerCase()] // Use special case if it exists
                : part
                      .replace(/-/g, " ") // Replace dashes with spaces
                      .split(" ") // Split into words
                      .map((word) =>
                          exceptions.includes(word.toLowerCase())
                              ? word.toLowerCase() // Keep exceptions lowercase
                              : word.charAt(0).toUpperCase() + word.slice(1) // Capitalize first letter
                      )
                      .join(" "); // Join words back into a string

        return { name, href };
    });

    // Always prepend "Home" to the breadcrumbs
    return [{ name: "Home", href: "/" }, ...breadcrumbs];
  };

  const breadcrumbs = generateBreadcrumbs();

  return (
    <ul className={styles.breadcrumbs}>
      {breadcrumbs.map((crumb, index) => (
        <li
          key={index}
          className={
            crumb.href === pathname ? styles.currentPage : undefined // Apply class if it's the current page
          }
        >
          {crumb.href === pathname ? (
            crumb.name // Render as plain text if it's the current page
          ) : (
            <Link href={crumb.href!}>{crumb.name}</Link>
          )}
          {index < breadcrumbs.length - 1 && (
            <span className={styles.breadcrumbSeparator}>|</span> // Separator
          )}
        </li>
      ))}
    </ul>
  );
};

export default Breadcrumbs;