import React from 'react'
import { Typography, Box, Grid, Container, Link, IconButton } from '@mui/material';

import VerifiedIcon from '@mui/icons-material/Verified';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';

const WhyNumeric = () => {
  const questionNumeric = [
    {
      icon: <LocalPoliceIcon />,
      name: "Quality",
      description: "Experience unparalleled quality in Data Analytics Services at Numeric Mind. Our meticulous approach ensures accurate insights and reliable solutions for data-driven success."
    },
    {
      icon: <VerifiedIcon />,
      name: "Reliability",
      description: "Your reliable partner for Data Analytics Services. Trust our expertise, robust methodologies, and accurate insights to drive confident decision-making and business growth."
    },
    {
      icon: <AttachMoneyIcon />,
      name: "Economical",
      description: "Choose Numeric Mind for cost-effective Data Analytics Services. We offer competitive pricing without compromising on quality, delivering maximum value for your investment."
    },
    {
      icon: <AutoAwesomeIcon />,
      name: "Innovation",
      description: "Experience cutting-edge innovation in Data Analytics Services. Our tools empower you to uncover valuable insights and stay ahead in the competitive landscape."
    },
    {
      icon: <VisibilityIcon />,
      name: "Transparency",
      description: "Your transparent partner in Data Analytics Services. We believe in open communication, providing clear insights, and fostering trust for a mutually beneficial partnership."
    }, 
    {
      icon: <FingerprintIcon />,
      name: "Privacy",
      description: "Our Data Analytics Services are backed by robust security measures, ensuring your information remains confidential and protected throughout the analysis process."
    }
  ]

  return (
      <Box paddingY="2rem" sx={{
        backgroundImage: "linear-gradient(to right bottom, #f3f1fe, #f0f3ff, #eef4fe, #eef6fd, #eef7fc)",
      }}>
        <Container sx={{ paddingLeft: {sm: "1rem", md: "3.5rem",  xs: "1rem"}}}>
          <Typography fontWeight="700" fontFamily="Poppins"
            sx={{
              fontSize: {xs: "1.5rem", sm: "1.5rem", md: "2.5rem"}
            }}
          >
            Why Numeric Mind?
          </Typography>
          <Typography fontWeight="500" fontFamily="Poppins" 
            sx={{
              fontSize: {xs: "1rem", sm: "1rem", md: "1.5rem"},
              lineHeight: {xs: "1.5rem", sm: "1.5rem", md: "3.25rem"},
            }}
            fontSize="1.5rem" 
            marginY="1.2rem"
            >
          A Trusted Statistical Data Solution Company based in USA and Nepal consisting of highly 
          experienced data scientists, biostatisticians, business analysts and clinical analysts.
          </Typography>
          <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }} marginBottom="4rem">
            
            {
              questionNumeric.map((question, index) => 
              <Grid item xs={12} sm={12} md={4} key={index} sx={{
                marginTop: "1rem",
              }}>
                <>
                  <Box className="flip-card" sx={{
                      display: { md: "block", xs: "none", sm: "none" },
                    }}>
                    <Box className="flip-card-inner" sx={{ borderRadius: "1rem" }}>
                      <Box className="flip-card-front" sx={{
                        borderRadius: "1rem", 
                        background: index > 2 ? "linear-gradient(180deg, #F9BC2C 0%, #F4762D 100%)" : "linear-gradient(180deg, #F4762D 0%, #F9BC2C 100%)" ,
                        color: "#fff"}} 
                        display="flex" justifyContent="center" alignItems="center" flexDirection="column" >
                        <Typography fontWeight={700} fontSize="2rem" lineHeight="3rem" textTransform="uppercase"> 
                          {question.name}
                        </Typography>
                        <IconButton sx={{color: "#fff", '& svg': {
                          fontSize: "4rem"
                        }}}>
                          {question.icon}
                        </IconButton>
                      </Box>
                      <Box className="flip-card-back" sx={{maxWidth: "18rem", color: "black", background: "#fff", borderRadius: "1rem",  paddingX: "2rem", paddingTop:"1.25rem"}}>
                        <Typography fontWeight="600" fontSize="1.5rem" fontFamily="Poppins" >
                          {question.name}
                        </Typography>
                        <Typography fontWeight="400" fontSize="1rem" fontFamily="Poppins" marginTop="1.5rem">
                          {question.description}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Box sx={{ display: { md: "none", xs: "block", sm: "block" }, maxWidth: "18rem", height: "100%", color: "black", background: "#fff", borderRadius: "1rem",  paddingX: "2rem", paddingTop:"1.25rem"}}>
                    <Typography fontWeight="600" fontSize="1.5rem" fontFamily="Poppins" >
                      {question.name}
                    </Typography>
                    <Typography fontWeight="400" fontSize="1rem" fontFamily="Poppins" marginTop="1.5rem">
                      {question.description}
                    </Typography>
                  </Box>
                </>
              </Grid>
              )
            }
          </Grid>
        </Container>
        <Container sx={{ display: {md: "none", sm: "block", xs: "block"}, paddingLeft: {sm: "1rem", md: "3.5rem",  xs: "1rem"}}}>
          <Box>
            <Box>
              <Typography 
                fontWeight={700}
                fontSize="1.5rem"
                lineHeight="3rem"
                color="#1F284F"
              >Our Product & Services</Typography>
            </Box>
            <Box>
              <Box bgcolor="#FBFBFB" boxShadow={2} padding="2rem" borderRadius="1rem">
                <Link sx={{ color: "#1F284F", textDecoration: "underline", fontSize: "1rem", fontWeight: "600", fontFamily: "Poppins"  }}>
                  Clinical Trial Data Analysis
                </Link>
                <Box borderLeft="3px solid #1F284F" paddingLeft="1rem" marginTop="1rem" >
                  <Link href="#" sx={{textDecoration: "none", fontSize: "#0070F0E5", fontFamily:"Poppins"  }} >
                    View More
                  </Link>
                </Box>
              </Box>
              <Box bgcolor="#FBFBFB" boxShadow={2} padding="2rem" marginTop="1rem" borderRadius="1rem">
                <Link sx={{ color: "#1F284F", textDecoration: "underline", fontSize: "1rem", fontWeight: "600", fontFamily: "Poppins"  }}>
                  Biostatistics
                </Link>
                <Box borderLeft="3px solid #1F284F" paddingLeft="1rem" marginTop="1rem" >
                  <Link href="#" sx={{textDecoration: "none", fontSize: "#0070F0E5", fontFamily:"Poppins"  }} >
                    View More
                  </Link>
                </Box>
              </Box>
              <Box bgcolor="#FBFBFB" boxShadow={2} padding="2rem" marginTop="1rem" borderRadius="1rem">
                <Link sx={{ color: "#1F284F", textDecoration: "underline", fontSize: "1rem", fontWeight: "600", fontFamily: "Poppins"  }}>
                Business Decision Support
                </Link>
                <Box borderLeft="3px solid #1F284F" paddingLeft="1rem" marginTop="1rem" >
                  <Link href="#" sx={{textDecoration: "none", fontSize: "#0070F0E5", fontFamily:"Poppins"  }} >
                    View More
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
  )
}

export default WhyNumeric