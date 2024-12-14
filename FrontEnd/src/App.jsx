import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './screens/Home/Home'
import Cart from './screens/Cart/Cart'
import PlaceOrder from './screens/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopUp/LoginPopUp'
import{useState} from 'react'

const App = () => {
  const[showLogin,setShowLogin]=useState(false)
  return (
    <>
    {
      showLogin ?<LoginPopup setShowLogin={setShowLogin}/>:<></>
    }
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Cart' element={<Cart/>} />
      <Route path='/Order' element={<PlaceOrder/>} />
      </Routes>
    </div>
    <Footer/>
    </>
  )
}
export default App