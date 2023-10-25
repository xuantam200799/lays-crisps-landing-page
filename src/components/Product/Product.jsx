import "./product.css";
import ProductImg from "../../assets/product1.png";

const Product = () => {
  return (
    <div className="product">
      <div className="container">
        <div className="product-title">
          <h2 className="typo-h2">Find Best Taste Here</h2>
          <p className="typo-p2">
            Feel the best and awesome taste with Lays Crisps. There has been
            various kind of Crisps you can eat and feel
          </p>
        </div>
        <div className="products">
          <div className="cart">
            <div className="cart-img">
              <img src={ProductImg} alt="" />
              <button className="cart-img-btn">
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>
            <div className="cart-content">
              <span className="cart-price typo-h3-bold">$3.93</span>
              <p className="cart-name typo-p3">LAY'S® Yogurt & Herb Flavored</p>
            </div>
            <div className="cart-rating">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
          </div>
          <div className="cart">
            <div className="cart-img">
              <img src={ProductImg} alt="" />
              <button className="cart-img-btn">
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>
            <div className="cart-content">
              <span className="cart-price typo-h3-bold">$3.93</span>
              <p className="cart-name typo-p3">LAY'S® Yogurt & Herb Flavored</p>
            </div>
            <div className="cart-rating">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
          </div>
          <div className="cart">
            <div className="cart-img">
              <img src={ProductImg} alt="" />
              <button className="cart-img-btn">
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>
            <div className="cart-content">
              <span className="cart-price typo-h3-bold">$3.93</span>
              <p className="cart-name typo-p3">LAY'S® Yogurt & Herb Flavored</p>
            </div>
            <div className="cart-rating">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
          </div>
        </div>
        <div className="products">
          {" "}
          <div className="cart">
            <div className="cart-img">
              <img src={ProductImg} alt="" />
              <button className="cart-img-btn">
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>
            <div className="cart-content">
              <span className="cart-price typo-h3-bold">$3.93</span>
              <p className="cart-name typo-p3">LAY'S® Yogurt & Herb Flavored</p>
            </div>
            <div className="cart-rating">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
          </div>
          <div className="cart">
            <div className="cart-img">
              <img src={ProductImg} alt="" />
              <button className="cart-img-btn">
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>
            <div className="cart-content">
              <span className="cart-price typo-h3-bold">$3.93</span>
              <p className="cart-name typo-p3">LAY'S® Yogurt & Herb Flavored</p>
            </div>
            <div className="cart-rating">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
          </div>
          <div className="cart">
            <div className="cart-img">
              <img src={ProductImg} alt="" />
              <button className="cart-img-btn">
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>
            <div className="cart-content">
              <span className="cart-price typo-h3-bold">$3.93</span>
              <p className="cart-name typo-p3">LAY'S® Yogurt & Herb Flavored</p>
            </div>
            <div className="cart-rating">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
          </div>
        </div>
        <div className="product-btn"></div>
      </div>
    </div>
  );
};

export default Product;
