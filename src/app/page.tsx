"use client";
import AboutUs from "@/components/AboutUs";
import Campaign from "@/components/Campaign";
import ContactUs from "@/components/Contactus";
import DonateNowButton from "@/components/DonateNowButton";
import DonationSummary from "@/components/DonationSummary";
import Footer from "@/components/Footer";
import Logo from "@/components/Logo";
import { Navbar } from "@/components/Navbar";
import SectionSeperator from "@/components/Seperator";
import Socials from "@/components/Socials";
import Image from "next/image";
import HeroImage from "../../public/heroImage.jpeg";
import "./page.css";

export default function Home() {
  return (
    <main>
      <header>
        <div className="section leftSection">
          <div className="sectionChild">
            <div className="mobileHeader">
              <Logo />
              <div className="showOnMobile">
                <Navbar />
              </div>
            </div>

            <h1>Charity Is An Act Of A Soft Heart.</h1>
            <p className="description">
              We have spent the last 5 years helping teams just like yourself
              create and sustain successful online support
            </p>
            <DonateNowButton onClick={() => alert("Donate Now")} />
          </div>

          <Socials />
        </div>

        <div className="section rightSection">
          <div className="hideOnMobile">
            <Navbar />
          </div>
          <Image alt="Child" src={HeroImage} className="childImage" />
        </div>
      </header>
      <DonationSummary />
      <SectionSeperator />
      <section id="about">
        <AboutUs />
      </section>
      <SectionSeperator />
      <section id="campaign">
        <Campaign />
      </section>
      <SectionSeperator />
      <section id="contactUs">
        <ContactUs />
      </section>
      <Footer />
    </main>
  );
}
