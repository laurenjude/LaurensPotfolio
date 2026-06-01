import React, { useEffect } from "react";
import "./PortfolioPage.css";
import { IoLogoGithub } from "react-icons/io";
import project1 from "../../assets/Assets/Social Icons/image.png";
import project2 from "../../assets/Assets/Social Icons/DESSERTS.png";
import project3 from "../../assets/Assets/Social Icons/GLOBE.png";
import project4 from "../../assets/Assets/Logos/mpay.png";
import project5 from "../../assets/Assets/Logos/des5.jpg";
// import project6 from "../../assets/Assets/Logos/web5.png";
// import project7 from "../../assets/Assets/Logos/des3.jpg";
// import project8 from "../../assets/Assets/Logos/web3.png";
// import project9 from "../../assets/Assets/Logos/des4.jpg";
// import project10 from "../../assets/Assets/Logos/web6.png";
// import project11 from "../../assets/Assets/Logos/web8.png";
// import project12 from "../../assets/Assets/Logos/web9.png";
// import project13 from "../../assets/Assets/Logos/desktop-preview.jpg";
import illupro1 from "../../assets/Assets/Logos/Picture10.png";
import illupro2 from "../../assets/Assets/Logos/alldots1.png";
import illupro3 from "../../assets/Assets/Logos/arrow5.png";
import illupro4 from "../../assets/Assets/Logos/ex4.png";
import illupro5 from "../../assets/Assets/Logos/ball.png";
// import illupro6 from "../../assets/Assets/Logos/alldots2.png";
// import illupro7 from "../../assets/Assets/Logos/iluuu2.png";
// import illupro8 from "../../assets/Assets/Logos/cross1.png";
// import illupro9 from "../../assets/Assets/Logos/iluuu1.png";
// import illupro10 from "../../assets/Assets/Logos/iluuu3.png";
// import illupro11 from "../../assets/Assets/Logos/Picture5.png";
import projLaurelle from "../../assets/Assets/Logos/proj-laurelle.png";
import projMamatee from "../../assets/Assets/Logos/proj-mamatee.png";
import projSolar from "../../assets/Assets/Logos/proj-solar.png";
import projInvoice from "../../assets/Assets/Logos/proj-invoice.png";
import projOrthodontic from "../../assets/Assets/Logos/proj-orthodontic.png";
import projFinancial from "../../assets/Assets/Logos/proj-financial.png";
import projResumeiq from "../../assets/Assets/Logos/proj-resumeiq.png";
import ScrollReveal from "scrollreveal";
import animationData from "../../assets/Assets/Logos/Animation - 1706860637472 (1).json";

