import React from "react";
import "./Chakaras.css";
import chakra1 from "../../../public/Chakra1.png"
import chakra2 from "../../../public/Chakra2.png"
import chakra3 from "../../../public/Chakra3.png"
import chakra4 from "../../../public/Chakra4.png"
import chakra5 from "../../../public/Chakra5.png"
import chakra6 from "../../../public/Chakra6.png"
import chakra7 from "../../../public/Chakra7.png"
import chakra8 from "../../../public/Chakra8.png"
export const Chakaras = () => {
  return (
    <>
      <div className="chakarsContainer">
        <div className="heading">
          <h2>The 7 Chakras</h2>
        </div>
        <div className="sub">
          <p>
            As you take a deep breath, feel the pure universal energy entering
            your body. It flows gently through your aligned chakras, from the
            crown at
          </p>
          <p>
            the top of your head to the root at the base of your spine. This
            serene flow creates a healthy aura around your mind, spirit, and
            body.
          </p>
        </div>
        <div className="separateSub">
          <p>
            But the stress we encounter daily impacts all seven chakras. Click
            on each to explore and realign.
          </p>
        </div>

        <div className="chakarsGrid">
          <div className="Root">
            <div className="RootContainer">
              <h4>Root Chakra</h4>
              <p>Unconscious tension and stress affect the Root</p>
              <p>Chakra, leading to allergies, fatigue, and stiff joints.</p>
              <p>Mentally, a blocked Root Chakra can cause</p>
              <p>depression, addiction, loneliness, and anxiety.</p>
            </div>
          </div>
          <div className="sevenChakaras">
         <div className="sevenChakaras">
            <div className="circle-container">
              <div className="chakra">
                <img src="https://medhini-assignment.vercel.app/static/media/Be_Athah_x_Website_Design_page-0001_03-removebg-preview.0ea76b45d1e5ee9429ae.png" alt="Chakra 1" />
              </div>
              <div className="chakra">
                <img src="https://medhini-assignment.vercel.app/static/media/Be_Athah_x_Website_Design_page-0001_04-removebg-preview.4ab6ff3bc00997f26886.png" alt="Chakra 2" />
              </div>
              <div className="chakra">
                <img src="https://medhini-assignment.vercel.app/static/media/Be_Athah_x_Website_Design_page-0001_05-removebg-preview.2c2365227e70451af36c.png" alt="Chakra 3" />
              </div>
              <div className="chakra">
                <img src="https://medhini-assignment.vercel.app/static/media/Be_Athah_x_Website_Design_page-0001_06-removebg-preview.abec6d302c119acfed22.png" alt="Chakra 4" />
              </div>
              <div className="chakra">
                <img src="https://medhini-assignment.vercel.app/static/media/Be_Athah_x_Website_Design_page-0001_07-removebg-preview.af42b546511445f2e3cc.png" alt="Chakra 5" />
              </div>
              <div className="chakra">
                <img src="https://medhini-assignment.vercel.app/static/media/Be_Athah_x_Website_Design_page-0001_02-removebg-preview.b159ed606b8cbba73f5f.png" alt="Chakra 6" />
              </div>
              <div className="chakra">
                <img src="https://medhini-assignment.vercel.app/static/media/Be_Athah_x_Website_Design_page-0001_08-removebg-preview.2d58c990628d74b16c1e.png" alt="Chakra 7" />
              </div>
              <div className="inner-chakra">
                <img src="https://medhini-assignment.vercel.app/static/media/Be_Athah_x_Website_Design_page-0001_01-removebg-preview.e14aa1741014e58ad37b.png" alt="Chakra 8" />
              </div>
            </div>
            </div>
          </div>
          <div className="CrownChakra">
            <div className="Root">
              <div className="RootContainer">
                <h4>Crown Chakra</h4>
                <p>Stress can block the Crown Chakra,</p>
                <p>manifesting as taking things personally, expressing</p>
                <p>negativity, experiencing headaches, adopting a</p>
                <p>victim mentality, feeling fearful, and overthinking.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
