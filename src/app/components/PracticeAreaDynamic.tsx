"use client"

import { useState } from "react";
import Image from "next/image";
import styles from "../../styles/PracticeAreas.module.css";

interface PracticeArea {
  id: number;
  title: string;
  heading: string;
  paragraph: string;
  buttonLabel: string;
  buttonHref: string;
  image: string;
}

const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 1,
    title: "Impaired Operation & Drug-Impaired Driving",
    heading: "Charged with Impaired Driving? We Can Help.",
    paragraph:
      "A charge of Impaired Operation of a Conveyance (commonly known as Drunk Driving) is laid if an individual is believed to operate a motor vehicle, vessel, or aircraft, while their ability is impaired by alcohol, drugs, or a combination of both. At Nicholas Robinson Criminal Lawyer, we use our years of experience, combined with our proven winning strategies, to help you fight your charges, protect your license, and avoid a criminal record.",
    buttonLabel: "Free Case Review",
    buttonHref: "/practice-areas/corporate-law",
    image: "https://imagedelivery.net/8au6u53Ph6mHP5o5AhlVXQ/37bfa81c-8140-4ffc-aa6e-3f042a2d2800/public",
  },
  {
    id: 2,
    title: "Refusal",
    heading: "Refused a Breath Sample? Here's What You Need to Know",
    paragraph:
      "Police do not need a reasonable suspicion that you have been drinking. So long as the officer has the Approved Screening Device (ASD) with them, they may demand a breath sample. The failure to provide a breath sample will result in criminal charges amongst other penalties. With extensive expertise in such charges, Nicholas Robinson develops winning strategies that deliver favorable results for his clients.",
    buttonLabel: "Free Case Review",
    buttonHref: "/practice-areas/corporate-law",
    image: "https://imagedelivery.net/8au6u53Ph6mHP5o5AhlVXQ/bda1ecb9-f2c3-4f74-bfa6-c14e3e61ae00/public",
  },
  {
    id: 3,
    title: "Blowing Above .08",
    heading: "Separate Offence, Separate Defence Strategy",
    paragraph:
      "Having a Blood Alcohol Concentration (BAC) of 80mg or more within two hours of operating a motor vehicle is a separate offence from the Impaired Operation of a Conveyance. It carries its own set of penalties. With extensive experience analyzing 0.08 BAC cases, Nicholas Robinson can provide the clarity and guidance you need to navigate your charges.",
    buttonLabel: "Free Case Review",
    buttonHref: "/practice-areas/corporate-law",
    image: "https://imagedelivery.net/8au6u53Ph6mHP5o5AhlVXQ/c74c0944-f1fc-4820-49b1-d59563a17200/public",
  },
  {
    id: 4,
    title: "Impaired Driving Causing Bodily Harm/Death",
    heading: "Facing Life-Altering Charges? Immediate Legal Help is Critical",
    paragraph:
      "When impaired driving results in an injury or fatality, an individual may be charged with Impaired Operation Causing Bodily Harm or Death. Even if impairment is not proven, an individual may still be charged with Dangerous Operation Causing Bodily Harm or Death. Given the severe penalties involved, it is crucial to consult a skilled criminal lawyer who understands how to navigate these specific charges.",
    buttonLabel: "Free Case Review",
    buttonHref: "/practice-areas/corporate-law",
    image: "https://imagedelivery.net/8au6u53Ph6mHP5o5AhlVXQ/0d9bc925-b40f-4daf-b855-b3d3980f2d00/public",
  },
  {
    id: 5,
    title: "Commercial Driver DUI",
    heading: "Protect Your Commercial Driver’s License & Livelihood",
    paragraph:
      "If you hold a Commercial Driver&apos;s License (CDL), navigating a DUI charge can carry devastating implications for your professional life. For this reason, retaining legal counsel immediately who can navigate complex and technical DUI cases is integral to mitigating the damage to your career. ",
    buttonLabel: "Free Case Review",
    buttonHref: "/practice-areas/corporate-law",
    image: "https://imagedelivery.net/8au6u53Ph6mHP5o5AhlVXQ/f231dc28-3126-4dcb-1eb6-b19d12d3ff00/public",
  },
  {
    id: 6,
    title: "Young & Novice DUI",
    heading: "Empathetic Defence for Teen and Novice Drivers",
    paragraph:
      "Young & Novice Drivers face greater penalties if charged for an impaired driving offence. All provinces, including Ontario, have zero-tolerance laws for younger drivers. Convictions of the sort can be devastating to the future career and personal life of young drivers. Nicholas Robinson&apos;s empathetic approach ensures that those facing DUI charges are never left to navigate the system alone.",
    buttonLabel: "Free Case Review",
    buttonHref: "/practice-areas/corporate-law",
    image: "https://imagedelivery.net/8au6u53Ph6mHP5o5AhlVXQ/a5a63c07-5a9f-43ac-7205-497635a31300/public",
  },
];

const ROW_TOP = PRACTICE_AREAS.slice(0, 3);  // First 3 items (ids 1-3)
const ROW_BOT = PRACTICE_AREAS.slice(3);     // Remaining items (ids 4-6)

