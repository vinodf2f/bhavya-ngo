import React, { useState } from "react";
import "./donateNowButton.css";
import DonateModal from "../DonateModal";

type Props = {};

const DonateNowButton = ({}: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="buttonContainer">
      <p onClick={openModal}> Donate Now</p>

      {isModalOpen && (
        <DonateModal
          title="No one has ever become poor from giving"
          content="Please check if the UPI ID starts with 7588525467 or vishalpatil550 or Vishal Patil before making the payment."
          closeModal={closeModal}
        ></DonateModal>
      )}
    </div>
  );
};

export default DonateNowButton;
