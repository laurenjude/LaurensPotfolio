import React, { useEffect } from "react";
import "./PortfolioPage.css";
import { IoLogoGithub } from "react-icons/io";
import project1 from "../../assets/Assets/Social Icons/bbbbaby.png";
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

  const sunnySideCode = "https://github.com/laurenjude/BABY-PLACE";
  const sunnySideSite = "https://baby-place.vercel.app/";

  const entertainmentWebappCode = "https://github.com/laurenjude/Desserts";
  const entertainmentWebappSite = "https://desserts-green.vercel.app/";

  const spaceWebCode = "https://github.com/laurenjude/theglobe";
  const spaceWebSite = "https://theglobe.vercel.app/";

  const mpayFinCode = "https://github.com/afeDayo/Tech_Assessment.git";
  const mpayFinSite = "https://techstudioassessment.netlify.app/";

  return (
    <div className="portfolioPage container">
      <p className="proBigTi reveal-from-top" data-sr="enter top 100px over 1s">
        My Projects{" "}
      </p>

      {/* =========================PROJECT 1============================= */}

      <section className="project1">
        <div
          className="portfolio1 reveal-from-right"
          data-sr="enter right 100px over 1s"
        >
          <div className="sideleft">
            <img src={project1} alt="project1" />
          </div>
          <div className="sideright">
            <h3 className="text-start">BABY-PLACE "Home-page"</h3>
            <p className="prodes">
              The Baby Place website is a user-friendly platform focused on
              helping parents or guardians find baby-related services and
              locations. It likely includes features such as searching for baby
              care centers, product recommendations, or community spaces
              tailored to parents. The design appears clean and responsive,
              ensuring accessibility across devices. This project showcases a
              blend of frontend and backend skills, demonstrating effective
              navigation and data handling.
            </p>
            <div className="techno">
              <p className="httt">HTML</p>
              <p className="csss">CSS</p>
              <p className="jsss">JS</p>
              <p className="appp">API</p>
            </div>
            <div className="butview">
              <a href={sunnySideSite} target="_blank" rel="thdhgcvn">
                <button className="livep">Live Preview</button>
              </a>

              <a href={sunnySideCode} target="_blank" rel="ytdczxhrh">
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
        <img className="illupro1" src={illupro1} alt="" />
      </section>

      {/* =========================PROJECT 2=========================== */}

      <section className="project2">
        <div
          className="portfolio2 reveal-from-left"
          data-sr="enter left 100px over 1s"
        >
          <div className="sidel2">
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
              <a href={entertainmentWebappSite} target="_blank" rel="cccngx">
                <button className="livep">Live Preview</button>
              </a>
              <a href={entertainmentWebappCode} target="_blank" rel="nnnyys">
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
            <img src={project2} alt="project1" />
          </div>
        </div>
        <img className="illupro2" src={illupro2} alt="" />
      </section>

      {/* =========================PROJECT 3=========================== */}

      <section className="project3">
        <div
          className="portfolio3 reveal-from-right"
          data-sr="enter right 100px over 1s"
        >
          <div className="sideleft">
            <img src={project3} alt="project1" />
          </div>
          <div className="sideright">
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
              <a href={spaceWebSite} target="_blank" rel="cccngx">
                <button className="livep">Live Preview</button>
              </a>
              <a href={spaceWebCode} target="_blank" rel="nnnyys">
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
        <img className="illupro3" src={illupro3} alt="" />
      </section>

      {/* =========================PROJECT 4=========================== */}

      <section className="project4">
        <div
          className="portfolio4 reveal-from-left"
          data-sr="enter left 100px over 1s"
        >
          <div className="sidel2">
            <h3 className="text-end">MPAY FINTECH WEB-APP</h3>
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
              <a href={mpayFinSite} target="_blank" rel="cccngx">
                <button className="livep">Live Preview</button>
              </a>
              <a href={mpayFinCode} target="_blank" rel="nnnyys">
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
            <img src={project4} alt="project1" />
          </div>
        </div>
        <img className="illupro4" src={illupro4} alt="" />
      </section>

      {/* =========================PROJECT 5============================= */}

      <section className="project5">
        <div
          className="portfolio5 reveal-from-right"
          data-sr="enter right 100px over 1s"
        >
          <div className="sideleft">
            <img src={project5} alt="project1" />
          </div>
          <div className="sideright">
            <h3>Project name</h3>
            <p className="prodes">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
              laborum commodi veniam nemo, tempore minima enim temporibus non
              adipisci labore qui delectus magnam omnis nulla optio ab soluta
              aut. Quisquam.
            </p>
            <div className="techno">
              <p className="httt">HTML</p>
              <p className="csss">CSS</p>
              <p className="jsss">JS</p>
              <p className="appp">API</p>
            </div>
            <div className="butview">
              <button className="livep">Live Preview</button>
              <button className="vcode">
                View Code{" "}
                <span>
                  <IoLogoGithub />
                </span>
              </button>
            </div>
          </div>
        </div>
        <img className="illupro5" src={illupro5} alt="" />
      </section>

      {/* =========================PROJECT 6=========================== */}

      {/* <section className="project6">
        <div
          className="portfolio6 reveal-from-left"
          data-sr="enter left 100px over 1s"
        >
          <div className="sidel2">
            <h3>Project name</h3>
            <p className="prodes">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
              laborum commodi veniam nemo, tempore minima enim temporibus non
              adipisci labore qui delectus magnam omnis nulla optio ab soluta
              aut. Quisquam.
            </p>
            <div className="techno">
              <p className="httt">HTML</p>
              <p className="csss">CSS</p>
              <p className="jsss">JS</p>
              <p className="appp">API</p>
            </div>
            <div className="butview">
              <button className="livep">Live Preview</button>
              <button className="vcode">
                View Code{" "}
                <span>
                  <IoLogoGithub />
                </span>
              </button>
            </div>
          </div>
          <div className="sider2">
            <img src={project6} alt="project1" />
          </div>
        </div>
        <img className="illupro6" src={illupro6} alt="" />
      </section> */}

      {/* =========================PROJECT 7============================= */}

      {/* <section className="project7">
        <div
          className="portfolio7 reveal-from-right"
          data-sr="enter right 100px over 1s"
        >
          <div className="sideleft">
            <img src={project7} alt="project1" />
          </div>
          <div className="sideright">
            <h3>Project name</h3>
            <p className="prodes">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
              laborum commodi veniam nemo, tempore minima enim temporibus non
              adipisci labore qui delectus magnam omnis nulla optio ab soluta
              aut. Quisquam.
            </p>
            <div className="techno">
              <p className="httt">HTML</p>
              <p className="csss">CSS</p>
              <p className="jsss">JS</p>
              <p className="appp">API</p>
            </div>
            <div className="butview">
              <button className="livep">Live Preview</button>
              <button className="vcode">
                View Code{" "}
                <span>
                  <IoLogoGithub />
                </span>
              </button>
            </div>
          </div>
        </div>
        <img className="illupro7" src={illupro7} alt="" />
      </section> */}

      {/* =========================PROJECT 8=========================== */}

      {/* <section className="project8">
        <div
          className="portfolio8 reveal-from-left"
          data-sr="enter left 100px over 1s"
        >
          <div className="sidel2">
            <h3>Project name</h3>
            <p className="prodes">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
              laborum commodi veniam nemo, tempore minima enim temporibus non
              adipisci labore qui delectus magnam omnis nulla optio ab soluta
              aut. Quisquam.
            </p>
            <div className="techno">
              <p className="httt">HTML</p>
              <p className="csss">CSS</p>
              <p className="jsss">JS</p>
              <p className="appp">API</p>
            </div>
            <div className="butview">
              <button className="livep">Live Preview</button>
              <button className="vcode">
                View Code{" "}
                <span>
                  <IoLogoGithub />
                </span>
              </button>
            </div>
          </div>
          <div className="sider2">
            <img src={project8} alt="project1" />
          </div>
        </div>
        <img className="illupro8" src={illupro8} alt="" />
      </section> */}

      {/* =========================PROJECT 9============================= */}

      {/* <section className="project9">
        <div
          className="portfolio9 reveal-from-right"
          data-sr="enter right 100px over 1s"
        >
          <div className="sideleft">
            <img src={project9} alt="project1" />
          </div>
          <div className="sideright">
            <h3>Project name</h3>
            <p className="prodes">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
              laborum commodi veniam nemo, tempore minima enim temporibus non
              adipisci labore qui delectus magnam omnis nulla optio ab soluta
              aut. Quisquam.
            </p>
            <div className="techno">
              <p className="httt">HTML</p>
              <p className="csss">CSS</p>
              <p className="jsss">JS</p>
              <p className="appp">API</p>
            </div>
            <div className="butview">
              <button className="livep">Live Preview</button>
              <button className="vcode">
                View Code{" "}
                <span>
                  <IoLogoGithub />
                </span>
              </button>
            </div>
          </div>
        </div>
        <img className="illupro9" src={illupro9} alt="" />
      </section> */}

      {/* =========================PROJECT 10=========================== */}

      {/* <section className="project10">
        <div
          className="portfolio10 reveal-from-left"
          data-sr="enter left 100px over 1s"
        >
          <div className="sidel2">
            <h3>Project name</h3>
            <p className="prodes">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
              laborum commodi veniam nemo, tempore minima enim temporibus non
              adipisci labore qui delectus magnam omnis nulla optio ab soluta
              aut. Quisquam.
            </p>
            <div className="techno">
              <p className="httt">HTML</p>
              <p className="csss">CSS</p>
              <p className="jsss">JS</p>
              <p className="appp">API</p>
            </div>
            <div className="butview">
              <button className="livep">Live Preview</button>
              <button className="vcode">
                View Code{" "}
                <span>
                  <IoLogoGithub />
                </span>
              </button>
            </div>
          </div>
          <div className="sider2">
            <img src={project10} alt="project1" />
          </div>
        </div>
        <img className="illupro10" src={illupro10} alt="" />
      </section> */}

      {/* =========================PROJECT 11============================= */}
      {/* 
      <section className="project11">
        <div
          className="portfolio11 reveal-from-right"
          data-sr="enter right 100px over 1s"
        >
          <div className="sideleft">
            <img src={project11} alt="project1" />
          </div>
          <div className="sideright">
            <h3>Project name</h3>
            <p className="prodes">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
              laborum commodi veniam nemo, tempore minima enim temporibus non
              adipisci labore qui delectus magnam omnis nulla optio ab soluta
              aut. Quisquam.
            </p>
            <div className="techno">
              <p className="httt">HTML</p>
              <p className="csss">CSS</p>
              <p className="jsss">JS</p>
              <p className="appp">API</p>
            </div>
            <div className="butview">
              <button className="livep">Live Preview</button>
              <button className="vcode">
                View Code{" "}
                <span>
                  <IoLogoGithub />
                </span>
              </button>
            </div>
          </div>
        </div>
        <img
          className="illupro11 reveal-from-bottom"
          data-sr="enter bottom 100px over 2s"
          src={illupro11}
          alt=""
        />
      </section> */}

      {/* =========================PROJECT 12=========================== */}

      {/* <section className="project12">
        <div
          className="portfolio12 reveal-from-left"
          data-sr="enter left 100px over 1s"
        >
          <div className="sidel2">
            <h3>Project name</h3>
            <p className="prodes">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
              laborum commodi veniam nemo, tempore minima enim temporibus non
              adipisci labore qui delectus magnam omnis nulla optio ab soluta
              aut. Quisquam.
            </p>
            <div className="techno">
              <p className="httt">HTML</p>
              <p className="csss">CSS</p>
              <p className="jsss">JS</p>
              <p className="appp">API</p>
            </div>
            <div className="butview">
              <button className="livep">Live Preview</button>
              <button className="vcode">
                View Code{" "}
                <span>
                  <IoLogoGithub />
                </span>
              </button>
            </div>
          </div>
          <div className="sider2">
            <img src={project12} alt="project1" />
          </div>
        </div>
      </section> */}

      {/* =========================PROJECT 13============================= */}

      {/* <section className="project13">
        <div
          className="portfolio13 reveal-from-right"
          data-sr="enter right 100px over 1s"
        >
          <div className="sideleft">
            <img src={project13} alt="project1" />
          </div>
          <div className="sideright">
            <h3>Project name</h3>
            <p className="prodes">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
              laborum commodi veniam nemo, tempore minima enim temporibus non
              adipisci labore qui delectus magnam omnis nulla optio ab soluta
              aut. Quisquam.
            </p>
            <div className="techno">
              <p className="httt">HTML</p>
              <p className="csss">CSS</p>
              <p className="jsss">JS</p>
              <p className="appp">API</p>
            </div>
            <div className="butview">
              <button className="livep">Live Preview</button>
              <button className="vcode">
                View Code{" "}
                <span>
                  <IoLogoGithub />
                </span>
              </button>
            </div>
          </div>
        </div>
        <img
          className="illupro11 reveal-from-bottom"
          data-sr="enter bottom 100px over 2s"
          src={illupro11}
          alt=""
        />
      </section> */}
    </div>
  );
};

export default PortfolioPage;
