import React, {useState} from "react";
import Modal from 'react-modal';
type Props = {};

const ContactUs = (props: Props) => {
  return (
    <div style={{ padding: 50, backgroundColor: "whitesmoke" }}>
      <h3>Contact </h3>
      <br />
      <div>
        <p> <span className="item" >Email</span> <span className="item" >:</span><span className="item">Vishalpatil550@gmail.com</span></p>
        <p> <span>Contact No</span><span>:</span><span>7447776555</span></p>
      </div>
    </div>
  );
};

export default ContactUs;
