"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "../../styles/PageHeader.module.css";

type Breadcrumb = { name: string; href: string | null };

const Breadcrumbs: React.FC = () => {
  const pathname = usePathname();

  const generateBreadcrumbs = (): Breadcrumb[] => {
    const rawParts = pathname.split("/").filter((part) => part !== "");
    const exceptions = ["a", "of", "the"]; // Words not to capitalize
    const ignoredSegments = ["main"]; // Segments to skip in display only

    const specialCases: Record<string, string> = {
      faq: "FAQ",
      "should-i-plead-guilty": "Should I Plead Guilty?",
      "can-i-beat-the-charges": "Can I Beat the Charges?",
      "how-to-get-your-drivers-licence-reinstated":
        "How to Get Your Driver's Licence Reinstated",
      "defences-available-for-dui-charges":
        "Defences Available for DUI Charges",
      "repeat-dui-charges": "Repeat DUI Charges",
      "young-and-novice-driver-dui": "Young and Novice Driver DUI",
      "commercial-driver-dui": "Commercial Driver DUI",
      "cannabis-dui-charges": "Cannabis DUI Charges",
    };

    const breadcrumbs: Breadcrumb[] = [];

    rawParts.forEach((part, index) => {
      const href = "/" + rawParts.slice(0, index + 1).join("/");

      // Skip rendering this segment, but still use it in href construction
      if (ignoredSegments.includes(part.toLowerCase())) {
        return;
      }

      const name = specialCases.hasOwnProperty(part.toLowerCase())
        ? specialCases[part.toLowerCase()]
        : part
            .replace(/-/g, " ")
            .split(" ")
            .map((word) =>
              exceptions.includes(word.toLowerCase())
                ? word.toLowerCase()
                : word.charAt(0).toUpperCase() + word.slice(1)
            )
            .join(" ");

      breadcrumbs.push({ name, href });
    });

    // Always prepend "Home"
    return [{ name: "Home", href: "/" }, ...breadcrumbs];
  };

  const breadcrumbs = generateBreadcrumbs();

  return (
    <ul className={styles.breadcrumbs}>
      {breadcrumbs.map((crumb, index) => (
        <li
          key={index}
          className={
            crumb.href === pathname ? styles.currentPage : undefined
          }
        >
          {crumb.href === pathname ? (
            crumb.name
          ) : (
            <Link href={crumb.href!}>{crumb.name}</Link>
          )}
          {index < breadcrumbs.length - 1 && (
            <span className={styles.breadcrumbSeparator}>|</span>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Breadcrumbs;