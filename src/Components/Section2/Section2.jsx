import React, { useEffect, useRef } from "react";
import "./section2.css";
import imageList from "../../files/imageArray";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Section2 = () => {
  let picRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(picRef.current, {
      x: 70,
      ease: "elastic.out(1,0.2)",
      duration: 2.5,
      scrollTrigger: {
        trigger: picRef.current,
        scroller: "body",
        start: "30% 65%",
      },
    });
  }, []);

  return (
    <div className="section2Container">
      <marquee direction="left" loop="-1">
        • <span>Join us on Discord</span> for project updates • We look forward
        to welcoming you • <span>Join us on Discord</span> for project updates •
        We look forward to welcoming you • <span>Join us on Discord</span> for
        project updates • We look forward to welcoming you •
        <span>Join us on Discord</span> for project updates • We look forward to
        welcoming you •
      </marquee>
      <div className="pic" ref={picRef}>
        {imageList.map((img, i) => {
          return <img src={img.url} alt="" key={i} />;
        })}
      </div>
    </div>
  );
};

export default Section2;
