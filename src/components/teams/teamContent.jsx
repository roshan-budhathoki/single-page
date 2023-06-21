import React from 'react'
import { Container, Box, Typography, Grid } from '@mui/material';
import { CustomServiceHeading, CustomServiceTypography } from "../utils/CustomTypography";
import { dataMobileConstant, dataWebConstant, developerWebConstant, mobileDeveloperConstant } from './imageContainer';

const TeamContent = () => {
  const [showDeveloper, setShowDeveloper] = React.useState(true);

  return (
    <Container>
      <Box
            sx={{ 
                paddingX: {sm: "1rem", xs: "1rem"},
                paddingLeft: { md: "2rem", sm: "0rem", xs: "0rem"},
                paddingY: "1rem"
            }}
            textAlign={{ md: "start", sm: "center", xs: "center"}}
        >
          <Box>
              <CustomServiceHeading 
                textAlign="center" 
                fontSize={{ sm: "1.5rem", xs: "1.5rem", md: "2.5rem" }}
                marginTop={{md: "2rem", xs: ".5rem"}}
              >
              Our Team
              </CustomServiceHeading>
              <Typography
                fontWeight="500"
                fontSize={{md: "1.5rem", sm: "1rem", xs: "1rem"}}
                lineHeight={{md:"2.25rem", sm: "1.5rem", xs: "1.5rem"}}
                textAlign="center"
                width={{md: "68rem", sm: "100%", xs: "100%"}}
                marginTop="1rem"
                marginLeft={{ md: "0rem", sm: "0.5rem", xs: "0.5rem"}}
              >
                Meet our team at NumericMind, where we combine expertise in IT and data analysis.
                Our dedicated professionals are passionate about transforming complex data into 
                valuable insights. Trust us to optimize your business decisions through cutting 
                edge technology and advanced analytics.
              </Typography>
          </Box>
      </Box>
      <Container>
        <Box paddingY={{md: "4rem", xs: "1.5rem"}}>
          <Box  
            display= "flex"
            flexDirection= {{md: "row", sm: "column", xs: "column"}}
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <Box 
              width={{ md: "50%", sm: "100%", xs: "100%" }}
              bgcolor={ showDeveloper ?  "#F05C26" : "transparent" }  
              sx={{ cursor: "pointer" }}
              color={ showDeveloper ? "#fff" : "#171819" } 
              borderRadius="10px" padding=".7rem" textAlign="center" 
              onClick={(e) =>{ e.preventDefault(); setShowDeveloper(true)}}
            >
              <CustomServiceTypography>
                Meet Our Developers
              </CustomServiceTypography>
            </Box>
            <Box 
              width={{ md: "50%", sm: "100%", xs: "100%" }}
              bgcolor={ showDeveloper ? "transparent" : "#F05C26"  }  
              color={ showDeveloper ?  "#171819" : "#fff" }  
              sx={{ cursor: "pointer" }}
              onClick={(e)=> { e.preventDefault(); setShowDeveloper(false)}}
              borderRadius="10px" padding=".7rem" textAlign="center" 
            >
              <CustomServiceTypography>
                Meet Our Data Scientists
              </CustomServiceTypography>
            </Box>
          </Box>
        </Box>
      </Container>
      {
        showDeveloper && 
        <Grid container paddingX="1.5rem" sx={{ display: { md: "flex", sm:"none", xs:"none"}}}>
          {
            developerWebConstant.map((item, index) =>
              <Grid items md={3} key={index} marginBottom="0.6rem">
                  <img src={item} alt="team" />
              </Grid>
            ) 
          }
        </Grid>
      }
      {
        showDeveloper && 
        <Grid container sx={{ display: { md: "none", sm:"flex", xs:"flex"}}}>
          {
            mobileDeveloperConstant.map((item, index) =>
              <Grid items sm={6} xs={6} key={index} marginBottom="0.6rem">
                  <img src={item} alt="team" />
              </Grid>
            ) 
          }
        </Grid>
      }
      {
        !showDeveloper && 
        <Grid container paddingX="1.5rem" sx={{ display: { md: "flex", sm:"none", xs:"none"}}}>
          {
            dataWebConstant.map((item, index) =>
              <Grid items md={3} key={index} marginBottom="0.6rem">
                  <img src={item} alt="team" />
              </Grid>
            ) 
          }
        </Grid>
      }
      {
        !showDeveloper && 
        <Grid container sx={{ display: { md: "none", sm:"flex", xs:"flex"}}}>
          {
            dataMobileConstant.map((item, index) =>
              <Grid items sm={6} xs={6} key={index} marginBottom="0.6rem">
                  <img src={item} alt="team" />
              </Grid>
            ) 
          }
        </Grid>
      }
    </Container>
  )
}

export default TeamContent