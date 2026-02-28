import React, { useEffect, useState, useContext } from 'react';
import Navbar from './common/Navbar';
import { Link } from 'react-router-dom';
import { CartContext } from '../componenets/CartContext';

const Addtocart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [quantities, setQuantities] = useState({});
    const { removeFromCart } = useContext(CartContext);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(storedCart);

        const initialQuantities = {};
        storedCart.forEach((item, index) => {
            initialQuantities[index] = 1;
        });
        setQuantities(initialQuantities);
    }, []);
    const handleDeleteItem = (index) => {
        removeFromCart(index);
        const updatedItems = cartItems.filter((_, i) => i !== index);
        setCartItems(updatedItems);

        const updatedQuantities = { ...quantities };
        delete updatedQuantities[index];
        setQuantities(updatedQuantities);
    };

    return (
        <div>
            <Navbar />

            <div className='max-w-285  mx-auto p-px px-3'>
                <div className='max-w-285 mt-40 sm:mt-54  mx-auto   flex items-center justify-between '>
                    <h1 className='font-bold text-3xl sm:text-5xl mb-10'>Your cart</h1>
                    <Link to={"/"}>
                        <div className='text-base sm:text-2xl font-medium -mt-8 text-[#6b6b6b] underline cursor-pointer'>
                            Continue Shopping

                        </div>
                    </Link>
                </div>

                {cartItems.length === 0 ? (
                    <p>Your cart is empty </p>
                ) : (
                    <div className='z-10'>
                        <div className='hidden md:flex flex-row bg-[#4141431A] border-b border-[#4141431A] p-4 justify-between'>
                            <h1 className='flex text-left'>Product</h1>
                            <h1 className='flex text-center'>Quantity</h1>
                            <h1 className='flex text-right'>Total</h1>
                        </div>

                        {cartItems.map((item, index) => (
                            <div key={index} className='flex flex-col md:flex-row justify-between items-start md:items-center border-b border-[#4141431A] p-4 gap-4'>
                                <div className='flex-1 flex items-start md:items-center gap-4'>
                                    <div className='w-20 h-20 bg-[#ebeaea] sm:w-24 sm:h-24 md:w-28 md:h-28'>
                                        <img src={item.image} alt={item.name} className=' object-cover' />
                                    </div>
                                    <div className='flex flex-col'>
                                        <span className='font-medium'>{item.name}</span>
                                        <span className='text-sm text-gray-600'>€{item.price}</span>
                                    </div>
                                </div>

                                <div className='flex items-center md:flex-none border border-[#4141431A]  overflow-hidden'>
                                    <button
                                        className='bg-[#414143] cursor-pointer px-4 py-2 flex justify-center items-center text-white hover:opacity-80'

                                    >
                                        -
                                    </button>
                                    <div className='px-4 py-2 flex justify-center items-center'>
                                        1
                                    </div>
                                    <button
                                        className='bg-[#01C6B5] cursor-pointer px-4 py-2 flex justify-center items-center text-white hover:opacity-80'

                                    >
                                        +
                                    </button>
                                    <button
                                        className='px-3 py-2 flex justify-center cursor-pointer items-center hover:opacity-80'
                                        onClick={() => handleDeleteItem(index)}
                                    >
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g opacity="0.5">
                                                <path d="M6.21012 18.6299C5.72222 18.6299 5.30469 18.4563 4.95754 18.1091C4.61039 17.762 4.43652 17.3442 4.43593 16.8557V5.3234C4.18458 5.3234 3.97405 5.23824 3.80432 5.06792C3.63458 4.89759 3.54942 4.68706 3.54883 4.4363C3.54824 4.18555 3.6334 3.97501 3.80432 3.80469C3.97523 3.63437 4.18577 3.54921 4.43593 3.54921H7.98431C7.98431 3.29786 8.06948 3.08732 8.2398 2.91759C8.41012 2.74786 8.62066 2.6627 8.87141 2.66211H12.4198C12.6711 2.66211 12.882 2.74727 13.0523 2.91759C13.2226 3.08792 13.3075 3.29845 13.3069 3.54921H16.8553C17.1066 3.54921 17.3175 3.63437 17.4878 3.80469C17.6581 3.97501 17.743 4.18555 17.7424 4.4363C17.7418 4.68706 17.6566 4.89789 17.4869 5.0688C17.3172 5.23972 17.1066 5.32458 16.8553 5.3234V16.8557C16.8553 17.3436 16.6817 17.7614 16.3346 18.1091C15.9874 18.4569 15.5696 18.6304 15.0811 18.6299H6.21012ZM15.0811 5.3234H6.21012V16.8557H15.0811V5.3234ZM8.87141 15.0815C9.12276 15.0815 9.33359 14.9963 9.50391 14.826C9.67423 14.6557 9.7591 14.4451 9.75851 14.1944V7.98469C9.75851 7.73335 9.67335 7.52281 9.50302 7.35308C9.3327 7.18335 9.12216 7.09818 8.87141 7.09759C8.62066 7.097 8.41012 7.18216 8.2398 7.35308C8.06948 7.52399 7.98431 7.73453 7.98431 7.98469V14.1944C7.98431 14.4457 8.06948 14.6565 8.2398 14.8269C8.41012 14.9972 8.62066 15.0821 8.87141 15.0815ZM12.4198 15.0815C12.6711 15.0815 12.882 14.9963 13.0523 14.826C13.2226 14.6557 13.3075 14.4451 13.3069 14.1944V7.98469C13.3069 7.73335 13.2217 7.52281 13.0514 7.35308C12.8811 7.18335 12.6706 7.09818 12.4198 7.09759C12.169 7.097 11.9585 7.18216 11.7882 7.35308C11.6179 7.52399 11.5327 7.73453 11.5327 7.98469V11.5327 14.1944C11.5327 14.4457 11.6179 14.6565 11.7882 14.8269C11.9585 14.9972 12.169 15.0821 12.4198 15.0815Z" fill="#414143" />
                                            </g>
                                        </svg>
                                    </button>
                                </div>
                                <div className='flex-1 text-left md:text-right mt-2 md:mt-0'>

                                </div>
                            </div>
                        ))}
                        <div className='flex justify-center md:justify-end mt-8 p-4'>
                            <div className='flex flex-col gap-4 w-full max-w-xs md:w-80'>
                                <div className='flex justify-between text-lg font-semibold'>
                                    <span className='font-medium text-[16px]'>Estimated total </span>
                                    <span className='font-semibold text-[16px]'>Dhs.  AED</span>
                                </div>
                                <div className='font-normal text-[#414143] text-[14px]'>
                                    <span>Taxes, discounts and shipping calculated at checkout. </span>

                                </div>
                                <button className='bg-[#01C6B5] cursor-pointer text-white py-3 px-6  font-semibold hover:opacity-90 transition w-full md:w-auto'>
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Addtocart;