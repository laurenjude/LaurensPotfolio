import React, { useEffect } from "react";
import "./PortfolioPage.css";
import { IoLogoGithub } from "react-icons/io";
import projOrthodontic from "../../assets/Assets/Logos/proj-orthodontic.png";
import projLegalflow from "../../assets/Assets/Logos/proj-legalflow.svg";
import projApa from "../../assets/Assets/Logos/proj-apa.svg";
import projMamatee from "../../assets/Assets/Logos/proj-mamatee.png";
import projEmberbun from "../../assets/Assets/Logos/proj-emberbun.svg";
import projHorizon from "../../assets/Assets/Logos/proj-horizon.svg";
import projSolar from "../../assets/Assets/Logos/proj-solar.png";
import ScrollReveal from "scrollreveal";

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

  return (
    <div className="portfolioPage container">
      <p
        className="proBigTi reveal-from-top"
        data-sr="enter top 100px over 1s">
        My Projects{" "}
      </p>

      {/* =========================PROJECT 1 — OrthoClinic Pro============================= */}

      <section className="project1">
        <div
          className="portfolio1 reveal-from-right"
          data-sr="enter right 100px over 1s">
          <div className="sideleft">
            <img
              src={projOrthodontic}
              alt="OrthoClinic Pro"
            />
          </div>
          <div className="sideright">
            <h3 className="text-start">OrthoClinic Pro: Clinic Management Platform</h3>
            <p className="prodes">
              A complete clinic management platform for orthodontic and dental
              practices. Five automated n8n workflows handle patient
              registration, appointment reminders, payment processing with
              receipt generation, payment deadline tracking, and
              end-of-treatment notifications. A branded React dashboard lets
              staff manage patients, log payments, and track appointments. A
              public booking page lets patients schedule consultations
              without a login.
            </p>
            <div className="techno">
              <p className="reac">React</p>
              <p className="csss">Vite</p>
              <p className="appp">Tailwind CSS</p>
              <p className="supab">Supabase Auth</p>
              <p className="httt">Airtable</p>
              <p className="n8nn">n8n</p>
            </div>
            <div className="butview">
              <a
                href="https://the-clinic-black.vercel.app"
                target="_blank"
                rel="noopener noreferrer">
                <button className="livep border-0">Live Site</button>
              </a>
              <a
                href="https://the-clinic-black.vercel.app/book"
                target="_blank"
                rel="noopener noreferrer">
                <button className="vcode border-0">Booking Page</button>
              </a>
              <a
                href="https://github.com/laurenjude/OrthoClinic-Pro"
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

      {/* =========================PROJECT 2 — LegalFlow AI=========================== */}

      <section className="project2">
        <div
          className="portfolio2 reveal-from-left"
          data-sr="enter left 100px over 1s">
          <div className="sidel2">
            <h3>LegalFlow AI: Law Firm Case Management</h3>
            <p className="prodes">
              A case management platform for law firms with six
              interconnected n8n workflows and a branded React dashboard.
              Handles client intake with intelligent classification, document
              management, deadline tracking with daily urgency alerts,
              automated billing, client communication, and morning executive
              briefings for managing partners.
            </p>
            <div className="techno">
              <p className="reac">React</p>
              <p className="csss">Vite</p>
              <p className="appp">Tailwind CSS</p>
              <p className="supab">Supabase Auth</p>
              <p className="httt">Airtable</p>
              <p className="n8nn">n8n</p>
            </div>
            <div className="butview">
              <a
                href="https://legal-flow-ai.vercel.app"
                target="_blank"
                rel="noopener noreferrer">
                <button className="livep border-0">Live Site</button>
              </a>
              <a
                href="https://github.com/laurenjude/LegalFlow-AI"
                target="_blank"
                rel="noopener noreferrer">
                <button className="vcode border-0">
                  GitHub{" "}<span><IoLogoGithub /></span>
                </button>
              </a>
            </div>
          </div>
          <div className="sider2">
            <img
              src={projLegalflow}
              alt="LegalFlow AI"
            />
          </div>
        </div>
      </section>

      {/* =========================PROJECT 3 — Automation Prime Africa============================= */}

      <section className="project3">
        <div
          className="portfolio3 reveal-from-right"
          data-sr="enter right 100px over 1s">
          <div className="sideleft">
            <img
              src={projApa}
              alt="Automation Prime Africa"
            />
          </div>
          <div className="sideright">
            <h3 className="text-start">Automation Prime Africa: Company Website</h3>
            <p className="prodes">
              The company website for Automation Prime Africa, my automation
              consultancy. Dark premium theme with gold accents, animated
              hero section with a typewriter effect, auto-scrolling service
              cards, embedded Calendly booking, and client showcases
              featuring live demo systems.
            </p>
            <div className="techno">
              <p className="reac">React</p>
              <p className="csss">Vite</p>
              <p className="appp">Tailwind CSS</p>
            </div>
            <div className="butview">
              <a
                href="https://automationprimeafrica.com"
                target="_blank"
                rel="noopener noreferrer">
                <button className="livep border-0">Live Site</button>
              </a>
              <a
                href="https://github.com/laurenjude/Automation-Prime-Africa-APA-"
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

      {/* =========================PROJECT 4 — AI Voice Concierge: Mama Tee's Kitchen=========================== */}

      <section className="project4">
        <div
          className="portfolio4 reveal-from-left"
          data-sr="enter left 100px over 1s">
          <div className="sidel2">
            <h3>AI Voice Concierge: Mama Tee's Kitchen</h3>
            <p className="prodes">
              A live AI phone agent that answers real calls 24/7 for a
              restaurant. Built with Vapi and GPT-4, it takes food orders,
              books reservations, answers FAQs, and escalates to staff when
              needed. Three independent n8n backend workflows handle orders,
              reservations, and escalations separately with WhatsApp customer
              confirmations and Telegram kitchen alerts.
            </p>
            <div className="techno">
              <p className="vapiit">Vapi</p>
              <p className="httt">GPT-4</p>
              <p className="n8nn">n8n</p>
              <p className="jsss">Airtable</p>
              <p className="twilio">Twilio</p>
              <p className="whatsapp">WhatsApp API</p>
              <p className="tele">Telegram Bot</p>
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

      {/* =========================PROJECT 5 — Ember & Bun============================= */}

      <section className="project5">
        <div
          className="portfolio5 reveal-from-right"
          data-sr="enter right 100px over 1s">
          <div className="sideleft">
            <img
              src={projEmberbun}
              alt="Ember and Bun"
            />
          </div>
          <div className="sideright">
            <h3 className="text-start">Ember &amp; Bun: AI Voice Demo Restaurant</h3>
            <p className="prodes">
              A demo restaurant landing page with embedded browser-based AI
              voice calling using the Vapi Web SDK. Visitors click a button
              and talk to the AI agent directly in their browser without
              leaving the page. No external redirects, no third-party
              branding. Built as a live showcase for the AI Voice Concierge
              product.
            </p>
            <div className="techno">
              <p className="reac">React</p>
              <p className="csss">Vite</p>
              <p className="appp">Tailwind CSS</p>
              <p className="vapiit">Vapi Web SDK</p>
            </div>
            <div className="butview">
              <a
                href="https://ember-and-bun-gules.vercel.app"
                target="_blank"
                rel="noopener noreferrer">
                <button className="livep border-0">Live Site</button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================PROJECT 6 — Horizon Interpreters=========================== */}

      <section className="project6">
        <div
          className="portfolio6 reveal-from-left"
          data-sr="enter left 100px over 1s">
          <div className="sidel2">
            <h3>Horizon Interpreters: Interpreting Service Platform</h3>
            <p className="prodes">
              A complete digital platform for a UK-based interpreting service
              covering 47 languages. Custom website with animated hero,
              booking form, rate cards, and solicitor bundle pricing. Three
              n8n workflows handle booking processing, appointment
              reminders, and job completion with automatic charge
              calculation. Telegram group notifications alert interpreters
              to new bookings.
            </p>
            <div className="techno">
              <p className="reac">React</p>
              <p className="csss">Vite</p>
              <p className="appp">Tailwind CSS</p>
              <p className="httt">Airtable</p>
              <p className="n8nn">n8n</p>
              <p className="tele">Telegram Bot</p>
            </div>
          </div>
          <div className="sider2">
            <img
              src={projHorizon}
              alt="Horizon Interpreters"
            />
          </div>
        </div>
      </section>

      {/* =========================PROJECT 7 — Solar Lead Automation============================= */}

      <section className="project7">
        <div
          className="portfolio7 reveal-from-right"
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
              An instant lead response system for solar companies. When a
              prospect fills a form, the system responds in under 10 seconds
              with a personalised savings estimate, a branded email, a
              WhatsApp message, and automatic follow-up sequences at 24 and
              72 hours.
            </p>
            <div className="techno">
              <p className="n8nn">n8n</p>
              <p className="httt">Airtable</p>
              <p className="whatsapp">WhatsApp API</p>
              <p className="gmaii">Email</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
