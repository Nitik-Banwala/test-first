import React from 'react'
import Navbar from './componenets/common/Navbar'
import Slider from './componenets/Slider'
import Products from './componenets/Products'
import Categary from './componenets/Categary'
import Trending from './componenets/Trending'
import Service from './componenets/Service'
import Blog from './componenets/Blog'
import Accordion from './componenets/Accordian'
import Newsletter from './componenets/Newsletter'
import Footer from './componenets/Footer'


const Leanding = () => {
  return (
      <div className='max-w-360 mx-auto w-full'>
          <Navbar />
          <Slider />
          <Products/>
          <Categary />
          <Trending />
          <Service />
          <Blog />
          <Accordion />
          <Newsletter />
          <Footer />  
    </div>
  )
}

export default Leanding