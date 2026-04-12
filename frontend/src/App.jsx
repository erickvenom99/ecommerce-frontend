
import './App.css'
import { Navbar } from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import ShopCategory from './Pages/ShopCategory'

function App() {
  
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop/>} />
        <Route path='/men' element={<ShopCategory category="men"/>} />
        <Route path='/women' element={<ShopCategory category="men"/>} />
        <Route path='/kids' element={<ShopCategory category="kids"/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
