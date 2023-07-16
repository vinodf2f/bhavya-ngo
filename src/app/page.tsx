"use client";
import AboutUs from "@/components/AboutUs";
import Campaign from "@/components/Campaign";
import BuyProducts from "@/components/BuyProducts";
import ContactUs from "@/components/Contactus";
import DonateNowButton from "@/components/DonateNowButton";
import DonationSummary from "@/components/DonationSummary";
import Footer from "@/components/Footer";
import Logo from "@/components/Logo";
import { Navbar } from "@/components/Navbar";
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
              We are a team comprised of well-educated young individuals as well
              as experienced professionals from the educational department. We
              are dedicated to making a difference in child education by
              providing financial assistance and educational support to
              underprivileged children.
            </p>
            <div className="row-center">
              <DonateNowButton />
              <div style={{ width: 20 }} />
              <div className="buttonContainer">
                <a href="#buyProducts">
                  <p>Buy Products</p>
                </a>
              </div>
            </div>
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
      <div style={{ marginTop: 50 }} />
      <DonationSummary />
      <section id="about">
        <AboutUs />
      </section>
      <section id="campaign">
        <Campaign />
      </section>
      <section id="buyProducts">
        <BuyProducts />
      </section>
      <section id="contactUs">
        <ContactUs />
      </section>
      <Footer />
    </main>
  );
}
