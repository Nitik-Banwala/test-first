import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Navbar from './Navbar'
import Slider from './Slider'
import Products from './Products'
import Categary from './Categary'
import Trending from './Trending'
import Blog from './Blog'
import Accordion from './Accordian'
import Newsletter from './Newsletter'
import Footer from './Footer'
import Addtocart from './Addtocart'
import Service from './Service'

const Home = () => (
  <>
    <Navbar />
    <Slider />
    <Products />
    <Categary />
    <Trending />
    <Service/>
    <Blog />
    <Accordion />
    <Newsletter />
    <Footer />
  </>
)


const router = createBrowserRouter([
  {
    path: "addtocart",
    element: <Addtocart />
  },
  {
    path: "/",
    element: <Home/>
  },


])

function App() {
  return <RouterProvider router={router} />
}

export default App