import React from 'react'
import { Container, Typography, Box, Link, IconButton } from '@mui/material'

import newMobileLogo from "../../assets/newsSample2.png"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Slider from 'react-slick';

const OurNews = () => {
    const sliderRef = React.useRef(null);
    const length = 5;
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const handleNextClick = () => {
        if(currentIndex < length - 3){
            setCurrentIndex((currentIndex) => currentIndex + 1);
        }
        sliderRef.current.slickNext();
    };
    
    const handlePrevClick = () => {
        if(currentIndex > 0){
            setCurrentIndex((currentIndex) => currentIndex - 1);
        }
        sliderRef.current.slickPrev();
    };

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
    };

  return (
    <Box paddingY="2rem" sx={{
            backgroundImage: "linear-gradient(to right bottom, #f3f1fe, #f0f3ff, #eef4fe, #eef6fd, #eef7fc)",
            display: { md: "block", sm: "none", xs: "none"}
        }}>
        <Container>
                <Box width="100%" display="flex" justifyContent="space-between" alignItems="center">
                    <Typography fontWeight={700} fontSize="2.5rem" color="#1F284F" marginLeft="1.4rem" >
                        Latest News
                    </Typography>
                    <Link href='/news' sx={{textDecoration: "none"}}>
                        <Typography fontWeight={600} fontSize="1.125rem" color="#1F284F" marginRight="2.4rem">
                            See all news
                        </Typography>
                    </Link>
                </Box>
                <Container sx={{paddingTop: "2rem"}}>
                    <Slider ref={sliderRef} {...settings}>
                        <Box display="flex !important">
                            <Box>
                                <img src={newMobileLogo} alt="news section" />
                            </Box>
                            <Box width="22rem" marginLeft="1rem">
                                <Typography fontWeight={600} fontSize="1.125rem" >
                                    New Malaria Vaccine Shows Most Efficacy of Any to Date: Small Trial
                                </Typography>
                                <Typography fontSize="1rem" fontWeight={400} marginTop=".5rem">
                                    We’re a team made up of individuals, several with unconventional career paths military ...   
                                </Typography>
                                <Box marginTop="1rem">
                                    <Link href="#">
                                        Visit Link
                                    </Link>
                                </Box>
                            </Box>
                        </Box>
                        <Box display="flex !important">
                            <Box>
                                <img src={newMobileLogo} alt="news section" />
                            </Box>
                            <Box width="22rem" marginLeft="1rem">
                                <Typography fontWeight={600} fontSize="1.125rem" >
                                    New Malaria Vaccine Shows Most Efficacy of Any to Date: Small Trial
                                </Typography>
                                <Typography fontSize="1rem" fontWeight={400} marginTop=".5rem">
                                    We’re a team made up of individuals, several with unconventional career paths military ...   
                                </Typography>
                                <Box marginTop="1rem">
                                    <Link href="#">
                                        Visit Link
                                    </Link>
                                </Box>
                            </Box>
                        </Box>
                        <Box display="flex !important">
                            <Box>
                                <img src={newMobileLogo} alt="news section" />
                            </Box>
                            <Box width="22rem" marginLeft="1rem">
                                <Typography fontWeight={600} fontSize="1.125rem" >
                                    New Malaria Vaccine Shows Most Efficacy of Any to Date: Small Trial
                                </Typography>
                                <Typography fontSize="1rem" fontWeight={400} marginTop=".5rem">
                                    We’re a team made up of individuals, several with unconventional career paths military ...   
                                </Typography>
                                <Box marginTop="1rem">
                                    <Link href="#">
                                        Visit Link
                                    </Link>
                                </Box>
                            </Box>
                        </Box>
                    </Slider>
                    <Box width="100%" display="flex" flexDirection="row-reverse" marginTop="1rem">
                        <IconButton onClick={handleNextClick} sx={{  
                                border: currentIndex === length - 3 ? "2px solid #898D95" : "2px solid #0070F0" , 
                                height: "2.7rem",
                                zIndex: "10",
                            }}
                            disabled={currentIndex === length - 3}
                        >
                            <ArrowForwardIcon sx={{ color: currentIndex === length - 3 ? "#898D95" : "#0070F0"  }}/>
                        </IconButton>
                        <IconButton onClick={handlePrevClick} sx={{  
                                border: currentIndex === 0 ? "2px solid #898D95" : "2px solid #0070F0" , 
                                height: "2.7rem",
                                zIndex: "10",
                                marginLeft: "1rem"
                            }}
                            disabled={currentIndex === 0}
                        >
                            <ArrowBackIcon sx={{ color: currentIndex === 0 ? "#898D95" : "#0070F0"}}/>
                        </IconButton>
                        
                    </Box>
                </Container>
        </Container>
    </Box>
  )
}

export default OurNews