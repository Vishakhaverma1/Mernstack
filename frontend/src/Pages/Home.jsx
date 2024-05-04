import React from 'react'
// import HeroSection from '../components/HeroSection'
import Navbar from '../components/HomePages/Navbar';
import Goals from '../components/HomePages/Goals';
import About from '../components/HomePages/About';
import Carousel from '../components/HomePages/Carousel';
import Services from '../components/HomePages/Services';
import Slider from '../components/HomePages/Slider';
import Footer from '../components/HomePages/Footer';
import Header from '../components/HomePages/Header';

const Home = () => {
  return (
    <>
      <Navbar/>
      <Header/>
      <Goals/>
      <About/>
      <Carousel/>
      <Services/>
      <Slider/>
      <Footer/>
    </>
  )
}

export default Home;
