
import LikeButton from './Likebutton';

const Products = () => {

    const productsData = [
        {
            id: 1,
            name: 'Round Yoga Mat',
            price: '€14.95',
            image: '/Products1.png'
        },
        {
            id: 2,
            name: 'Non-Slip Travel Yoga Mat',
            price: '€14.95',
            image: '/Products2.png'
        },
        {
            id: 3,
            name: 'Foldable Yoga Mat',
            price: '€31.95',
            image: '/Products3.png'
        }
    ];
    return (
        <div>
            <div className='max-w-285 h-full mx-auto mt-32.5 font-["Outfit",sans-serif]'>
                <div className='mb-12.5 flex flex-row max-w-285 justify-between '>
                    <div>
                        <h1 className='text-5xl font-semibold'>Featured Products</h1>
                        <p className='text-[20px] font-normal'>Use this area to describe the collection.</p>
                    </div>
                    <div className='flex flex-row gap-3.5 mt-6.25'>
                       
                    </div>
                </div>
                <div className='max-w-285 h-full mx-auto flex flex-row gap-6'>
                    {productsData.map((product) => (
                        <div key={product.id}>
                            <div className='bg-[#F5F5F5] w-91 h-110.25 hover:bg-[#0000004D] hover:scale-[1.1] transition-transform duration-200'>
                                <div className='w-79 justify-between mx-auto pt-6 flex flex-row'>
                                    <div className='w-25 h-11 rounded-[88px] bg-[#FFFFFF] flex justify-center items-center'>{product.price}</div>
                                    <LikeButton />
                                </div>
                                <div className='justify-center flex items w-92 h-80 items-center absolute top-1/2 -translate-y-1/2 transition-all duration-200 linear group-hover:right-0'>
                                    <button className='cursor-pointer active:bg-[#007a70] bg-[#01C6B5] w-35.5 h-14.25 text-[20px] font-medium text-white'>Add to cart</button>
                                </div>
                                <img src={product.image} alt={product.name} className='mx-auto mt-13' />
                            </div>
                            <h1 className='flex justify-center mt-6 font-normal text-[24px]'>{product.name}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Products