import Header from "./components/Header/Header";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import Featured from "./components/Featured/Featured";
import Product from "./components/Product/Product";
import VideoSection from "./components/VideoSection/VideoSection";
import Testimonial from "./components/Testimonial/Testimonial";
import CTASection from "./components/CTASection/CTASection";
import Footer from "./components/Footer/Footer";
// import EXimg from "./assets/ex1.png";

function App() {
  return (
    <>
      <Header />
      <HeroBanner />
      <Featured />
      <Product />
      <VideoSection />
      <Testimonial />
      <CTASection />
      <Footer />
      <div className="container p-15-lr">
        {/* <img src={EXimg} alt="" /> */}
      </div>
    </>
  );
}

export default App;
