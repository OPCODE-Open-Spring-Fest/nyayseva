import "./Header.css";
import { Link } from "react-router-dom";
import DOLA from "../Assets/image.png";
import SB from "../Assets/logo2.jpg"
import LOGO from "../Assets/Sample_logo.png";
const Header = () => {
  return (
    <header>
      <div className="upper">
        <div className="upperLeft">
        <img src={LOGO}   className="Logo" alt="" />
        <h2>NyaySeva</h2>
        </div>
        
        <div className="upperRight">
       
          <div className="signin_up">
            <Link to="/signin"  className=" rounded-md headerBtn border-2 border-black px-7 py-1.5 hover:bg-[chocolate] hover:border-[chocolate] hover:text-white font-semibold ">Sign In</Link>
            <Link to="/signup"  className="rounded-md headerBtn border-2 border-black px-7 py-1.5 hover:bg-[chocolate] hover:border-[chocolate] hover:text-white font-semibold">Sign Up</Link>
          </div>
        </div>
      </div>
      <div className="lower">
        <div className="lowerLeft">
          <img src={DOLA} alt="" />
          <div className="text">
          <span>
            
           
            <h1>विधि कार्य विभाग</h1>
          </span>
          <span>
            <h1>DEPARTMENT OF</h1>
            <h1>LEGAL AFFAIRS</h1>
          </span>
          </div>
         
        </div>
        <div className="lowerRight">
            <img src={SB} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
