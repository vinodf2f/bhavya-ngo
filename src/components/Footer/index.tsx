import React from "react";
import Logo from "../Logo";
import "./footer.css";
type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="footerContainer">
      <h1>Let's Help Others With Your Charity</h1>
      <Logo />
    </div>
  );
};

export default Footer;
