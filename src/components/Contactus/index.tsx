type Props = {};

const contactInfo = [
  {
    title: "Email",
    value: "Vishalpatil550@gmail.com",
  },
  {
    title: "Contact No",
    value: "7447776555",
  },
];
const ContactUs = (props: Props) => {
  return (
    <div className="sectionContainer">
      <h2>Contact </h2>
      <br />
      <div>
        {contactInfo.map((item, index) => (
          <div key={String(index)} style={{ display: "flex", }}>
            <p style={{minWidth:100 }}>{item.title}</p>
            <p>:&nbsp;&nbsp;{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactUs;
