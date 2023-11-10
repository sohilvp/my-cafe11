import { useEffect, useRef, useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Section1 from "./Components/Section1/Section1";
import Section2 from "./Components/Section2/Section2";
import Section3 from "./Components/Section3/Section3";
import Loader from "./Components/Loader/Loader";
import gsap from "gsap";

function App() {
  const [load, setLoad] = useState(false);
  let loaderRef = useRef(null);

  useEffect(() => {
    gsap.to(loaderRef.current, {
      height: "0vh",
      duration: 3,
      delay: 2,
      onComplete: () => {
        setLoad(true);
        console.log("page Load");
      },
    });
  }, []);

  return (
    <>
      <div className={`appContainer ${load ? "true" : "false"}`}>
        <Loader loaderRef={loaderRef} />
        <Navbar />
        <Header />
        <Section1 />
        <Section2 />
        <Section3 />
      </div>
    </>
  );
}

export default App;
