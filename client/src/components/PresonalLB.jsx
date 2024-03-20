import React from 'react'

const PresonalLB = () => {
  return (
    <div className='bg-white p-4 mb-16'>
      <div class="w-[340px] px-8 pb-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
    {/* <div class="flex justify-center -mt-16 md:justify-end">
        <img class="object-cover w-16 h-16 border-2 border-blue-500 rounded-full dark:border-blue-400" alt="Testimonial avatar" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"/>
    </div> */}

    <h2 class="font text-xl font-bold">{localStorage.getItem("fullName")}</h2>
    <h2 class="mt-2 font-semibold text-gray-800 dark:text-white md:mt-0">Rank <span>5</span></h2>
    <p>Cases solved: 10</p>
    <p class="mt-2 text-xl text-gray-600 dark:text-gray-200">⭐⭐⭐⭐</p>

    {/* <div class="flex justify-end mt-4">
        <a href="#" class="text-lg font-medium text-blue-600 dark:text-blue-300" tabindex="0" role="link">John Doe</a>
    </div> */}
</div>
    </div>
  )
}

export default PresonalLB
