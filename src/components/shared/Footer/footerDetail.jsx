import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

import WatchLaterIcon from '@mui/icons-material/WatchLater';
import { Grid, Box, Typography, styled, List, ListItem, Link, ListItemIcon, ListItemButton, Divider } from '@mui/material';

const Footer = () => {
  const CustomFooterTypography = styled(Typography)({
    fontWeight: 400,
    fontSize: "0.8rem",
    color: "#515458"
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
    <Box padding="2rem 2rem">
      <Grid container spacing={3}>
        <Grid item lg={4} md={4}>
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
        <Grid item lg={4} md={4}>
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
        <Grid item lg={4} md={4}>
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
                  <WatchLaterIcon sx={{"& svg": {fontSize: "1rem"}}} />
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
          </List>
        </Grid>
      </Grid>
      <Divider />
      <Box width="100%" marginTop=".5rem" display="flex" justifyContent="space-between">
        <CustomFooterTypography>Numeric Mind 2023. All rights reserved</CustomFooterTypography>
        <Box display="flex" justifyContent="space-between" width="8rem"> 
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
        </Box>
      </Box>
    </Box>
  )
}

export default Footer