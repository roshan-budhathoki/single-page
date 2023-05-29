import React, {useEffect} from 'react'
import Header from '../shared/Header/headerDetail';
import Footer from '../shared/Footer/footerDetail';
import AboutContent from './aboutContent';

const About = () => {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <>
      <Header />
      <AboutContent />
      <Footer />
    </>

  )
}

export default About;