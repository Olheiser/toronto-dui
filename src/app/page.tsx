import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import ladyJustice from "../../public/dui-impaired-driving-feature.webp";
import clientFocused from "../../public//client-focused-representation.webp";
import availability from "../../public/availability.webp";
import trackRecord from "../../public/track-record.webp";
import paymentFlexibility from "../../public/payment-flexibility.webp";
import evidenceReview from "../../public/evidence-review.webp";
import service from "../../public/service.webp";
import beatCharges from "../../public/beat-charges.webp";
import guilty from "../../public/guilty.webp";
import speakLawyer from "../../public/speak-to-criminal-lawyer.webp";
import firstStep from "../../public/first-step.webp";
import secondStep from "../../public/second-step.webp";
import thirdStep from "../../public/third-step.webp";
import criminalProcessPhoto from "../../public/dui-arrest.webp";
import LeadForm from "./components/LeadForm";
import FAQAccordion from "./components/FAQAccordion";
import HandshakePhoto from "../../public/criminal-lawyer-handshake.webp";
import licenceIcon from "../../public/licence-icon.webp";
import shieldIcon from "../../public/shield.webp";
import handcuffIcon from "../../public/handcuffs.webp";

// For security
import { headers } from 'next/headers'
import Script from 'next/script'

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Toronto Impaired Driving Lawyer | DUI Defence Specialist - Nicholas Robinson",
  description: "Looking for an expert Toronto impaired driving lawyer? Nicholas Robinson specializes in DUI defence across Ontario. Call (647) 697-2876 for a free consultation today.",
  alternates: {
    canonical: 'https://torontoimpaireddrivinglawyer.ca',
  }
};

