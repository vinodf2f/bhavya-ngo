import React from "react";
import "./index.css";
import Scanner from "../../../public/scanner.jpeg";
import Image from "next/image";

type Props = {
  title: string;
  content: string;
  closeModal: any;
};
const DonateModal = ({ title, content, closeModal }: Props) => {
  return (
    <div>
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          {title && <h2>{title}</h2>}
          <hr></hr>
          {content && <p className="content">{content}</p>}
          <div className="paymentDiv">
            <div className="paymentDiv-items">
              <Image src={Scanner} width={150} alt="Logo" />
            </div>
            <div className="paymentDiv-items">
              <a>
                <h4 className="buyProducts">
                  {" "}
                  CLICK HERE, You Can Donate School Kits or Buy Something From
                  Portal Profit Will Be Used For Nobel Cause
                </h4>
              </a>
            </div>
          </div>
          <h6>
            We are in the process of opening an account for our NGO. Until we
            open the account, we are accepting payments in a personal account.
          </h6>
        </div>
      </div>
    </div>
  );
};

export default DonateModal;
