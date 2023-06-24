import React from "react";
import "./socials.css";

type Props = {};

const SocialLinks = [
  {
    label: "Facebook",
    link: "https://m.facebook.com/profile.php?id=100093036153306",
  },
  {
    label: "You Tube",
    link: "https://youtube.com/@vishalpatil-sp3iz?feature=share9",
  },
];

const Socials = (props: Props) => {
  return (
    <div className="socialContainer">
      {SocialLinks.map((social) => (
        <div className="socialButton" key={social.label}>
          <a  href={social.link}>{social.label}</a>
        </div>
      ))}
    </div>
  );
};

export default Socials;
