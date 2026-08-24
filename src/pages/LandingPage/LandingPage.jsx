import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
import Lottie from "react-lottie";
import animationData from "../../assets/Assets/Logos/Animation - 1706860637472 (1).json";
import toast, { Toaster } from "react-hot-toast";
import illus1 from "../../assets/Assets/Logos/Picture6.png";
import mecoding from "../../assets/Assets/Social Icons/Jude 2.png";
import circle3d from "../../assets/Assets/Logos/ball.png";
import illu2 from "../../assets/Assets/Logos/Picture14.png";
import illu3 from "../../assets/Assets/Logos/Picture9.png";
import dot3 from "../../assets/Assets/Logos/dot3.png";
import dot4 from "../../assets/Assets/Logos/dot4.png";
import meone from "../../assets/Assets/Social Icons/Jude 3.png";
import mebkone from "../../assets/mebk1.png";
import dot2 from "../../assets/Assets/Logos/dot2.png";
import ex4 from "../../assets/Assets/Logos/ex4.png";
import arrowleft from "../../assets/Assets/Logos/arrow2.png";
import html from "../../assets/Assets/Logos/html.png";
import css from "../../assets/Assets/Logos/css.png";
import java from "../../assets/Assets/Logos/javascript.png";
import react from "../../assets/Assets/Logos/react.png";
import n8n from "../../assets/Assets/Logos/n8n.png";
import airtable from "../../assets/Assets/Logos/airtable.png";
import fillout from "../../assets/Assets/Logos/fillout.png";
import sass from "../../assets/Assets/Logos/sass.png";
import web7 from "../../assets/Assets/Social Icons/bbbbaby.png";
import web2 from "../../assets/Assets/Social Icons/DESSERTS.png";
import web5 from "../../assets/Assets/Social Icons/WhatsApp Image 2025-03-31 at 13.33.03_5663f6d6.jpg";
import web3 from "../../assets/Assets/Social Icons/GLOBE.png";
import projOrthodontic from "../../assets/Assets/Logos/proj-orthodontic.png";
import projLegalflow from "../../assets/Assets/Logos/proj-legalflow.svg";
import projApa from "../../assets/Assets/Logos/proj-apa.svg";
import projMamatee from "../../assets/Assets/Logos/proj-mamatee.png";
import { FaAngleDoubleRight } from "react-icons/fa";
import arrowddown from "../../assets/Assets/Logos/arrow1.png";
import cross1 from "../../assets/Assets/Logos/cross1.png";
import fillback1 from "../../assets/Assets/Logos/ccccccccccc.png";
import fillback2 from "../../assets/Assets/Logos/bbbbbbbbbbbbbb.png";
import resume from "../../assets/Assets/Logos/resume.png";
import mail from "../../assets/Assets/Logos/mail.png";
import linkedin from "../../assets/Assets/Logos/linkedin.png";
import github from "../../assets/Assets/Logos/github.png";
import { BsFillSendFill } from "react-icons/bs";
// =====================Modal import==================
import Modal from "react-modal";
import { MdCancel } from "react-icons/md";
import phoneget from "../../assets/Assets/Social Icons/Lauren .png";
import phonecall from "../../assets/Assets/Logos/phonecall.png";
import whatsapp from "../../assets/Assets/Logos/whatsappoo.png";
import cv from "../../assets/Assets/Logos/resume.png";
import mailer from "../../assets/Assets/Logos/mail.png";
import linkindon from "../../assets/Assets/Logos/linkedin.png";
import gitty from "../../assets/Assets/Logos/github.png";
import scorem from "../../assets/Assets/Logos/checkmark.png";
import { Link } from "react-scroll";
import ScrollReveal from "scrollreveal";
import Pospadi from "../../assets/Assets/Social Icons/image.png";

// =================================================

