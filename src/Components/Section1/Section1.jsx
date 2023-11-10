import React, { useEffect, useRef } from "react";
import "./section1.css";
import video from "../../assets/Cafe11_NFT_02_Straight_Header_Cropped1.mp4";
import gsap from "gsap";
import { Power2 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Section1 = () => {
  let sec1pRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(sec1pRef.current.children, {
      duration: 1,
      y: 10,
      opacity: 0,
      ease: Power2.easeInOut,
      stagger: {
        amount: 0.6,
      },
      scrollTrigger: {
        trigger: sec1pRef.current,
        scroller: "body",
        start: "-10% 75%",
      },
    });
  }, []);

  return (
    <div className="section1Container">
      <div className="leftContaienr" ref={sec1pRef}>
        <p>your key </p>
        <p>to cultural</p> <p>moments</p>
        <h4>view on market</h4>
      </div>
      <div className="rightContaienr">
        <video src={video} muted autoPlay loop></video>
      </div>
    </div>
  );
};

export default Section1;
