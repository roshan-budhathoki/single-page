import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick';
import { Container, Box, Typography, IconButton } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import ourProduct from '../../assets/ourProduct.png'
import { CustomServiceHeading } from '../utils/CustomTypography'

const OurProduct = () => {
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
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return (
        <Container>
            <Box display={{ md: "flex", sm: "none", xs: "none"}} position="relative">
                <Box width="100%" position="absolute" display="flex" justifyContent="space-between">
                    <IconButton onClick={handlePrevClick} sx={{  
                            border: currentIndex === 0 ? "2px solid #898D95" : "2px solid #0070F0" , 
                            height: "2.7rem",
                            marginTop: "28%",
                            zIndex: "10" 
                        }}
                        disabled={currentIndex === 0}
                    >
                        <ArrowBackIcon sx={{ color: currentIndex === 0 ? "#898D95" : "#0070F0"}}/>
                    </IconButton>
                    <IconButton onClick={handleNextClick} sx={{  
                            border: currentIndex === length - 3 ? "2px solid #898D95" : "2px solid #0070F0" , 
                            height: "2.7rem",
                            marginTop: "28%",
                            zIndex: "10" 
                        }}
                        disabled={currentIndex === length - 3}
                    >
                        <ArrowForwardIcon sx={{ color: currentIndex === length - 3 ? "#898D95" : "#0070F0"  }}/>
                    </IconButton>
                </Box>
                <Container>
                    <Box padding="2rem" marginBottom="1rem">
                        <CustomServiceHeading marginTop="2rem">
                            Our Products & Services
                        </CustomServiceHeading>
                        <Slider ref={sliderRef} {...settings}>
                            <Box maxWidth="18.32rem" marginTop="3rem" marginBottom="2rem" sx={{ borderRadius: "1rem", background: "#fff" }} borderRadius="1rem" boxShadow={2}>
                                <Box borderRadius="1rem 1rem 0rem 0rem">
                                    <img src={ourProduct} alt="product display" style={{
                                        borderRadius: "1rem 1rem 0rem 0rem"
                                    }} />
                                </Box>
                                <Box padding="2rem 1rem" >
                                    <Typography
                                        fontWeight={600}
                                        fontSize="1.125rem"
                                        lineHeight="1.625rem"
                                        color="#17181A"
                                    >
                                        Clinical Trial Data Analysis 1
                                    </Typography>
                                    <Typography
                                        fontWeight={400}
                                        fontSize="0.875rem"
                                        lineHeight="22px"
                                        marginTop=".5rem"
                                    >
                                        Numeric Mind may be a relatively new name 
                                        in the industry but we comprise of some of the most ...
                                    </Typography>
                                    <Box marginTop="1rem" display="flex" alignItems="center" color="#0070F0" fontWeight="600"> 
                                        <Link style={{textDecoration: "none", fontSize: "1rem", color: "#0070F0"}}>
                                            Read More
                                        </Link>
                                        <ArrowForwardIosIcon fontSize="0.5rem" sx={{marginLeft: "1rem", fontWeight: "600"}} />
                                    </Box>
                                </Box>
                            </Box>
                            <Box maxWidth="18.32rem" marginTop="3rem"  marginBottom="2rem" sx={{ borderRadius: "1rem", background: "#fff" }} borderRadius="1rem" boxShadow={2}>
                                <Box borderRadius="1rem 1rem 0rem 0rem">
                                    <img src={ourProduct} alt="product display" style={{
                                        borderRadius: "1rem 1rem 0rem 0rem"
                                    }} />
                                </Box>
                                <Box padding="2rem 1rem" >
                                    <Typography
                                        fontWeight={600}
                                        fontSize="1.125rem"
                                        lineHeight="1.625rem"
                                        color="#17181A"
                                    >
                                        Clinical Trial Data Analysis 2
                                    </Typography>
                                    <Typography
                                        fontWeight={400}
                                        fontSize="0.875rem"
                                        lineHeight="22px"
                                        marginTop=".5rem"
                                    >
                                        Numeric Mind may be a relatively new name 
                                        in the industry but we comprise of some of the most ...
                                    </Typography>
                                    <Box marginTop="1rem" display="flex" alignItems="center" color="#0070F0" fontWeight="600"> 
                                        <Link style={{textDecoration: "none", fontSize: "1rem", color: "#0070F0"}}>
                                            Read More
                                        </Link>
                                        <ArrowForwardIosIcon fontSize="0.5rem" sx={{marginLeft: "1rem", fontWeight: "600"}} />
                                    </Box>
                                </Box>
                            </Box>
                            <Box maxWidth="18.32rem" marginTop="3rem"  marginBottom="2rem" sx={{ borderRadius: "1rem", background: "#fff" }} borderRadius="1rem" boxShadow={2}>
                                <Box borderRadius="1rem 1rem 0rem 0rem">
                                    <img src={ourProduct} alt="product display" style={{
                                        borderRadius: "1rem 1rem 0rem 0rem"
                                    }} />
                                </Box>
                                <Box padding="2rem 1rem" >
                                    <Typography
                                        fontWeight={600}
                                        fontSize="1.125rem"
                                        lineHeight="1.625rem"
                                        color="#17181A"
                                    >
                                        Clinical Trial Data Analysis 3
                                    </Typography>
                                    <Typography
                                        fontWeight={400}
                                        fontSize="0.875rem"
                                        lineHeight="22px"
                                        marginTop=".5rem"
                                    >
                                        Numeric Mind may be a relatively new name 
                                        in the industry but we comprise of some of the most ...
                                    </Typography>
                                    <Box marginTop="1rem" display="flex" alignItems="center" color="#0070F0" fontWeight="600"> 
                                        <Link style={{textDecoration: "none", fontSize: "1rem", color: "#0070F0"}}>
                                            Read More
                                        </Link>
                                        <ArrowForwardIosIcon fontSize="0.5rem" sx={{marginLeft: "1rem", fontWeight: "600"}} />
                                    </Box>
                                </Box>
                            </Box>
                            <Box maxWidth="18.32rem" marginTop="3rem"  marginBottom="2rem" sx={{ borderRadius: "1rem", background: "#fff" }} borderRadius="1rem" boxShadow={2}>
                                <Box borderRadius="1rem 1rem 0rem 0rem">
                                    <img src={ourProduct} alt="product display" style={{
                                        borderRadius: "1rem 1rem 0rem 0rem"
                                    }} />
                                </Box>
                                <Box padding="2rem 1rem" >
                                    <Typography
                                        fontWeight={600}
                                        fontSize="1.125rem"
                                        lineHeight="1.625rem"
                                        color="#17181A"
                                    >
                                        Clinical Trial Data Analysis 4
                                    </Typography>
                                    <Typography
                                        fontWeight={400}
                                        fontSize="0.875rem"
                                        lineHeight="22px"
                                        marginTop=".5rem"
                                    >
                                        Numeric Mind may be a relatively new name 
                                        in the industry but we comprise of some of the most ...
                                    </Typography>
                                    <Box marginTop="1rem" display="flex" alignItems="center" color="#0070F0" fontWeight="600"> 
                                        <Link style={{textDecoration: "none", fontSize: "1rem", color: "#0070F0"}}>
                                            Read More
                                        </Link>
                                        <ArrowForwardIosIcon fontSize="0.5rem" sx={{marginLeft: "1rem", fontWeight: "600"}} />
                                    </Box>
                                </Box>
                            </Box>
                            <Box maxWidth="18.32rem" marginTop="3rem"  marginBottom="2rem" sx={{ borderRadius: "1rem", background: "#fff" }} borderRadius="1rem" boxShadow={2}>
                                <Box borderRadius="1rem 1rem 0rem 0rem">
                                    <img src={ourProduct} alt="product display" style={{
                                        borderRadius: "1rem 1rem 0rem 0rem"
                                    }} />
                                </Box>
                                <Box padding="2rem 1rem" >
                                    <Typography
                                        fontWeight={600}
                                        fontSize="1.125rem"
                                        lineHeight="1.625rem"
                                        color="#17181A"
                                    >
                                        Clinical Trial Data Analysis 5
                                    </Typography>
                                    <Typography
                                        fontWeight={400}
                                        fontSize="0.875rem"
                                        lineHeight="22px"
                                        marginTop=".5rem"
                                    >
                                        Numeric Mind may be a relatively new name 
                                        in the industry but we comprise of some of the most ...
                                    </Typography>
                                    <Box marginTop="1rem" display="flex" alignItems="center" color="#0070F0" fontWeight="600"> 
                                        <Link style={{textDecoration: "none", fontSize: "1rem", color: "#0070F0"}}>
                                            Read More
                                        </Link>
                                        <ArrowForwardIosIcon fontSize="0.5rem" sx={{marginLeft: "1rem", fontWeight: "600"}} />
                                    </Box>
                                </Box>
                            </Box>
                        </Slider>
                    </Box>
                </Container>
                
            </Box>
        </Container>
    )
}

export default OurProduct