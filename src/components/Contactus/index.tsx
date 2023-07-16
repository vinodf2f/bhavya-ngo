type Props = {};

const ContactUs = (props: Props) => {
  return (
    <div style={{ color: "black", lineHeight: "1.7em" }}>
      <h2 style={{ textAlign: "center" }}>Contact </h2>
      <br />
      <p>
        {" "}
        <span className="item">Email</span> <span className="item">:</span>
        <span className="item">Vishalpatil550@gmail.com</span>
      </p>
      <p>
        {" "}
        <span>Contact No</span>
        <span>:</span>
        <span>7447776555</span>
      </p>
    </div>
  );
};

export default ContactUs;
