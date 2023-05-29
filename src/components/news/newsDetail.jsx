import React, {useEffect} from 'react'
import Header from '../shared/Header/headerDetail'
import Footer from '../shared/Footer/footerDetail'
import NewsContent from './newsContent'

const News = () => {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <>
        <Header/> 
        <NewsContent />
        <Footer />
    </>
  )
}

export default News