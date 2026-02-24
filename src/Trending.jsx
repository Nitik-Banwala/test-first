import React from 'react'
import LikeButton from './Likebutton'

const Trending = () => {
    const Trendingcards = [{
        id: 1,
        heading: 'Ultra Shaping Leggings',
        price: '€42.00',
        des1: 'Sculpting, slimming, supportive, stretchy, ',
        des2: 'stylish, seamless',
        image: '/Trending1.png'
    },
    {
        id: 2,
        heading: 'Horts and One-Strap Bra',
        price: '€50.00',
        des1: 'Sculpting, slimming, supportive, stretchy,  ',
        des2: 'stylish, seamless',
        image: '/Trending2.png'
    }, {
        id: 3,
        heading: 'Sleeveless Sports Jacket ',
        price: '€33.00',
        des1: 'Sculpting, slimming, supportive, stretchy, ',
        des2: 'stylish, seamless',
        image: '/Trending3.png'
    },
    ]
    return (
        <div>
            <div className='max-w-285 mx-auto mt-35'>
                <div>
                    <h1 className='text-5xl font-semibold'>Trending Product's</h1>
                    <p className='text-[20px] font-normal text-[#414143]'>Use this area to describe the collection.</p>
                </div>
            </div>
            <div className='flex flex-row max-w-285 mx-auto gap-6'>
                {Trendingcards.map((cardss) => (
                    <div key={cardss.id} >
                        <div className='p-4 shadow-xl w-91 '>
                            <div className=' absolute flex justify-end w-78 pt-4.75 '>
                                <LikeButton />
                            </div>
                            <img src={cardss.image} alt="" />
                            <div>
                                <h1 className='font-medium text-2xl mt-4'>{cardss.heading}</h1>
                                <h1 className='text-[16px] font-normal'>{cardss.des1}</h1>
                                <h1 className='text-[16px] font-normal'>{cardss.des2}</h1>
                                <p className='font-medium text-2xl' >{cardss.price}</p>
                            </div>
                            <button className='w-83 h-13.25 border cursor-pointer hover:bg-[#01C6B5] active:bg-[#02988b] hover:text-white'>Shop now</button>
                        </div>
                    </div>
                ))}
                <div className='p-4'>
                </div>
            </div>
        </div>
    )
}

export default Trending