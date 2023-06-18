import React, {useEffect} from 'react'
import Header from '../shared/Header/headerDetail';
import Footer from '../shared/Footer/footerDetail';
import AboutContent from './aboutContent';
import { useParams } from 'react-router-dom';

const About = () => {
  const {id} = useParams();
  useEffect(() => {
    if(id === "wordFromCeo"){
      window.scrollTo({top: 1700, left: 0, behavior: 'smooth'});
    }else{
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }
  }, [id]);
  return (
    <>
      <Header />
      <AboutContent />
      <Footer />
    </>

  )
}

export default About;