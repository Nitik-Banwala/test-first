

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
            name: '/Categories7.png',
            price: '€14.95',
            image: '/7.png',
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

        <div>
            <div className='max-w-285 mx-auto flex mt-35 flex-row justify-between'>
                <div>
                    <h1 className='font-semibold text-5xl'>Shop Our Categories</h1>
                    <p className='font-normal text-[#414143] text-[20px]'>Use this area to describe the collection.</p>
                </div>
                <button className='w-31 h-14.25 border-0 mt-5.25 bg-[#01C6B5] text-white'>View All </button>
            </div>
            <div className='grid grid-cols-4 gap-6 mt-10 max-w-285 mx-auto'>
                {carddata.map((cards) => (
                    <div key={cards.id}
                        className='w-66.75 h-75.75 shadow-sm hover:bg-[#0000004D] hover:scale-[1.04] transition-transform duration-200 '
                     >
                        <div className=' absolute  w-66.75 p-4  '>
                            {cards.sale && <div><h1 className='text-white  w-12.75 h-6.5 bg-[#01C6B5] flex justify-center items-center'>{cards.sale}</h1></div>}
                            </div>
                        <div className=' absolute flex justify-end w-66.75 p-4  '>
                            <div className='w-8.75 h-8.75  rounded-[50%] bg-[#FFFFFF] flex justify-center items-center' onClick={() => toggleLike(cards.id)}>
                                <svg
                                    width="22"
                                    height="20"
                                    viewBox="0 0 22 20"
                                    fill="none"
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
                        <div className='w-66.75 h-62.75 flex justify-center items-center bg-[#EFEFEF]'>
                            <img src={cards.image} alt="" className='hover:scale-[1.1] transition-transform duration-200'/>
                            <div className=' justify-center flex items  w-92 h-80 items-center absolute top-1/2 -translate-y-1/2 transition-all duration-200 linear group-hover:right-0'>
                                <button className=' cursor-pointer active:bg-[#007a70] bg-[#01C6B5] w-35.5 h-14.25 text-[20px] font-medium text-white '>Add to cart</button>
                            </div>
                        </div>
                        <div className='flex w-59.25  mx-auto my-4 justify-between'>
                            <h1>{cards.dics}</h1>
                            <p>{cards.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Categary