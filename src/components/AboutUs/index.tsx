import React from "react";
import "./aboutUs.css";
type Props = {};

const AboutUs = (props: Props) => {
  return (
    <div className="aboutContainer">
      <h1>AboutUs</h1>
      <br />
      <p>
        We started this NGO on Vishal and Swapnaja's daughter's birthday. The
        NGO is named after their daughter, "Bhavya." Vishal is a software
        engineer, Swapnaja has completed her education up to BCS, and Vishakha
        is a doctor with qualifications in M.B.B.S. and DGO. Additionally,
        Vishvanath is a retired teacher and the vice-president (upsarpanch in
        Marathi) of Kolnur village. Suraj is a software engineer, and Sneha is
        currently pursuing her B.Tech in computer science. Initially, our goal
        was to encourage underprivileged children to pursue education by
        providing them with school kits. However, we aspire to achieve much more
        than that.
      </p>
    </div>
  );
};

export default AboutUs;
