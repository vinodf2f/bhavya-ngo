import React from "react";
import "./donationSummary.css";
type Props = {};

const DonationDetails = [
  {
    title: "Donation Received",
    icon: "Icon",
    count: "0",
  },
  {
    title: "Money Donated",
    icon: "Icon",
    count: "0",
  },
  {
    title: "Active Campaign",
    icon: "Icon",
    count: "0",
  },
  {
    title: "Charity in Last year",
    icon: "Icon",
    count: "0",
  },
];

const DonationSummary = (props: Props) => {
  return (
    <div className="sectionContainer">
      <h2>Donation Summary</h2>
      <div className="summaryContainer ">
        {DonationDetails.map((item, index) => (
          <div key={String(index)} className="donationItem">
            <h3 className="donationCount">{item.count}</h3>
            <p className="donationTitle">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonationSummary;
