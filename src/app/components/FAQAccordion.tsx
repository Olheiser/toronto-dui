"use client"

import { useState } from "react";
import styles from "../../styles/FAQAccordion.module.css";
import Button from "./Button";

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
<div className={styles.faqContainer}>
      {/* FAQ 1 */}
      <div className={styles.faqItem}>
        <div className={styles.faqHeader} onClick={() => toggleAccordion(0)}>
          <span
            className={`${styles.faqArrow} ${
              activeIndex === 0 ? styles.faqArrowActive : ""
            }`}
          >
            ↓
          </span>
          <h3 className={styles.faqQuestion}>Can I Beat the Charges?</h3>
        </div>
        {activeIndex === 0 && (
          <div className={styles.faqAnswer}>
            <p>A qualified impaired driving lawyer can help you determine what defences might exist to the charges you face.</p> 
            <Button link="/criminal-process/can-i-beat-the-charges" text="Learn how you can beat the charges" />
          </div>
        )}
      </div>

      {/* FAQ 2 */}
      <div className={styles.faqItem}>
        <div className={styles.faqHeader} onClick={() => toggleAccordion(1)}>
          <span
            className={`${styles.faqArrow} ${
              activeIndex === 1 ? styles.faqArrowActive : ""
            }`}
          >
            ↓
          </span>
          <h3 className={styles.faqQuestion}>
            How much does it cost to hire a DUI lawyer?
          </h3>
        </div>
        {activeIndex === 1 && (
          <div className={styles.faqAnswer}>
            <p>Those convicted of impaired driving sometimes have to pay large fines and court surcharges.
            <br /><br />
            In addition to legal fees, your impaired driving might also charge you for out of pocket expenses known as &quot;disbursements&quot;. This includes things like the cost of travel and printing. Many DUI lawyers bill by the hour but some will offer a flat or fixed fee for service. 
            <br /><br />
            Nicholas Robinson offers flexible payment arrangements. Learn more
            by calling <a href="tel:6476972876" className={styles.faqLink}>(647) 697-2876</a> today.</p>
          </div>
        )}
      </div>

    {/* FAQ 3 */}
    <div className={styles.faqItem}>
    <div className={styles.faqHeader} onClick={() => toggleAccordion(2)}>
        <span
        className={`${styles.faqArrow} ${
            activeIndex === 2 ? styles.faqArrowActive : ""
        }`}
        >
        ↓
        </span>
        <h3 className={styles.faqQuestion}>
        How long will my case take to resolve?
        </h3>
    </div>
    {activeIndex === 2 && (
        <div className={styles.faqAnswer}>
        <p>The duration of an impaired driving case varies depending on its complexity, the charges, and the court&apos;s schedule. Your DUI lawyer can provide an estimated timeline based on the specifics of your case.</p>
        <Button link="/criminal-process" text="Criminal Process" /> 
        </div>
    )}
    </div>

    {/* FAQ 4 */}
<div className={styles.faqItem}>
  <div className={styles.faqHeader} onClick={() => toggleAccordion(3)}>
    <span
      className={`${styles.faqArrow} ${
        activeIndex === 3 ? styles.faqArrowActive : ""
      }`}
    >
      ↓
    </span>
    <h3 className={styles.faqQuestion}>How Can I Contact You?</h3>
  </div>
  {activeIndex === 3 && (
    <div className={styles.faqAnswer}>
      <p>Telephone: <a href="tel:3069959443" className={styles.faqLink}>
        (306) 994-9522
      </a></p>
    </div>
  )}
</div>

{/* FAQ 5 */}
<div className={styles.faqItem}>
  <div className={styles.faqHeader} onClick={() => toggleAccordion(4)}>
    <span
      className={`${styles.faqArrow} ${
        activeIndex === 4 ? styles.faqArrowActive : ""
      }`}
    >
      ↓
    </span>
    <h3 className={styles.faqQuestion}>
      What are the possible outcomes of my DUI?
    </h3>
  </div>
  {activeIndex === 4 && (
    <div className={styles.faqAnswer}>
      <p>Possible outcomes include dismissal of charges, a plea bargain, or a trial verdict of guilty or not guilty. Your impaired driving lawyer will work to achieve the best possible result based on the facts of your case.</p>
    </div>
  )}
</div>

{/* FAQ 6 */}
<div className={styles.faqItem}>
  <div className={styles.faqHeader} onClick={() => toggleAccordion(5)}>
    <span
      className={`${styles.faqArrow} ${
        activeIndex === 5 ? styles.faqArrowActive : ""
      }`}
    >
      ↓
    </span>
    <h3 className={styles.faqQuestion}>
      What are my rights during a police investigation?
    </h3>
  </div>
  {activeIndex === 5 && (
    <div className={styles.faqAnswer}>
      <p>You have the right to remain silent, the right to legal counsel, and the right to be informed of the charges against you. It is important to exercise these rights and contact a DUI lawyer as soon as possible.</p>
      <Button link="/criminal-process/your-rights" text="Your Rights" />
    </div>
  )}
</div>

{/* FAQ 7 */}
<div className={styles.faqItem}>
  <div className={styles.faqHeader} onClick={() => toggleAccordion(6)}>
    <span
      className={`${styles.faqArrow} ${
        activeIndex === 6 ? styles.faqArrowActive : ""
      }`}
    >
      ↓
    </span>
    <h3 className={styles.faqQuestion}>
      Can I represent myself in an impaired driving case?
    </h3>
  </div>
  {activeIndex === 6 && (
    <div className={styles.faqAnswer}>
      <p>While you have the right to represent yourself, it is not recommended. Impaired Driving cases are complex, and an experienced DUI lawyer can provide the expertise needed to navigate the legal system and achieve a favorable outcome.</p>
    </div>
  )}
</div>

{/* FAQ 8 */}
<div className={styles.faqItem}>
  <div className={styles.faqHeader} onClick={() => toggleAccordion(7)}>
    <span
      className={`${styles.faqArrow} ${
        activeIndex === 7 ? styles.faqArrowActive : ""
      }`}
    >
      ↓
    </span>
    <h3 className={styles.faqQuestion}>
      What should I do if I am arrested?
    </h3>
  </div>
  {activeIndex === 7 && (
    <div className={styles.faqAnswer}>
      <p>Remain calm, do not resist, and exercise your right to remain silent. Contact an impaired driving lawyer immediately to receive legal advice and representation.</p>
      <Button link="/criminal-process/your-rights" text="Your Rights" />
    </div>
  )}
</div>

    </div>
  );
};

export default FAQAccordion;