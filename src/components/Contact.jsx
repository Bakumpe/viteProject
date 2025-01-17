import "../App.css";

function ContactUS({ boxName1, boxName2, boxName3, boxName4 }) {
  return (
    <>
      <div className="contact">
        <div className="contactUs">
          <h1>Contact Us</h1>
          <p>Reach out to us on any of my contacts below</p>
        </div>
        <div className="contactBox">
          <div className="box">{boxName1}</div>
          <div className="box">{boxName2}</div>
          <div className="box">{boxName3}</div>
          <div className="box">{boxName4}</div>
        </div>
      </div>
    </>
  );
}

export default ContactUS;
