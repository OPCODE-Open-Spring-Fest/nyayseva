import React from "react";
import "../components/preloader.css";
// import Dashboard from "./Dashboard";
import Footer from "../components/Footer";
// import { Link } from "react-router-dom";
import law from "../lotties/law.json";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Body from "../components/Body/Body";
const Home = () => {
  const [loading, setLoading] = useState(false);
  // const [count,setcount]=useState(0);
  useEffect(() => {
    setLoading(true);
    // setcount(count => count+1);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div>
      {loading ? (
        <span className="span">
          <Lottie className="loader" animationData={law} />
        </span>
      ) : (
        <div>
          <Header />
          <Body />
          {/* <Dashboard /> */}
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Home;
