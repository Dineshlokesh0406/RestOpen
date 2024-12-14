import React from 'react'
import NavBar from './components/NavBar/NavBar'
import SideBar from './components/SideBar/SideBar'
import {Routes, Route} from "react-router-dom"
import Add from './screens/Add/Add'
import List from './screens/List/List'  
import Order from './screens/Order/Order'
const App = () => {
  return (
    <div className="app">
      <NavBar/>
      <hr />
      <div className="app-component">
        <SideBar/>
        <Routes>
          <Route path='/add' element={<Add/>} ></Route>
          <Route path="/list" element={<List/>} ></Route>
          <Route path="/order" element={<Order/>} ></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
