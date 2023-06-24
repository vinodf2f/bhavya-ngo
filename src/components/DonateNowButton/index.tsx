import React from "react";
import "./donateNowButton.css";

type Props = {
  onClick: () => void;
};

const DonateNowButton = ({ onClick }: Props) => {
  return (
    <div className="buttonContainer" >
    <p>  Donate Now</p>
    </div>
  );
};

export default DonateNowButton;
