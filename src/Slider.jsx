import React, { useState, useEffect } from 'react'

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    const slides = [
        {
            id: 1,
            image: '/sliderone.png',
            title: 'NATURE - INSPIRED',
            subtitle: 'ELEVATE YOUR PRATICE',
            description: 'Eco-friendly yoga mats that blend-high performance with stunning, nature-inspired designs. Each product is thoughtfully crafted to elevate your yoga practice.'
        },
        {
            id: 2,
            image: '/slidertwo.png',
            title: 'NATURE - INSPIRED',
            subtitle: 'ELEVATE YOUR PRATICE',
            description: 'Eco-friendly yoga mats that blend-high performance with stunning, nature-inspired designs. Each product is thoughtfully crafted to elevate your yoga practice.'
        },
        {
            id: 3,
            image: '/sliderthree.png',
            title: 'NATURE - INSPIRED',
            subtitle: 'ELEVATE YOUR PRATICE',
            description: 'Eco-friendly yoga mats that blend-high performance with stunning, nature-inspired designs. Each product is thoughtfully crafted to elevate your yoga practice.'
        },
        {
            id: 4,
            image: '/sliderfour.png',
            title: 'NATURE - INSPIRED',
            subtitle: 'ELEVATE YOUR PRATICE',
            description: 'Eco-friendly yoga mats that blend-high performance with stunning, nature-inspired designs. Each product is thoughtfully crafted to elevate your yoga practice.'
        }
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, 5000)

        return () => clearInterval(interval)
    }, [slides.length])

    const goToNextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
    }
    const goToPrevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    }

    return (
        <div>
            <div className='slider relative w-full overflow-hidden'>
                <div className='relative w-full h-screen'>
                    {slides.map((slide, index) => (
                        <div
                            key={slide.id}
                            className={`slides z-10 min-h-190 bg-cover bg-center absolute w-full h-full transition-opacity duration-1000 ${
                                index === currentSlide ? 'opacity-100' : 'opacity-0'
                            }`}
                            style={{ backgroundImage: `url('${slide.image}')` }}
                        >
                            <div className='z-20 text-white max-w-149.5 font-["Outfit",sans-serif] lg:ml-37.5 pt-58 h-full flex flex-col justify-center'>
                                <h1 className='tracking-[18%] text-2xl font-normal'>{slide.subtitle}</h1>
                                <h1 className='text-[62px] font-bold tracking-[-5%]'>{slide.title}</h1>
                                <h1 className='font-normal text-[21px] max-w-2xl'>
                                    {slide.description}
                                </h1>
                                <button className='bg-[#01C6B5] w-35.5 h-14.25 text-[20px] font-medium mt-6'>Shop now</button>
                            </div>
                        </div>
                    ))}

                    <button
                        onClick={goToPrevSlide}
                        className='absolute cursor-pointer left-4 top-1/2 transform -translate-y-1/2 z-30 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-3 rounded-full transition-all'
                        aria-label='Previous slide'
                    >
                        ❮
                    </button>

                    <button
                        onClick={goToNextSlide}
                        className='absolute cursor-pointer right-4 top-1/2 transform -translate-y-1/2 z-30 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-3 rounded-full transition-all'
                        aria-label='Next slide'
                    >
                        ❯
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Slider