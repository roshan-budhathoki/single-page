import React from 'react'

import { Typography, Box, Container } from '@mui/material'
import { CustomAboutDiscription, CustomAboutUs } from '../utils/CustomTypography'

import FirstAbout from '../../assets/aboutDo.png'
import FirstMobileAbout from '../../assets/aboutMobileAre.png'
import SecondAbout from '../../assets/aboutAre.png'
import SecondMobileAbout from '../../assets/aboutMobileDo.png'

const AboutContent = () => {
  return (
    <Container>
        <Box
            sx={{ 
                paddingX: {sm: "1rem", md: "2rem", xs: "1rem"},
                paddingY: "1rem"
            }}
            textAlign={{ md: "start", sm: "center", xs: "center"}}
        >
            <Box 
                display="flex" flexDirection="column"
                justifyContent="center" alignItems="center" width="100%" >
                <CustomAboutUs
                    fontSize={{ sm: "1.5rem", xs: "1.5rem", md: "2.5rem" }}
                    marginTop={{md: "2rem", xs: ".5rem"}}
                >
                    About Us
                </CustomAboutUs>
                <Typography
                    fontWeight="500"
                    fontSize={{md: "1.5rem", sm: "1rem", xs: "1rem"}}
                    lineHeight={{md:"2.25rem", sm: "1.5rem", xs: "1.5rem"}}
                    textAlign="center"
                    width={{md: "70rem", sm: "19.5rem", xs: "19.5rem"}}
                    marginTop="1rem"
                >
                    Numeric Mind is a leading statistical consulting company specializing in 
                    full statistical analysis services for Biotech, Healthcare, and Pharmaceuticals. We also offer statistical solutions and training to academic, research institutions, 
                    and global government/non-government organizations. Unlock data-driven insights with us.
                </Typography>
            </Box>

            <Box 
                sx= {{
                    flexDirection: { sm: "column-reverse", xs: "column-reverse", md: "row"}
                }}
                width="100%"            
                alignItems={{sm: "center", xs: "center", md: "start" }}
                display="flex" 
                marginY={{ sm: "1.5rem", md: "5rem", xs: "1.5rem" }}
                justifyContent="space-between"
                >
                <Box>
                    <CustomAboutUs
                        fontSize={{ sm: "1.5rem", xs: "1.5rem", md: "2.5rem" }}
                        marginTop={{ sm: "1rem", xs: "1rem" }}
                    >
                        What we Do?
                    </CustomAboutUs>
                    <CustomAboutDiscription 
                        fontSize={{ md: "1.25rem", sm: "0.75rem", xs: "0.75rem"}}
                        lineHeight={{ md: "1.9rem", sm: "1.125rem", xs: "1.125rem"}}
                        width={{ md: "36rem", sm: "18.2rem", xs: "18.2rem"}} 
                        marginTop={{ md: "1rem", sm: "0.3rem", xs: "0.3rem" }}>
                        Numeric Mind delivers comprehensive statistical solutions and data analytics services 
                        across diverse industries like Healthcare, Pharmaceuticals, Biotech, and Banking. With
                         expertise in Biostatistics and Clinical Data Analytics, we also provide consultations
                          for sectors including Banking, Insurance, Telecom, and Agribusiness. Join us as we 
                          continuously broaden our horizons. We excel in data analysis, extracting valuable insights
                           and empowering businesses to make data-driven decisions. We leverage our expertise to collect, 
                           organize, and analyze data, extracting actionable insights 
                        that drive informed decision-making and business growth for our clients.
                    </CustomAboutDiscription>
                </Box>
                <Box
                    sx={{
                        display: {sm: "block", xs: "block", md: "none" },
                    }}
                    className="slide-in-fwd-right"
                >
                    <img src={FirstMobileAbout} alt="what we do profile"/>
                </Box>
                <Box
                    sx={{
                        display: {sm: "none", xs: "none", md: "block" },
                    }}
                    className="slide-in-fwd-right"
                >
                    <img src={FirstAbout} alt="what we do profile"/>
                </Box>
            </Box>

            <Box
                sx={{
                    flexDirection: {sm: "column", md: "row", xs: "column"}
                }}
                width="100%" 
                alignItems={{sm: "center", xs: "center", md: "start" }}
                display="flex"
                marginY={{ sm: "1.5rem", md: "5rem", xs: "1.5rem" }}
                justifyContent="space-between">
                <Box
                    sx={{
                        display: {sm: "none", xs: "none", md: "block" },
                    }}
                    className="slide-in-fwd-left"
                >
                    <img src={SecondAbout} alt="what we do profile"/>
                </Box>
                <Box
                    sx={{
                        display: {sm: "block", xs: "block", md: "none" },
                    }}
                    className="slide-in-fwd-left"
                >
                    <img src={SecondMobileAbout} alt="what we do profile"/>
                </Box>
                <Box>
                    <CustomAboutUs
                        fontSize={{ sm: "1.5rem", xs: "1.5rem", md: "2.5rem" }}
                        marginTop={{ sm: "1rem", xs: "1rem" }}
                    >
                        What we Are?
                    </CustomAboutUs>
                    <CustomAboutDiscription 
                        fontSize={{ md: "1.25rem", sm: "0.75rem", xs: "0.75rem"}}
                        lineHeight={{ md: "1.9rem", sm: "1.125rem", xs: "1.125rem"}}
                        width={{ md: "36rem", sm: "18.2rem", xs: "18.2rem"}} 
                        marginTop={{ md: "1rem", sm: "0.3rem", xs: "0.3rem" }}
                        >
                    Numeric Mind is a distinguished team of data scientists, biostatisticians, business analysts,
                     and clinical analysts based in Kathmandu, Nepal, and the USA. Our skilled resources deliver 
                     customized statistical and analytical services to meet your unique business requirements. At 
                     Numeric Mind, we value a harmonious blend of expertise and passion, fostering an environment that 
                     propels our company forward. Our experienced professionals and enthusiastic team members from various
                      domains are dedicated to achieving the goals and shaping the future of Numeric Mind. 
                    Trust us for exceptional data-driven solutions that drive your business growth.
                    </CustomAboutDiscription>
                </Box>
                
            </Box>

            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" width="100%" marginBottom={{md: "2rem"}} >
                <CustomAboutUs
                    fontSize={{ sm: "1.5rem", xs: "1.5rem", md: "2.5rem" }}
                >
                    Tools we use
                </CustomAboutUs>
                <CustomAboutDiscription
                    width={{md: "67rem", sm: "17.5rem", xs: "17.5rem"}}
                    fontSize={{ md: "1.25rem", sm: "0.75rem", xs: "0.75rem"}}
                    textAlign="center" 
                    marginTop={{ md: "1rem", sm: "0.3rem", xs: "0.3rem" }}
                    >
                    Numeric Mind leverages state-of-the-art data science tools and technologies to meet client requirements. 
                    We employ SAS, R, and Python for processing large datasets, while Tableau and Microsoft Power 
                    BI are utilized for data visualization and dynamic dashboards tailored to your specific needs.
                </CustomAboutDiscription>
            </Box>
        </Box>
    </Container>
  )
}

export default AboutContent