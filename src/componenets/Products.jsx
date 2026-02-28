import React, { useContext, useRef } from "react";
import Slider from "react-slick";
import LikeButton from "./common/Likebutton";
import Navbutton from "./common/Navbutton";
import { CartContext } from "../componenets/CartContext";
import { ProductsData } from "../utils/Data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Products = () => {
    const { addToCart } = useContext(CartContext);
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
        <div className="w-full">
            <div className="max-w-285 mx-auto mt-20 px-4">
                <div className='mb-8 sm:mb-12.5 flex flex-col sm:flex-row sm:justify-between gap-4  items-center sm:gap-0'>
                    <div>
                        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold'>Featured Products</h1>
                        <p className='text-base sm:text-lg md:text-[20px] font-normal mt-2 text-gray-600  sm:mt-2'>Use this area to describe the collection.</p>
                    </div>
                    <div className="hidden sm:block">
                        <Navbutton onNext={nextSlide} onPrev={prevSlide} />
                    </div>
                </div>

                <div className="overflow-hidden">
                    <Slider ref={sliderRef} {...settings}>
                        {ProductsData.map((product) => (
                            <div key={product.id} className='group gap-6'>
                                <div className='relative bg-[#F5F5F5] flex justify-center items-center max-w-89 h-110.25  hover:bg-[#0000004D]  transition-transform duration-200'>

                                    <div className='absolute top-0 left-0 right-0 p-3 sm:p-4 flex justify-between z-10'>
                                        <div className='bg-[#FFFFFF] px-3 sm:px-4 py-2 text-[20px] font-normal rounded-[88px]'>€{product.price}</div>
                                        <LikeButton />
                                    </div>
                                    <div className='absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-all duration-200 opacity-0 group-hover:opacity-100'>
                                        <button
                                            onClick={() => addToCart(product)}
                                            className='cursor-pointer active:bg-[#007a70] bg-[#01C6B5] px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-medium text-white hover:opacity-90 transition'
                                        >
                                            Add to cart
                                        </button>
                                    </div>

                                    <img src={product.image} alt={product.name} className='max-w-[248.71px] max-h-62.2 mx-auto' />
                                </div>

                                <h1 className='flex justify-center mt-4 sm:mt-6 font-normal text-lg sm:text-xl md:text-[24px] leading-snug'>
                                    {product.name}
                                </h1>
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="flex sm:hidden justify-center mt-6">
                    <Navbutton onNext={nextSlide} onPrev={prevSlide} />
                </div>
            </div>
        </div>
    );
};

export default Products;
