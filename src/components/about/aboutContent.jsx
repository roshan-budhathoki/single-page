import React from 'react'

import { Typography, Box } from '@mui/material'
import { CustomAboutDiscription, CustomAboutUs } from '../utils/CustomTypography'

import FirstAbout from '../../assets/aboutDo.png'
import FirstMobileAbout from '../../assets/aboutMobileAre.png'
import SecondAbout from '../../assets/aboutAre.png'
import SecondMobileAbout from '../../assets/aboutMobileDo.png'

const AboutContent = () => {
  return (
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
                marginTop={{md: "2rem"}}
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
                Numeric Mind is a statistical consulting company providing 
                full statistical analysis services primarily to the clients from Biotech, Healthcare, and Pharmaceuticals industries. Numeric Mind also provides statistical solutions and training services to academic and research institutions, 
                government and non-government organizations across the globe.
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
                    Numeric Mind offers statistical solutions and data analytics services in an array of industries including but not limited to Healthcare, Pharmaceuticals, Biotech and Banking sectors. Although we work with data in many areas, our primary focus remains Biostatistics and Clinical Data Analytics. We further provide consultations for data analytics services in sectors such as Banking, Insurance, 
                    Telecom, Agribusiness, and are always looking to expand our horizons.
                </CustomAboutDiscription>
            </Box>
            <Box
                sx={{
                    display: {sm: "block", xs: "block", md: "none" },
                }}
            >
                <img src={FirstMobileAbout} alt="what we do profile"/>
            </Box>
            <Box
                sx={{
                    display: {sm: "none", xs: "none", md: "block" },
                }}
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
            >
                <img src={SecondAbout} alt="what we do profile"/>
            </Box>
            <Box
                sx={{
                    display: {sm: "block", xs: "block", md: "none" },
                }}
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
                We are a team of highly experienced data scientists, 
                biostatisticians, business analysts and clinical analysts 
                based in Kathmandu, Nepal and USA. With our highly skilled 
                and trained resources, we are able to deliver statistical 
                and analytical services 
                tailored to your specific business needs and requests.
                In Numeric Mind, we believe a balance is required between expertise and 
                    passion in the work environment to allow the company to move forward. 
                Therefore, Numeric Mind comprises of experienced individuals as well as
                    enthusiastic and passionate team members in different streams, who are
                dedicated towards the company goals and future of Numeric Mind.
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
                width={{md: "60rem", sm: "17.5rem", xs: "17.5rem"}}
                fontSize={{ md: "1.25rem", sm: "0.75rem", xs: "0.75rem"}}
                textAlign="center" 
                marginTop={{ md: "1rem", sm: "0.3rem", xs: "0.3rem" }}
                >
                In Numeric Mind, we use cutting edge data science tools 
                and technologies to deliver our client’s needs. 
                To work with large datasets, we use SAS, R and Python. 
                For data visualization and dashboards, we also use Tableau 
                and Microsoft Power BI as per your need.
            </CustomAboutDiscription>
        </Box>
    </Box>
  )
}

export default AboutContent