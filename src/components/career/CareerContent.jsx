import React from 'react'

import {
    Box,
    Container,
    Typography,
    Grid,
    Link
  } from "@mui/material";
import { CustomServiceHeading } from "../utils/CustomTypography";
  
const CareerContent = () => {
    const careerNumeric = [
        {
            url: "/careers/clinical-statistical",
            jobOpening: "Clinical Statistical / SAS Trainees"
        },
        {
            url: "/careers/clinical-statistical",
            jobOpening: "Clinical Statistical / SAS Trainees"
        },
        {
            url: "/careers/clinical-statistical",
            jobOpening: "Clinical Statistical / SAS Trainees"
        },
        {
            url: "/careers/clinical-statistical",
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
                    marginTop={{md: "2rem", sm: "1rem", xs: "1rem"}}
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
                     Specializing in designing and building scalable data collection and analysis systems.
                      Trust us to shape your career with industry-level expertise in this domain.
                    </Typography>
                </Box>
            </Box>
            <Container>
                {

                    false && 

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
                                <Typography fontWeight="600" fontSize={{ md: "1.5rem", sm: "1rem", xs: "1rem" }} fontFamily="Poppins" color="#1F284F">
                                    {career.jobOpening.split("/")[0]}
                                </Typography>
                                <Typography fontWeight="600" fontSize={{ md: "1.5rem", sm: "1rem", xs: "1rem" }} fontFamily="Poppins" color="#1F284F">
                                    {`/${career.jobOpening.split("/")[1]}`}
                                </Typography>
                                <Box borderLeft="3px solid #1F284F"  color="#0070F0E5" paddingLeft="1rem" marginTop="1rem">
                                    <Link href={career.url} sx={{textDecoration: "none"}}>
                                        View Job
                                    </Link>
                                </Box>
                            </Box>
                        </Grid>
                        )
                    }
                   </Grid>
                }
                <Box width="100%" display="flex" height="16.5rem" justifyContent="center" alignContent="center" alignItems="center">
                    <Typography fontWeight="600" fontSize="2rem" color="#1F222A">
                        There is no current opening.
                    </Typography>
                </Box>
            </Container>
        </Container>
    )
}

export default CareerContent