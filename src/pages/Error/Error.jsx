import React from "react";
import "./Error.css";
import error from "../../../src/assets/Assets/Logos/sad.png";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  const handleClickHome = () => {
    navigate("/");
  };

  return (
    <div className="error">
      <img src={error} alt="errorpage" />
      <p className="errbig">Oops!</p>
      <p className="gig">404 - PAGE NOT FOUND</p>
      <p className="errmess">
        Sorry, the page you are looking for could not be found
      </p>
      <button onClick={handleClickHome}>GO TO HOMEPAGE</button>
    </div>
  );
};

export default Error;
