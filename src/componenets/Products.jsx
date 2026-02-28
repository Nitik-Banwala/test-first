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
            <div className="max-w-7xl mx-auto mt-20 px-4">
                <div className="mb-8 flex justify-between items-center">
                    <h1 className="text-2xl sm:text-3xl font-semibold">Featured Products</h1>
                    <div className="hidden sm:block">
                        <Navbutton onNext={nextSlide} onPrev={prevSlide} />
                    </div>
                </div>
                <div className="overflow-hidden">
                    <Slider ref={sliderRef} {...settings}>
                        {ProductsData.map((product) => (
                            <div key={product.id} className="px-2 sm:px-3 max-w-285 flex justify-center items-center">
                                <div className=" flex flex-col ">
                                    <div className="bg-[#F5F5F5] group  flex justify-center items-center max-w-91 max-h-123 aspect-3/4">
                                        <div className="absolute top-0 left-0 right-0 p-3 flex justify-between items-center z-10">
                                            <div className="bg-white px-3 py-1.5 rounded-full text-sm sm:text-base font-medium shadow-sm">
                                                €{product.price}
                                            </div>
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
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className=" max-w-[284.71px] max-h-62.25 object-contain"
                                        />
                                    </div>
                                    <h2 className="text-center mt-4 text-base sm:text-lg font-medium">
                                        {product.name}
                                    </h2>
                                </div>
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
