import React from 'react'
import Navbar from './components/navbar/Navbar'
import Slider from './components/slider/Slider'
import About from './components/about/About'
import Companies from './components/companies/Companies';
import Properties from './components/properties/Properties';
import Footer from './components/footer/Footer';

export default function Home() {
  return (
    <div>
        <Navbar />
        <Slider />
        <Companies />
        <About />
        <Properties />
        <Footer />
    </div>
  )
}
