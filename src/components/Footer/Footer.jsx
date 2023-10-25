import "./footer.css";
import FooterImg from "../../assets/footerimg.png";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-left">
            <div className="nav-logo">
              <a href="#" className="link">
                <img src={Logo} alt="nav-logo" />
              </a>
            </div>
            <ul className="footer-navigation typo-p3">
              <li className="footer-navigation-item">Products</li>
              <li className="footer-navigation-item">About Us</li>
              <li className="footer-navigation-item">Videos</li>
              <li className="footer-navigation-item">Recipes</li>
              <li className="footer-navigation-item">Where to Buy</li>
            </ul>
            <div className="footer-social">
              <div className="footer-social-title typo-h4">Follow us</div>
              <div className="footer-social-wrapper">
                <button className="footer-social-btn">
                  <i className="fa-brands fa-facebook-f"></i>
                </button>
                <button className="footer-social-btn">
                  <i className="fa-brands fa-linkedin-in"></i>
                </button>
                <button className="footer-social-btn">
                  <i className="fa-brands fa-twitter"></i>
                </button>
              </div>
            </div>
            <div className="footer-desc typo-p3">
              Copyright © 2022 UIHUT all rights reserved.
            </div>
          </div>
          <div className="footer-right">
            <div className="footer-img">
              <img src={FooterImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
