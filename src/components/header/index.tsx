import "./styles.css";
import profile from "../../assets/icons/profile_close.png";
import cart from "../../assets/icons/cart.png";
import logo from "../../assets/icons/logo.png";

export default function Header() {
  return (
    <div className="header-container">
      <div className="header-container-cart">
        <ul>
          <li>
            <img src={profile} alt={profile} />
            My profile
          </li>
          <li>
            <span>1</span>
            <img src={cart} alt={cart} className="img-cart" />
          </li>
        </ul>
      </div>
      <nav className="header-nav">
        <div className="logo">
          <img src={logo} alt={logo} />
          <p>E-Comm</p>
        </div>
        <ul>
          <li>HOME</li>
          <li>BAGS</li>
          <li>SNEAKERS</li>
          <li>BELT</li>
          <li>CONTACT</li>
        </ul>
      </nav>
    </div>
  );
}
