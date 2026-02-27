import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext'
import { Contact, Contactinner, Navlogo, Search, Cart, Searchinner, } from '../../utils/Icons'


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { cartCount } = useContext(CartContext)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <>
            <div className='w-full fixed top-0 z-30 pb-2 bg-white px-2 sm:px-4'>
                <div className='max-w-285 mx-auto flex my-2.5 justify-between'>
                    <div className='flex flex-row items-center gap-1 sm:gap-3'>
                        <Navlogo />
                        <h1 className='text-[12px] sm:text-[16px] font-normal'>Free delivery & free returns within 15 days</h1>
                    </div>
                    <div className='flex flex-row gap-2.25'>
                        <div className='border hidden sm:flex border-[#01C6B5] cursor-pointer rounded-[50%] w-7.5 h-7.5 items-center justify-center'>
                            <Link to={"/"}>
                                <Search />
                            </Link>
                        </div>
                        <div className='border hidden sm:flex border-[#01C6B5] cursor-pointer rounded-[50%] w-7.5 h-7.5 items-center justify-center'>
                            <Link to={"/"}>
                                <Contact />
                            </Link>
                        </div>
                        <div className='relative'>
                            <div className='border border-[#01C6B5] cursor-pointer rounded-[50%] w-5.5 h-5.5 sm:w-7.5 sm:h-7.5 items-center justify-center flex'>
                                <Link to={"/addtocart"}>
                                    <Cart />
                                </Link>
                            </div>
                            {cartCount > 0 && (
                                <span className='absolute -top-1 right-0 bg-[#01C6B5] text-white text-[6px] font-bold rounded-full w-2 h-2 flex items-center justify-center'>
                                    {cartCount}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full fixed sm:mt-12 mt-11 z-30 bg-[#01C6B5] h-auto md:h-17.5'>
                <div className='max-w-285 mx-auto flex flex-row justify-between items-center h-auto sm:h-17.5 max-[1174px]:px-4 py-2 min-[1175px]:py-0 z-30'>
                    <Link to={"/"}>
                        <img src="/logo.png" alt="Logo" className='h-8 sm:h-auto cursor-pointer' />
                    </Link>
                    <div className='hidden md:flex flex-row gap-9 text-white'>
                        <Link to={"/"}>
                            <h1 className='cursor-pointer hover:opacity-80 transition'>Home</h1>
                        </Link>
                        <Link to={"/"}>
                            <h1 className='cursor-pointer hover:opacity-80 transition'>Contact</h1>
                        </Link>
                        <Link to={"/addtocart"}>
                            <h1 className='cursor-pointer hover:opacity-80 transition'>Cart</h1>
                        </Link>
                    </div>
                    <button
                        onClick={toggleMenu}
                        className='md:hidden flex flex-col justify-center items-center gap-1.5'
                        aria-label="Toggle menu"
                    >
                        <div className={`w-6 h-0.5 bg-white transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
                        <div className={`w-6 h-0.5 bg-white transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                        <div className={`w-6 h-0.5 bg-white transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div
                    className='fixed inset-0 bg-black/40 md:hidden z-30'
                    onClick={toggleMenu}
                    style={{
                        animation: 'fadeIn 0.3s ease-in-out'
                    }}
                />
            )}
            <div
                className={`fixed top-0 right-0 h-screen w-64 bg-[#009B8F] md:hidden z-40 flex flex-col gap-4 px-4 py-8 transform transition-transform duration-300 ease-in-out ${
                    isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
                style={{
                    boxShadow: isMenuOpen ? '-4px 0 12px rgba(0, 0, 0, 0.15)' : 'none'
                }}
            >
                <button
                    onClick={toggleMenu}
                    className='absolute top-4 right-4 text-white text-2xl font-bold hover:opacity-80 transition'
                    aria-label="Close menu"
                >
                    ✕
                </button>

                <div className='mt-8 flex flex-col gap-2'>
                    <Link to={"/"} onClick={toggleMenu}>
                        <h1 className='text-white cursor-pointer py-3 hover:opacity-80 transition text-lg'>Home</h1>
                    </Link>
                    <Link to={"/"} onClick={toggleMenu}>
                        <h1 className='text-white cursor-pointer py-3 hover:opacity-80 transition text-lg'>Contact</h1>
                    </Link>
                    <Link to={"/addtocart"} onClick={toggleMenu}>
                        <h1 className='text-white cursor-pointer py-3 hover:opacity-80 transition text-lg'>Cart</h1>
                    </Link>
                </div>

                <div className='flex flex-row gap-3 mt-4'>
                    <div className='border border-white cursor-pointer rounded-[50%] w-10 h-10 items-center justify-center flex hover:opacity-80 transition'>
                        <Link to={"/"} onClick={toggleMenu}>
                            <Searchinner />
                        </Link>
                    </div>
                    <div className='border border-white cursor-pointer rounded-[50%] w-10 h-10 items-center justify-center flex hover:opacity-80 transition'>
                        <Link to={"/"} onClick={toggleMenu}>
                            <Contactinner />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar