import React from 'react'

const cards = [
    {
        date: 'May 25, 2025',
        title: 'Our Origins in Movement',
        image: '/Blog1.png',
        description: 'Rooted in France, Yogaova™ emerged from a desire to bring more style, sustainability....'
    },
    {
        date: 'May 25, 2025',
        title: 'Our Origins in Movement',
        image: '/Blog2.png',
        description: 'Rooted in France, Yogaova™ emerged from a desire to bring more style, sustainability....'
    },
    {
        date: 'May 25, 2025',
        title: 'Our Origins in Movement',
        image: '/Blog3.png',
        description: 'Rooted in France, Yogaova™ emerged from a desire to bring more style, sustainability....'
    },
]

const Blog = () => {
    return (
        <div className='px-35 flex items-center justify-center flex-col mt-20'>

            <div className='flex flex-row items-center justify-between w-full mb-8'>
                <h2 className='text-[40px] font-bold'>From The Blog</h2>
                <button className='bg-[#01C6B5] text-white text-[16px] font-medium px-6 py-3 cursor-pointer'>
                    View All Blogs
                </button>
            </div>

            <div className='grid grid-cols-3 gap-6 w-full'>
                {cards.map((item, index) => (
                    <div key={index} className='flex flex-col'>

                        <div className='h-91 overflow-hidden'>
                            <img
                                src={item.image}
                                alt={item.title}
                                className='w-full h-full object-cover'
                            />
                        </div>

                        <div className='pt-4 flex flex-col gap-2'>
                            <p className='text-[14px] text-[#414143]'>{item.date}</p>
                            <h3 className='text-[22px] font-bold text-black'>{item.title}</h3>
                            <p className='text-[14px] text-[#414143]'>{item.description}</p>
                            <button className='flex items-center gap-2 text-[#01C6B5] text-[14px] font-medium mt-1 cursor-pointer w-fit'>
                                Read More
                                <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 6H19M19 6L14 1M19 6L14 11" stroke="#01C6B5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Blog