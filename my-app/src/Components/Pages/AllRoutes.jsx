import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Login/Login'
import HomePage from './HomePage/HomePage'
import About from "./About"
import Food from "./Foods/Food"
import Exercies from "./Exercies";
import Apps from "./Apps/Apps" ;
import Community from "./Community";
import Premium from "./Premium";

export default function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/food' element={<Food/>}/>
            <Route path='/exercise' element={<Exercies/>}/>
            <Route path='/apps' element={<Apps/>}/>
            <Route path='/community' element={<Community/>}/>
            <Route path='/premium' element={<Premium/>}/>
        </Routes>
    </div>
  )
}