export default async function Home() {
  const nonce = (await headers()).get('x-nonce')

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://torontoimpaireddrivinglawyer.ca/",
    "url": "https://torontoimpaireddrivinglawyer.ca/",
    "name": "Toronto Impaired Driving Lawyer - Nicholas Robinson",
    "image": "https://imagedelivery.net/8au6u53Ph6mHP5o5AhlVXQ/7ee63c63-b679-4850-e564-11c72c526c00/public",
    "datePublished": "2025-1-16T00:00:00+00:00",
    "dateModified": "2025-1-16T00:00:00+00:00",
    "description": "Nicholas Robinson, a seasoned Impaired Driving Lawyer in Toronto, provides exceptional DUI defence and related driving charges, including impaired driving, dangerous driving, driving over .08, refusing a breathalyzer or drug test, failure to stop at an accident, and flight from a peace officer. Call (647) 697-2876 for a complimentary consultation with a DUI lawyer.",
    "inLanguage": "en-CA",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Nicholas Robinson Toronto Impaired Driving Criminal Lawyer",
      "url": "https://torontoimpaireddrivinglawyer.ca/"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://torontoimpaireddrivinglawyer.ca/"
        }
      ]
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "@id": "https://torontocriminallaw.net/#primaryImage",
      "url": "https://imagedelivery.net/8au6u53Ph6mHP5o5AhlVXQ/972ce4b7-c9a2-4003-3b1d-fd55da8c7800/public",
      "contentUrl": "https://imagedelivery.net/8au6u53Ph6mHP5o5AhlVXQ/972ce4b7-c9a2-4003-3b1d-fd55da8c7800/public",
      "caption": "Nicholas Robinson, Toronto Impaired Driving Lawyer, providing specialized DUI defence.",
      "width": 1150,
      "height": 645
    },
    "mainEntity": {
      "@type": "LegalService",
      "@id": "https://torontoimpaireddrivinglawyer.ca/#LegalService",
      "name": "Nicholas Robinson Toronto Impaired Driving Lawyer",
      "alternateName": "N.P. Robinson Law Professional Corporation",
      "url": "https://torontoimpaireddrivinglawyer.ca/",
      "logo": "https://imagedelivery.net/8au6u53Ph6mHP5o5AhlVXQ/7ee63c63-b679-4850-e564-11c72c526c00/public",
      "image": "https://imagedelivery.net/8au6u53Ph6mHP5o5AhlVXQ/7ee63c63-b679-4850-e564-11c72c526c00/public",
      "telephone": "+1-647-697-2876",
      "description": "Nicholas Robinson is an experienced impaired driving lawyer in Toronto providing criminal defence services for impaired driving and related driving offences, including dangerous driving, driving over .08, refusing a breathalyzer or drug test, flight from a peace officer, and failure to stop at an accident.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "478 Richmond St W, Richmond Place",
        "addressLocality": "Toronto",
        "addressRegion": "ON",
        "postalCode": "M5V 1Y2",
        "addressCountry": "CA"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "@id": "https://torontoimpaireddrivinglawyer.ca/#ContactPoint",
        "telephone": "+1-647-697-2876",
        "contactType": "customer service",
        "contactOption": ["TollFree", "HearingImpairedSupported"],
        "areaServed": [
        {
          "@type": "AdministrativeArea",
          "name": "Ontario"
        },
        {
          "@type": "City",
          "name": "Toronto"
        }
      ],
        "availableLanguage": ["en", "fr", "de", "uk"]
      },
      "openingHours": "Mo-Su 00:00-23:59",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "60"
      },
      "serviceArea": [
      {
        "@type": "AdministrativeArea",
        "name": "Ontario"
      },
      {
        "@type": "City",
        "name": "Toronto"
      }
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "43.648429",
      "longitude": "-79.381290",
      "name": "Nicholas Robinson Law Office - Toronto"
    },
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "@id": "https://torontoimpaireddrivinglawyer.ca/#DUIDefence",
          "name": "DUI/DWI Defence",
          "description": "Legal defence for DUI and impaired driving charges in Toronto."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Driving Over .08",
          "@id": "https://torontoimpaireddrivinglawyer.ca/#DrivingOver08",
          "description": "Criminal defence for driving over .08 charges in Toronto."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "@id": "https://torontoimpaireddrivinglawyer.ca/#DangerousDriving",
          "name": "Dangerous Driving",
          "description": "Legal defence for dangerous driving charges in Toronto."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Failure to Stop at An Accident",
          "@id": "https://torontoimpaireddrivinglawyer.ca/#FailureToStopAtAnAccident",
          "description": "Legal defence for failure to stop at an accident charges in Toronto."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Flight From a Peace Officer",
          "@id": "https://torontoimpaireddrivinglawyer.ca/#FlightFromPeaceOfficer",
          "description": "Legal defence for flight from a peace officer charges in Toronto."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Refusing a Breathalyzer or Drug Test",
          "@id": "https://torontoimpaireddrivinglawyer.ca/#RefusingBreathalyzerOrDrugTest",
          "description": "Legal defence for refusing a breathalyzer or drug test charges in Toronto."
        }
      }
    ],
    "knowsAbout": [
      "Criminal Defence",
      "DUI/DWI Defence",
      "Impaired Driving Defence",
      "Dangerous Driving Defence",
      "Refusing a Breathalyzer or Drug Test Defence",
      "Flight From a Peace Officer Defence",
      "Failure to Stop at an Accident Defence",
      "Driving Over .08 Defence"
    ],
    "sameAs": [
      "https://g.co/kgs/6SZDyc7", 
      "https://www.facebook.com/nicholasrobinsoncriminallawyer/", 
      "https://www.linkedin.com/company/nicholas-robinson-criminal-lawyer",
      "https://maps.app.goo.gl/XD31rPLMQ3GWHR14A"
    ],
    "potentialAction": {
      "@type": "ReserveAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://calendly.com/nicholas-robinson-criminal-lawyer/free-consultation"
      },
      "description": "Schedule a free consultation with Nicholas Robinson, a Toronto Impaired Driving Lawyer."
    }
    }
  }
  
  return (
    <>
    {nonce && ( 
        <Script 
          strategy="afterInteractive" 
          nonce={nonce} 
        />
      )}
    <main>
      <section className={styles.introRow}>
        
        <div className={styles.featureRow}>
        <article className={styles.introContainer}>
          <div className={styles.headingContainer}>
            <h1 className={styles.title}>Impaired Driving Lawyer</h1>
            <h2 className={styles.titleSubheading}>Toronto DUI Defence Specialist</h2>
          </div>
          
          
          <p className={styles.introCopy}>Charged with impaired driving? <strong>Nicholas Robinson</strong> is a trusted <strong>DUI lawyer in Toronto, Ontario</strong>. Specializing in personalized and effective impaired driving defence, Nicholas offers strategic representation to safeguard your rights and pursue the best possible results for your case.</p>
          <div className={styles.metricsRow}>
            <div className={styles.metricItem}>
              <div className={styles.clientMetric}>1,300+</div>
              <div className={styles.clientLabel}>Clients<br/>Represented</div>
            </div>
            <div className={styles.metricItem}>
              <div className={styles.clientMetric}>100+</div>
              <div className={styles.clientLabel}>Successful<br/>Trial Matters</div>
            </div>
            <div className={styles.metricItem}>
              <div className={styles.clientMetric}>15+</div>
              <div className={styles.clientLabel}>Years Defending<br/>Canadians</div>
            </div>
            <div className={styles.metricItem}>
              <div className={styles.clientMetric}>24/7</div>
              <div className={styles.clientLabel}>Availability and<br/>Client Support</div>
            </div>
          </div>
          <div className={styles.introButtonRow}>
            <a href="tel:6476972876">
              <button className={styles.introButton}>Free Consultation</button>
            </a>
          </div>
        </article>
        <div className={styles.ladyJusticeContainer}>
          <Image 
            src={ladyJustice}
            alt="Toronto Criminal Lawyer Lady Justice"
            width={1150}
            height={645}
            className={styles.ladyJustice}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1150px"
            id="primaryImage"
            priority
          />
        </div>
        </div>
      </section>

      <section className={styles.bioRow}>
        <article className={styles.bioContainer}>
          <div className={styles.headingContainer}>
          <h2 className={`${styles.sectionHeading} ${styles.bioHeading}`}><Link href="/practice-areas">Nicholas Robinson, Toronto Impaired Driving Lawyer</Link></h2>
          <h3 className={styles.sectionSubheading}>Legal Service With Compassion</h3>
          
          </div>
          <p className={styles.nickBio}>Nicholas Robinson is an experienced impaired driving lawyer who has been successfully defending clients across Canada since 2009. Renowned for his approachable style, unwavering dedication, and focus on ensuring clients feel valued and well-represented, Nicholas delivers strategic and compassionate DUI legal defence tailored to each case. His expertise spans a broad spectrum of <Link href="/practice-areas/impaired-driving">DUI charges</Link>, including <Link href="/practice-areas/impaired-driving">impaired driving</Link>, <Link href="/practice-areas/driving-over-08">driving over .08</Link>, <Link href="/practice-areas/refusing-a-breathalyzer-or-drug-test">refusing a breathalyzer or drug test</Link>, <Link href="/penalties-and-sentencing/repeat-dui-charges">2nd DUI offence</Link>, <Link href="/penalties-and-sentencing/repeat-dui-charges">3rd DUI offence</Link>, <Link href="/penalties-and-sentencing/commercial-driver-dui">commercial driver DUI</Link>, as well as <Link href="/penalties-and-sentencing/young-and-novice-driver-dui">young and novice driver DUI</Link>.</p>
          <div className={styles.aboutIconGrid}>
            <div className={styles.aboutIconItem}>
              <Image 
                src={clientFocused}
                alt="Client-focused Representation"
                //width={250}
                //height={75}
                className={styles.aboutIcon}
              />
              <p>Client-focused<br /> Representation</p>
            </div>
            <div className={styles.aboutIconItem}>
              <Image 
                src={availability}
                alt="24/7 Availability"
                //width={250}
                //height={75}
                className={styles.aboutIcon}
              />
              <p>24/7<br /> Availability</p>
            </div>
            <div className={styles.aboutIconItem}>
              <Image 
                src={trackRecord}
                alt="Proven Track Record"
                //width={250}
                //height={75}
                className={styles.aboutIcon}
              />
              <p>Proven<br /> Track Record</p>
            </div>
            <div className={styles.aboutIconItem}>
              <Image 
                src={paymentFlexibility}
                alt="Payment Flexibility"
                //width={250}
                //height={75}
                className={styles.aboutIcon}
              />
              <p>Payment<br /> Flexibility</p>
            </div>
            <div className={styles.aboutIconItem}>
              <Image 
                src={evidenceReview}
                alt="Thorough Evidence Review"
                //width={250}
                //height={75}
                className={styles.aboutIcon}
              />
              <p>Thorough<br /> Evidence Review</p>
            </div>
            <div className={styles.aboutIconItem}>
              <Image 
                src={service}
                alt="Committed to Excellence in Service"
                //width={250}
                //height={75}
                className={styles.aboutIcon}
              />
              <p>Committed to<br /> Excellence in Service</p>
            </div>
          </div>
          <div className={styles.introButtonRow}>
            <a href="tel:6476972876">
              <button className={styles.introButton}>Free Consultation</button>
            </a>
          </div>
        </article>
      </section>

      <section className={styles.practiceRow}>
        <div className={styles.practiceContainer}>
          <div className={styles.leftHeadingContainer}>
            <h2 className={`${styles.sectionHeading} ${styles.practiceHeading}`}><Link href="/practice-areas">Practice Areas</Link></h2>
            <h3 className={`${styles.sectionSubheading} ${styles.practiceSubheading}`}>Expert Impaired Driving Defence</h3>
            
          </div>
          <div className={styles.practiceCardContainer}>
          <article className={styles.practiceCard}>
              <h3><Link href="/practice-areas/impaired-driving">Impaired Driving</Link></h3>
              <p><strong><Link href="/practice-areas/impaired-driving">Impaired Driving</Link></strong> is when a person&apos;s ability to operate a vehicle is impaired by alcohol or drugs. This dangerous behavior is illegal and can result in severe penalties such as fines, license suspension, and jail time.</p>
              <span className={styles.readMore}>
              <Link href="/practice-areas/impaired-driving">Learn more about <strong>Impaired Driving Charges</strong></Link>
              </span><br/>
              <hr className={styles.blockEnd}></hr>
            </article>
            
            <article className={styles.practiceCard}>
              <h3><Link href="/practice-areas/refusing-a-breathalyzer-or-drug-test">Refusing a Breathalyzer or Drug Test</Link></h3>
              <p><strong><Link href="/practice-areas/refusing-a-breathalyzer-or-drug-test">Refusing to comply with a lawful demand for a breathalyzer or drug test</Link></strong> is a criminal offence. If you refuse, you can face similar penalties to those for impaired driving, including fines and imprisonment.</p>
              <span className={styles.readMore}>
              <Link href="/practice-areas/refusing-a-breathalyzer-or-drug-test">Learn more about <strong>Refusing a Breathalyzer or Drug Test Charges</strong></Link>
              </span><br/>
              <hr className={styles.blockEnd}></hr>
            </article>

            <article className={styles.practiceCard}>
              <h3><Link href="/practice-areas/driving-over-08">Driving Over .08</Link></h3>
              <p><strong><Link href="/practice-areas/driving-over-08">Driving Over .08</Link></strong> refers to operating a vehicle with a blood alcohol concentration (BAC) of over 80 milligrams of alcohol in 100 milliliters of blood. This offence is strictly enforced and can lead to severe consequences.</p>
              <span className={styles.readMore}>
                <Link href="/practice-areas/driving-over-08">Assault<strong>Driving Over .08 Charges</strong></Link>
              </span><br/>
              <hr className={styles.blockEnd}></hr>
            </article>

            <article className={styles.practiceCard}>
              <h3><Link href="/practice-areas/dangerous-driving">Dangerous Driving</Link></h3>
              <p><strong><Link href="/practice-areas/dangerous-driving">Dangerous Driving</Link></strong> occurs when a person operates a vehicle in a manner that is dangerous to the public, considering all circumstances. It includes behaviors such as excessive speeding, aggressive driving, or driving under adverse conditions.</p>
              <span className={styles.readMore}>
               <Link href="/practice-areas/dangerous-driving">Learn more about <strong>Dangerous Driving Charges</strong></Link>
              </span><br/>
              <hr className={styles.blockEnd}></hr>
            </article>

            <article className={styles.practiceCard}>
              <h3><Link href="/practice-areas/failure-to-stop-at-an-accident">Failure to Stop at an Accident</Link></h3>
              <p><strong><Link href="/practice-areas/failure-to-stop-at-an-accident">Failure to stop</Link></strong> at the scene of an accident, especially when someone is injured or there is significant property damage, is a serious offence. It is mandatory to stop, provide your information, and offer assistance if needed.</p>
              <span className={styles.readMore}>
                <a href="/practice-areas/failure-to-stop-at-an-accident">Learn more about <strong>Failure to Stop at an Accident Charges</strong>
                </a>
              </span><br/>
              <hr className={styles.blockEnd}></hr>
            </article>

            <article className={styles.practiceCard}>
              <h3><Link href="/practice-areas/flight-from-a-peace-officer">Flight From a Peace Officer</Link></h3>
              <p><strong><Link href="/practice-areas/flight-from-a-peace-officer">Flight from a peace officer</Link></strong> involves fleeing from the police when signaled to stop. This act is illegal and can lead to significant legal consequences, including fines and imprisonment.</p>
              <span className={styles.readMore}>
              <Link href="/practice-areas/flight-from-a-peace-officer">Learn more about <strong>Flight From a Peace Officer Charges</strong></Link>
              </span><br/>
              <hr className={styles.blockEnd}></hr>
            </article>
            
            <article className={styles.practiceCard}>
              <h3><Link href="/practice-areas/impaired-driving">1st DUI Offence</Link></h3>
              <p>A <strong><Link href="/practice-areas/impaired-driving">first DUI Offence</Link></strong> can lead to a one-year licence suspension, fines, and mandatory education. You may also be required to install an ignition interlock device upon reinstatement.</p>
              <span className={styles.readMore}>
              <Link href="/practice-areas/impaired-driving">Learn more about <strong>1st DUI Offence</strong></Link>
              </span><br/>
              <hr className={styles.blockEnd}></hr>
            </article>

            <article className={styles.practiceCard}>
              <h3><Link href="/penalties-and-sentencing/repeat-dui-charges">2nd DUI Offence</Link></h3>
              <p>A <strong><Link href="/penalties-and-sentencing/repeat-dui-charges">second DUI offence</Link></strong> within ten years results in a minimum three-year licence suspension, increased fines, and mandatory education. You&apos;ll need an ignition interlock device for at least three years.</p>
              <span className={styles.readMore}>
              <Link href="/penalties-and-sentencing/repeat-dui-charges">Learn more about <strong>2nd DUI Offence</strong></Link>
              </span><br/>
              <hr className={styles.blockEnd}></hr>
            </article>

            <article className={styles.practiceCard}>
              <h3><Link href="/penalties-and-sentencing/repeat-dui-charges">3rd DUI Offence</Link></h3>
              <p>A <strong><Link href="/penalties-and-sentencing/repeat-dui-charges">third DUI offence</Link></strong> can lead to a lifetime licence suspension, along with significant fines, treatment requirements, and a minimum six-year ignition interlock condition.</p>
              <span className={styles.readMore}>
              <Link href="/penalties-and-sentencing/repeat-dui-charges">Learn more about <strong>3rd DUI Offence</strong></Link>
              </span><br/>
              <hr className={styles.blockEnd}></hr>
            </article>

            <article className={styles.practiceCard}>
              <h3><Link href="/penalties-and-sentencing/cannabis-dui-charges">Cannabis DUI</Link></h3>
              <p><strong><Link href="/penalties-and-sentencing/cannabis-dui-charges">Driving under the influence of cannabis</Link></strong> is treated similarly to alcohol-related DUIs. Penalties include suspensions, fines, and escalating consequences for repeat offences.</p>
              <span className={styles.readMore}>
              <Link href="/penalties-and-sentencing/cannabis-dui-charges">Learn more about <strong>Cannabis DUI</strong></Link>
              </span><br/>
              <hr className={styles.blockEnd}></hr>
            </article>

            <article className={styles.practiceCard}>
              <h3><Link href="/penalties-and-sentencing/young-and-novice-driver-dui">Young &amp; Novice Driver DUI</Link></h3>
              <p><strong><Link href="/penalties-and-sentencing/young-and-novice-driver-dui">Young and novice drivers</Link></strong> face zero tolerance for alcohol or drugs. A first offence leads to a 3-day licence suspension and fines, with harsher penalties for repeated violations.</p>
              <span className={styles.readMore}>
              <Link href="/penalties-and-sentencing/young-and-novice-driver-dui">Learn more about <strong>Young &amp; Novice Driver DUI</strong></Link>
              </span><br/>
              <hr className={styles.blockEnd}></hr>
            </article>

            <article className={styles.practiceCard}>
              <h3><Link href="/penalties-and-sentencing/commercial-driver-dui">Commercial Driver DUI</Link></h3>
              <p><strong><Link href="/penalties-and-sentencing/commercial-driver-dui">Commercial drivers</Link></strong> must adhere to zero-tolerance rules. A first offence means a 3-day suspension and fines, with more severe penalties for repeated incidents.</p>
              <span className={styles.readMore}>
              <Link href="/penalties-and-sentencing/commercial-driver-dui">Learn more about <strong>Commercial Driver DUI</strong></Link>
              </span><br/>
              <hr className={styles.blockEnd}></hr>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.infoRow}>
        <div className={styles.infoContainer}>
          <div className={styles.infoColumn}>
            <div className={styles.infoIconWrapper}>
                <Link href="/criminal-process/should-i-plead-guilty">
                  <Image 
                    src={guilty}
                    alt="Scales of justice icon"
                    //width={250}
                    //height={75}
                    className={styles.infoImage}
                  />
                </Link>
            </div>
            <div className={styles.infoContent}>
                <Link href="/criminal-process/should-i-plead-guilty">
                <h2 className={styles.infoHeading}>Should I Plead Guilty?</h2></Link>
                <p>Choosing to plead guilty is a critical decision that requires careful consideration. It&apos;s important to fully understand the potential penalties, long-term effects, and consequences of a guilty plea. Seeking advice from an experienced DUI lawyer ensures you have the guidance needed to make an informed decision.</p>
            </div>
            <div className={styles.infoButtonContainer}>
              <Link href="/criminal-process/should-i-plead-guilty/" className={styles.infoButtonLink}>
                  <button className={`${styles.introButton} ${styles.infoButton}`}>Outcomes of a Guilty Plea</button>
              </Link>
            </div>
          </div>
          <div className={styles.infoColumn}>
            <div className={styles.infoIconWrapper}>
                <Link href="/criminal-process/can-i-beat-the-charges">
                  <Image 
                    src={beatCharges}
                    alt="Breaking free of chains icon"
                    //width={250}
                    //height={75}
                    className={styles.infoImage}
                  />
                </Link>
            </div>
            <div className={styles.infoContent}>
                <Link href="/criminal-process/can-i-beat-the-charges">
                <h2 className={styles.infoHeading}>Can I Beat The Charges?</h2></Link>
                <p>Facing impaired driving charges can be overwhelming, but defeating the charges is achievable in many cases. Factors such as potential rights violations, the quality of the prosecution&apos;s evidence, and applicable defences play a pivotal role. An experienced DUI lawyer can assess your case, examine evidence, and craft a strong defence to pursue the best outcome.</p>
            </div>
            <div className={styles.infoButtonContainer}>
              <Link href="/criminal-process/can-i-beat-the-charges" className={styles.infoButtonLink}>
                <button className={`${styles.introButton} ${styles.infoButton}`}>Beating DUI Charges</button>
              </Link>
            </div>
          </div>
          <div className={styles.infoColumn}>
            <div className={styles.infoIconWrapper}>
                <a href="tel:6476972876">
                  <Image 
                    src={speakLawyer}
                    alt="Speak to an impaired driving lawyer icon"
                    //width={250}
                    //height={75}
                    className={styles.infoImage}
                  />
                </a>
            </div>
            <div className={styles.infoContent}>
                <a href="tel:6476972876">
                <h2 className={styles.infoHeading}>Speak to a DUI Lawyer Now</h2></a>
                <p>If you&apos;re facing an impaired driving charge, speaking with an experienced DUI lawyer is crucial. They can provide immediate guidance, explain your rights, and help you navigate the legal process to aim for the best possible outcome.</p>
            </div>
            <div className={styles.infoButtonContainer}>
              <a href="tel:6476972876" className={styles.infoButtonLink}>
                <button className={`${styles.introButton} ${styles.infoButton}`}>Call Now</button>
            </a>
            </div>
            
          </div>
        </div>
      </section>

      <section className={styles.processRow}>
        <div className={styles.processContainer}>
        <div className={styles.leftHeadingContainer}>
          <h2 className={`${styles.sectionHeading} ${styles.criminalProcessh2}`}><Link href="/criminal-process">Criminal Process Following an Impaired Driving Charge</Link></h2>
          <h3 className={styles.sectionSubheading}>Take The First Step Toward Your DUI Defence</h3>
          </div>

          <article>
            <div className={styles.processPhotoContainer}>
              <Link href="/criminal-process">
                <Image 
                  src={criminalProcessPhoto}
                  alt="Committed to Excellence in Service"
                  //width={250}
                  //height={75}
                  className={styles.processImage}
                />
              </Link>
            </div>
            <div className={styles.processContentContainer}>
              <div className={styles.processContentBlock}>
                <div className={styles.processStepHeadingContainer}>
                  <Image 
                    src={firstStep}
                    alt="First Step - Initial Consultation"
                    //width={250}
                    //height={75}
                    className={styles.processIcon}
                  />
                  <div className={styles.processHeadingWrap}>
                    <h3><a href="tel:6476972876">Initial Consultation</a></h3>
                  </div>
                  
                </div>
                <p>The first meeting with an impaired driving lawyer is a key opportunity to share the details of your case. This session allows you to outline your situation, ask questions, and gain initial guidance on your legal rights and the next steps to take.</p>
              </div>
              <div className={styles.processContentBlock}>
                <div className={styles.processStepHeadingContainer}>
                  <Image 
                    src={secondStep}
                    alt="Second Step - Disclosure Review"
                    //width={250}
                    //height={75}
                    className={styles.processIcon}
                  />
                  <div className={styles.processHeadingWrap}>
                  <h3><a href="tel:6476972876">Disclosure Review</a></h3>
                  </div>
                </div>
                <p>Carefully examining the evidence, or disclosure, provided by the prosecution is a vital step in your defence. Your DUI lawyer will evaluate this material to uncover any flaws in the case and craft a defence strategy that aligns with your circumstances.</p>
              </div>
              <div className={styles.processContentBlock}>
                <div className={styles.processStepHeadingContainer}>
                  <Image 
                    src={thirdStep}
                    alt="Third Step - Discuss Your Options"
                    //width={250}
                    //height={75}
                    className={styles.processIcon}
                  />
                  <div className={styles.processHeadingWrap}>
                  <h3><a href="tel:6476972876">Discuss Your Options</a></h3>
                  </div>
                </div>
                <p>After reviewing the evidence, your impaired driving lawyer will explain the available legal options. This includes potential defence strategies, the chances of success, and possible case outcomes. Together, you&apos;ll decide on the most effective path forward.</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className={styles.infoRow}>
        <div className={styles.infoContainer}>
          <div className={styles.infoColumn}>
            <div className={styles.infoIconWrapper}>
                <Link href="/penalties-and-sentencing">
                  <Image 
                    src={handcuffIcon}
                    alt="Handcuffs"
                    //width={250}
                    //height={75}
                    className={styles.infoImage}
                  />
                </Link>
            </div>
            <div className={styles.infoContent}>
                <Link href="/penalties-and-sentencing">
                <h2 className={styles.infoHeading}>Penalties and Sentencing</h2></Link>
                <p>Penalties for impaired driving can range from fines and licence suspensions to jail time. Understanding these potential consequences is important when deciding how to proceed with your case. A DUI lawyer can explain the possible sentencing outcomes and help you prepare.</p>
            </div>
            <div className={styles.infoButtonContainer}>
              <Link href="/penalties-and-sentencing" className={styles.infoButtonLink}>
                  <button className={`${styles.introButton} ${styles.infoButton}`}>DUI Sentencing</button>
              </Link>
            </div>
          </div>
          <div className={styles.infoColumn}>
            <div className={styles.infoIconWrapper}>
                <Link href="/penalties-and-sentencing/defences-available-for-dui-charges">
                  <Image 
                    src={shieldIcon}
                    alt="Shield"
                    //width={250}
                    //height={75}
                    className={styles.infoImage}
                  />
                </Link>
            </div>
            <div className={styles.infoContent}>
                <Link href="/penalties-and-sentencing/defences-available-for-dui-charges">
                <h2 className={styles.infoHeading}>Defences Available</h2></Link>
                <p>There are various defences against impaired driving charges, including challenges to the accuracy of breath tests and the legality of police stops. A DUI lawyer can assess the evidence and work to develop a defence that addresses the specifics of your case.</p>
            </div>
            <div className={styles.infoButtonContainer}>
              <Link href="/penalties-and-sentencing/defences-available-for-dui-charges" className={styles.infoButtonLink}>
                <button className={`${styles.introButton} ${styles.infoButton}`}>DUI Defences</button>
              </Link>
            </div>
          </div>
          <div className={styles.infoColumn}>
            <div className={styles.infoIconWrapper}>
                <Link href="/criminal-process/how-to-get-your-drivers-licence-reinstated">
                  <Image 
                    src={licenceIcon}
                    alt="Driver's licence"
                    //width={250}
                    //height={75}
                    className={styles.infoImage}
                  />
                </Link>
            </div>
            <div className={styles.infoContent}>
                <Link href="/criminal-process/how-to-get-your-drivers-licence-reinstated">
                <h2 className={styles.infoHeading}>Get Your Driver&apos;s Licence Reinstated</h2></Link>
                <p>Losing your licence due to an impaired driving charge can impact your daily life. A DUI lawyer can guide you through the reinstatement process, helping you understand eligibility requirements and any conditions you must meet to regain your driving privileges.</p>
            </div>
            <div className={styles.infoButtonContainer}>
              <Link href="/criminal-process/how-to-get-your-drivers-licence-reinstated" className={styles.infoButtonLink}>
                <button className={`${styles.introButton} ${styles.infoButton}`}>Get Your Licence Reinstated</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaRow}>
        <div className={styles.ctaContainer}>
          <article className={styles.ctaCopySection}>
            <div className={styles.leftHeadingContainer}>
              <h2 className={`${styles.sectionHeading} ${styles.ctaHeading}`}>The Benefits of Hiring an Impaired Driving Lawyer</h2>
              <h3 className={styles.sectionSubheading}>Don&apos;t Wait. Speak to a DUI Lawyer Today</h3>
            </div>
            <div className={styles.ctaContentContainer}>
              <div className={styles.ctaCopyBlock}>
                <p>Being charged with a DUI can be overwhelming, but having an experienced impaired driving lawyer on your side can significantly impact the outcome of your case. Your lawyer will develop a tailored defence strategy, challenge any improperly obtained evidence, uncover supporting information, and identify key witnesses to strengthen your case.<br/><br/>
                Moreover, your DUI lawyer will manage the legal intricacies of your case, including handling administrative tasks and negotiating with prosecutors for reduced charges or a more favorable resolution. Their primary focus is safeguarding your rights and achieving the best possible result for you.</p>
                {/* Map widget */}
                <div className={styles.mapContainer}>
                  <Image 
                    src={HandshakePhoto}
                    alt="Criminal lawyer shaking client's hand."
                    width={700}
                    height={374}
                    className={styles.handshakePhoto}
                  />
                  {/* 
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11547.820726458673!2d-79.3816777!3d43.6491008!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3587eafc142b%3A0xb5314d7d2803c70e!2sNicholas%20Robinson%2C%20Criminal%20Lawyer!5e0!3m2!1sen!2sca!4v1733623604143!5m2!1sen!2sca" 
                    width="440" 
                    height="400" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Nicholas Robinson Criminal Lawyer Toronto Office"
                    className={styles.map}
                  >
                  </iframe>
                  */}
                </div>
              </div>
            </div>
          </article>
          <div className={styles.ctaFormContainer}>
            <LeadForm />
          </div>
        </div>
      </section>

      <section className={styles.faqRow}>
        <div className={styles.faqContainer}>
          <div className={`${styles.FAQTitleRow} ${styles.headingContainer}`}>
            <h2 className={`${styles.sectionHeading}`}><Link href="/criminal-process/faq">Frequently Asked Questions</Link></h2>
            <h3 className={`${styles.sectionSubheading}`}>Have Questions About Your DUI? Give Us a Call</h3>
          </div>
          <FAQAccordion />
          <div className={styles.FAQButtonContainer}>
              <Link href="/criminal-process/faq" className={styles.infoButtonLink}>
                <button className={styles.faqButton}>View Our FAQ</button>
            </Link>
            </div>
        </div>
      </section>
    </main>
    <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
