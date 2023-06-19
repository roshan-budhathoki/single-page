import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick';
import { Container, Box, Typography, IconButton } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import ourProduct from '../../assets/ourProduct.png';
import ourProduct1 from '../../assets/ourProduct1.png';
import ourProduct2 from '../../assets/ourProduct2.png';
import ourProduct3 from '../../assets/ourProduct3.png';
import ourProduct4 from '../../assets/ourProduct4.png';
import ourProduct5 from '../../assets/ourProduct5.png';


import { CustomServiceHeading } from '../utils/CustomTypography'

const OurProduct = () => {
    const sliderRef = React.useRef(null);
    const length = 6;
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

    const productDetail = [
        {
            title: "Clinical Trial Data Analysis",
            description: "NumericMind may be a relatively new name in the industry but we comprise of some of the most ...",
            imageUrl: ourProduct3
        },
        {
            title: "Biostatistics",
            description: "NumericMind may be a relatively new name in the industry but we comprise of some of the most ...",
            imageUrl: ourProduct1
        },
        {
            title: "Business Decision Support",
            description: "NumericMind may be a relatively new name in the industry but we comprise of some of the most ...",
            imageUrl: ourProduct2
        },
        {
            title: "Statistical Programming",
            description: "NumericMind may be a relatively new name in the industry but we comprise of some of the most ...",
            imageUrl: ourProduct
        },
        {
            title: "Data Visualization",
            description: "NumericMind may be a relatively new name in the industry but we comprise of some of the most ...",
            imageUrl: ourProduct5
        },
        {
            title: "Statistical Modeling",
            description: "NumericMind may be a relatively new name in the industry but we comprise of some of the most ...",
            imageUrl: ourProduct4
        },
    ]
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
                            {
                                productDetail.map((item, index) => 
                                    <Box key={index} maxWidth="18.32rem" marginTop="3rem" marginBottom="2rem" sx={{ borderRadius: "1rem", background: "#fff" }} borderRadius="1rem" boxShadow={2}>
                                        <Box borderRadius="1rem 1rem 0rem 0rem">
                                            <img src={item.imageUrl} alt="product display" style={{
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
                                                {item.title}
                                            </Typography>
                                            <Typography
                                                fontWeight={400}
                                                fontSize="0.875rem"
                                                lineHeight="22px"
                                                marginTop=".5rem"
                                            >
                                                {item.description}
                                            </Typography>
                                            <Box marginTop="1rem" display="flex" alignItems="center" color="#0070F0" fontWeight="600"> 
                                                <Link style={{textDecoration: "none", fontSize: "1rem", color: "#0070F0"}}>
                                                    Read More
                                                </Link>
                                                <ArrowForwardIosIcon fontSize="0.5rem" sx={{marginLeft: "1rem", fontWeight: "600"}} />
                                            </Box>
                                        </Box>
                                    </Box>
                                )
                            }
                        </Slider>
                    </Box>
                </Container>
                
            </Box>
        </Container>
    )
}

export default OurProduct