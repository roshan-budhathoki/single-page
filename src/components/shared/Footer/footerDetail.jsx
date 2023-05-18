import React from 'react'

import AddIcon from '@mui/icons-material/Add';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import TwitterIcon from '@mui/icons-material/Twitter';
import MobileLogo from '../../../assets/mobileLogo.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import {Container} from '@mui/material';

import { Grid, Box, Typography, styled, List, ListItem, Link, ListItemIcon, ListItemButton, Divider } from '@mui/material';

const Footer = () => {
  const CustomFooterTypography = styled(Typography)({
    fontWeight: 400,
    fontSize: "0.8rem",
    color: "#515458"
  })

  const MobileFooterTypography = styled(Typography)({
    fontWeight: 500,
    fontSize: "1.125rem",
    color: "#1F284F",
    lineHeight: "1.625rem"
  })

  const CustomHeadingTypography = styled(Typography)({
    fontWeight: 600,
    fontSize: "1.125rem",
    color: "#171819",
  })

  const CustomListLinks = styled(Link)({
    fontWeight: 500,
    fontSize: "0.8rem",
    color: "#515458",
    textDecoration: "none !important"
  })


  const services = [
    {
      name: "Clinical Services",
      url: "#"
    },
    {
      name: "Data Sevices",
      url: "#"
    }
  ];

  const abouts = [
    {
      name: "Home",
      url: "#"
    },
    {
      name: "News & Opinion",
      url: "#"
    },
    {
      name: "Career",
      url: "#"
    },
    {
      name: "Our Team",
      url: "#"
    },
    {
      name: "Find Us",
      url: "#"
    }
  ]

  return (
    <Container>
      <Box paddingY="2rem" 
          sx={{
            paddingX: {sm: "1rem", md: "2rem", xs: "1rem"}
          }}
      >
        <Box sx={{
          display: { xs : "block", sm: "block", md: "none"}
        }}>
          <img src={MobileLogo} alt="this is mobile logo" />
          <Typography fontWeight="400" fontSize="0.75rem" color="#515458" lineHeight="1.2rem" marginTop="1.5rem" marginBottom="1rem"> 
            An American and Nepalese firm called Numeric Mind offers complete statistical analysis services, 
            especially to clients in the biotech, healthcare, and pharmaceutical industries.
          </Typography>
          <Divider />
          {
            ["Clinical Services", "Data Services"].map((item, index) => 
              <Box display="flex" key={index} justifyContent="space-between" marginY="1rem">
                <MobileFooterTypography>
                  {item}
                </MobileFooterTypography>
                <AddIcon sx={{ "& svg": {
                  fontSize: "1rem",
                  color: "#1F284F"
                }}} />        
              </Box>
            )
          }
          <Divider />
          {
            ["Home", "News & Events", "Career", "Our Team", "Find Us"].map((item, index) => 
              <Box display="flex" key={index} justifyContent="space-between" marginY="1rem">
                <MobileFooterTypography>
                  {item}
                </MobileFooterTypography>
                <AddIcon sx={{ "& svg": {
                  fontSize: "1rem",
                  color: "#1F284F"
                }}} />        
              </Box>
            )
          }
          <Divider />
        </Box>
        <Grid container spacing={3}>
          <Grid item lg={4} md={4} sx={{
            display: { xs : "none", sm: "none", md: "block"}
          }}>
            <Typography fontWeight="700" fontFamily="Poppins" fontSize="2.25rem">
              Numeric Mind
            </Typography>
            <CustomFooterTypography>
              Numeric Mind is a statistical consulting company based in the USA and Nepal providing 
              full statistical analysis services primarily to the clients from Biotech, Healthcare, 
              and Pharmaceuticals industries.Numeric Mind also provides statistical solutions and 
              training services to academic and research institutions, government and non-government 
              organizations across the globe.
            </CustomFooterTypography>
          </Grid>
          <Grid item lg={4} md={4} sx={{
            display: { xs : "none", sm: "none", md: "flex"}
          }}>
            <Box display="flex" width="100%" justifyContent="space-around">
              <List>
                <ListItem>
                  <CustomHeadingTypography >Services</CustomHeadingTypography>
                </ListItem>
                {
                  services.map((service, index) => 
                      <ListItem key={index}>
                        <CustomListLinks href={service?.url}>{service.name}</CustomListLinks>
                      </ListItem>
                  )
                }
              </List>
              <List>
                <ListItem>
                  <CustomHeadingTypography >About Us</CustomHeadingTypography>
                </ListItem>
                {
                  abouts.map((about, index) => 
                      <ListItem key={index}>
                        <CustomListLinks href={about?.url}>{about.name}</CustomListLinks>
                      </ListItem>
                  )
                }
              </List>
            </Box>
          </Grid>
          <Grid item lg={4} md={4} >
            <List>
              <ListItem>
                <CustomHeadingTypography>Reach Us</CustomHeadingTypography>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <EmailIcon sx={{"& svg": {fontSize: "1rem"}}} />
                  </ListItemIcon>
                  <Box>
                    <CustomFooterTypography sx={{fontWeight: "700 !important"}}>Email:</CustomFooterTypography>
                    <CustomFooterTypography>contact@numericmind.com</CustomFooterTypography>
                  </Box>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <PlaceIcon sx={{"& svg": {fontSize: "1rem"}}} />
                  </ListItemIcon>
                  <Box>
                    <CustomFooterTypography sx={{fontWeight: "700 !important"}}>USA Office:</CustomFooterTypography>
                    <CustomFooterTypography>975 Gallery Dr. Schwenksville, PA 19473, USA</CustomFooterTypography>
                  </Box>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <AccessTimeIcon sx={{"& svg": {fontSize: "1rem"}}} />
                  </ListItemIcon>
                  <Box>
                    <CustomFooterTypography sx={{fontWeight: "700 !important"}}>Office Hours:</CustomFooterTypography>
                    <CustomFooterTypography>Mon – Fri, 9 AM – 5 PM (NPT)</CustomFooterTypography>
                  </Box>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <PlaceIcon sx={{"& svg": {fontSize: "1rem"}}} />
                  </ListItemIcon>
                  <Box>
                    <CustomFooterTypography sx={{fontWeight: "700 !important"}}>Nepal Office:</CustomFooterTypography>
                    <CustomFooterTypography>Bhatbhateni, Kathmandu</CustomFooterTypography>
                  </Box>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <Box sx={{ display: { xs : "flex", sm: "flex", md: "none"}}} color="#515458" justifyContent="center" width="100%" paddingY= ".5rem"> 
                  <FacebookIcon />
                  <TwitterIcon sx={{ marginX: "1rem"}} />
                  <InstagramIcon />
                </Box>
              </ListItem>
            </List>
          </Grid>
        </Grid>
        <Divider />
        <Box width="100%" marginTop=".5rem" display="flex" sx={{
          justifyContent: {
            xs: "center",
            sm: "center",
            md: "space-between"
          }
        }}>
          <CustomFooterTypography>Numeric Mind 2023. All rights reserved</CustomFooterTypography>
          <Box sx={{ display: { xs : "none", sm: "none", md: "flex"}}} justifyContent="space-between" width="8rem"> 
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default Footer