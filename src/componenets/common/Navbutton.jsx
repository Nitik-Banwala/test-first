import React from 'react'

const Navbutton = () => {
  return (
      <div><div class="flex gap-4  p-6">

          <button class=" group w-14 h-14 rounded-full  hover:bg-teal-500 border hover:border-0 border-gray-500 flex items-center justify-center">
              <span class="text-xl"><svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.486 12.728L7.072 14.142L0 7.072L7.072 0L8.486 1.414L2.829 7.071L8.486 12.728Z" fill="#414143" className=' group-hover:fill-white ' />
              </svg>
              </span>
          </button>
          <button class=" group w-14 h-14 rounded-full  hover:bg-teal-500 border hover:border-0 border-gray-500 flex items-center justify-center">
              <span class="text-xl"><svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.000328064 1.41409L1.41433 9.05991e-05L8.48633 7.07009L1.41433 14.1421L0.000328064 12.7281L5.65733 7.07109L0.000328064 1.41409Z" fill="#414143" className=' group-hover:fill-white '/>
              </svg>
</span>
          </button>
          

          
      </div></div>
  )
}

export default Navbutton