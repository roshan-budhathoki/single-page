import React from 'react';
import { Typography, Box, styled } from '@mui/material';
import heroNimble from "../../assets/heroNimble.png";
const HeroSection = () => {
    const CustomHeadingTypography = styled(Typography)({
        fontWeight: 600,
        fontSize: "3.125rem",
        fontFamily: "Poppins",
        color: "#1F284F",
    })
    
    return (
        <Box paddingX="2rem" paddingTop="4rem" marginBottom="2.5rem">
            <Box display="flex" justifyContent="space-between">
                <Box>
                    <CustomHeadingTypography>Statistical</CustomHeadingTypography>
                    <CustomHeadingTypography>Data Solutions</CustomHeadingTypography>
                    <Box sx={{
                        fontWeight: 400,
                        fontSize: "1.25rem",
                        fontFamily: "Poppins",
                        color: "#575757",
                        marginTop: "2rem",
                        width: "30rem"
                    }}>
                        We offer statistical programming services to biotechnology, healthcare, 
                        biomedical and pharmaceutical companies across the globe. 
                        Our services include <b>
                            biostatistics, clinical programming, statistical reporting and 
                            data analytics.
                        </b>
                    </Box>
                    <Box sx={{
                        marginTop: "2rem",
                        background: "#F05C26",
                        width: "10rem", 
                        height: "3rem", display: "flex", justifyContent: "center", alignItems: "center",
                        color: "#fff", 
                        fontFamily: "Poppins", 
                        borderRadius: "10px"}}>
                        Learn More
                    </Box>
                </Box>
                <Box>
                    <img src={heroNimble} height= "432px" width="528px" alt="heroImage Section" />
                </Box>
            </Box>
            <Box marginTop="3.9rem" display="flex" justifyContent="space-between" flexWrap="wrap">
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
    )
}

export default HeroSection