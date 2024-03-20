import React from 'react'
import { Link } from "react-router-dom";
import { useState } from 'react';
import Logo from "../Assets/Sample_logo.png"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';




const SignIn = () => {



  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  const submitHandler = async (event) => {
    event.preventDefault();
    // alert("Sign in Handler running !")
    const {status, data:{token, refreshToken, fullName, service, location, practiceAreas, experience, languages, bar, fees, rating, reviews, website}} = await axios.post("http://localhost:4000/login", {email, password})
    if (status === 201) {
      localStorage.setItem("token", token)
      localStorage.setItem("refresh_token", refreshToken)
      localStorage.setItem("fullName", fullName)
      localStorage.setItem("service", service);
      localStorage.setItem("location", location)
      localStorage.setItem("practiceAreas", practiceAreas);
      localStorage.setItem("experience", experience)
      localStorage.setItem("languages", languages)
      localStorage.setItem("bar", bar)
      localStorage.setItem("fees", fees)
      localStorage.setItem("rating", rating)
      localStorage.setItem("reiews", reviews);
      localStorage.setItem("website", website)
      navigate("/dashboard")
    }
  }


  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 mt-[80px] items-center">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-20 w-auto rounded-full"
            src={Logo}
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={submitHandler}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={event => setEmail(event.target.value)}
                  required
                  className=" px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="/" className="font-semibold text-indigo-600 hover:text-indigo-500">
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
                  onChange={event => setPassword(event.target.value)}
                  autoComplete="current-password"
                  required
                  className="  px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg- px-3 py-1.5 bg-[#d2691e] hover:bg-orange-700  text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not yet Registered ?
            <Link to="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Sign Up Now !</Link>
          </p>
        </div>
      </div>
  )
}

export default SignIn
