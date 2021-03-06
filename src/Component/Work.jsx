import React from "react";
import "./Work.css";
const Work = () => {
  return (
    <div className="work" id="work">
      <div className="work bd-grid">
        <div className="work__img">
          {/* <img src="hot.png" alt=""/> */}
          <a href="https://hotwire.netlify.app/" target="blank">
            <img src="https://i.ibb.co/L57bhcv/hot.png" alt="hot" border="0" />
          </a>
          <div className="description">
            <h2>HOTWIRE</h2>
            {/* <p>
Hotwire is a travel website that offers airline 
tickets, hotel rooms, rental cars, and vacation 
packages.</p> */}
            <h5>Collaborative project:</h5>
            <p>
              accomplished along with 4 team members in 5 days. We focused on
              the front-end side website for the database we have used a mock
              server and worked on the end-to-end functionality of one service.
              My task was creating Landing page and booking functionality ,
              there are 4 functionality in our website,
              booking,searching,filtering data and payment functionality
            </p>
            <button>
              <a href="https://hotwire.netlify.app/" target="blank">
                LIVE DEMO{" "}
              </a>
            </button>{" "}
            <button>
              <a
                href="https://github.com/pallav1998/hotwire_clone"
                target="blank"
              >
                CODE
              </a>
            </button>
          </div>
        </div>
        <div className="work__img">
          {/* <img src="https://i.ibb.co/ysXqLPX/hirist.png" alt="hirist"/> */}
          <a href="/" target="blank">
            <img
              src="https://i.ibb.co/VBtTX9t/hirist.png"
              alt="hirist"
              border="0"
            />
          </a>
          <div className="description">
            <h2>HIRIST</h2>
            {/* <p>Hirist.com is a Job seeking and Job recruting 
website where you can post a job and find a 
job.</p> */}
            <h5>Collaborative project:</h5>{" "}
            <p>
              accomplished along with 4 team members in 4 days. We focused on
              the front-end side website for the database we have used a mock
              server and worked on the end-to-end functionality of one service.
              My task was creating recruter signup and login page with
              functionality , there are 4 functionality in our website,find a
              job post a job and serch a job.
            </p>
            <button>
              <a href="https://hiristclone.netlify.app/" target="blank">
                LIVE DEMO{" "}
              </a>
            </button>{" "}
            <button>
              <a
                href="https://github.com/amit-web/Project-hirist-clone"
                target="blank"
              >
                CODE
              </a>
            </button>
          </div>
        </div>
        <div className="work__img">
          {/* <img src="hot.png" alt=""/> */}
          <a href="https://tripoto.netlify.app/" target="blank">
            <img
              src="https://i.ibb.co/kB5rzK1/Capture.png"
              alt="loading
            "
              border="0"
            />
          </a>
          <div className="description">
            <h2>TRIPOTO</h2>
            {/* <p>
Hotwire is a travel website that offers airline 
tickets, hotel rooms, rental cars, and vacation 
packages.</p> */}
            <h5>Collaborative project:</h5>
            <p>
              Tripoto is a travel community and travel search engine portal
              based on user-generated content. The platform was launched in
              October 2013 by founders Anirudh Gupta and Michael Pargal Lyngdoh.
              Tripoto allows users to write travel stories and discover those
              written by other travelers.
            </p>
            <button>
              <a href="https://tripoto.netlify.app/" target="blank">
                LIVE DEMO{" "}
              </a>
            </button>{" "}
            <button>
              <a
                href="https://github.com/Milind74/heptane_tripoto"
                target="blank"
              >
                CODE
              </a>
            </button>
          </div>
        </div>
        <div className="work__img">
          {/* <img src="hot.png" alt=""/> */}
          <a href="https://noormuhamm.github.io/musicPlayer/" target="blank">
            <img src="https://i.ibb.co/Cz5jgWn/kalle.png" alt="hot" border="0" />
          </a>
         
          <div className="description">
            <h2>Music App</h2>
            {/* <p>
Hotwire is a travel website that offers airline 
tickets, hotel rooms, rental cars, and vacation 
packages.</p> */}
            <h5>Music App Project</h5>
            <p>This is the music app which I created to check my skill.In this app I have addded 3 songs ,you can listen that.The main purpose of this app to create music app using javascript</p>
            <button>
              <a
                href="https://noormuhamm.github.io/musicPlayer/"
                target="blank"
              >
                LIVE DEMO{" "}
              </a>
            </button>{" "}
            <button>
              <a
                href="https://github.com/NOORMUHAMM/musicPlayer"
                target="blank"
              >
                CODE
              </a>
            </button>
          </div>
        </div>
        {/* <div className="work__img">
                   <a href="/" target="blank"><img src="https://i.ibb.co/McKvhpP/my-Port-Folio.png" alt="my-Port-Folio" border="0"/></a>
                        <div className="description"><h1>Portfolio</h1>
                        <p>In my portfolio, you can see my achievement my skill my resume and you can contact me as well.</p>
                            <button><a href="https://hungry-ardinghelli-7700f4.netlify.app/" target="blank">LIVE DEMO </a></button> <button><a href="https://github.com/NOORMUHAMM/myportfolio" target="blank">CODE</a></button>
                        </div>
                    </div> */}
      </div>
    </div>
  );
};

export default Work;
