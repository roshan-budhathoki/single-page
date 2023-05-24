import React from 'react'

import {
    Box,
    Container,
    Typography,
    Grid
  } from "@mui/material";
import { CustomServiceHeading } from "../utils/CustomTypography";
  
const CareerContent = () => {
    const careerNumeric = [
        {
            url: "#",
            jobOpening: "Clinical Statistical / SAS Trainees"
        },
        {
            url: "#",
            jobOpening: "Clinical Statistical / SAS Trainees"
        },
        {
            url: "#",
            jobOpening: "Clinical Statistical / SAS Trainees"
        },
        {
            url: "#",
            jobOpening: "Clinical Statistical / SAS Trainees"
        },
    ]
    return (
        <Container >
            <Box
                sx={{ 
                    paddingX: { md: "2rem"},
                    paddingY: { md: "1rem", sm: ".5rem", xs: ".5rem"}
                }}
                textAlign={{ md: "start", sm: "center", xs: "center"}}
            >
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <CustomServiceHeading 
                    textAlign="center" 
                    fontSize={{ sm: "1.5rem", xs: "1.5rem", md: "2.5rem" }}
                    marginTop={{md: "2rem", sm: ".5rem"}}
                    >
                    Careers
                    </CustomServiceHeading>
                    <Typography
                    fontWeight="500"
                    fontSize={{md: "1.5rem", sm: "1rem", xs: "1rem"}}
                    lineHeight={{md:"2.25rem", sm: "1.5rem", xs: "1.5rem"}}
                    textAlign="center"
                    width={{md: "70rem", sm: "19.5rem", xs: "19.5rem"}}
                    marginTop="1rem"
                    >
                    Numeric Mind is a statistical consulting company providing full
                    statistical analysis services primarily to the clients from Biotech,
                    Healthcare, and Pharmaceuticals industries. Numeric Mind also provides
                    statistical solutions and training services to academic and research
                    institutions, government and non-government organizations across the
                    globe.
                    </Typography>
                </Box>
            </Box>
            <Container>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} marginBottom="4rem" marginTop="1.5rem!important">
                {
                    careerNumeric.map((career, index) => 
                    <Grid item xs={12} sm={12} md={4} key={index} 
                        sx={{
                                marginTop: "1rem",
                                marginBottom: ".5rem"
                            }}
                    >
                        <Box sx={{maxWidth: "20rem", 
                            height: "100%", 
                            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                            background: "#fff", borderRadius: "1rem",  paddingX: "2rem", paddingTop:"1.25rem"}}>
                            <Typography fontWeight="600" fontSize="1.5rem" fontFamily="Poppins" color="#1F284F">
                            {career.jobOpening}
                            </Typography>
                            <Box borderLeft="2px solid #0070F0E5" color="#0070F0E5" paddingLeft="1rem" marginTop="1rem">
                                View Job
                            </Box>
                        </Box>
                    </Grid>
                    )
                }
                </Grid>
            </Container>
        </Container>
    )
}

export default CareerContent