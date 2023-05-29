import React, {useEffect} from 'react'
import Header from '../shared/Header/headerDetail'
import Footer from '../shared/Footer/footerDetail'
import CareerContent from './CareerContent'

const Career = () => {

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  
  return (
    <>
        <Header />
        <CareerContent />
        <Footer />
    </>
  )
}

export default Career