import { Typography, Box, Grid, Container, Link } from '@mui/material'
import React from 'react'

const WhyNumeric = () => {
  const questionNumeric = [
    {
      name: "Quality",
      description: "We believe in providing quality data analysis and statistical solutions for any concept, from its formulation to its commercialization."
    },
    {
      name: "Reliability",
      description: "Building solid, long-lasting relationships with our clients is one of our main goals at Numeric Mind."
    },
    {
      name: "Economical",
      description: "Depending on the needs of the client, we guarantee the best costs for our services."
    },
    {
      name: "Innovation",
      description: "The Numeric Mind team is well-equipped with data analytics and statistical tools including R, SAS, Python and Tableau for resolving your problems."
    },
    {
      name: "Transparency",
      description: "We believe being open, honest, and transparent regarding the company operations with our teams and utmost importance for establishing a harmonious relationship."
    }, 
    {
      name: "Privacy",
      description: "Numeric Mind has secure privacy policies that ensure no misuse or exposure of data to sources other than the client and the company."
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
          A Trusted Statistical Consulting Company based in USA and Nepal consisting of highly 
          experienced data scientists, biostatisticians, business analysts and clinical analysts.
          </Typography>
          <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }} marginBottom="4rem">
            {
              questionNumeric.map((question, index) => 
              <Grid item xs={12} sm={12} md={4} key={index} sx={{
                marginTop: "1rem"
              }}>
                <Box sx={{maxWidth: "18rem", height: "100%", background: "#fff", borderRadius: "1rem",  paddingX: "2rem", paddingTop:"1.25rem"}}>
                  <Typography fontWeight="600" fontSize="1.5rem" fontFamily="Poppins" >
                    {question.name}
                  </Typography>
                  <Typography fontWeight="400" fontSize="1rem" fontFamily="Poppins" marginTop="1.5rem">
                    {question.description}
                  </Typography>
                </Box>
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