import Button from "../Button/Button";
import "./hero-banner.css";
import BannerImg from "../../assets/sliderimg11.png";

const HeroBanner = () => {
  return (
    <div className="banner">
      <div className="container d-flex">
        <div className="banner-content">
          <h1 className="banner-title typo-h1">
            Feel the Best Taste With Lays Crisps
          </h1>
          <p className="banner-desc typo-p1">
            Feel the best and awesome taste with Lays Crisps. There has been
            various kind of Crisps you can eat and feel the wonder taste of this
            awesome product.
          </p>
          <Button>All Crisps</Button>
        </div>
        <div className="banner-img">
          <img src={BannerImg} alt="banner-img" />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
