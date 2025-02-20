import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./NavBar.css";
import logoo from "../../assets/Assets/Logos/mylogggo.png";
import Modal from "react-modal";
import { MdCancel } from "react-icons/md";
import phoneget from "../../assets/Assets/Logos/CALLME.png";
import phonecall from "../../assets/Assets/Logos/phonecall.png";
import whatsapp from "../../assets/Assets/Logos/whatsappoo.png";
import cv from "../../assets/Assets/Logos/resume.png";
import mailer from "../../assets/Assets/Logos/mail.png";
import linkindon from "../../assets/Assets/Logos/linkedin.png";
import gitty from "../../assets/Assets/Logos/github.png";
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const NavBar = () => {
  // ======================modal================

  const [isNavModalOpen, setNavModalOpen] = useState(false);

  const openNavModal = () => {
    setNavModalOpen(true);
  };

  const closeNavModal = () => {
    setNavModalOpen(false);
  };

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

  // =================DOWNLOAD RESUME==============================

  const downloadResume = () => {
    const resumeLink =
      "https://drive.google.com/file/d/1uOEc_L0EfuaX0cZYoM9_PCySWbe9dZUg/view?usp=drivesdk";

    const link = document.createElement("a");
    link.href = resumeLink;
    link.download = "Lauren's RESUME";
    link.click();
    document.body.removeChild(link);
  };

  // ==================EMAIL LINK=====================

  const emailAddress = "https://www.laurenjude9@gmail.com";

  // ===================LINKEDIN LINK======================

  const linkedinProfileUrl =
    "https://www.linkedin.com/in/lauren-jude-ifeloju-ogonno-97b90b1a2?.com";

  // =======================GITHUB LINK============================

  const githubProfileUrl = "https://github.com/laurenjude";

  // ======================WHATSAPP LINK=========================

  const whatsap = "https://wa.me/+2349035586766";

  return (
    <div id="top">
      <nav className="navbar navbar-expand-lg navbar-light all-nav container">
        <div className="container-fluid">
          <div
            className="d-flex align-items-center me-5 loname"
            onClick={handleClickLogo}
          >
            <img className="myAlogo" src={logoo} alt="logo" />
          </div>
          <button
            className="navbar-toggler burger"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="text-start collapse navbar-collapse all-lin"
            id="navbarSupportedContent"
          >
            <ul className="me-auto mb-2 mb-lg-0 nav-lin navbar-nav">
              <li className="nav-item">
                <Link
                  to="top"
                  smooth={true}
                  duration={500}
                  className="hi"
                  onClick={handleClickHi}
                  aria-current="page"
                >
                  Hi
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="section2"
                  smooth={true}
                  duration={500}
                  className="about"
                  onClick={handleClickAbout}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="section3"
                  smooth={true}
                  duration={500}
                  className="skills"
                  onClick={handleClickSkills}
                >
                  Skills
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="section4"
                  smooth={true}
                  duration={500}
                  className="portfoloo"
                  onClick={handleClickProjects}
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="section5"
                  smooth={true}
                  duration={500}
                  className="contacta"
                  onClick={handleClickContact}
                >
                  Contact
                </Link>
              </li>
            </ul>
            <button className="get" onClick={openNavModal}>
              Get in touch
            </button>
          </div>
        </div>
      </nav>

      <Modal
        isOpen={isNavModalOpen}
        onRequestClose={closeNavModal}
        contentLabel="GetInTouch"
        className="navmomo"
      >
        <div className="getmodal">
          <div className="navmodcan">
            <MdCancel onClick={closeNavModal} />
          </div>
          <div className="phoneall">
            <div className="phonenum">
              <img src={phoneget} alt="phone" />
            </div>
            <div className="contacticco">
              <div className="conttite">
                <p>Get in touch</p>
              </div>
              <div className="firstpicons">
                <img src={phonecall} alt="phonecall" />

                <a href={whatsap} target="_blank" rel="noopr noref">
                  <img src={whatsapp} alt="whatsapp" />
                </a>

                <img
                  className="yodcv"
                  src={cv}
                  alt="resume"
                  onClick={downloadResume}
                />
              </div>
              <div className="secpicons">
                <a
                  href={`${emailAddress}`}
                  target="_blank"
                  rel="noopener noref"
                >
                  <img src={mailer} alt="email" />
                </a>

                <a
                  href={linkedinProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkindon} alt="linkedin" />
                </a>

                <a href={githubProfileUrl} target="_blank" rel="thcgv tdhgcvn">
                  <img src={gitty} alt="github" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default NavBar;
