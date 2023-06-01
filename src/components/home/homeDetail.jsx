import React, {useEffect} from 'react'
import Header from '../shared/Header/headerDetail'
import Footer from '../shared/Footer/footerDetail'
import HeroSection from './heroSection'
import WhyNumeric from './whyNumeric'
import FounderMessage from './founderMessage'
import OurPartner from './ourPartner'
import OurProduct from './ourProduct'
import OurNews from './ourNews'

const Home = () => {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <>
        <Header />
        <HeroSection />
        <WhyNumeric />
        <OurProduct />
        <OurNews />
        <FounderMessage />
        <OurPartner />
        <Footer />
    </>
  )
}

export default Home