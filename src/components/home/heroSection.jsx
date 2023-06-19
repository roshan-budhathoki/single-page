import React from 'react';
import { Typography, Box, styled, Container } from '@mui/material';

import heroLogo1 from "../../assets/heroLogo1.png";
import heroLogo2 from "../../assets/heroLogo2.png";
import heroLogo3 from "../../assets/heroLogo3.png";
import heroLogo4 from "../../assets/heroLogo4.png";
import heroLogo5 from "../../assets/heroLogo5.png";
import heroLogoMain from "../../assets/heroLogoMain.png";

import ButtonComponent from '../utils/ButtonComponent';
import { useNavigate } from 'react-router-dom';


const CustomHeadingTypography = styled(Typography)({
    fontWeight: 600,
    
    fontFamily: "Poppins",
    color: "#1F284F",
    textAlign: {md: "start", xs: "center", sm: "center"}
})

const HeroSection = () => {

    const navigate = useNavigate();

    return (
        <Container>
            <Box sx={{
                paddingY: {md: "4rem", sm: "2rem", xs: "2rem"},
                paddingX: {md: "2rem", sm: "0rem", xs: "0rem"} 
                }} marginBottom="2.5rem">
                <Box display="flex" justifyContent="space-between">
                    <Box 
                        sx={{
                            display: {sm: "flex", md: "block", xs: "flex"},
                            flexDirection: "column",
                            alignItems: "center"
                        }}
                    >
                        <CustomHeadingTypography sx= {{ 
                            fontSize: {md: "3.125rem", xs: "2.25rem", sm: "2.25rem"},
                            textAlign: {md: "start", xs: "center", sm: "center"}
                        }}>Statistical</CustomHeadingTypography>
                        <CustomHeadingTypography sx={{
                            fontSize: {md: "3.125rem", xs: "2.25rem", sm: "2.25rem"},
                            textAlign: {md: "start", xs: "center", sm: "center"}
                        }}>Data Solutions</CustomHeadingTypography>
                        <Box sx={{
                            fontWeight: 400,
                            fontSize: "1.25rem",
                            fontFamily: "Poppins",
                            color: "#575757",
                            marginTop: "1rem",
                            width:  "29rem",
                            display: {sm: "none", xs: "none", md: "block" },
                        }}>
                            Supercharge your data-driven success with our comprehensive suite of services. 
                            From <b>biostatistics</b> to <b>clinical programming, statistical reporting</b> to <b>data analytics</b>,
                            we empower your business to make informed decisions and achieve remarkable results.

                        </Box>

                        {/* Mobile View  */}
                        <Box sx={{
                            fontWeight: 400,
                            display: {sm: "block", xs: "block", md: "none" },
                            textAlign:  "center",
                            fontSize: "1rem",
                            fontFamily: "Poppins",
                            color: "#575757",
                            marginTop: "2rem",
                            lineHeight: "2rem",
                        }}>
                            We offer statistical programming services to biotechnology, healthcare, 
                            biomedical and pharmaceutical companies across the globe. 
                        </Box>
                        <ButtonComponent bgcolor="#F05C26" marginTop={{ md: "1.5rem", sm: "1rem", xs: "1rem" }} sx={{
                            width: {md: "10rem", xs: "93%", sm: "93%"}
                            }}
                            onClick={() => navigate("/about")}
                        >
                            Learn More
                        </ButtonComponent>
                    </Box>
                    <Box sx={{ display: { xs : "none", sm: "none", md: "flex"}}} position="relative">
                        <Box className="fade-in-bl">
                            <img src={heroLogoMain}  alt="hero section" style={{ position: "absolute" }}/>
                        </Box>
                        <Box className="fade-in-fwd">
                            <img src={heroLogo1} alt="hero section" style={{ marginBottom: "1rem"}} />
                        </Box>
                        <Box className="fade-in-fwd" style={{ position: "absolute" }}>
                            <img src={heroLogo2} alt="hero section" />
                        </Box>
                        <Box className="fade-in-fwd" style={{ position: "absolute" }}>
                            <img src={heroLogo3} alt="hero section" />
                        </Box>
                        <Box className="fade-in-fwd" style={{ position: "absolute" }}>
                            <img src={heroLogo4} alt="hero section" />
                        </Box>
                        <Box className="firstImage1" style={{ position: "absolute" }}>
                            <img src={heroLogo5} alt="hero section"/>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default HeroSection