function SectionHeader() {
  return (
    <div className={styles["section-header"]}>
      <span className={styles["header-rule"]} />
      <h2 className={styles["section-h2"]}>Practice Areas</h2>
      <h3 className={styles["section-h3"]}>We Get Winning Results</h3>
    </div>
  );
}
 
// ─── Desktop Component ────────────────────────────────────────────────────────
 
function DesktopPracticeAreas() {
  const [activeId, setActiveId] = useState<number>(1);
  const active = PRACTICE_AREAS.find((p) => p.id === activeId)!;
 
  function Thumbnail({ area }: { area: PracticeArea }) {
    const isActive = area.id === activeId;
    return (
      <button
        onClick={() => setActiveId(area.id)}
        className={
          isActive
            ? `${styles["thumbnail-btn"]} ${styles["is-active"]}`
            : styles["thumbnail-btn"]
        }
        aria-pressed={isActive}
      >
        <Image
          src={area.image}
          alt={area.title}
          fill
          sizes="33vw"
          className={styles["thumb-img"]}
          priority={area.id === 1}
        />
        <span className={styles["thumb-overlay"]} />
        <span className={styles["thumb-title"]}>{area.title}</span>
        <span className={styles["thumb-active-bar"]} />
      </button>
    );
  }
 
  return (
    <section className={styles["pa-section"]}>
      <div className={styles["pa-inner"]}>
        <SectionHeader />
 
        {/* Row 1 — three thumbnails */}
        <div className={styles["thumb-row"]}>
          {ROW_TOP.map((area) => (
            <Thumbnail key={area.id} area={area} />
          ))}
        </div>
 
        {/* Row 2 — featured image + content */}
        {/* To add padding above/below this row, uncomment padding in .featured-row-wrap */}
        <div className={styles["featured-row-wrap"]}>
          <div className={styles["featured-row"]}>
            <div className={styles["featured-image-wrap"]}>
              <Image
                src={active.image}
                alt={active.title}
                fill
                sizes="50vw"
                className={styles["featured-img"]}
                priority
              />
              <div className={styles["featured-img-overlay"]} />
            </div>
            <div className={styles["featured-content"]}>
              <p className={styles["featured-practice-label"]}>{active.title}</p>
              <h2 className={styles["featured-heading"]}>{active.heading}</h2>
              <p className={styles["featured-paragraph"]}>{active.paragraph}</p>
              <a href={active.buttonHref} className={styles["featured-btn"]}>
                {active.buttonLabel}
              </a>
            </div>
          </div>
        </div>
 
        {/* Row 3 — three thumbnails */}
        <div className={styles["thumb-row"]}>
          {ROW_BOT.map((area) => (
            <Thumbnail key={area.id} area={area} />
          ))}
        </div>
      </div>
    </section>
  );
}
 
// ─── Mobile Accordion Component ───────────────────────────────────────────────
 
function MobilePracticeAreas() {
  const [openId, setOpenId] = useState<number | null>(null);
 
  const toggle = (id: number) =>
    setOpenId((prev) => (prev === id ? null : id));
 
  return (
    <section className={styles["pa-section-mobile"]}>
      <SectionHeader />
 
      <div className={styles["accordion-list"]}>
        {PRACTICE_AREAS.map((area) => {
          const isOpen = openId === area.id;
          return (
            <div
              key={area.id}
              className={
                isOpen
                  ? `${styles["accordion-item"]} ${styles["is-open"]}`
                  : styles["accordion-item"]
              }
            >
              <button
                className={styles["accordion-trigger"]}
                onClick={() => toggle(area.id)}
                aria-expanded={isOpen}
              >
                <span className={styles["accordion-title"]}>{area.title}</span>
                <span
                  className={
                    isOpen
                      ? `${styles["accordion-icon"]} ${styles["rotated"]}`
                      : styles["accordion-icon"]
                  }
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M4 6.5L9 11.5L14 6.5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
 
              {/* Collapsible body — grid-template-rows trick for smooth animation */}
              <div className={styles["accordion-body"]}>
                <div>
                  <div className={styles["accordion-image-wrap"]}>
                    <Image
                      src={area.image}
                      alt={area.title}
                      fill
                      sizes="100vw"
                      className={styles["accordion-img"]}
                    />
                    <div className={styles["accordion-img-overlay"]} />
                  </div>
                  <div className={styles["accordion-content"]}>
                    <h3 className={styles["accordion-heading"]}>{area.heading}</h3>
                    <p className={styles["accordion-paragraph"]}>{area.paragraph}</p>
                    <a href={area.buttonHref} className={styles["featured-btn"]}>
                      {area.buttonLabel}
                      <span className={styles["btn-arrow"]}>→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
 
// ─── Root Export ──────────────────────────────────────────────────────────────
// Both components mount; CSS controls which is visible based on screen width.
 
export default function PracticeAreasSection() {
  return (
    <>
      <div className={styles["desktop-only"]}>
        <DesktopPracticeAreas />
      </div>
      <div className={styles["mobile-only"]}>
        <MobilePracticeAreas />
      </div>
    </>
  );
}







