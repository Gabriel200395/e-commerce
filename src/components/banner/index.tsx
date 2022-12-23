import "./styles.css";
import bannerOne from "../../assets/img/produto_one.png";
import bannerTwo from "../../assets/img/produto_two.png";
import bannerTheere from "../../assets/img/produto_three.png";

export default function Banner() {
  return (
    <div className="banner-container">
      <div className="banner">
        <h2>Super Flash Sale 50% Off</h2>
      </div>
      <div className="banners">
        <div className="banner-item">
          <img src={bannerOne} alt={bannerOne} />
        </div>
        <div className="banner-item">
          <img src={bannerTwo} alt={bannerOne} />
        </div>
        <div className="banner-item">
          <img src={bannerTheere} alt={bannerOne} />
        </div>
      </div>
    </div>
  );
}
