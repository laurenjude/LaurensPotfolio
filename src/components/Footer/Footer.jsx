import React from "react";
import "./Footer.css";
import mylolo from "../../assets/Assets/Logos/mylogggo.png";
import { Link, animateScroll as scroll } from "react-scroll";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  // ===========================NAVIGATE==================

  const navigate = useNavigate();

  const handleClickLogo = () => {
    navigate("/");
  };

  const handleClickHi = () => {
    navigate("/");
  };

  const handleClickAbout = () => {
    navigate("/");
  };

  const handleClickSkills = () => {
    navigate("/");
  };

  const handleClickProjects = () => {
    navigate("/");
  };

  const handleClickContact = () => {
    navigate("/");
  };

  return (
    <div className="footer container">
      <footer className="foot">
        <div className="fboda">
          <Link
            to="top"
            smooth={true}
            duration={500}
            className="fotlo d-flex justify-content-between align-items-center"
            onClick={handleClickLogo}
          >
            <img src={mylolo} alt="perlogo" />
          </Link>
          <div className="footnav">
            <Link to="top" smooth={true} duration={500}>
              <p onClick={handleClickHi}>Hi</p>
            </Link>
            <Link to="section2" smooth={true} duration={500}>
              <p onClick={handleClickAbout}>About</p>
            </Link>
            <Link to="section3" smooth={true} duration={500}>
              <p onClick={handleClickSkills}>Skills</p>
            </Link>
            <Link to="section4" smooth={true} duration={500}>
              <p onClick={handleClickProjects}>Projects</p>
            </Link>
            <Link to="section5" smooth={true} duration={500}>
              <p onClick={handleClickContact}>Contact</p>
            </Link>
          </div>
        </div>
        <div className="footcopy">
          <p>&copy; 2025 Lauren, Jude. All rights reserved.</p>
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
