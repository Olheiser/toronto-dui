import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import CalendlyWidget from "../components/CalendlyButton";
//import Script from "next/script"; // Import Script from Next.js
//import CalendlyPopupButton from "./components/CalendlyPopupButton";
import "../globals.css";
import type { Metadata } from "next";

//import { PopupButton } from "react-calendly";

export const metadata: Metadata = {
  title: "Nicholas Robinson Toronto Impaired Driving Lawyer | DUI Defence Services",
  description: "Nicholas Robinson specializes in DUI defence and impaired driving cases in Toronto. Call (647) 697-2876 for a free consultation with an expert lawyer today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <Header />
         {/* <PageHeader title="About" /> */}
        {children}
        <ScrollToTop />
        <CalendlyWidget /> 
        {/* <CalendlyPopupButton />*/}
        <Footer />
    </>
  );
}