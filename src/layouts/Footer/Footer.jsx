import React from "react";
import "./Footer.css";
import img1 from "../../../public/1.png"
import img2 from "../../../public/2.png"
import img3 from "../../../public/3.png"
import img4 from "../../../public/4.png"
import img5 from "../../../public/5.png"
import logo from "../../../public/brandlogo.jpg"
export const Footer = () => {
  return (
    <>
      <div className="footerwrapper">
        <div>
          <footer class="footer">
            <div class="footer-container">
            <div className="navlogo2">
            <img src={logo} alt="brand_logo"/>
          </div>

              <div class="footer-column">
                <h4>Why Be Athah</h4>
                <a href="#">About Us</a>
              </div>

              <div class="footer-column">
                <h4>Resources</h4>
                <a href="#">Blog</a>
              </div>

              <div class="footer-column">
                <h4>Company</h4>
                <a href="#">Your Privacy</a>
                <a href="#">Terms & Conditions</a>
                <a href="#">Get in touch with us</a>
              </div>

              <div class="footer-column">
                <h4>Follow Us: Be_Altha</h4>
                <div class="social-icons">
                  <a href="#">
                    <img src={img1} alt="Facebook" />
                  </a>
                  <a href="#">
                    <img src={img2} alt="Twitter" />
                  </a>
                  <a href="#">
                    <img src={img3} alt="LinkedIn" />
                  </a>
                  <a href="#">
                    <img src={img4} alt="YouTube" />
                  </a>
                  <a href="#">
                    <img src={img5} alt="Instagram" />
                  </a>
                </div>
              </div>
            </div>
          </footer>
          <div className="fineBorder2"></div>
          <footer class="footer">
            <p>Made with ❤️ in India</p>
            <p>© Yauvanchakra Pvt. Ltd. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </>
  );
};
