import React from 'react'
import Header from '../shared/Header/heaaderDetail'
import Footer from '../shared/Footer/footerDetail'
import HeroSection from './heroSection'
import WhyNumberic from './whyNumeric'

const Home = () => {
  return (
    <>
        <Header />
        <HeroSection />
        <WhyNumberic />
        <Footer />
    </>
  )
}

export default Home