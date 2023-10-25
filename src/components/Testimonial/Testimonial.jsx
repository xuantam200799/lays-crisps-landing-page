import "./testimonial.css";
import Img from "../../assets/testimonial.png";

const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="container">
        <div className="testimonial-slider">
          <div className="testimonial-content">
            <div className="testimonial-content-left">
              <h2 className="testimonial-title typo-h2">
                What’s Our Customer Say
              </h2>
              <p className="testimonial-desc typo-testimonials">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="testimonial-seperate"></div>
              <div className="testimonial-left-below">
                <div className="testimonial-wrapper">
                  <h3 className="testimonial-name typo-h3-semi">
                    Annara Veirmont
                  </h3>
                  <p className="testimonial-age typo-p3">23 years of Age</p>
                </div>
                <div className="testimonial-arrow-wapper">
                  <button className="testimonial-arrow-left">
                    <i className="fa-solid fa-arrow-left"></i>
                  </button>
                  <button className="testimonial-arrow-right">
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="testimonial-content-right">
              <div className="testimonial-img">
                <img src={Img} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
