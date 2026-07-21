//import Header from "./components/Header";
//import Footer from "./components/Footer";
//import ScrollToTop from "./components/ScrollToTop";
//import CalendlyWidget from "./components/CalendlyButton";


//import Script from "next/script"; // Import Script from Next.js
//import CalendlyPopupButton from "./components/CalendlyPopupButton";
import "./globals.css"
import type { Metadata } from "next";
import Script from "next/script"; // Import Script from Next.js


//import { PopupButton } from "react-calendly";

export const metadata: Metadata = {
  title: "Nicholas Robinson Toronto Impaired Driving Lawyer | DUI Defence Services",
  description: "Nicholas Robinson specializes in DUI defence and impaired driving cases in Toronto. Call (647) 697-2876 for a free consultation with an expert lawyer today.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
       <head>
  {/* Google tag (gtag.js) */}
  <Script
    src="https://www.googletagmanager.com/gtag/js?id=AW-653876065"
    strategy="afterInteractive" // Ensures script runs after page load
  />
  <Script
    id="google-analytics"
    strategy="afterInteractive" // Runs after the page becomes interactive
    dangerouslySetInnerHTML={{
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'AW-653876065');
      `,
    }}
  />
</head>
      <body>{children}</body>
    </html>
  );
}