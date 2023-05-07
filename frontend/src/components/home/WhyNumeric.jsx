import { Typography, Box, Grid } from '@mui/material'
import React from 'react'

const WhyNumberic = () => {
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
    <Box padding="2rem" sx={{
      backgroundImage: "linear-gradient(to right bottom, #f3f1fe, #f0f3ff, #eef4fe, #eef6fd, #eef7fc)",
    }}>
      <Typography fontWeight="700" fontFamily="Poppins" fontSize="2.5rem">
        Why Numeric Mind?
      </Typography>
      <Typography fontWeight="500" fontFamily="Poppins" fontSize="1.5rem" marginY="1.2rem">
      A Trusted Statistical Consulting Company based in USA and Nepal consisting of highly 
      experienced data scientists, biostatisticians, business analysts and clinical analysts.
      </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} marginBottom="4rem">
        {
          questionNumeric.map((question, index) => 
          <Grid item xs={2} sm={4} md={4} key={index} sx={{
            marginTop: "1rem"
          }}>
            <Box sx={{maxWidth: "20rem", height: "100%", background: "#fff", borderRadius: "1rem",  paddingX: "2rem", paddingTop:"1.25rem"}}>
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
    </Box>
  )
}

export default WhyNumberic