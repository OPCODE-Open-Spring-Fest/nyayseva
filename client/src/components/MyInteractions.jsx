import Chat from "./Chat";
// import logo from "../Assets/ellipse-3.png";
import PresonalLB from "./PresonalLB";
import "./my_interactions.css";
import PresonalChat from "./PresonalChat";
import chatImg from "../Assets/chatImg.png";
import { useState } from "react";
function Interactions() {
  const [chatI, setChatI] = useState(true);
  const handelchange = () => {
    setChatI(false);
  };
  const change =()=>{
    setChatI(true)
  }
  return (
    <div className="interactions p-2 relative h-[100%] ">
      <div className=" flex p-10 gap-20 rounded-md w-full">
        <div className="details ">
          <div className="op py-1 px-3">
            <img
              className="w-14 h-14 mx-3"
              src="https://th.bing.com/th/id/OIP.BVqRl5JkZkoe4SuUU2ENggAAAA?pid=ImgDet&rs=1"
              alt="logo"
            />
            <div>
              <p className="mt-4">
                <b>Sonu</b>
              </p>
            </div>
            <div className="h-[200] bg-"></div>
          </div>
        </div>

        <div className=" payment ">
       
          <br />
          <div className="file px-6 ">
            
            <br />
            <span className="px-1">Shared</span>
            <span className="px-1">a</span>
            <span className="px1">file</span>
            {/* <label>
              <input type="file"></input>
            </label> */}
            <a href="#" className="text-blue-500 block">View</a>
          </div>
          <div className="file px-6">
            
            <br />
            <span className="px-1">Shared</span>
            <span className="px-1">a</span>
            <span className="px1">file</span>
            {/* <label>
              <input type="file"></input>
            </label> */}
            <a href="#" className="text-blue-500 block">View</a>
          </div>          <div className="file px-6 pb-6">
            
            <br />
            <span className="px-1">Shared</span>
            <span className="px-1">a</span>
            <span className="px1">Case</span>
            {/* <label>
              <input type="file"></input>
            </label> */}
            <a href="#" className="text-blue-500 block">View</a>
          </div>
          <br />
          {/* <button className="chat px-2 py-2">Submit</button> */}
          <br />

          <div className="buttons">
            <button className="bg-[#00bbab] px-4 py-2 text-white rounded-md w-30">
              Request Payments
            </button>
            <button className="bg-[#00bbab] px-4 py-2 text-white rounded-md w-30">
              Share Attachments
            </button>
            <button className="bg-[#00bbab] px-4 py-2 text-white rounded-md w-30">
              View Documents
            </button>
          </div>
          <br />
          {/* <button className='chat px-2 py-2'> Chat Now !</button> */}
        </div>
      </div>
      <div className="presonalChat">
        {chatI ? (
          <img
            onClick={handelchange}
            src={chatImg}
            alt=""
            className="transform"
          />
        ) : (
          <div>
           
            <span onClick={change}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
            <PresonalChat />
          </div>
        )}
      </div>
      <div className="chat absolute top-[0px] right-0">
        <div className="chatImg">
          <Chat />
        </div>
      </div>
      <div className="presonalLB absolute bottom-[-20px] right-0">
        <PresonalLB />
      </div>
    </div>
  );
}

export default Interactions;
