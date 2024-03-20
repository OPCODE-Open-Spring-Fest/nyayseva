import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SignIn from "../components/SignIn";
import { useNavigate } from "react-router-dom";
// import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Dashboard.css";

import LOGO from "../Assets/Sample_logo.png";
import Sidebar from "./Sidebar";

const Dashboard = () => {

  const [notification, setnotification] = useState(true);
  const [hidden, setHiddden] = useState("hidden");

const handelNotification = ()=>{
  if(hidden === "hidden"){
    setHiddden("block");
  }
  else{
setHiddden("hidden")
  }

}


  let Token = null;
  useEffect(() => {
    const protect = async () => {
      const token = localStorage.getItem("token");
      Token = token;
      await axios.get("/protected", {
        headers: { Authorization: `Bearer ${token}` },
      });
    };
  }, []);

  const logout = async () => {
    localStorage.clear();
    navigate("/");
    // toast.success("Logged Out !", {
    //   position: "top-center",
    //   autoClose: 2000,
    //   hideProgressBar: true,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: "light",
    // });
  };

  const navigate = useNavigate();
  const user = localStorage.getItem("fullName");

  // user
  //   ? toast.success("Logged In !", {
  //       position: "top-center",
  //       autoClose: 3500,
  //       hideProgressBar: true,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "light",
  //     })
  //   : toast.error("You must Login First !", {
  //       position: "top-center",
  //       autoClose: 3500,
  //       hideProgressBar: true,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "light",
  //     });

  return user ? (
    <div className="dashboard">
      <div className="upper">
        <div className="upperLeft">
          <img src={LOGO} className="Logo" alt="" />
          <h2>NyaySeva</h2>
        </div>

        <div className="upperRight">
          <div className={`signin_up items-center`}>
            {notification ? 
        
            (
              <div  class="relative inline-block" onClick={handelNotification}>
    <button  class="relative z-10 block p-2 text-gray-700 bg-white border border-transparent rounded-md dark:text-white focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:bg-gray-800 focus:outline-none">
        <svg class="w-5 h-5 text-gray-800 dark:text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C10.8954 22 10 21.1046 10 20H14C14 21.1046 13.1046 22 12 22ZM20 19H4V17L6 16V10.5C6 7.038 7.421 4.793 10 4.18V2H13C12.3479 2.86394 11.9967 3.91762 12 5C12 5.25138 12.0187 5.50241 12.056 5.751H12C10.7799 5.67197 9.60301 6.21765 8.875 7.2C8.25255 8.18456 7.94714 9.33638 8 10.5V17H16V10.5C16 10.289 15.993 10.086 15.979 9.9C16.6405 10.0366 17.3226 10.039 17.985 9.907C17.996 10.118 18 10.319 18 10.507V16L20 17V19ZM17 8C16.3958 8.00073 15.8055 7.81839 15.307 7.477C14.1288 6.67158 13.6811 5.14761 14.2365 3.8329C14.7919 2.5182 16.1966 1.77678 17.5954 2.06004C18.9942 2.34329 19.9998 3.5728 20 5C20 6.65685 18.6569 8 17 8Z" fill="currentColor"></path>
        </svg>
    </button>

    <div 
        class={`absolute  ${hidden} right-0 z-20 w-64 mt-2 overflow-hidden origin-top-right bg-white rounded-md shadow-lg sm:w-80 dark:bg-gray-800`}
    >
        <div class="py-2">
            <a href="#" class="flex items-center px-4 py-3 -mx-2 transition-colors duration-300 transform border-b border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-700">
                <img class="flex-shrink-0 object-cover w-8 h-8 mx-1 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="avatar" />
                <p class="mx-2 text-sm text-gray-600 dark:text-white"><span class="font-bold" href="#">Sara Salah</span> replied on the <span class="text-blue-500 hover:underline" href="#">Upload Image</span> artical . 2m</p>
            </a>
            <a href="#" class="flex items-center px-4 py-3 -mx-2 transition-colors duration-300 transform border-b border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-700">
                <img class="flex-shrink-0 object-cover w-8 h-8 mx-1 rounded-full" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="avatar" />
                <p class="mx-2 text-sm text-gray-600 dark:text-white"><span class="font-bold" href="#">Slick Net</span> start following you . 45m</p>
            </a>
            <a href="#" class="flex items-center px-4 py-3 -mx-2 transition-colors duration-300 transform border-b border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-700">
                <img class="flex-shrink-0 object-cover w-8 h-8 mx-1 rounded-full" src="https://images.unsplash.com/photo-1450297350677-623de575f31c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="avatar" />
                <p class="mx-2 text-sm text-gray-600 dark:text-white"><span class="font-bold" href="#">Jane Doe</span> Like Your reply on <span class="text-blue-500 hover:underline" href="#">Test with TDD</span> artical . 1h</p>
            </a>
            <a href="#" class="flex items-center px-4 py-3 -mx-2 transition-colors duration-300 transform hover:bg-gray-100 dark:hover:bg-gray-700">
                <img class="flex-shrink-0 object-cover w-8 h-8 mx-1 rounded-full" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=398&q=80" alt="avatar" />
                <p class="mx-2 text-sm text-gray-600 dark:text-white"><span class="font-bold" href="#">Abigail Bennett</span> start following you . 3h</p>
            </a>
        </div>
        <a href="#" class="block py-2 font-bold text-center text-white bg-gray-800 dark:bg-gray-700 hover:underline">See all notifications</a>
    </div>
</div>
            )
             : (
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
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                />
              </svg>
            )}

            <h2 className=" font-bold">{localStorage.getItem("fullName")}</h2>
            <Link
              onClick={logout}
              className="flex gap-2 rounded-md headerBtn border-1 border-black px-5 py-1.5 bg-[chocolate] text-white font-semibold"
            >
              Logout
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
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div className="sidebar-legal flex">
      <div className="sidebar">
        <Sidebar fullName={localStorage.getItem("fullName")} service={localStorage.getItem("service")}/>
      </div>
    </div>
 
    </div>
  ) : (
    <div>
      <SignIn />
    </div>
  );
  
};

export default Dashboard;
