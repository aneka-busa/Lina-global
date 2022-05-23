import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import image1 from "../components/images/bginterior.jpg";
import image2 from "../components/images/bginterior1.jpg";
import image3 from "../components/images/bginterior2.jpg";
import image4 from "../components/images/bginterior3.jpg";
import { Link } from "gatsby"
const fadeImages = [image1, image2, image3, image4];

export default function App() {
  return (
    <div className="slide-container">
      <Fade>
      <div className="each-fade">
        <Link to="blog/speq"><img src={fadeImages[0]} alt="kasur-speq-s100" width="1200px" style={{borderRadius:  "5px"}} /></Link>
        </div>
        <div className="each-fade">
        <Link to="blog/kasur-euki"><img src={fadeImages[1]} alt="kasur-euki" width="1200px" style={{borderRadius:  "5px"}} /></Link>
        </div>
        <div className="each-fade">
        <Link to="blog/sofa-anekabusa"><img src={fadeImages[2]} alt="sofa-bed-well" width="1200px" style={{borderRadius:  "5px"}} /></Link>
        </div>
        <div className="each-fade">
        <Link to="blog/sofa-anekabusa"><img src={fadeImages[3]} alt="kasur-euki" width="1200px" style={{borderRadius:  "5px"}} /></Link>
        </div>
      </Fade>
    </div>
  );
}
