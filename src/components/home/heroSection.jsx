import React from 'react';
import { Typography, Box, styled, Container } from '@mui/material';
import heroNimble from "../../assets/heroNimble.png";
import ButtonComponent from '../utils/ButtonComponent';
const HeroSection = () => {
    const CustomHeadingTypography = styled(Typography)({
        fontWeight: 600,
        
        fontFamily: "Poppins",
        color: "#1F284F",
        textAlign: {md: "start", xs: "center", sm: "center"}
    })
    
    return (
        <Container>
            <Box sx={{
                paddingTop: {md: "4rem", sm: "2rem", xs: "2rem"},
                paddingX: {md: "2rem", sm: "0rem", xs: "0rem"} 
                }} marginBottom="2.5rem">
                <Box display="flex" justifyContent="space-between">
                    <Box>
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
                            marginTop: "2rem",
                            width:  "30rem",
                            display: {sm: "none", xs: "none", md: "block" },
                        }}>
                            We offer statistical programming services to biotechnology, healthcare, 
                            biomedical and pharmaceutical companies across the globe. 
                            Our services include <b>
                                biostatistics, clinical programming, statistical reporting and 
                                data analytics.
                            </b>
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
                            width:  "21rem",
                        }}>
                            We offer statistical programming services to biotechnology, healthcare, 
                            biomedical and pharmaceutical companies across the globe. 
                        </Box>
                        <ButtonComponent bgcolor="#F05C26" marginTop="1rem" sx={{
                            width: {md: "10rem", xs: "93%", sm: "93%"}
                        }}>
                            Learn More
                        </ButtonComponent>
                    </Box>
                    <Box sx={{ display: { xs : "none", sm: "none", md: "flex"}}}>
                        <img src={heroNimble} height= "440px" width="473px" alt="heroImage Section" />
                    </Box>
                </Box>
                <Box marginTop="3.9rem" 
                    sx={{
                        display: {xs: "none", sm: "none", md: "flex"}
                    }}
                    justifyContent="space-between" flexWrap="wrap">
                    <Box
                        borderRadius="16px" 
                        width="18rem"
                        height="8.5rem"
                        sx={{
                            background: "#fbfbfb80",
                            border:"1px solid #c4c4c466",
                        }}
                        boxShadow="2px 2px 2px 1px grey"
                    >
                        <CustomHeadingTypography fontSize="1.5rem !important" marginLeft="1.5rem" marginTop="2.2rem">20</CustomHeadingTypography>
                        <Box display="flex" marginTop="1rem">
                            <Box marginLeft="1.5rem" height="2rem" width=".2rem" bgcolor="#1F284F"></Box>
                            <Typography fontSize="0.8rem" marginLeft="1.125rem"  alignItems="center" display="flex" fontWeight="400" fontFamily="Poppins">Happy Client</Typography>
                        </Box>
                    </Box>
                    <Box
                        borderRadius="16px" 
                        width="18rem"
                        height="8.5rem"
                        sx={{
                            background: "#fbfbfb80",
                            border:"1px solid #c4c4c466",
                        }}
                        boxShadow="2px 2px 2px 1px grey"
                    >
                        <CustomHeadingTypography fontSize="1.5rem !important" marginLeft="1.5rem" marginTop="2.2rem">30</CustomHeadingTypography>
                        <Box display="flex" marginTop="1rem">
                            <Box marginLeft="1.5rem" height="2rem" width=".2rem" bgcolor="#1F284F"></Box>
                            <Typography fontSize="0.8rem" marginLeft="1.125rem"  alignItems="center" display="flex" fontWeight="400" fontFamily="Poppins">Successful Cases</Typography>
                        </Box>
                    </Box>
                    <Box
                        borderRadius="16px" 
                        width="18rem"
                        height="8.5rem"
                        sx={{
                            background: "#fbfbfb80",
                            border:"1px solid #c4c4c466",
                        }}
                        boxShadow="2px 2px 2px 1px grey"
                    >
                        <CustomHeadingTypography fontSize="1.5rem !important" marginLeft="1.5rem" marginTop="2.2rem">6</CustomHeadingTypography>
                        <Box display="flex" marginTop="1rem">
                            <Box marginLeft="1.5rem" height="2rem" width=".2rem" bgcolor="#1F284F"></Box>
                            <Typography fontSize="0.8rem" marginLeft="1.125rem"  alignItems="center" display="flex" fontWeight="400" fontFamily="Poppins">Specialist</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default HeroSection