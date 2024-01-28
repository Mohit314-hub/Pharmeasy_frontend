import React from 'react'
import { Route, Routes } from 'react-router'
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import AllCatagory from './AllCatagory'
import Cart from './Cart'
import Home from './Home'
import IndivisualProduct from './IndivisualProduct'
import Products from './Products'
import ErrorComponents from '../Components/ErrorComponents'
import UploadSlider from '../Components/NavbarComponents/UploadSlider'
const AllRoutes = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/healthcare" element={<AllCatagory/>}/>
            <Route path="/upload" element={<UploadSlider/>}/>
            <Route path="/healthcare/products" element={<Products/>}/>
            <Route path="/healthcare/products/:id" element={<IndivisualProduct/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route  path="*" element={<ErrorComponents />} />
        </Routes>
        <Footer/>
    </div>
  )
}

export default AllRoutes