import "./featured.css";
import Img1 from "../../assets/featuredimg1.png";
import Img2 from "../../assets/image20.png";
import Button from "../Button/Button";

const Featured = () => {
  return (
    <div className="featured ">
      <div className="container d-flex">
        <div className="featured-left">
          <h2 className="featured-title typo-h2">
            We Provide the Tasty and best Chips for you!
          </h2>
          <div className="featured-img">
            <img src={Img1} alt="" />
          </div>
        </div>
        <div className="featured-right">
          <div className="featured-content">
            <h3 className="featured-content-title typo-h3">
              LAY'S&reg; BLT Flavored
            </h3>
            <div className="featured-content-rating">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <p className="featured-content-price-title typo-p3">Price</p>
            <span className="featured-content-price typo-h3-bold">$3.93</span>
            <p className="featured-content-desc typo-p3">
              It all starts with farm-grown potatoes, cooked and seasoned to
              perfection. Then we add te sweet taste of honey and the splcy kick
              of BBQ sauce. So every LAY'S potato cip is perfectly crispy and
              delicious. Happiness in Every Bite.
            </p>
            <Button>Buy Now</Button>
            <Button>See More</Button>
          </div>
          <img src={Img2} alt="" className="featured-right-img" />
        </div>
      </div>
    </div>
  );
};

export default Featured;
