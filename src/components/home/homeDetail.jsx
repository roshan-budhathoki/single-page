import React from 'react'
import Header from '../shared/Header/headerDetail'
import Footer from '../shared/Footer/footerDetail'
import HeroSection from './heroSection'
import WhyNumberic from './whyNumeric'
import FounderMessage from './founderMessage'
import OurPartner from './ourPartner'

const Home = () => {
  return (
    <>
        <Header />
        <HeroSection />
        <WhyNumberic />
        <FounderMessage />
        <OurPartner />
        <Footer />
    </>
  )
}

export default Home