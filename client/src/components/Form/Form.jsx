import React, { useState } from 'react'
import "./form.css"
import Logo from "../../Assets/Sample_logo.png"
import { useLocation } from "react-router-dom";
import axiosInstance from '../../axios/api';
import axios from "axios";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';


const Form = ({fullName, email, password}) => {

  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;
 





  const [phone, setphone] = useState("");
  const [practiceAreas, setPracticeAreas] = useState("");
  const [experience, setExperience] = useState("");
  const [languages, setLanguages] = useState("");
  const [service, setService] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [bar, setBar] = useState("");
  const [website, setWebsite] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pin, setPin] = useState("");
  const [bio, setBio] = useState("")



  const submitHandler = async (event) => {
    event.preventDefault();

    await axios.post("http://localhost:4000/register", {
      ...data,
      phone,
      service,
      location: `${city}, ${state}, ${pin}`,
      practiceAreas,
      experience,
      languages,
      bar,
      priceRange,
      website,
      bio
    });
    toast.success("Account created, you can Login now !", {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    navigate("/signin");
  };




















  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-8 lg:px-8 bg-slate-100">
    
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <img
              className="mx-auto h-20 w-auto"
              src={Logo}
              alt="Your Company"
            />
     
    </div>
    <form className='m-10   md:m-32 lg:m-40 xl:m-50 xl:mt-10' onSubmit={submitHandler}>
    <div className="space-y-12 ">
      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-2xl  leading-7 text-black text-center bg-[#fcf195] p-4 rounded-md m-auto w-full font-semibold">Make a Detailed Profile</h2>
        <p className="mt-10 text-ls leading-6  text-center">
          This information will be displayed publicly so be careful what you share.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
      

    

         

          <div className="col-span-full">
            <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
             Profile photo 
             <span className='text-red-500'>*</span>
            </label>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div className="text-center">
                {/* <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" /> */}
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span>Upload a file</span>
                    <input id="file-upload" name="file-upload" type="file" className="sr-only"  />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-4">
            <label htmlFor="Phone" className="block text-sm font-medium leading-6 text-gray-900">
              Phone No.  <span className='text-red-500'> *</span>
            </label>
            <div className="mt-2">
              <input
                id="phone"
                value={phone}
                name="phone"
                type="text"
                autoComplete="phone"
                onChange={(e) => {setphone(e.target.value)}}
                className=" pl-4 pr-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          {/* practice area */}
          <div className="sm:col-span-4">
            <label htmlFor=" practiceAreas" className="block text-sm font-medium leading-6 text-gray-900">
            Practice Areas  <span className='text-red-500'> *</span>
            </label>
            <div className="mt-2">
              <input
                id=" practiceAreas"
                name=" practiceAreas"
                type="text"
                value={practiceAreas}
                autoComplete=" practiceAreas"
                onChange={(e) => {setPracticeAreas(e.target.value)}}
                className=" pl-4 pr-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
           {/* practice area */}

          <div className="sm:col-span-4">
            <label htmlFor=" experience" className="block text-sm font-medium leading-6 text-gray-900">
            Experience  <span className='text-red-500'> *</span>
            </label>
            <div className="mt-2">
              <input
              placeholder='Year'
                id=" experience"
                name=" experience"
                value={experience}
                type="number"
                autoComplete=" experience"
                onChange={(e) => {setExperience(e.target.value)}}
                className=" pl-4 pr-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            
          </div>
          {/* languages */}
          <div className="sm:col-span-4">
            <label htmlFor="languages" className="block text-sm font-medium leading-6 text-gray-900">
            Languages  <span className='text-red-500'> *</span>
            </label>
            <div className="mt-2">
              <input
              placeholder=''
                id="languages"
                value={languages}
                name=" languages"
                type="text"
                autoComplete="languages"
                onChange={(e) => {setLanguages(e.target.value)}}
                className=" pl-4 pr-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            
          </div>
          {/* languages */}

          <div className="sm:col-span-3">
            <label htmlFor="service" className="block text-sm font-medium leading-6 text-gray-900">
             Service  <span className='text-red-500'> *</span>
            </label>
            <div className="mt-2">
              <select
                id="service"
                name="service"
                autoComplete="service"
                onChange={(e) => {setService(e.target.value)}}
                value={service}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              >
                <option disabled>Select</option>
                <option value="Lawyer" >Lawyer</option>
                <option value="Mediator" >Mediator</option>
                <option value="Writer" >Writer</option>
              </select>
            </div>
          </div>
          {/* price range */}
          <div className="sm:col-span-4">
            <label htmlFor="priceRange" className="block text-sm font-medium leading-6 text-gray-900">
            Price Range
            </label>
            <div className="mt-2">
              <input
              placeholder='In Rupees'
                id=" priceRange"
                name=" priceRange"
                type="text"
                autoComplete=" priceRange"
                value={priceRange}
                onChange={(e) => {setPriceRange(e.target.value)}}
                className=" pl-4 pr-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            
          </div>
          {/* price range */}
          {/* bar */}
          <div className="sm:col-span-4">
            <label htmlFor="bar" className="block text-sm font-medium leading-6 text-gray-900">
            Employment ID
            </label>
            <div className="mt-2">
              <input
              placeholder='Gov. verified Employment ID'
                id="bar"
                name="bar"
                value={bar}
                type="text"
                autoComplete="bar"
                onChange={(e) => {setBar(e.target.value)}}
                className=" pl-4 pr-4 block w-full rounded-md border-0 py-1.5 tegit xt-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            
          </div>
          {/* bar */}
          {/* website */}
          <div className="sm:col-span-4">
            <label htmlFor=" practiceAreas" className="block text-sm font-medium leading-6 text-gray-900">
            Website
            </label>
            <div className="mt-2">
              <input
              placeholder='Give a link of your site if any *'
                id=" website"
                name=" websit"
                type="url"
                autoComplete=" website"
                value={website}
                onChange={(e) => {setWebsite(e.target.value)}}
                className=" pl-4 pr-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          {/* website */}

          {/* <div className="col-span-full">
            <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
              Street address  <span className='text-red-500'> *</span>
            </label>
            <div className="mt-2">
              <input
              placeholder='Locality'
                type="text"
                name="street-address"
                id="street-address"
                autoComplete="street-address"
                className=" pl-4 pr-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div> */}

          <div className="sm:col-span-2 sm:col-start-1">
            <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
              City  <span className='text-red-500'> *</span>
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="city"
                id="city"
                value={city}
                autoComplete="address-level2"
                onChange={(e) => {setCity(e.target.value)}}
                className=" pl-4 pr-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
              State  <span className='text-red-500'> *</span>
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="region"
                id="region"
                autoComplete="address-level1"
                value={state}
                onChange={(e) => {setState(e.target.value)}}
                className=" pl-4 pr-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
              PIN code  <span className='text-red-500'> *</span>
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="postal-code"
                id="postal-code"
                value={pin}
                autoComplete="postal-code"
                onChange={(e) => {setPin(e.target.value)}}
                className=" pl-4 pr-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-gray-900/10 pb-12 ">

        <div className=" space-y-10">

         
          <div className="col-span-full">
            <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
              About  <span className='text-red-500'> *</span>
            </label>
            <div className="mt-2">
              <textarea
              placeholder='Write a few sentences about yourself.'
                id="about"
                name="about"
                rows={3}
                value={bio}
                onChange={(e) => {setBio(e.target.value)}}
                className=" pr-4 pl-4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="mt-6 flex items-center justify-end gap-x-6">
      <button type="button" className="text-m font-semibold leading-6 text-gray-900">
        Cancel
      </button>
      <button
        type="submit"
        className="rounded-md bg-[chocolate]  px-6 py-2 text-m font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Register
      </button>
    </div>
  </form>
  </div>

  )
}

export default Form;
