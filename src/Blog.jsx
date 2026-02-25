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
        <div className='px-4 sm:px-6 md:px-8 lg:px-35 flex items-center justify-center flex-col mt-10 sm:mt-16 md:mt-20'>

            <div className='flex flex-col items-center sm:flex-row lg:items-start sm:items-center justify-between w-full mb-6 sm:mb-8 gap-4'>
                <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold'>From The Blog</h2>
                <button className='bg-[#01C6B5] text-white text-sm sm:text-[14px] md:text-[16px] font-medium px-4 sm:px-6 py-2 sm:py-3 cursor-pointer hover:bg-[#00a896] transition-colors whitespace-nowrap'>
                    View All Blogs
                </button>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full'>
                {cards.map((item, index) => (
                    <div key={index} className='flex flex-col h-full'>

                        <div className='h-48 sm:h-60 md:h-72 lg:h-91 overflow-hidden rounded-lg'>
                            <img
                                src={item.image}
                                alt={item.title}
                                className='w-full h-full object-cover hover:scale-105 transition-transform duration-300'
                            />
                        </div>

                        <div className='pt-3 sm:pt-4 flex flex-col gap-2'>
                            <p className='text-xs sm:text-sm md:text-[14px] text-[#414143]'>{item.date}</p>
                            <h3 className='text-lg sm:text-xl md:text-2xl lg:text-[22px] font-bold text-black line-clamp-2'>{item.title}</h3>
                            <p className='text-xs sm:text-sm md:text-[14px] text-[#414143] line-clamp-2'>{item.description}</p>
                            <button className='flex items-center gap-2 text-[#01C6B5] text-xs sm:text-sm md:text-[14px] font-medium mt-2 sm:mt-1 cursor-pointer w-fit hover:text-[#00a896] transition-colors'>
                                Read More
                                <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 6H19M19 6L14 1M19 6L14 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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