const PortfolioPage = () => {
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
      distance: "100px",
      delay: 500,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".reveal-from-right", {
      duration: 1500,
      origin: "right",
      distance: "100px",
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

  // =========================WEBLINKS==========================

  const sunnySideCode =
    "https://github.com/laurenjude/pos-padi-frontend/tree/dev";
  const sunnySideSite = "https://pospadi.com.ng/";

  const entertainmentWebappCode = "https://github.com/laurenjude/Desserts";
  const entertainmentWebappSite = "https://desserts-green.vercel.app/";

  const spaceWebCode = "https://github.com/laurenjude/theglobe";
  const spaceWebSite = "https://theglobe.vercel.app/";

  const mpayFinCode = "https://github.com/afeDayo/Tech_Assessment.git";
  const mpayFinSite = "https://techstudioassessment.netlify.app/";

  return (
    <div className="portfolioPage container">
      <p
        className="proBigTi reveal-from-top"
        data-sr="enter top 100px over 1s">
        My Projects{" "}
      </p>

      {/* =========================PROJECT 1 — Laurelle Realty============================= */}

      <section className="project1">
        <div
          className="portfolio1 reveal-from-right"
          data-sr="enter right 100px over 1s">
          <div className="sideleft">
            <img
              src={projLaurelle}
              alt="Laurelle Realty"
            />
          </div>
          <div className="sideright">
            <h3 className="text-start">Laurelle Realty: AI Real Estate Platform</h3>
            <p className="prodes">
              A full-stack AI-powered real estate platform for the Lagos property
              market. Features a RAG-powered chat agent that answers property FAQs
              and searches live listings via natural language. 4 n8n automation
              workflows for lead notifications, inquiry alerts, viewing
              confirmations, and daily reports.
            </p>
            <div className="techno">
              <p className="httt">React</p>
              <p className="csss">Vite</p>
              <p className="jsss">Supabase</p>
              <p className="appp">n8n</p>
              <p className="n8nn">Pinecone</p>
              <p className="vapiit">OpenRouter</p>
              <p className="supab">Vercel</p>
            </div>
            <div className="butview">
              <a
                href="https://laurelle-realty.vercel.app"
                target="_blank"
                rel="noopener noreferrer">
                <button className="livep border-0">Live Site</button>
              </a>
              <a
                href="https://github.com/laurenjude"
                target="_blank"
                rel="noopener noreferrer">
                <button className="vcode border-0">
                  GitHub{" "}<span><IoLogoGithub /></span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================PROJECT 2 — Mama Tee's Kitchen=========================== */}

      <section className="project2">
        <div
          className="portfolio2 reveal-from-left"
          data-sr="enter left 100px over 1s">
          <div className="sidel2">
            <h3>Mama Tee's Kitchen: AI Voice Concierge</h3>
            <p className="prodes">
              A 24/7 AI phone concierge for a Nigerian restaurant that handles
              live orders, reservations, and customer escalations via real phone
              calls. Logs every interaction to Airtable, sends instant Telegram
              notifications to staff, and delivers branded HTML confirmation
              emails to customers automatically.
            </p>
            <div className="techno">
              <p className="vapiit">Vapi</p>
              <p className="httt">GPT-4.1</p>
              <p className="csss">ElevenLabs</p>
              <p className="jsss">Deepgram</p>
              <p className="appp">n8n</p>
              <p className="n8nn">Airtable</p>
              <p className="tele">Telegram</p>
              <p className="gmaii">Gmail</p>
            </div>
            <div className="butview">
              <a
                href="https://loom.com/share/b0c70f028aae41cfa79809ff54e68127"
                target="_blank"
                rel="noopener noreferrer">
                <button className="livep border-0">Call Live Demo</button>
              </a>
              <a
                href="https://loom.com/share/b0c70f028aae41cfa79809ff54e68127"
                target="_blank"
                rel="noopener noreferrer">
                <button className="vcode border-0">Watch on Loom</button>
              </a>
            </div>
          </div>
          <div className="sider2">
            <img
              src={projMamatee}
              alt="Mama Tees Kitchen"
            />
          </div>
        </div>
      </section>

      {/* =========================PROJECT 3 — Orthodontic Clinic============================= */}

      <section className="project3">
        <div
          className="portfolio3 reveal-from-right"
          data-sr="enter right 100px over 1s">
          <div className="sideleft">
            <img
              src={projOrthodontic}
              alt="Orthodontic Clinic"
            />
          </div>
          <div className="sideright">
            <h3 className="text-start">Orthodontic Clinic Management System</h3>
            <p className="prodes">
              A complete 5-workflow automation system for an orthodontic clinic
              covering the full patient lifecycle: booking, appointment
              reminders, payment plan tracking, staff update handling, and
              end-of-treatment flow. Includes a 6th error handler workflow that
              monitors all workflows and sends failure alerts.
            </p>
            <div className="techno">
              <p className="n8nn">n8n</p>
              <p className="httt">Airtable</p>
              <p className="csss">Fillout</p>
              <p className="gmaii">Gmail</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================PROJECT 4 — Financial Document Automation=========================== */}

      <section className="project4">
        <div
          className="portfolio4 reveal-from-left"
          data-sr="enter left 100px over 1s">
          <div className="sidel2">
            <h3>Financial Document Automation</h3>
            <p className="prodes">
              Automates invoice processing for businesses. Gmail receives
              financial documents, Gemini AI extracts vendor, amount, invoice
              number and due date, saves to Google Drive, creates a review task
              in ClickUp, and logs everything to Google Sheets with zero manual
              data entry.
            </p>
            <div className="techno">
              <p className="gmaii">Gmail</p>
              <p className="httt">Gemini AI</p>
              <p className="gdrvv">Google Drive</p>
              <p className="gshe">Google Sheets</p>
              <p className="clkup">ClickUp</p>
              <p className="n8nn">n8n</p>
            </div>
          </div>
          <div className="sider2">
            <img
              src={projFinancial}
              alt="Financial Document Automation"
            />
          </div>
        </div>
      </section>

      {/* =========================PROJECT 5 — Solar Lead Automation============================= */}

      <section className="project5">
        <div
          className="portfolio5 reveal-from-right"
          data-sr="enter right 100px over 1s">
          <div className="sideleft">
            <img
              src={projSolar}
              alt="Solar Lead Automation"
            />
          </div>
          <div className="sideright">
            <h3 className="text-start">Solar Lead Automation System</h3>
            <p className="prodes">
              A complete lead-to-booking pipeline for solar companies. Calculates
              a personalised solar savings estimate instantly from form data,
              creates a Notion CRM record, sends a branded HTML email with the
              full offer breakdown, fires a WhatsApp message via Twilio, and runs
              hourly follow-up sequences automatically.
            </p>
            <div className="techno">
              <p className="n8nn">n8n</p>
              <p className="twilio">Twilio</p>
              <p className="notn">Notion</p>
              <p className="gmaii">Gmail</p>
              <p className="webh">Webhooks</p>
              <p className="jsss">JavaScript</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================PROJECT 6 — AI Invoice Generator=========================== */}

      <section className="project6">
        <div
          className="portfolio6 reveal-from-left"
          data-sr="enter left 100px over 1s">
          <div className="sidel2">
            <h3>AI Invoice Generator</h3>
            <p className="prodes">
              Automated invoice generation system for freelancers and service
              businesses. A client fills a form, the system generates a unique
              invoice number, copies a Google Docs template, fills all fields
              automatically, saves to Google Drive, logs to a Notion tracker,
              and sends a branded email to the client, all in seconds.
            </p>
            <div className="techno">
              <p className="n8nn">n8n</p>
              <p className="csss">Fillout</p>
              <p className="gdocc">Google Docs</p>
              <p className="gdrvv">Google Drive</p>
              <p className="notn">Notion</p>
              <p className="gmaii">Gmail</p>
            </div>
          </div>
          <div className="sider2">
            <img
              src={projInvoice}
              alt="AI Invoice Generator"
            />
          </div>
        </div>
      </section>

      {/* =========================PROJECT 7 — ResumeIQ============================= */}

      <section className="project7">
        <div
          className="portfolio7 reveal-from-right"
          data-sr="enter right 100px over 1s">
          <div className="sideleft">
            <img
              src={projResumeiq}
              alt="ResumeIQ"
            />
          </div>
          <div className="sideright">
            <h3 className="text-start">ResumeIQ: AI Resume Analyzer</h3>
            <p className="prodes">
              A live web app that lets users upload their resume and receive
              structured AI feedback on skills, gaps, and improvement areas
              instantly.
            </p>
            <div className="techno">
              <p className="reac">React</p>
              <p className="n8nn">n8n</p>
              <p className="grqo">Groq</p>
              <p className="mongo">MongoDB</p>
              <p className="supab">Vercel</p>
            </div>
            <div className="butview">
              <a
                href="https://resume-iq-nu.vercel.app"
                target="_blank"
                rel="noopener noreferrer">
                <button className="livep border-0">Live Site</button>
              </a>
              <a
                href="https://github.com/laurenjude"
                target="_blank"
                rel="noopener noreferrer">
                <button className="vcode border-0">
                  GitHub{" "}<span><IoLogoGithub /></span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================PROJECT 8 — POS Padi============================= */}

      <section className="project8">
        <div
          className="portfolio8 reveal-from-left"
          data-sr="enter left 100px over 1s">
          <div className="sidel2">
            <h3>POS padi</h3>
            <p className="prodes">
              At POS-PADi, we're transforming how businesses handle payments.
              From small shops to large enterprises, we provide the tools you
              need to succeed in today's digital economy. Fast, secure payment
              processing Intuitive business management tools Seamless
              omnichannel experiences Enterprise-grade reliability
            </p>
            <div className="techno">
              <p className="httt">HTML</p>
              <p className="csss">CSS</p>
              <p className="jsss">JS</p>
              <p className="appp">API</p>
            </div>
            <div className="butview">
              <a
                href={sunnySideSite}
                target="_blank"
                rel="thdhgcvn">
                <button className="livep">Live Preview</button>
              </a>
              <a
                href={sunnySideCode}
                target="_blank"
                rel="ytdczxhrh">
                <button className="vcode">
                  View Code{" "}
                  <span>
                    <IoLogoGithub />
                  </span>
                </button>
              </a>
            </div>
          </div>
          <div className="sider2">
            <img
              src={project1}
              alt="project1"
            />
          </div>
        </div>
      </section>

      {/* =========================PROJECT 9 — DESSERTS-APP=========================== */}

      <section className="project9">
        <div
          className="portfolio9 reveal-from-right"
          data-sr="enter right 100px over 1s">
          <div className="sideleft">
            <img
              src={project2}
              alt="project2"
            />
          </div>
          <div className="sideright">
            <h3>DESSERTS-APP</h3>
            <p className="prodes">
              The Desserts website is a visually appealing and responsive
              platform showcasing a variety of desserts. It likely emphasizes an
              elegant design with smooth navigation, featuring detailed displays
              of desserts with appealing visuals and descriptions. The project
              highlights technical skills in frontend development, focusing on
              user experience and aesthetic presentation.
            </p>
            <div className="techno">
              <p className="httt">HTML</p>
              <p className="csss">CSS</p>
              <p className="jsss">JS</p>
            </div>
            <div className="butview">
              <a
                href={entertainmentWebappSite}
                target="_blank"
                rel="cccngx">
                <button className="livep">Live Preview</button>
              </a>
              <a
                href={entertainmentWebappCode}
                target="_blank"
                rel="nnnyys">
                <button className="vcode">
                  View Code{" "}
                  <span>
                    <IoLogoGithub />
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================PROJECT 10 — THE GLOBE=========================== */}

      <section className="project10">
        <div
          className="portfolio10 reveal-from-left"
          data-sr="enter left 100px over 1s">
          <div className="sidel2">
            <h3>THE GLOBE</h3>
            <p className="prodes">
              The Globe website is a visually engaging platform that likely
              focuses on presenting information or resources related to global
              topics, such as travel, geography, or cultural exploration. It
              features a modern design and responsive layout, ensuring
              accessibility on various devices. This project showcases strong
              frontend development skills, emphasizing clean visuals and smooth
              user interactions.
            </p>
            <div className="techno">
              <p className="httt">HTML</p>
              <p className="csss">CSS</p>
              <p className="jsss">JS</p>
              <p className="appp">API</p>
            </div>
            <div className="butview">
              <a
                href={spaceWebSite}
                target="_blank"
                rel="cccngx">
                <button className="livep">Live Preview</button>
              </a>
              <a
                href={spaceWebCode}
                target="_blank"
                rel="nnnyys">
                <button className="vcode">
                  View Code{" "}
                  <span>
                    <IoLogoGithub />
                  </span>
                </button>
              </a>
            </div>
          </div>
          <div className="sider2">
            <img
              src={project3}
              alt="project3"
            />
          </div>
        </div>
      </section>

      {/* =========================PROJECT 11 — MPAY FINTECH=========================== */}

      <section className="project11">
        <div
          className="portfolio11 reveal-from-right"
          data-sr="enter right 100px over 1s">
          <div className="sideleft">
            <img
              src={project4}
              alt="project4"
            />
          </div>
          <div className="sideright">
            <h3 className="text-start">MPAY FINTECH WEB-APP</h3>
            <p className="prodes">
              Welcome to our cutting-edge fintech web app, where seamless
              financial management meets user-friendly accessibility. With
              secure sign-in and sign-out features, users can confidently
              navigate our platform to take control of their finances. Our
              internal page offers a wealth of resources, empowering users to
              dive deeper into the features and benefits our fintech solution
              offers
            </p>
            <div className="techno">
              <p className="httt">HTML</p>
              <p className="csss">CSS</p>
              <p className="jsss">JS</p>
              <p className="appp">API</p>
            </div>
            <div className="butview">
              <a
                href={mpayFinSite}
                target="_blank"
                rel="cccngx">
                <button className="livep">Live Preview</button>
              </a>
              <a
                href={mpayFinCode}
                target="_blank"
                rel="nnnyys">
                <button className="vcode">
                  View Code{" "}
                  <span>
                    <IoLogoGithub />
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
