import "./Footer.css";
import { Link } from "react-router-dom";
import Logo from "../Assets/Sample_logo.png"
function Footer() {
  return (
    <footer>
      <div className="upperFooter">
        <div className="upperFooterLeft">
          <a href="https://www.bing.com/ck/a?!&&p=1ea2fe84f7879ed5JmltdHM9MTY5NDgyMjQwMCZpZ3VpZD0zZjAzY2M4Ny05NjViLTY0ZmUtMjM3NS1kZTY5OTc1ZDY1N2MmaW5zaWQ9NTE5OA&ptn=3&hsh=3&fclid=3f03cc87-965b-64fe-2375-de69975d657c&psq=sih&u=a1aHR0cHM6Ly93d3cuc2loLmdvdi5pbi8&ntb=1">SIH 2023</a>
          
          <a href="https://www.bing.com/ck/a?!&&p=fb6487b4493bb411JmltdHM9MTY5NDgyMjQwMCZpZ3VpZD0zZjAzY2M4Ny05NjViLTY0ZmUtMjM3NS1kZTY5OTc1ZDY1N2MmaW5zaWQ9NTIwMw&ptn=3&hsh=3&fclid=3f03cc87-965b-64fe-2375-de69975d657c&psq=ministry+of+law+and+justice&u=a1aHR0cHM6Ly9sYXdtaW4uZ292LmluLw&ntb=1" >Ministry of Law and Justice</a>
        </div>
        <div className="upperFooterRight">
          <Link>Terms and condition</Link>
         
        </div>
      </div>
      <div className="lowerFooter">
<div className="lowerLeftFooter">

  <img src={Logo} alt="" />
  <h2>NyaySeva</h2>
  <p>Connecting with the best legal service provider in INDIA</p>
</div>
<div className="lowerMidFooter">
  <h1>Type Of Services</h1>
  <div className="uls">
  <ul>
    <li>Lawyer/Advocate</li>
    <li>Arbitrators</li>
    <li>Mediators</li>
  </ul>
  <ul>
  <li>Notaries</li>

    <li>Writers</li>
  </ul>
  </div>
</div>
<div className="lowerRightFooter">
  <h1>Report any bug</h1>
  <form action="">
    <div className="input">

    
  <input
                id="bug"
                name="bug"
                type="bug"
                autoComplete="bug"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-black shadow-md ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Bug Type"
              />
             <textarea name="" id="" cols="35" placeholder="Describe the bug" className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-black shadow-md ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"></textarea>
             </div>
              <button
                type="submit"
                className="flex-none rounded-md bg-[#d2691e] hover:bg-orange-700 px-5 py-1.5 text-sm  text-white from-neutral-400 shadow-md  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Report
              </button>
              </form>
</div>
      </div>
      <div className="lastFooter">
        <p>&copy; All Right Are Reserved 2023 Created For Problem Statement   <b> SIH1286 </b> </p>
      </div>
    </footer>
  );
}

export default Footer;
