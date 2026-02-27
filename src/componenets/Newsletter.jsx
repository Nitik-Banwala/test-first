import React from 'react'

const Newsletter = () => {
    return (
        <div className='bg-[#F1F1F1] mt-20 sm:mt-35 px-4 w-full'>
            <div className='max-w-343 mx-auto py-15 lg:py-0 flex flex-col lg:flex-row justify-between gap-6 sm:gap-8 lg:gap-0 px-4 '>
                <div className='hidden lg:flex items-center justify-center shrink-0'>
                    <img src="/Newsletter1.png" alt="Newsletter decoration left" className='w-full max-w-93 h-113.75' />
                </div>
                <div className='flex flex-col justify-center text-center items-center w-full'>
                    <h1 className='font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight'>
                        Subscribe To Our Newsletter
                    </h1>
                    <p className='max-w-full sm:max-w-md md:max-w-lg font-normal text-sm sm:text-base md:text-lg lg:text-[20px] text-[#414143] leading-[160%] mt-3 sm:mt-4 mb-5 sm:mb-6'>
                        Get weekly updates on the newest design stories, case studies and tips right in your mailbox.
                    </p>
                    
                    <div className='border border-[#4141431A]  w-full max-w-72  sm:h-16.25 sm:max-w-md md:max-w-lg justify-between flex flex-col p-0.75  sm:flex-row gap-2 sm:gap-0'>
                        <input 
                            type="email" 
                            placeholder='Email Address' 
                            className='ml-0 sm:ml-4 px-3 sm:px-0 py-2 sm:py-0 text-sm sm:text-base outline-none flex-1' 
                        />
                        <button className='w-full sm:w-35 h-12 sm:h-14.25 justify-center items-center  hidden sm:flex bg-[#01C6B5] text-white text-sm sm:text-base font-medium hover:opacity-90 transition'>
                            Subscribe
                        </button>
                    </div>
                    <button className='max-w-72 w-full mt-1 flex sm:hidden justify-center items-center  h-12 sm:h-14.25 bg-[#01C6B5] text-white text-sm sm:text-base font-medium hover:opacity-90 transition'>
                        Subscribe
                    </button>
                </div>
                <div className='hidden lg:flex items-center justify-center shrink-0'>
                    <img src="/Newsletter2.png" alt="Newsletter decoration right" className='w-full  ' />
                </div>
            </div>
        </div>
    )
}

export default Newsletter