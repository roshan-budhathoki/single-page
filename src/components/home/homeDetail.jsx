import React from 'react'
import Header from '../shared/Header/heaaderDetail'
import Footer from '../shared/Footer/footerDetail'
import HeroSection from './heroSection'
import WhyNumberic from './whyNumeric'
import FounderMessage from './founderMessage'

const Home = () => {
  return (
    <>
        <Header />
        <HeroSection />
        <WhyNumberic />
        <FounderMessage />
        <Footer />
    </>
  )
}

export default Home