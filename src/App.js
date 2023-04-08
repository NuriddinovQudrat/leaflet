import React from 'react'
import YourLocation from './your-location/YourLocation'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './navbar/Navbar'
import Markers from './markers/Markers'
import YourCountry from './your-country/YourCountry'
import Home from './home/Home'
import Geojson from './geojson/Geojson'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/your-location' element={<YourLocation />} />
        <Route path='/your-country' element={<YourCountry />} />
        <Route path='/markers' element={<Markers />} />
        <Route path='/geojson' element={<Geojson />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App