import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axiosInstance from "../axios/api";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [service, setService] = useState("")

  const data = {fullName, email, password}
  const submitHandler = async (event) => {
    navigate("/form", { state: data })
    event.preventDefault();
    // alert("Submit Handler function is running")
    // const service = "hard_Coded_Service";
    // const location = "Bankura";
    // const practiceAreas = "crime";
    // const experience = 5;
    // const languages = "Bengali, English";
    // const bar = "Kolkata";
    // const fees = 3000;
    // const website = "sonu.com";
    // await axios.post("http://localhost:4000/register", {
    //   fullName,
    //   email,
    //   password,
    //   service,
    //   location,
    //   practiceAreas,
    //   experience,
    //   languages,
    //   bar,
    //   fees,
    //   website,
    // });
    // toast.success("Account created, you can Login now !", {
    //   position: "top-center",
    //   autoClose: 4000,
    //   hideProgressBar: true,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: "light",
    // });
    // navigate("/signin");
  };

  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Register as a Legal Service Provider
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={submitHandler}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Full Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={fullName}
                  onChange={(event) => {setFullName(event.target.value)}}
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                What Legal Services do you offer ?
              </label>
              <div className="mt-2">
                <select
                  id="service"
                  name="service"
                  value={service}
                  onChange={event => setService(event.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >

                <option value="lawyer" name="service">Lawyer</option>
                <option value="mediator" name="service">Mediator</option>
                <option value="writer" name="service">Legal Document Writer</option>
                </select>
              </div>
            </div> */}

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="/"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  autoComplete="current-password"
                  required
                  className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button type="submit" fullName="{fullName}" email={email} password={password} className="flex w-full justify-center rounded-md bg-[#d2691e] hover:bg-orange-700 . px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >Next
              </button> 
              {/* <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-cyan-500 hover:bg-cyan-600 . px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >

               <Link to="/form">Next</Link>
              </button> */}
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already have an account ?
            <Link
              to="/signin" 
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
