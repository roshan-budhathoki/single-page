import React, {useEffect} from 'react'
import { Container } from '@mui/material'
import SingleCareerWeb from './SingleCareerWeb'
import Header from '../shared/Header/headerDetail'
import Footer from '../shared/Footer/footerDetail'
import SingleCareerMobile from './SingleCareerMobile'

const SingleCareer = () => {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <>
        <Header />
        <Container sx={{ display: {md: "block", sm: "none", xs: "none"}}}>
            <SingleCareerWeb />
        </Container>
        <Container sx={{ display: {md: "none", sm: "block", xs: "block"}}}>
            <SingleCareerMobile />
        </Container>
        <Footer />
    </>
  )
}

export default SingleCareer