import React from 'react'
import { useRef } from 'react';
import LikeButton from './common/Likebutton'
import Navbutton from './common/Navbutton';
import { Trendingcards } from '../utils/Data';
import { Staricn } from '../utils/Icons';
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";

const Star = () => (
    <Staricn />
);

const Trending = () => {
    const sliderRef = useRef(null);

    const nextSlide = () => sliderRef.current?.slickNext();
    const prevSlide = () => sliderRef.current?.slickPrev();

    const settings = {
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        touchThreshold: 10,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div>
            <div className='mb-8 sm:mb-12.5 mt-35 p-4 flex flex-col max-w-285 mx-auto sm:flex-row sm:justify-between gap-4 sm:gap-0'>
                <div className='flex flex-col sm:flex-none justify-center items-center sm:items-start'>
                    <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold'>Trending Products</h1>
                    <p className='text-base sm:text-lg md:text-[20px] font-normal text-gray-600 mt-1 sm:mt-2'>Use this area to describe the collection.</p>
                </div>
                <div className='sm:flex hidden flex-row gap-3.5 mt-6.25'>
                    <Navbutton onNext={nextSlide} onPrev={prevSlide} />
                </div>
            </div>

            <div className='max-w-285 mx-auto mt-8 sm:mt-10 px-4 sm:px-6 lg:px-0 overflow-hidden'>
                <Slider ref={sliderRef} {...settings}>
                    {Trendingcards.map((cardss) => (
                        <div key={cardss.id} className='group px-2 sm:px-3'>
                            <div className='relative p-4 sm:p-5 border border-[#0000000D] max-w-91 h-132 hover:shadow-lg bg-white flex flex-col'>
                                <div className='absolute flex right-9.75 top-10 z-10'>
                                    <LikeButton />
                                </div>
                                <img src={cardss.image} alt={cardss.heading} className='max-w-83 w-full h-full max-h-68.75 object-cover' />
                                <div className='flex-1 flex flex-col'>
                                    <h1 className='font-medium text-lg sm:text-xl md:text-2xl mt-5 sm:mt-4 leading-snug'>{cardss.heading}</h1>
                                    <p className='text-sm sm:text-base font-normal mt-2 text-gray-700'>{cardss.des1}</p>
                                    <p className='text-sm sm:text-base font-normal text-gray-700'>{cardss.des2}</p>
                                    <div className='flex justify-between items-center mt-2.5 sm:mt-4'>
                                        <p className='font-bold text-xl sm:text-2xl'>€{cardss.price}</p>
                                        <div className='flex gap-1 sm:gap-1.5'>
                                            <Star />
                                            <Star />
                                            <Star />
                                            <Star />
                                        </div>
                                    </div>
                                </div>
                                <button className='w-full mt-5 sm:mt-5 hover:text-white px-4 py-2 sm:py-3 border text-sm sm:text-base font-medium cursor-pointer hover:bg-[#01C6B5]'>
                                    Shop Now
                                </button>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className='flex sm:hidden justify-center mt-6'>
                <Navbutton onNext={nextSlide} onPrev={prevSlide} />
            </div>
        </div>
    );
}

export default Trending