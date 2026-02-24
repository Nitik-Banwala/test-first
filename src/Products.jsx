import React, { useState } from 'react'
const Products = () => {
    const [liked, setLiked] = useState(false);
    const [liked1, setLiked1] = useState(false);
    const [liked2, setLiked2] = useState(false);
    const [activeButton, setActiveButton] = useState(null);


    return (
        <div>
            <div className='max-w-285 h-full mx-auto mt-32.5 font-["Outfit",sans-serif]'>
                <div className='mb-12.5 flex flex-row max-w-285 justify-between '>
                    <div>
                        <h1 className='text-5xl font-semibold'>Featured Products</h1>
                        <p className='text-[20px] font-normal'>Use this area to describe the collection.</p>
                    </div>
                    <div className='flex flex-row gap-3.5 mt-6.25'>
                        <button
                            className={`border w-12.5 h-12.5 rounded-[50%] flex justify-center items-center transition-all ${activeButton === 'left' ? 'bg-[#01C6B5] border-0' : 'border-[#414143]'}`}
                            onMouseDown={() => setActiveButton('left')}
                            onMouseUp={() => setActiveButton(null)}
                        >
                            <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.486 12.728L7.072 14.142L0 7.072L7.072 0L8.486 1.414L2.829 7.071L8.486 12.728Z" fill={activeButton === 'left' ? '#FFFFFF' : '#414143'} />
                            </svg>

                        </button>
                        <button
                            className={`border w-12.5 h-12.5 rounded-[50%] flex justify-center items-center transition-all ${activeButton === 'right' ? 'bg-[#01C6B5] border-0' : 'border-[#414143]'}`}
                            onMouseDown={() => setActiveButton('right')}
                            onMouseUp={() => setActiveButton(null)}

                        >
                            <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.000328064 1.41409L1.41433 9.05991e-05L8.48633 7.07009L1.41433 14.1421L0.000328064 12.7281L5.65733 7.07109L0.000328064 1.41409Z" fill={activeButton === 'right' ? '#FFFFFF' : '#414143'} />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className='max-w-285 h-full mx-auto flex flex-row gap-6'>
                    <div >
                        <div className='bg-[#F5F5F5] w-91 h-110.25 hover:bg-[#0000004D] hover:scale-[1.1] transition-transform duration-200 '>
                            <div className='w-79 justify-between mx-auto pt-6 flex flex-row'>
                                <div className='w-25 h-11 rounded-[88px] bg-[#FFFFFF] flex justify-center items-center'>€14.95</div>
                                <div className='w-8.75 h-8.75 rounded-[50%] bg-[#FFFFFF] flex justify-center items-center' onClick={() => (
                                    setLiked1(!liked1)
                                )} >
                                    <svg
                                        width="22"
                                        height="20"
                                        viewBox="0 0 22 20"
                                        fill={liked1 ? "green" : "none"}
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M6.5 1C3.4625 1 1 3.4625 1 6.5C1 12 7.5 17 11 18.163C14.5 17 21 12 21 6.5C21 3.4625 18.5375 1 15.5 1C13.64 1 11.995 1.9235 11 3.337C10.4928 2.6146 9.81908 2.02505 9.03577 1.61824C8.25245 1.21144 7.38265 0.999377 6.5 1Z"
                                            stroke="green"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className=' justify-center flex items  w-92 h-80 items-center absolute top-1/2 -translate-y-1/2 transition-all duration-200 linear group-hover:right-0'>
                                <button onClick={() => (setCount  (count + 1))} className=' cursor-pointer active:bg-[#007a70] bg-[#01C6B5] w-35.5 h-14.25 text-[20px] font-medium text-white '>Add to cart </button>
                            </div>
                            <img src="/Products1.png" alt="" className='mx-auto mt-13' />
                        </div>
                        <h1 className='flex justify-center mt-6 font-normal text-[24px]'>Round Yoga Mat</h1>
                    </div>
                    <div >
                        <div className='bg-[#F5F5F5] w-91 h-110.25 hover:bg-[#0000004D] hover:scale-[1.1] transition-transform duration-200 '>
                            <div className='w-79 justify-between mx-auto pt-6 flex flex-row'>
                                <div className='w-25 h-11 rounded-[88px] bg-[#FFFFFF] flex justify-center items-center'>€14.95</div>
                                <div className='w-8.75 h-8.75 rounded-[50%] bg-[#FFFFFF] flex justify-center items-center' onClick={() => (
                                    setLiked(!liked)
                                )}>
                                    <svg
                                        width="22"
                                        height="20"
                                        viewBox="0 0 22 20"
                                        fill={liked ? "green" : "none"}
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M6.5 1C3.4625 1 1 3.4625 1 6.5C1 12 7.5 17 11 18.163C14.5 17 21 12 21 6.5C21 3.4625 18.5375 1 15.5 1C13.64 1 11.995 1.9235 11 3.337C10.4928 2.6146 9.81908 2.02505 9.03577 1.61824C8.25245 1.21144 7.38265 0.999377 6.5 1Z"
                                            stroke="green"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className=' justify-center flex items  w-92 h-80 items-center absolute top-1/2 -translate-y-1/2 transition-all duration-200 linear group-hover:right-0'>
                                <button onClick={() => (setCount  (count + 1))} className=' cursor-pointer active:bg-[#007a70] bg-[#01C6B5] w-35.5 h-14.25 text-[20px] font-medium text-white '>Add to cart</button>
                            </div>
                            <img src="/Products2.png" alt="" className='mx-auto mt-13' />
                        </div>
                        <h1 className='flex justify-center mt-6 font-normal text-[24px]'>Non-Slip Travel Yoga Mat</h1>
                    </div>
                    <div >
                        <div className='bg-[#F5F5F5] w-91 h-110.25 hover:bg-[#0000004D] hover:scale-[1.1] transition-transform duration-200'>

                            <div className='w-79 justify-between mx-auto pt-6 flex flex-row'>
                                <div className='w-25 h-11 rounded-[88px] bg-[#FFFFFF] flex justify-center items-center'>€31.95</div>
                                <div className='w-8.75 h-8.75 rounded-[50%] bg-[#FFFFFF] flex justify-center items-center' onClick={() => (
                                    setLiked2(!liked2)
                                )} >
                                    <svg
                                        width="22"
                                        height="20"
                                        viewBox="0 0 22 20"
                                        fill={liked2 ? "green" : "none"}
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M6.5 1C3.4625 1 1 3.4625 1 6.5C1 12 7.5 17 11 18.163C14.5 17 21 12 21 6.5C21 3.4625 18.5375 1 15.5 1C13.64 1 11.995 1.9235 11 3.337C10.4928 2.6146 9.81908 2.02505 9.03577 1.61824C8.25245 1.21144 7.38265 0.999377 6.5 1Z"
                                            stroke="green"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className=' justify-center flex items  w-92 h-80 items-center absolute top-1/2 -translate-y-1/2 transition-all duration-200 linear group-hover:right-0'>
                                <button className=' cursor-pointer active:bg-[#007a70] bg-[#01C6B5] w-35.5 h-14.25 text-[20px] font-medium text-white '>Add to cart</button>
                            </div>
                            <img src="/Products3.png" alt="" className='mx-auto ' />
                        </div>
                        <h1 className='flex justify-center mt-6 font-normal text-[24px]'>Foldable Yoga Mat</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products