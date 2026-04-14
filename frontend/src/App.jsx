
import './App.css'
import { Navbar } from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Shop from './Pages/Shop'
import Cart from './Pages/Cart'
import LoginSignUp from './Pages/LoginSignUp'
import Footer from '../src/Components/Footer/Footer'
import mens_banner from './Components/assets/banner_mens.png'
import women_banner from './Components/assets/banner_women.png'
import kid_banner from './Components/assets/banner_kids.png'

function App() {
  
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes> 
        <Route path='/' element={<Shop/>} />
        <Route path='/men' element={<ShopCategory banner={mens_banner} category="men"/>} />
        <Route path='/women' element={<ShopCategory banner={women_banner} category="women"/>} />
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>} />
        <Route path="product" element={<Product />} />
        <Route path=":productId" element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<LoginSignUp />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
