import React from 'react'
import LikeButton from './common/Likebutton'
import Navbutton from './common/Navbutton';

const Star = () => (
    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.70465 14.8452L3.6993 18.4484L5.28471 11.6263L0 7.01424L6.96621 6.43772L9.70465 -1.52588e-05L12.4431 6.43772L19.4093 7.01424L14.1246 11.6263L15.71 18.4484L9.70465 14.8452Z" fill="#FFA800" />
    </svg>
);
const Trending = () => {
    const Trendingcards = [{
        id: 1,
        heading: 'Ultra Shaping Leggings',
        price: '42.00',
        des1: 'Sculpting, slimming, supportive, stretchy, ',
        des2: 'stylish, seamless',
        image: '/img9.png'
    },

    {
        id: 2,
        heading: 'Horts and One-Strap Bra',
        price: '50.00',
        des1: 'Sculpting, slimming, supportive, stretchy,  ',
        des2: 'stylish, seamless',
        image: '/img10.png'
    },
    
    {
        id: 3,
        heading: 'Sleeveless Sports Jacket',
        price: '33.00',
        des1: 'Sculpting, slimming, supportive, stretchy, ',
        des2: 'stylish, seamless',
        image: '/tranding3.png'
    },
    ]
    return (
        <div>
            <div className='mb-8 sm:mb-12.5 mt-35 p-4 flex flex-col max-w-285 mx-auto sm:flex-row sm:justify-between gap-4  sm:gap-0'>
                <div className='flex flex-col sm:flex-none justify-center items-center sm:items-start'>
                    <h1 className='text-2xl sm:text-3xl md:text-4xl  lg:text-5xl font-semibold'>Trending Products</h1>
                    <p className='text-base sm:text-lg md:text-[20px] font-normal text-gray-600 mt-1 sm:mt-2'>Use this area to describe the collection.</p>
                </div>
                <div className='sm:flex hidden  flex-row gap-3.5 mt-6.25'>
                    <Navbutton />
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-285 mx-auto mt-8 sm:mt-10 gap-4 sm:gap-6 px-4 sm:px-6 lg:px-0'>
                {Trendingcards.map((cardss) => (
                    <div key={cardss.id} className='group'>
                        <div className='relative p-4 sm:p-5 border border-[#0000000D]  hover:shadow-lg bg-white h-full flex flex-col'>
                            <div className='absolute flex right-9.75 top-10 z-10'>
                                <LikeButton />
                            </div>
                            <img src={cardss.image} alt={cardss.heading} className='lg:max-w-83 max-h-68.75  object-cover ' />
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
                            <button className='w-full mt-5 sm:mt-5 hover:text-white px-4 py-2 sm:py-3 border text-sm sm:text-base font-medium cursor-pointer hover:bg-[#01C6B5]  '>
                                Shop Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Trending