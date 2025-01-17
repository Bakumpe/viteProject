import "../App.css";

function About({ name, description, picture }) {
  return (
    <>
      <div className="about">
        <div className="nameDescription">
          <h1>{name}</h1>
          <p>{description}</p>
        </div>

        <div className="circle">
          <div className="picture">
            {/**Picture */}
            <img src={picture} alt="Picture" />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
