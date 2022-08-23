import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Login/Login'
import HomePage from './HomePage'

export default function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/login' element={<Login/>}/>
        </Routes>
    </div>
  )
}
