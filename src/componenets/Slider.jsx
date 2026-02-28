import React, { useState, useEffect } from 'react'
import { Slides } from '../utils/Data'

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0)


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % Slides.length)
        }, 5000)

        return () => clearInterval(interval)
    }, [Slides.length])
    return (
        <div>
            <div className='slider relative w-full overflow-hidden'>
                <div className='relative sm:mt-29 w-full h-screen'>
                    {Slides.map((slide, index) => (
                        <div
                            key={slide.id}
                            className={`slides z-10  h-screen bg-cover bg-center absolute w-full   transition-opacity duration-1000 ${
                                index === currentSlide ? 'opacity-100' : 'opacity-0'
                            }`}
                            style={{ backgroundImage: `url('${slide.image}')` }} 
                        >
                            <div className='z-20 text-white max-w-full sm:max-w-3xl md:max-w-149.5  font-["Outfit",sans-serif] px-4 sm:px-8 md:ml-37.5 pt-12 sm:pt-20 md:pt-58 h-full flex flex-col  max-[768px]:text-center max-[768px]:items-center max-[768px]:justify-center'>
                                <h1 className='tracking-[18%] text-lg sm:text-xl md:text-2xl font-normal'>{slide.subtitle}</h1>
                                <h1 className='text-3xl sm:text-5xl md:text-[62px] font-bold mt-4 mb-4 tracking-[-5%] leading-tight'>{slide.title}</h1>
                                <h1 className='font-normal text-base sm:text-lg md:text-[21px] max-w-2xl mt-2 sm:mt-4'>
                                    {slide.description}
                                </h1>
                                <button className='bg-[#01C6B5]  w-32 sm:w-40 md:w-35.5 h-12 sm:h-13 md:h-14.25 text-base sm:text-lg md:text-[20px] font-medium mt-4 sm:mt-6 hover:bg-[#00a896] cursor-pointer  '>Shop now</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Slider