import React, { useState } from "react";
import "./mid.css";
// import MidPhoto from "../../../Assets/hammer.png";
import { Link } from "react-router-dom";
import Testimonial from "../../testimonial";
import FAQ from "./FAQ";
const Mid = () => {
  const [service, setService] = useState("");
  const [city, setCity] = useState("");
  const [court, setCourt] = useState("");
  const data = [
    {
      name: "Bimlesh kumar",
      status: "Available",
      role: "Lawyer",
      email: "example@gmail.com",
    },
    {
      name: "Sonu",
      status: "Booked",
      role: "Mediator",
      email: "example@gmail.com",
    },
    {
      name: "somya",
      status: "Available",
      role: "Lawyer",
      email: "example@gmail.com",
    },
    {
      name: "Jagpreet singh",
      status: "Available",
      role: "Writer",
      email: "example@gmail.com",
    },
    {
      name: "Shaikh Abdullah",
      status: "Booked",
      role: "Mediator",
      email: "example@gmail.com",
    },
    {
      name: "Nilesh",
      status: "Available",
      role: "Lawyer",
      email: "example@gmail.com",
    },
  ];
  return (
    <div className="mid">
      <div className="hero flex justify-center flex-col">
        <h3>
          Connecting You With Trusted <br /> Legal Experts In India <br></br>
          <div className="mt-10 text-xl">
            <Link
              to="/signup"
              className="button px-10 py-3 rounded-md bg-white text-black "
            >
              Get Started →
            </Link>
          </div>
        </h3>
      </div>
      <div className="midFilter  py-10">
        <h1 className="mb-[15px] from-neutral-700 tracking-[-0.5px]	">
          Search For Top Legal Service Provider In India
        </h1>
        <div className="filter">
          <div className="mt-2 ">
            <select
              id="service"
              name="service"
              value={service}
              onChange={(event) => setService(event.target.value)}
              required
              className="block w-52 rounded-md border-0 py-2 px-4  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
              <option name="service">Type of service</option>
              <option value="lawyer" name="service">
                Lawyer
              </option>
              <option value="mediator" name="service">
                Mediator
              </option>
              <option value="writer" name="service">
                Legal Document Writer
              </option>
            </select>
          </div>

          <div className="mt-2">
            <select
              id="cities"
              name="cities"
              value={city}
              onChange={(event) => setCity(event.target.value)}
              required
              className="block  rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
              <option name="city">Select City</option>
              <option value="Patna" name="city">
                Patna
              </option>
              <option value="Bhagalpur" name="city">
                Bhagalpur
              </option>
              <option value="Delhi" name="city">
                Delhi
              </option>
              <option value="Bengaluru" name="city">
                Bengaluru
              </option>
              <option value="Jaipur" name="city">
                Jaipur
              </option>
            </select>
          </div>

          {/* <div className="mt-2">
            <select
              id="courts"
              name="courts"
              value={court}
              onChange={(event) => setCourt(event.target.value)}
              required
              placeholder="SelectCourt"
              className="block rounded-md  border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
              <option name="">Select Court</option>
              <option value="Supreme Court" name="service">
                Supreme Court
              </option>
              <option value="writer" name="service">
                High Court
              </option>
            </select>
          </div> */}
          <button type="submit" className="filterbtn text-white ">
            Search
          </button>
        </div>
      </div>
      <div className="table w-full m-auto">
        <section class="container px-4 mx-auto">
          <div class="flex items-center gap-x-3">
            <h2 class="text-lg font-medium text-gray-800 dark:text-white">
              Top service providers
            </h2>

            <span class="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
              100+ LSP
            </span>
          </div>

          <div class="flex flex-col mt-6">
            <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                  <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead class="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th
                          scope="col"
                          class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <div class="flex items-center gap-x-3">
                            <span>Name</span>
                          </div>
                        </th>

                        <th
                          scope="col"
                          class="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <button class="flex items-center gap-x-2">
                            <span>Status</span>

                            <svg
                              class="h-3"
                              viewBox="0 0 10 11"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z"
                                fill="currentColor"
                                stroke="currentColor"
                                stroke-width="0.1"
                              />
                              <path
                                d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z"
                                fill="currentColor"
                                stroke="currentColor"
                                stroke-width="0.1"
                              />
                              <path
                                d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z"
                                fill="currentColor"
                                stroke="currentColor"
                                stroke-width="0.3"
                              />
                            </svg>
                          </button>
                        </th>

                        <th
                          scope="col"
                          class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          <button class="flex items-center gap-x-2">
                            <span>Role</span>

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="2"
                              stroke="currentColor"
                              class="w-4 h-4"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                              />
                            </svg>
                          </button>
                        </th>

                        <th
                          scope="col"
                          class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        >
                          Email address
                        </th>

                        <th scope="col" class="relative py-3.5 px-4">
                          <span class="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>



                    <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">




                    {data.map((item, index) => (
                      <tr key={index}>
                        <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div class="inline-flex items-center gap-x-3">
                            <div class="flex items-center gap-x-2">
                              <img
                                class="object-cover w-10 h-10 rounded-full"
                                src="https://th.bing.com/th/id/OIP.ed0RqUUqkqGszO7DikXhagAAAA?w=171&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                                alt=""
                              />
                              <div>
                                <h2 class="font-medium text-gray-800 dark:text-white ">
                                  {item.name}
                                </h2>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td class="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          {item.status === "Available"?<div class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                            <span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>

                            <h2 class="text-sm font-normal text-emerald-500">
                             {item.status}
                            </h2>
                          </div>:<div class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-red-200">
                            <span class="h-1.5 w-1.5 rounded-full bg-red-500"></span>

                            <h2 class="text-sm font-normal text-red-500">
                              Booked
                            </h2>
                          </div>

                          }
                          
                        </td>
                        <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                         {item.role}
                        </td>
                        <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                       {item.email}
                        </td>

                        <td class="px-4 py-4 text-sm whitespace-nowrap">
                          <div class="flex items-center gap-x-6">
                            <button class="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none rounded-xl bg-blue-100  px-4 py-1">
                              {item.status === "Available"?"Booked":"UnAvailable"}
                              
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                    </tbody>

                      {/* <tr>
                        <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div class="inline-flex items-center gap-x-3">
                            <div class="flex items-center gap-x-2">
                              <img
                                class="object-cover w-10 h-10 rounded-full"
                                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                alt=""
                              />
                              <div>
                                <h2 class="font-medium text-gray-800 dark:text-white ">
                                  Harsh saxena
                                </h2>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td class="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                            <span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>

                            <h2 class="text-sm font-normal text-emerald-500">
                              Available
                            </h2>
                          </div>
                        </td>
                        <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          Lawyer
                        </td>
                        <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          example@example.com
                        </td>

                        <td class="px-4 py-4 text-sm whitespace-nowrap">
                          <div class="flex items-center gap-x-6">
                            <button class="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none rounded-xl bg-blue-100  px-4 py-1">
                              Book
                            </button>
                          </div>
                        </td>
                      </tr> */}

                      {/* <tr>
                        <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div class="inline-flex items-center gap-x-3">
                            <div class="flex items-center gap-x-2">
                              <img
                                class="object-cover w-10 h-10 rounded-full"
                                src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                alt=""
                              />
                              <div>
                                <h2 class="font-medium text-gray-800 dark:text-white ">
                                  Mia
                                </h2>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td class="px-12 py-4 text-sm font-medium text-red-800 whitespace-nowrap">
                          <div class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-red-200">
                            <span class="h-1.5 w-1.5 rounded-full bg-red-500"></span>

                            <h2 class="text-sm font-normal text-red-500">
                              Booked
                            </h2>
                          </div>
                        </td>
                        <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          Mediator
                        </td>
                        <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          mia@example.com
                        </td>

                        <td class="px-4 py-4 text-sm whitespace-nowrap">
                          <div class="flex items-center gap-x-6">
                            <button class="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none rounded-xl bg-blue-100  px-4 py-1">
                              Book
                            </button>
                          </div>
                        </td>
                      </tr> */}
                    
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div class="flex items-center justify-between mt-6">
            {/* <a href="#" class="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 rtl:-scale-x-100">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
            </svg>

            <span>
                previous
            </span>
        </a> */}

            {/* <div class="items-center hidden lg:flex gap-x-3">
            <a href="#" class="px-2 py-1 text-sm text-blue-500 rounded-md dark:bg-gray-800 bg-blue-100/60">1</a>
            <a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">2</a>
            <a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">3</a>
            <a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">...</a>
            <a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">12</a>
            <a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">13</a>
            <a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">14</a>
        </div> */}

            <a
              href="#"
              class="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
            >
              <span>Next</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5 rtl:-scale-x-100"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </a>
          </div>
        </section>
      </div>
      <div className="testWrapper flex items-center justify-center">
        <Testimonial />
      </div>
      <FAQ />
    </div>
  );
};

export default Mid;