const LandingPage = () => {
  useEffect(() => {
    Modal.setAppElement("#root"); // Set the root element of your app
  }, []);

  // ======================getintouch modal================

  const [isNavModalOpen, setNavModalOpen] = useState(false);

  const openNavModal = () => {
    setNavModalOpen(true);
  };

  const closeNavModal = () => {
    setNavModalOpen(false);
  };

  // =============================Form Logic======================

  const [formDataTwo, setFormDataTwo] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChangeTwo = (event) => {
    const { name, value } = event.target;

    setFormDataTwo((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (formDataTwo.name.trim() === "") {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (formDataTwo.email.trim() === "") {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formDataTwo.email)) {
      newErrors.email = "Invalid email address";
      isValid = false;
    }

    if (formDataTwo.message.trim() === "") {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    if (!isValid) {
      if (newErrors.name) {
        toast.error(newErrors.name, { id: "yiy" });
      }

      if (newErrors.email) {
        toast.error(newErrors.email, { id: "fdxf" });
      }

      if (newErrors.message) {
        toast.error(newErrors.message, { id: "xcd" });
      }
    }

    return isValid;
  };

  // ======================MESSAGE SENT MODAL=====================
  const [isMessageSent, setIsMessageSent] = useState(false);

  const handleSendClick = (e) => {
    e.preventDefault();
    if (validateForm()) {
      handleSeendClick(e); // Call the email sending function
    } else {
      console.log("Form validation failed");
    }
  };

  const closeMessageSent = () => {
    setIsMessageSent(false);
  };

  const handleSubmitTwo = (event) => {
    event.preventDefault();
    if (validateForm()) {
      handleSeendClick(event); // Call the email sending function
    } else {
      console.log("Form validation failed");
    }
  };

  // =============================NAVIGATE==============================

  const navigate = useNavigate();

  const handleProjectsClick = () => {
    navigate("/portfolio");
  };

  // ======================LOTTIE============================

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // ========================SCROLL REVEAL===============

  useEffect(() => {
    ScrollReveal().reveal(".reveal-from-top", {
      duration: 1500,
      origin: "top",
      distance: "100px",
      delay: 500,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".reveal-from-bottom", {
      duration: 1500,
      origin: "bottom",
      distance: "100px",
      delay: 500,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".reveal-from-left", {
      duration: 1500,
      origin: "left",
      distance: "50px",
      delay: 500,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".reveal-from-right", {
      duration: 1500,
      origin: "right",
      distance: "50px",
      delay: 500,
      easing: "ease-in-out",
    });
  }, []);

  const defaultScroll = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // ======================EMAILJS FUNCTION=====================
  const handleSeendClick = async (e) => {
    e.preventDefault();

    const templateParams = {
      name: formDataTwo.name,
      email: formDataTwo.email,
      message: formDataTwo.message,
    };

    try {
      const response = await fetch(
        "https://lauren002.app.n8n.cloud/webhook/91e72b5f-616c-46e8-9d12-491eef499c4e",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(templateParams),
        },
      );

      if (response.ok) {
        toast.success("Message sent successfully!");
        setIsMessageSent(true);
        setFormDataTwo({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please try again.");
    }
  };

  // =================DOWNLOAD RESUME==============================

  const downloadResume = () => {
    const resumeLink =
      "https://docs.google.com/document/d/1jr2KIIJPxMUlULfhpShLOP0hUPSRHVst/edit?usp=sharing&ouid=100903546748035111187&rtpof=true&sd=true";

    const link = document.createElement("a");
    link.href = resumeLink;
    link.download = "Lauren's RESUME";
    link.click();
    document.body.removeChild(link);
  };

  // ==================EMAIL LINK=====================

  const emailAddress = "mailto:laurenjude9@gmail.com";

  // ===================LINKEDIN LINK======================

  const linkedinProfileUrl =
    "https://www.linkedin.com/in/lauren-jude-ifeloju-ogonno-97b90b1a2";

  // =======================GITHUB LINK============================

  const githubProfileUrl = "https://github.com/laurenjude";

  // ======================WHATSAPP LINK=========================

  const whatsap = "https://wa.me/+2349035586766";

  return (
    <div className="landsec container">
      <div className="hero-section">
        <div
          className="landing-content text-start reveal-from-top"
          data-sr="enter top 100px over 1s">
          <h3>AI AUTOMATION ENGINEER</h3>
          <div className="loothi">
            <Lottie
              options={defaultOptions}
              height={70}
              width={200}
            />
          </div>
          <p className="name-big">I'm Lauren, Jude</p>
          <p className="based">
            Co-Founder, Automation Prime Africa &mdash; Lagos, Nigeria. I build
            intelligent automation systems and production-ready platforms for
            businesses across Africa and internationally, from React
            dashboards to n8n workflows and AI voice agents.
          </p>
        </div>
        <div className="illustration ">
          <img
            className="mebkone"
            src={mebkone}
            alt=""
          />
        </div>

        <div
          className="reveal-from-bottom mediv"
          data-sr="enter bottom 30px over 1s">
          <img
            className="meone"
            src={meone}
            alt=""
          />
          <img
            className="rotating-img"
            src={illus1}
            alt=""
          />
        </div>

        <div
          className="social-links reveal-from-bottom"
          data-sr="enter bottom 30px over 1s">
          <img
            className="cv-icon"
            src={resume}
            alt="cv"
            onClick={downloadResume}
          />

          <a
            href={`${emailAddress}`}
            target="_blank"
            rel="noopener noref">
            <img
              src={mail}
              alt="mail"
            />
          </a>

          <a
            href={linkedinProfileUrl}
            target="_blank"
            rel="noopener noreferrer">
            <img
              src={linkedin}
              alt="linkedin"
            />
          </a>
          <a
            href={githubProfileUrl}
            target="_blank"
            rel="thcgv tdhgcvn">
            <img
              src={github}
              alt="github"
            />
          </a>
        </div>
      </div>

      {/* ============================================================================ */}

      <section
        className="asec"
        id="section2">
        <p
          className="abme reveal-from-top"
          data-sr="enter top 100px over 1s">
          About me
        </p>
        <div
          className="aboutme reveal-from-bottom"
          data-sr="enter bottom 100px over 1s">
          <img
            src={mecoding}
            alt=""
            className="reveal-from-top"
            data-sr="enter top 100px over 1s"
          />
          <div className="parab">
            <p className="highly">
              I build intelligent automation systems and production-ready
              platforms for businesses across Africa and internationally. My
              work spans complete system architecture from React dashboards
              with authentication to n8n workflow automation, AI voice
              agents, and database design.{" "}
              <span>
                I specialise in turning manual business operations into
                automated platforms that clients log into every day without
                thinking about the technology underneath.{" "}
              </span>
              Co-Founder and Technical Lead at Automation Prime Africa where
              we design and deploy automation solutions for healthcare,
              legal, energy, hospitality, and interpreting services.
            </p>

            <div
              className="aboutnum reveal-from-bottom"
              data-sr="enter bottom 100px over 1s">
              <div className="abnum1">
                <p className="plusnum">1+</p>
                <p className="texnum">Years of Experience</p>
              </div>
              <div className="abnum2">
                <p className="plusnum">10+</p>
                <p className="texnum">Successfully Completed Projects</p>
              </div>
              {/* <div className="abnum3">
                <p className="plusnum">1</p>
                <p className="texnum">Global Customers</p>
              </div> */}
            </div>
            <button
              className="bout border-0"
              onClick={openNavModal}>
              Get in touch
            </button>
          </div>
          <Modal
            isOpen={isNavModalOpen}
            onRequestClose={closeNavModal}
            contentLabel="GetInTouch"
            className="navmomo">
            <div className="getmodal">
              <div className="navmodcan">
                <MdCancel onClick={closeNavModal} />
              </div>
              <div className="phoneall">
                <div className="phonenum">
                  <img
                    src={phoneget}
                    alt="phone"
                  />
                </div>
                <div className="contacticco">
                  <div className="conttite">
                    <p>Get in touch</p>
                  </div>
                  <div className="firstpicons">
                    <img
                      src={phonecall}
                      alt="phonecall"
                    />

                    <a
                      href={whatsap}
                      target="_blank"
                      rel="noopr noref">
                      <img
                        src={whatsapp}
                        alt="whatsapp"
                      />
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
                      rel="noopener noref">
                      <img
                        src={mailer}
                        alt="email"
                      />
                    </a>

                    <a
                      href={linkedinProfileUrl}
                      target="_blank"
                      rel="noopener noreferrer">
                      <img
                        src={linkindon}
                        alt="linkedin"
                      />
                    </a>

                    <a
                      href={githubProfileUrl}
                      target="_blank"
                      rel="thcgv tdhgcvn">
                      <img
                        src={gitty}
                        alt="github"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        </div>

        <img
          className="ball "
          src={circle3d}
          alt=""
        />
        <img
          className="illu2"
          src={illu2}
          alt=""
        />
        <img
          className="dot3 reveal-from-bottom"
          data-sr="enter bottom 30px over 1s"
          src={dot3}
          alt=""
        />
        <img
          className="ex4"
          src={ex4}
          alt=""
        />
      </section>

      {/* ======================================================================= */}

      <section
        className="m-skills"
        id="section3">
        <div className="skillarr">
          <p
            className="slillsbig reveal-from-top"
            data-sr="enter top 30px over 1s">
            My Skills
          </p>
          <img
            src={arrowleft}
            className="reveal-from-bottom"
            data-sr="enter bottom 30px over 1s"
            alt="arrow"
          />
        </div>
        <div className="pro-skills">
          <div
            className="prim-s reveal-from-top"
            data-sr="enter top 100px over 1s">
            <div className="html">
              <img
                src={html}
                alt="n8n"
              />
              <div>
                <h5>n8n</h5>
                <p>Production Workflows</p>
              </div>
            </div>
            <div className="css">
              <img
                src={css}
                alt="vapi"
              />
              <div>
                <h5>Vapi</h5>
                <p>AI Voice Agents</p>
              </div>
            </div>
            <div className="java">
              <img
                src={java}
                alt="claude code"
              />
              <div>
                <h5>Claude Code</h5>
                <p>AI-Assisted Development</p>
              </div>
            </div>
            <div className="react">
              <img
                src={react}
                alt="react"
              />
              <div>
                <h5>React.js</h5>
                <p>Full-Stack Platforms</p>
              </div>
            </div>
          </div>

          <div
            className="seco-s reveal-from-bottom"
            data-sr="enter bottom 100px over 1s">
            <div className="python">
              <img
                src={n8n}
                alt="supabase"
              />
              <div>
                <h5>Supabase</h5>
                <p>Database & Auth</p>
              </div>
            </div>
            <div className="node">
              <img
                src={airtable}
                alt="airtable"
              />
              <div>
                <h5>Airtable</h5>
                <p>Data Management</p>
              </div>
            </div>
            <div className="vue">
              <img
                src={fillout}
                alt="node.js"
              />
              <div>
                <h5>Node.js</h5>
                <p>Backend &amp; APIs</p>
              </div>
            </div>
            <div className="sass">
              <img
                src={sass}
                alt="webhooks"
              />
              <div>
                <h5>Webhooks</h5>
                <p>REST APIs &amp; Webhooks</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================== */}

      <section
        className="projectsec"
        id="section4">
        <p
          className="bigpro reveal-from-top"
          data-sr="enter top 30px over 1s">
          My Projects
        </p>
        <div className="proo">

          {/* ── Featured Project 1 — OrthoClinic Pro ── */}
          <div
            className="feat-card reveal-from-left"
            data-sr="enter left 50px over 1s">
            <img
              src={projOrthodontic}
              alt="OrthoClinic Pro"
            />
            <div className="feat-card-body">
              <p className="feat-title">OrthoClinic Pro: Clinic Management Platform</p>
              <p className="feat-desc">
                Complete clinic management platform with 5 automated n8n
                workflows, a branded staff dashboard and a public booking page
              </p>
              <div className="techno feat-tags">
                <p className="httt">React</p>
                <p className="csss">Supabase</p>
                <p className="jsss">n8n</p>
                <p className="appp">Airtable</p>
                <p className="n8nn">Tailwind CSS</p>
              </div>
              <div className="feat-btns">
                <a
                  href="https://the-clinic-black.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer">
                  <button className="feat-live border-0">View Live</button>
                </a>
              </div>
            </div>
          </div>

          {/* ── Featured Project 2 — LegalFlow AI ── */}
          <div
            className="feat-card reveal-from-right"
            data-sr="enter right 50px over 1s">
            <img
              src={projLegalflow}
              alt="LegalFlow AI"
            />
            <div className="feat-card-body">
              <p className="feat-title">LegalFlow AI: Law Firm Case Management</p>
              <p className="feat-desc">
                Case management platform with 6 interconnected n8n workflows
                covering intake, billing, deadlines and daily briefings
              </p>
              <div className="techno feat-tags">
                <p className="httt">React</p>
                <p className="csss">Supabase</p>
                <p className="jsss">n8n</p>
                <p className="appp">Airtable</p>
                <p className="n8nn">Tailwind CSS</p>
              </div>
              <div className="feat-btns">
                <a
                  href="https://legal-flow-ai.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer">
                  <button className="feat-live border-0">View Live</button>
                </a>
              </div>
            </div>
          </div>

          {/* ── Featured Project 3 — Automation Prime Africa ── */}
          <div
            className="feat-card reveal-from-left"
            data-sr="enter left 50px over 1s">
            <img
              src={projApa}
              alt="Automation Prime Africa"
            />
            <div className="feat-card-body">
              <p className="feat-title">Automation Prime Africa: Company Website</p>
              <p className="feat-desc">
                Dark premium theme with gold accents, animated hero, embedded
                Calendly booking and live client demo showcases
              </p>
              <div className="techno feat-tags">
                <p className="httt">React</p>
                <p className="csss">Vite</p>
                <p className="jsss">Tailwind CSS</p>
              </div>
              <div className="feat-btns">
                <a
                  href="https://automationprimeafrica.com"
                  target="_blank"
                  rel="noopener noreferrer">
                  <button className="feat-live border-0">View Live</button>
                </a>
              </div>
            </div>
          </div>

          {/* ── Featured Project 4 — Mama Tee's Kitchen ── */}
          <div
            className="feat-card reveal-from-right"
            data-sr="enter right 50px over 1s">
            <img
              src={projMamatee}
              alt="Mama Tees Kitchen"
            />
            <div className="feat-card-body">
              <p className="feat-title">Mama Tee's Kitchen: AI Voice Concierge</p>
              <p className="feat-desc">
                Live 24/7 AI phone agent handling orders, reservations and
                escalations with 3 independent n8n backend workflows
              </p>
              <div className="techno feat-tags">
                <p className="httt">Vapi</p>
                <p className="csss">GPT-4</p>
                <p className="jsss">n8n</p>
                <p className="appp">Airtable</p>
                <p className="n8nn">Twilio</p>
              </div>
              <div className="feat-btns">
                <a
                  href="https://loom.com/share/b0c70f028aae41cfa79809ff54e68127"
                  target="_blank"
                  rel="noopener noreferrer">
                  <button className="feat-loom border-0">Watch Demo</button>
                </a>
              </div>
            </div>
          </div>

        </div>
        <Link
          to="top"
          smooth={true}
          duration={500}>
          <button
            className="morepro border-0"
            onClick={handleProjectsClick}>
            View more Projects{" "}
            <span>
              <FaAngleDoubleRight />
            </span>
          </button>
        </Link>
        <img
          className="arrowdd reveal-from-top"
          data-sr="enter top 100px over 1s"
          src={arrowddown}
          alt=""
        />
        <img
          className="dotgrey"
          src={dot4}
          alt="dot4"
        />
        <img
          className="dotver"
          src={dot2}
          alt="dot2"
        />
        <img
          className="illu3"
          src={illu3}
          alt=""
        />
        <img
          className="cross1"
          src={cross1}
          alt="cross1"
        />
      </section>

      {/* =========================================================================== */}

      <section
        className="contactme"
        id="section5">
        <p
          className="conbig reveal-from-top"
          data-sr="enter top 100px over 1s">
          Contact me
        </p>
        <form
          action=""
          className="formfill reveal-from-bottom"
          data-sr="enter top 100px over 1s"
          onSubmit={handleSubmitTwo}>
          <div className="fname">
            <p>Full name *</p>
            <input
              type="text"
              placeholder="Enter your full name ..."
              name="name"
              value={formDataTwo.name}
              onChange={handleChangeTwo}
            />
          </div>
          <div className="femail">
            <p>Email *</p>
            <input
              type="email"
              placeholder="Enter your email ..."
              name="email"
              value={formDataTwo.email}
              onChange={handleChangeTwo}
            />
          </div>
          <div className="fmessage">
            <p>Message *</p>
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Enter your message ..."
              value={formDataTwo.message}
              onChange={handleChangeTwo}></textarea>
          </div>
          <button
            className="sendfill border-0"
            onClick={handleSendClick}>
            Submit{"   "}
            <span>
              <BsFillSendFill />
            </span>
            <Toaster
              position="bottom-right"
              reverseOrder={false}
            />
          </button>
        </form>
        <Modal
          isOpen={isMessageSent}
          onRequestClose={closeMessageSent}
          contentLabel="From Data Modal"
          className="modal4">
          <div className="messcar">
            <div className="scor">
              <img
                className="checkm"
                src={scorem}
                alt=""
              />
            </div>
            <div className="ymh">
              <p className="bigms">Message Sent</p>
              <p className="succc">Your message has been successfully sent.</p>
              <button
                onClick={closeMessageSent}
                className="border-0">
                Close
              </button>
            </div>
          </div>
        </Modal>
        <img
          className="leftfill"
          src={fillback1}
          alt="leftfill"
        />
        <img
          className="rightfill"
          src={fillback2}
          alt="rightfill"
        />
      </section>
    </div>
  );
};

export default LandingPage;
