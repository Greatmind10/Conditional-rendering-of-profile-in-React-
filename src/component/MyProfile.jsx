import { useState } from "react";

import "./profile.css";

const MyProfile = ({ fullName, Bio, Profession }) => {
  const [toggle, setToggle] = useState("false");

  return toggle ? (
    <main className="mainContainer">
      <div>
        <img
          src="https://st.depositphotos.com/1049680/59299/i/450/depositphotos_592999188-stock-photo-african-american-woman-ecommerce-business.jpg"
          alt="A women in her office"
        ></img>

        <h1>{fullName}</h1>
        <h2>{Bio}</h2>
        <h3>{Profession}</h3>
        <button id="btn" onClick={() => setToggle("")}>
          Click
        </button>
      </div>
    </main>
  ) : (
    <div>
      <div className="sec">
        <h2>Not available</h2>
        <button id="btn" onClick={() => setToggle("disappear")}>
          Return
        </button>
      </div>
      
    </div>
  );
};





export default MyProfile;



