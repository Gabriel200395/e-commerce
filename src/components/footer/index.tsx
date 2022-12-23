import "./styles.css";
import logo from "../../assets/icons/logo.png";
import facebook from "../../assets/img/facebook.png";
import twitter from "../../assets/img/twitter.png";
import brands from "../../assets/img/Brands.png";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-informations">
        <div className="footer-menu-item">
          <div className="footer-menu-item-header">
            <img src={logo} alt={logo} />
            <h3>E-Comm</h3>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever.Since the 1500s, when an unknown printer.
          </p>
        </div>
        <div className="footer-menu-item">
          <div>
            <div className="footer-menu-item-header">
              <h3>Follow Us</h3>
            </div>

            <p>
              Since the 1500s, when an unknown printer took a galley of type and
              scrambled.
            </p>

            <div className="footer-menu-item-icones">
              <img src={facebook} alt={facebook} />
              <img src={twitter} alt={twitter} />
            </div>
          </div>
        </div>
        <div className="footer-menu-item">
          <div className="footer-menu-item-header">
            <h3>Contacts</h3>
          </div>
          <p className="text-contact">
            E-Comm , 4578 Marmora Road, Glasgow D04 89GR
          </p>
        </div>
      </div>

      <div className="footer-informations-menu-items">
        <div className="footer-menu-item">
          <div className="footer-menu-item-header">
            <h3>Infomation</h3>
          </div>
          <p>
            <ul>
              <li>About Us</li>
              <li>Infomation </li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </p>
        </div>
        <div className="footer-menu-item">
          <div className="footer-menu-item-header">
            <h3>Service</h3>
          </div>
          <p>
            <ul>
              <li>About Us</li>
              <li>Infomation </li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </p>
        </div>
        <div className="footer-menu-item">
          <div className="footer-menu-item-header">
            <h3>My Account</h3>
          </div>
          <p>
            <ul>
              <li>About Us</li>
              <li>Infomation </li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </p>
        </div>
        <div className="footer-menu-item">
          <div className="footer-menu-item-header">
            <h3>Our Offers</h3>
          </div>
          <p>
            <ul>
              <li>About Us</li>
              <li>Infomation </li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </p>
        </div>
      </div>

      <div className="sub-rodade">
        <p>© 2022 Ecommerce theme by www.bisenbaev.com</p>
        <img src={brands} alt={brands} />
      </div>
    </div>
  );
}
