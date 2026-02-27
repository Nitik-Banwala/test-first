import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Leanding from './Leanding'
import Addtocart from './componenets/Addtocart'
import { CartProvider } from './componenets/CartContext'


const Home = () => (
  <>
    <Leanding />
  </>
)


const router = createBrowserRouter([
  {
    path: "addtocart",
    element: <Addtocart />
  },
  {
    path: "/",
    element: <Home />
  },
])




function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  )
}

export default App