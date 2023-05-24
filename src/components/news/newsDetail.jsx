import React from 'react'
import Header from '../shared/Header/headerDetail'
import Footer from '../shared/Footer/footerDetail'
import NewsContent from './newsContent'

const News = () => {
  return (
    <>
        <Header/> 
        <NewsContent />
        <Footer />
    </>
  )
}

export default News