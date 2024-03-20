import React from 'react'
import somyaImg from "../Assets/somya.jpg"
const Chat = () => {
  return (
    <div>
      <section className="flex flex-col justify-center antialiased  h-fit text-gray-600  p-4">
    <div className="h-full">
   
        <div className="relative max-w-[340px] mx-auto bg-white shadow-lg rounded-lg">
      
            <header className="pt-6 pb-4 px-5 border-b border-gray-200">
            <h3 className="text-xs font-semibold uppercase text-gray-400 mb-1">Cases</h3>

                {/* <div className="flex justify-between items-center mb-3">
                 
                    <div className="flex items-center">
                        <a className="inline-flex items-start mr-3" href="#0">
                            <img className="rounded-full" src="https://th.bing.com/th/id/OIP.BVqRl5JkZkoe4SuUU2ENggAAAA?pid=ImgDet&rs=1" width="48" height="48" alt="Lauren Marsano" />
                        </a>
                        <div cName="pr-1">
                            <a className="inline-flex text-gray-800 hover:text-gray-900" href="#0">
                                <h2 className="text-xl leading-snug font-bold">Bimlesh kumar</h2>
                            </a>
                            <a className="block text-sm font-medium hover:text-indigo-500" href="#0">@bimlesh</a>
                        </div>
                    </div>
                    <div className="relative inline-flex flex-shrink-0">
                        <button className="text-gray-400 hover:text-gray-500 rounded-full focus:ring-0 outline-none focus:outline-none">
                            <span className="sr-only">Settings</span>
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 16 16">
                                <path d="m15.621 7.015-1.8-.451A5.992 5.992 0 0 0 13.13 4.9l.956-1.593a.5.5 0 0 0-.075-.611l-.711-.707a.5.5 0 0 0-.611-.075L11.1 2.87a5.99 5.99 0 0 0-1.664-.69L8.985.379A.5.5 0 0 0 8.5 0h-1a.5.5 0 0 0-.485.379l-.451 1.8A5.992 5.992 0 0 0 4.9 2.87l-1.593-.956a.5.5 0 0 0-.611.075l-.707.711a.5.5 0 0 0-.075.611L2.87 4.9a5.99 5.99 0 0 0-.69 1.664l-1.8.451A.5.5 0 0 0 0 7.5v1a.5.5 0 0 0 .379.485l1.8.451c.145.586.378 1.147.691 1.664l-.956 1.593a.5.5 0 0 0 .075.611l.707.707a.5.5 0 0 0 .611.075L4.9 13.13a5.99 5.99 0 0 0 1.664.69l.451 1.8A.5.5 0 0 0 7.5 16h1a.5.5 0 0 0 .485-.379l.451-1.8a5.99 5.99 0 0 0 1.664-.69l1.593.956a.5.5 0 0 0 .611-.075l.707-.707a.5.5 0 0 0 .075-.611L13.13 11.1a5.99 5.99 0 0 0 .69-1.664l1.8-.451A.5.5 0 0 0 16 8.5v-1a.5.5 0 0 0-.379-.485ZM8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                            </svg>
                        </button>
                    </div>
                </div> */}
                {/* <div className="flex flex-wrap justify-center sm:justify-start space-x-4">
                    <div className="flex items-center">
                        <svg className="w-4 h-4 fill-current flex-shrink-0 text-gray-400" viewBox="0 0 16 16">
                            <path d="M8 8.992a2 2 0 1 1-.002-3.998A2 2 0 0 1 8 8.992Zm-.7 6.694c-.1-.1-4.2-3.696-4.2-3.796C1.7 10.69 1 8.892 1 6.994 1 3.097 4.1 0 8 0s7 3.097 7 6.994c0 1.898-.7 3.697-2.1 4.996-.1.1-4.1 3.696-4.2 3.796-.4.3-1 .3-1.4-.1Zm-2.7-4.995L8 13.688l3.4-2.997c1-1 1.6-2.198 1.6-3.597 0-2.798-2.2-4.996-5-4.996S3 4.196 3 6.994c0 1.399.6 2.698 1.6 3.697 0-.1 0-.1 0 0Z" />
                        </svg>
                        <span className="text-sm whitespace-nowrap ml-2">Patna</span>
                    </div>
                    <div className="flex items-center">
                        <svg className="w-4 h-4 fill-current flex-shrink-0 text-gray-400" viewBox="0 0 16 16">
                            <path d="M11 0c1.3 0 2.6.5 3.5 1.5 1 .9 1.5 2.2 1.5 3.5 0 1.3-.5 2.6-1.4 3.5l-1.2 1.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l1.1-1.2c.6-.5.9-1.3.9-2.1s-.3-1.6-.9-2.2C12 1.7 10 1.7 8.9 2.8L7.7 4c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l1.2-1.1C8.4.5 9.7 0 11 0ZM8.3 12c.4-.4 1-.5 1.4-.1.4.4.4 1 0 1.4l-1.2 1.2C7.6 15.5 6.3 16 5 16c-1.3 0-2.6-.5-3.5-1.5C.5 13.6 0 12.3 0 11c0-1.3.5-2.6 1.5-3.5l1.1-1.2c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L2.9 8.9c-.6.5-.9 1.3-.9 2.1s.3 1.6.9 2.2c1.1 1.1 3.1 1.1 4.2 0L8.3 12Zm1.1-6.8c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-4.2 4.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l4.2-4.2Z" />
                        </svg>
                        <a className="text-sm font-medium whitespace-nowrap text-indigo-500 hover:text-indigo-600 ml-2" href="#0">mySite.com</a>
                    </div>
                </div> */}
            </header>
            <div className="py-3 px-5">
                <div className="divide-y divide-gray-200">
                    <button className="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50">
                        <div className="flex items-center">
                            <img className="rounded-full items-start flex-shrink-0 mr-3" src="https://th.bing.com/th/id/OIP.BVqRl5JkZkoe4SuUU2ENggAAAA?pid=ImgDet&rs=1" width="32" height="32" alt="Marie Zulfikar" />
                            <div>
                                <h4 className="text-sm font-semibold text-gray-900">Sonu</h4>
                                <div className="text-[13px]">The video chat ended · 2hrs</div>
                            </div>
                        </div>
                    </button>
                    <button className="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50">
                        <div className="flex items-center">
                            <img className="rounded-full items-start flex-shrink-0 mr-3" src="https://th.bing.com/th/id/OIP.BVqRl5JkZkoe4SuUU2ENggAAAA?pid=ImgDet&rs=1" width="32" height="32" alt="Nhu Cassel" />
                            <div>
                                <h4 className="text-sm font-semibold text-gray-900">Nilesh</h4>
                                <div className="text-[13px]">Hello Bimlesh 👋, · 24 Mar</div>
                            </div>
                        </div>
                    </button>
                    <button className="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50">
                        <div className="flex items-center">
                            <img className="rounded-full items-start flex-shrink-0 mr-3" src="https://res.cloudinary.com/dc6deairt/image/upload/v1638102932/user-32-03_uzwykl.jpg" width="32" height="32" alt="Patrick Friedman" />
                            <div>
                                <h4 className="text-sm font-semibold text-gray-900">Patrick</h4>
                                <div className="text-[13px]">Yes, you’re right but… · 14 Mar</div>
                            </div>
                        </div>
                    </button>
                    <button className="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50">
                        <div className="flex items-center">
                            <img className="rounded-full items-start flex-shrink-0 mr-3" src="https://res.cloudinary.com/dc6deairt/image/upload/v1638102932/user-32-04_ttlftd.jpg" width="32" height="32" alt="Byrne McKenzie" />
                            <div>
                                <h4 className="text-sm font-semibold text-gray-900">Somya</h4>
                                <div className="text-[13px]">Hey Bimlesh ✨, first of all… · 14 Mar</div>
                            </div>
                        </div>
                    </button>
                    <button className="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50">
                        <div className="flex items-center">
                            <img className="rounded-full items-start flex-shrink-0 mr-3" src="https://res.cloudinary.com/dc6deairt/image/upload/v1638102932/user-32-05_bktgmb.jpg" width="32" height="32" alt="Scott Micheal" />
                            <div>
                                <h4 className="text-sm font-semibold text-gray-900">Jagpreet</h4>
                                <div className="text-[13px]">No way 🤙! · 11 Mar</div>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
            {/* <button className="absolute bottom-5 right-5 inline-flex items-center text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600 rounded-full text-center px-3 py-2 shadow-lg focus:outline-none focus-visible:ring-2">
                <svg className="w-3 h-3 fill-current text-indigo-300 flex-shrink-0 mr-2" viewBox="0 0 12 12">
                    <path d="M11.866.146a.5.5 0 0 0-.437-.139c-.26.044-6.393 1.1-8.2 2.913a4.145 4.145 0 0 0-.617 5.062L.305 10.293a1 1 0 1 0 1.414 1.414L7.426 6l-2 3.923c.242.048.487.074.733.077a4.122 4.122 0 0 0 2.933-1.215c1.81-1.809 2.87-7.94 2.913-8.2a.5.5 0 0 0-.139-.439Z" />
                </svg>
                <span>New Chat</span>
            </button> */}
        </div>
    </div>
</section>

    </div>
  )
}

export default Chat
