import "./cta-section.css";
import BGImg from "../../assets/ctabackground.png";
import Button from "../Button/Button";

const CTASection = () => {
  return (
    <div className="cta" style={{ backgroundImage: `url(${BGImg})` }}>
      <div className="cta-content">
        <h2 className="cta-title typo-h2">Find a Crisps Store Near You</h2>
        <p className="cta-desc typo-p2">
          Feel the best and awesome taste with Lays Crisps. There has been
          various kind of Crisps you can eat and feel.
        </p>
        <Button>Find Store</Button>
      </div>
    </div>
  );
};

export default CTASection;
