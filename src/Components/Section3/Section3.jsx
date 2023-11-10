import React, { useEffect, useRef } from "react";
import "./section3.css";
import bottle from "../../assets/cafe-eleven-art-7.png";
import image from "../../assets/Cafe-11_postcards_desktop.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

const Section3 = () => {
  let sec3pRef = useRef(null);
  let sec3h1Ref = useRef(null);
  let imgBRef = useRef(null);
  let rightRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, CSSRulePlugin);
    let rule = CSSRulePlugin.getRule("::after");
    gsap.from(rule, {
      duration: 3,
      ease: "Power3.easeIn",
      width: "100%",
      scrollTrigger: {
        trigger: sec3pRef.current,
        scroller: "body",
        start: "top 70%",
      },
    });
    gsap.from(sec3h1Ref.current, {
      y: 70,
      opacity: 0.6,
      duration: 1,
      scrollTrigger: {
        trigger: sec3h1Ref.current,
        scroller: "body",
        end: "top 50%",
        scrub: 2,
      },
    });
    gsap.from(rightRef.current, {
      y: 70,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: rightRef.current,
        scroller: "body",
        end: "bottom 80%",
        scrub: 2,
      },
    });
    gsap.to(imgBRef.current, {
      rotateZ: "15deg",
      repeat: -1,
      duration: 3,
      yoyo: true,
    });
  }, []);

  return (
    <div className="section3Container">
      <p className="secP" ref={sec3pRef}>
        The cafe has always been a site for reverie and distinctive social
        expression, a place where a confluence of ideas could flourish in
        unexpected ways. Since the nineteenth century, the cafe has served as an
        elegant backdrop for modern life—an open invitation to an industrious
        and cosmopolitan society.
      </p>

      <h1 ref={sec3h1Ref}>
        Café 11 is a bold new take on the free-thinking café society of 1920s
        Paris, curating intimate cultural experiences at a series of unusual
        locations, designed to surprise and delight our members.
      </h1>
      <div className="subSection">
        <div className="leftSubsection">
          <img src={bottle} alt="" ref={imgBRef} />
        </div>
        <div className="rightSubsection" ref={rightRef}>
          <p>
            Hennessy is proud to partner with Friends with Benefits to launch
            our exclusive web3 membership offering, Café 11. We welcome Café
            11's founding members to join Hennessy as we bring 250 years of
            cultural innovation to the world of web3.
          </p>
          <p>
            We will begin our series of audacious ventures at the center of one
            of the world's most relevant and renowned cultural moments, Art
            Basel Miami, where we'll inaugurate Café 11 by hosting our very
            first event this December
          </p>
          <h4>Learn more</h4>
        </div>
      </div>
      <div className="sectionImage">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default Section3;
