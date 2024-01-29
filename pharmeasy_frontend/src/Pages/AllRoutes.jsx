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
import SubCategory from '../Components/SubCategory/SubCat'
import SingleProduct from '../Components/SubCategory/SingleProduct'
import CartProduct from '../Components/CartComponents/CartProductCard'
import Payment from '../Components/CartComponents/PaymentOption'
import PurchaseDetails from '../Components/CartComponents/PurchaseDetails'
const AllRoutes = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/healthcare" element={<AllCatagory/>}/>
            <Route path="/upload" element={<UploadSlider/>}/>
            <Route path="/SubCategory" element={<SubCategory/>}/>
            <Route path="/SingleProduct" element={<SingleProduct/>}/>
            <Route path="/CartProduct" element={<CartProduct/>}/>
            <Route path="/paymentoptions" element={<Payment/>}/>
            <Route path="/purchasedetails" element={<PurchaseDetails/>}/>
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