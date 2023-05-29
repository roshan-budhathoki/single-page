import React, {useEffect} from 'react'
import ServiceWeb from './serviceWeb'
import Header from '../shared/Header/headerDetail'
import Footer from '../shared/Footer/footerDetail'

const Services = () => {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <>
      <Header />
      <ServiceWeb />
      <Footer />
    </>
  )
}

export default Services