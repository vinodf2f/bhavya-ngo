import React from "react";
import DonateNowButton from "../DonateNowButton";
import Logo from "../Logo";
import "./footer.css";
type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="footerContainer sectionContainer">
      <div className="titleContainer">
        <h1>Let's Help Others With Your Charity</h1>
        <DonateNowButton onClick={() => alert("Donate Now")} />
        <br />
      </div>
      <Logo />
    </div>
  );
};

export default Footer;
