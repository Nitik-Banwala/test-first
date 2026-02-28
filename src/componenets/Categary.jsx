import { Carddata } from "../utils/Data";
const Categary = () => {

    const addToCart = (cards) => {
        const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
        const updatedCart = [...existingCart, cards];
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };
    return (

        <div className="max-[640px]:flex px-4 max-[640px]:flex-col">
            <div className='max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-285 mx-auto flex mt-10 sm:mt-20 md:mt-28 lg:mt-32.5 flex-col sm:flex-row justify-between gap-4 px-4 sm:px-6 md:px-8 lg:px-0'>
                <div>
                    <h1 className='font-semibold  text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>Shop Our Categories</h1>
                    <p className='font-normal text-[#414143] text-sm sm:text-base md:text-lg lg:text-[20px]  mt-2'>Use this area to describe the collection.</p>
                </div>
                <button className='w-full sm:w-auto px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-3 lg:h-14.25 border-0 bg-[#01C6B5] text-white font-medium hover:bg-[#00a896] transition-colors whitespace-nowrap cursor-pointer '>View All </button>
            </div>
            <div className='grid grid-cols-1  max-w-360 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mt-6 sm:mt-8 md:mt-12.5  sm:max-w-2xl md:max-w-3xl lg:max-w-285 mx-auto px-4  sm:px-6 md:px-8 lg:px-0'>
                {Carddata.map((cards) => (
                    <div key={cards.id}
                        className=' max-w-66.75 max-h-75.75 shadow-sm z-10  transition-transform duration-200 flex flex-col'
                     >
                        <div className='relative w-full h-1/3'>
                            {cards.sale && <div className='absolute z-10 top-2 left-2 sm:top-3 sm:left-3'><h1 className='text-white text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-1.5 bg-[#01C6B5] flex justify-center items-center '>{cards.sale}</h1></div>}
                            <div className='absolute z-10 top-2 right-2 sm:top-3 sm:right-3 w-7 h-7 sm:w-8.75 sm:h-8.75 rounded-[50%] bg-[#FFFFFF] flex justify-center items-center cursor-pointer hover:bg-gray-100 transition-colors'>
                                <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.00116 13.8582L8.91204 13.9473L8.814 13.8582C4.58079 10.0171 1.78241 7.4772 1.78241 4.90162C1.78241 3.11921 3.11921 1.78241 4.90162 1.78241C6.27407 1.78241 7.61088 2.67361 8.08322 3.88565H9.74086C10.2132 2.67361 11.55 1.78241 12.9225 1.78241C14.7049 1.78241 16.0417 3.11921 16.0417 4.90162C16.0417 7.4772 13.2433 10.0171 9.00116 13.8582ZM12.9225 0C11.3718 0 9.88345 0.721875 8.91204 1.8537C7.94062 0.721875 6.45231 0 4.90162 0C2.15671 0 0 2.1478 0 4.90162C0 8.26146 3.03009 11.0153 7.61979 15.1772L8.91204 16.3536L10.2043 15.1772C14.794 11.0153 17.8241 8.26146 17.8241 4.90162C17.8241 2.1478 15.6674 0 12.9225 0Z" fill="#01C6B5" />
                                </svg>

                            </div>
                        </div>
                        <div className=' hover:bg-[#0000004D] max-w-66.75 max-h-62.75 flex justify-center items-center bg-[#0000000D] relative group'>
                            <img src={cards.image} alt={cards.dics} className=' object-contain  h-61 w-full  bg-[#0000000D] '/>
                            <div className='hidden group-hover:flex justify-center items-center absolute inset-0'>
                                <button onClick={() => addToCart(cards)} className='cursor-pointer active:bg-[#007a70] bg-[#01C6B5] px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base md:text-lg font-medium text-white hover:bg-[#00a896] transition-colors'>Add to cart</button>
                            </div>
                        </div>
                        <div className='flex flex-row w-full h-1/6 px-3 py-2  max-w-66.75 justify-between'>
                            <h1 className='text-sm sm:text-base font-semibold text-[#414143] line-clamp-1'>{cards.dics}</h1>
                            <p className='text-sm sm:text-base font-semibold text-[#414143] '>€{cards.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Categary