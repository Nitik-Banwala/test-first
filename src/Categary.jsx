

const Categary = () => {
 
    const carddata = [
        {
            id: 1,
            name: '/Categories1.png',
            price: '€14.95',
            image: '/1.png',
            dics: 'Insulated Sports Bottle ',
        },
        {
            id: 2,
            name: '/Categories2.png',
            price: '€14.95',
            image: '/CATEGORIES2.png',
            dics: 'Womens Long Wavy'
        },
        {
            id: 3,
            name: '/Categories3.png',
            price: '€14.95',
            image: '/CATEGORIES3.png',
            dics: 'Acupressure Mat'
        },
        {
            id: 4,
            name: '/Categories4.png',
            price: '€14.95',
            image: '/CATEGORIES4.png',
            dics: 'Liberty Pattern Socks',
            sale: 'sale'
        },
        {
            id: 5,
            name: '/Categories5.png',
            price: '€14.95',
            image: '/CATEGORIES5.png',
            dics: 'Mat Bag with Pocket'
        },
        {
            id: 6,
            name: '/Categories6.png',
            price: '€14.95',
            image: '/CATEGORIES6.png',
            dics: 'Tibetan Singing Bowls',
            sale: 'sale'
        },
        {
            id: 7,
            name: '/ccccc.png',
            price: '€14.95',
            image: '/categories7.png',
            dics: 'Soft Yoga Cushion'
        }, {
            id: 8,
            name: '/Categories8.png',
            price: '€14.95',
            image: '/CATEGORIES8.png',
            dics: 'Cotton Yoga Pants',
            sale: 'sale'
        },
        {
            id: 9,
            name: '/Categories9.png',
            price: '€14.95',
            image: '/CATEGORIES9.png',
            dics: 'Womens Long Wavy',
            sale: 'sale'
        },
        {
            id: 10,
            name: '/Categories10.png',
            price: '€14.95',
            image: '/CATEGORIES10.png',
            dics: 'Travel Yoga Bag'
        },
        {
            id: 11,
            name: '/Categories11.png',
            price: '€14.95',
            image: '/CATEGORIES11.png',
            dics: 'Yoga Workout Shorts',
            sale: 'sale'
        },
        {
            id: 12,
            name: '/Categories12.png',
            price: '€14.95',
            image: '/CATEGORIES12.png',
            dics: 'Cork Yoga Mat'
        },
    ];
    return (

        <div className="max-[640px]:flex max-[640px]:flex-col">
            <div className='max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-285 mx-auto flex mt-10 sm:mt-20 md:mt-28 lg:mt-35 flex-col sm:flex-row justify-between gap-4 px-4 sm:px-6 md:px-8 lg:px-0'>
                <div>
                    <h1 className='font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>Shop Our Categories</h1>
                    <p className='font-normal text-[#414143] text-sm sm:text-base md:text-lg lg:text-[20px] mt-2'>Use this area to describe the collection.</p>
                </div>
                <button className='w-full sm:w-auto px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-3 lg:h-14.25 border-0 bg-[#01C6B5] text-white font-medium hover:bg-[#00a896] transition-colors whitespace-nowrap'>View All </button>
            </div>
            <div className='grid grid-cols-1 max-w-360 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mt-6 sm:mt-8 md:mt-10  sm:max-w-2xl md:max-w-3xl lg:max-w-285 mx-auto px-4  sm:px-6 md:px-8 lg:px-0'>
                {carddata.map((cards) => (
                    <div key={cards.id}
                        className=' max-w-66.75 aspect-square sm:aspect-auto shadow-sm z-10 hover:bg-[#0000004D] hover:scale-[1.04] transition-transform duration-200 flex flex-col'
                     >
                        <div className='relative w-full h-1/3'>
                            {cards.sale && <div className='absolute z-10 top-2 left-2 sm:top-3 sm:left-3'><h1 className='text-white text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-1.5 bg-[#01C6B5] flex justify-center items-center rounded'>{cards.sale}</h1></div>}
                            <div className='absolute z-10 top-2 right-2 sm:top-3 sm:right-3 w-7 h-7 sm:w-8.75 sm:h-8.75 rounded-[50%] bg-[#FFFFFF] flex justify-center items-center cursor-pointer hover:bg-gray-100 transition-colors'>
                                <svg
                                    width="18"
                                    height="16"
                                    viewBox="0 0 22 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className='w-4 h-4 sm:w-5 sm:h-5'
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
                        <div className=' max-w-66.75 max-h-62.75 flex justify-center items-center bg-[#0000000D] relative group'>
                            <img src={cards.image} alt={cards.dics} className=' object-contain  h-61 w-full  bg-[#0000000D] '/>
                            <div className='hidden group-hover:flex justify-center items-center absolute inset-0'>
                                <button className='cursor-pointer active:bg-[#007a70] bg-[#01C6B5] px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base md:text-lg font-medium text-white rounded hover:bg-[#00a896] transition-colors'>Add to cart</button>
                            </div>
                        </div>
                        <div className='flex flex-row w-full h-1/6 px-3 py-2  max-w-66.75 justify-between'>
                            <h1 className='text-sm sm:text-base font-medium line-clamp-1'>{cards.dics}</h1>
                            <p className='text-sm sm:text-base font-semibold '>{cards.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Categary