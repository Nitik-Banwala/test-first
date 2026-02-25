import React from 'react'

const Newsletter = () => {
    return (
        <div className='bg-[#F1F1F1] mt-20 sm:mt-35 w-full'>
            <div className='max-w-343 mx-auto flex flex-col lg:flex-row justify-between gap-6 sm:gap-8 lg:gap-0 px-4 sm:px-6 lg:px-0 py-8 sm:py-12 lg:py-16'>
                <div className='hidden lg:flex items-center justify-center shrink-0'>
                    <img src="/Newsletter1.png" alt="Newsletter decoration left" className='w-full max-w-48 h-auto' />
                </div>
                <div className='flex flex-col justify-center text-center items-center w-full'>
                    <h1 className='font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight'>
                        Subscribe To Our Newsletter
                    </h1>
                    <p className='max-w-full sm:max-w-md md:max-w-lg font-normal text-sm sm:text-base md:text-lg lg:text-[20px] text-[#414143] leading-[160%] mt-3 sm:mt-4 mb-5 sm:mb-6'>
                        Get weekly updates on the newest design stories, case studies and tips right in your mailbox.
                    </p>
                    
                    <div className='border border-[#4141431A] p-1.5 w-full sm:w-auto sm:max-w-sm md:max-w-md justify-between flex flex-col sm:flex-row gap-2 sm:gap-0'>
                        <input 
                            type="email" 
                            placeholder='Email Address' 
                            className='ml-0 sm:ml-4 px-3 sm:px-0 py-2 sm:py-0 text-sm sm:text-base outline-none flex-1' 
                        />
                        <button className='w-full sm:w-35 h-12 sm:h-14.25 bg-[#01C6B5] text-white text-sm sm:text-base font-medium hover:opacity-90 transition'>
                            Subscribe
                        </button>
                    </div>
                </div>
                <div className='hidden lg:flex items-center justify-center shrink-0'>
                    <img src="/Newsletter2.png" alt="Newsletter decoration right" className='w-full max-w-48 h-auto' />
                </div>
            </div>
        </div>
    )
}

export default Newsletter