import "./styles.css";
import shipping from "../../assets/img/shipping.png";
import support from "../../assets/img/support.png";
import refund from "../../assets/img/refund.png";
import nike from "../../assets/img/nike.png";
import figma from "../../assets/img/figma.png";
import kronos from "../../assets/img/kronos.png";
import sapato from "../../assets/img/sapato.png";
import rate from "../../assets/img/rate.png";

export default function Companies() {
  return (
    <div className="companies-container">
      <div className="companies-informations-site">
        <div className="companies-information">
          <img src={shipping} alt={shipping} />
          <h3>FREE SHIPPING</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="companies-information">
          <img src={refund} alt={refund} />
          <h3>100% REFUND</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="companies-information">
          <img src={support} alt={support} />
          <h3>SUPPORT 24/7</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>

      <h2>LATEST NEWS</h2>

      <div className="companies-informations-news">
        <div className="companies-information">
          <img src={nike} alt={nike} />
          <div>
            <h3>Fashion Industry</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
        <div className="companies-information">
          <img src={figma} alt={figma} />
          <div>
            <h3>Best Design Tools</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
        <div className="companies-information">
          <img src={kronos} alt={kronos} />
          <div>
            <h3>HR Community</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </div>
      <h2>FEATURED PRODUCTS</h2>

      <div className="companies-informations-featured">
        <div className="companies-information">
          <img src={sapato} alt={sapato} />
          <div>
            <h3>Blue Swade Nike Sneakers</h3>
            <img src={rate} alt={rate} className="rate" />
            <p>$499</p>
          </div>
        </div>
        <div className="companies-information">
          <img src={sapato} alt={sapato} />
          <div>
            <h3>Blue Swade Nike Sneakers</h3>
            <img src={rate} alt={rate} className="rate" />
            <p>$499</p>
          </div>
        </div>
        <div className="companies-information">
          <img src={sapato} alt={sapato} />
          <div>
            <h3>Blue Swade Nike Sneakers</h3>
            <img src={rate} alt={rate} className="rate" />
            <p>$499</p>
          </div>
        </div>
      </div>
      <div className="container-field">
        <input type="text" placeholder="Search query..."/>
        <button>Search</button>
      </div>
    </div>
  );
}
