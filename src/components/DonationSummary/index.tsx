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
    <>
      <div style={{marginTop:80}}>
        <h2 style={{textAlign:'center', marginBottom:0}}>Donations</h2>
        <div className="summaryContainer">
          {DonationDetails.map((item, index) => (
            <div key={String(index)}>
              <div className="donationItem">
                <h1 className="donationCount">{item.count}</h1>
              </div>
              <p className="donationTitle">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DonationSummary;
