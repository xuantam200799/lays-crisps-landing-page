import "./video-section.css";
import Img1 from "../../assets/videoimg1.png";
import Img2 from "../../assets/videoimg2.png";

const VideoSection = () => {
  return (
    <div className="videos">
      <div className="container">
        <div className="videos-slider">
          <div className="videos-items-group">
            <div className="videos-item">
              <div className="videos-item-img item1">
                <img src={Img1} alt="" />
              </div>
              <div className="videos-content">
                <h2 className="typo-h3-semi">
                  LAY’S® Wavy Ondulees Salt & Vinegar
                </h2>
                <a href="" className="videos-link typo-p3">
                  <span className="play-btn">
                    <i className="fa-solid fa-play"></i>
                  </span>{" "}
                  Play Video
                </a>
              </div>
            </div>
            <div className="videos-item">
              <h2 className="videos-item-title typo-h2">Oue Popular Crisps</h2>
              <div className="videos-item-img item2">
                <img src={Img2} alt="" />
              </div>
              <div className="videos-content">
                <h2 className="typo-h3-semi">LAY’S® Beers and Cigar</h2>
                <a href="#" className="videos-link typo-p3">
                  <span className="play-btn">
                    <i className="fa-solid fa-play"></i>
                  </span>{" "}
                  Play Video
                </a>
              </div>
            </div>
          </div>
          <div className="videos-slider-dots">
            <span className="videos-slider-dot"></span>
            <span className="videos-slider-dot"></span>
            <span className="videos-slider-dot"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
