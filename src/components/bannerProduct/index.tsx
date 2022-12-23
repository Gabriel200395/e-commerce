import tenis from "../../assets/img/tenis.png"
import "./styles.css";

export default function BannerProduct() {
  return (
    <div className="banner-product-container">
      <div className="banner-product-container-text">
        <h2>Adidas Men Running Sneakers</h2>
        <p>Performance and design. Taken right to the edge.</p>
        <span>SHOP NOW</span>
      </div> 
      <div className="banner-product-container-img">
        <img src={tenis} alt={tenis}/>
      </div>
    </div>
  );
}
