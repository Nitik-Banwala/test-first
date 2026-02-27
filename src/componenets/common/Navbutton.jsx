import React from 'react'
import { Next, Prev } from '../../utils/Icons'

const Navbutton = () => {
  return (
      <div><div className="flex gap-4  p-6">

          <button className=" group w-14 h-14 rounded-full  hover:bg-teal-500 border hover:border-0 border-gray-500 flex items-center justify-center">
              <span className="text-xl">
                  <Prev/>
              </span>
          </button>
          <button className=" group w-14 h-14 rounded-full  hover:bg-teal-500 border hover:border-0 border-gray-500 flex items-center justify-center">
              <span className="text-xl">
                  <Next/>
</span>
          </button>
          

          
      </div></div>
  )
}

export default Navbutton