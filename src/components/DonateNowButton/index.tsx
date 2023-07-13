import React, {useState} from "react";
import "./donateNowButton.css";
import DonateModal from '../DonateModal'

type Props = {
  onClick: () => void;
};

const DonateNowButton = ({ onClick }: Props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };

    const closeModal = () => {
      setIsModalOpen(false);
    };
   const customStyles = {
      overlay: {
         backgroundColor: 'rgba(0, 0, 0, 0.6)'
      },
      content: {
         top: '50%',
         left: '50%',
         right: 'auto',
         bottom: 'auto',
         marginRight: '-50%',
         transform: 'translate(-50%, -50%)'
      }
   }
  return (
    <div className="buttonContainer" >
    <p onClick={openModal}> Donate Now</p>
    
      {isModalOpen && (
        <DonateModal title="No one has ever become poor from giving" content="Please check if the UPI ID starts with 7588525467 or vishalpatil550 or Vishal Patil before making the payment." closeModal={closeModal}>
        </DonateModal>
      )}
    </div>
  );
};

export default DonateNowButton;
