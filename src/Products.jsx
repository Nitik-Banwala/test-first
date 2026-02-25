import LikeButton from './Likebutton';

const Products = () => {

    const productsData = [
        { id: 1, name: 'Round Yoga Mat', price: '14.95', image: '/Products1.png' },
        { id: 2, name: 'Non-Slip Travel Yoga Mat', price: '14.95', image: '/Products2.png' },
        { id: 3, name: 'Foldable Yoga Mat', price: '31.95', image: '/Products3.png' }
    ];
    const addToCart = (product) => {
        const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
        const updatedCart = [...existingCart, product];
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    return (
        <div className="max-[640px]:flex max-[640px]:flex-col">
            <div className='max-w-285 h-full mx-auto mt-16 sm:mt-24 lg:mt-32.5 px-4 sm:px-6 lg:px-0 font-["Outfit",sans-serif]'>
                <div className='mb-8 sm:mb-12.5 flex flex-col sm:flex-row sm:justify-between gap-4 sm:gap-0'>
                    <div>
                        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold'>Featured Products</h1>
                        <p className='text-base sm:text-lg md:text-[20px] font-normal text-gray-600 mt-1 sm:mt-2'>Use this area to describe the collection.</p>
                    </div>
                    <div className='flex flex-row gap-3.5 mt-6.25'></div>
                </div>

                <div className='max-w-285 h-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6'>
                    {productsData.map((product) => (
                        <div key={product.id} className='group'>
                            <div className='relative bg-[#F5F5F5] flex justify-center items-center max-w-91 max-h-110.25 aspect-square hover:bg-[#0000004D] hover:scale-[1.05] transition-transform duration-200 overflow-hidden'>

                                <div className='absolute top-0 left-0 right-0 p-3 sm:p-4 flex justify-between z-10'>
                                    <div className='bg-[#FFFFFF] px-3 sm:px-4 py-2 rounded-[88px]'>€{product.price}</div>
                                    <LikeButton />
                                </div>
                                <div className='absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-all duration-200 opacity-0 group-hover:opacity-100'>
                                    <button
                                        onClick={() => addToCart(product)}
                                        className='cursor-pointer active:bg-[#007a70] bg-[#01C6B5] px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-medium text-white rounded hover:opacity-90 transition'
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
                </div>
            </div>
        </div>
    )
}

export default Products;