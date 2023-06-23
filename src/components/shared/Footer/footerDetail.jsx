import React from 'react'

import AddIcon from '@mui/icons-material/Add';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import TwitterIcon from '@mui/icons-material/Twitter';
import MobileLogo from '../../../assets/mobileLogo.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import {Container} from '@mui/material';

import { Grid, Box, Typography, styled, List, ListItem, Link, ListItemIcon, ListItemButton, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
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
      url: "/services"
    },
    {
      name: "Data Sevices",
      url: "/services"
    }
  ];

  const abouts = [
    {
      name: "Home",
      url: "/"
    },
    {
      name: "News & Opinion",
      url: "/news"
    },
    {
      name: "Career",
      url: "/careers"
    },
    {
      name: "Our Team",
      url: "/teams"
    },
    {
      name: "Find Us",
      url: "https://goo.gl/maps/xSNLjoQrKHaCAkTw8"
    }
  ]

  return (
    <Container>
      <Box paddingY="2rem"
      >
        <Container>
          <Box sx={{
            display: { xs : "block", sm: "block", md: "none"}
          }}>
            <img src={MobileLogo} alt="this is mobile logo" onClick={() => navigate('/')} />
            <Typography fontWeight="400" fontSize="0.75rem" color="#515458" lineHeight="1.2rem" marginTop="1.5rem" marginBottom="1rem"> 
              An American and Nepalese firm called NumericMind offers complete statistical analysis services, 
              especially to clients in the biotech, healthcare, and pharmaceutical industries.
            </Typography>
            <Divider />
            {
              services.map((item, index) => 
                <Box display="flex" key={index} justifyContent="space-between" marginY="1rem" onClick={()=> navigate(item.url)}>
                  <MobileFooterTypography>
                    {item.name}
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
              abouts.map((item, index) => 
                <Box display="flex" key={index} justifyContent="space-between" marginY="1rem" onClick={()=> navigate(item.url)}>
                  <MobileFooterTypography>
                    {item.name}
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
        </Container>
        <Container>
          <Grid container spacing={3}>
            <Grid item lg={4} md={4} sx={{
              display: { xs : "none", sm: "none", md: "block"}
            }}>
              <Typography fontWeight="700" fontFamily="Poppins" fontSize="2.25rem">
                NumericMind
              </Typography>
              <CustomFooterTypography>
              NumericMind, a top statistical consulting company in the USA and Nepal, 
              offers comprehensive statistical analysis services to clients in Biotech, Healthcare, 
              and Pharmaceuticals. We also provide statistical solutions, training services to academic, 
              research institutions, 
              and global government/non-government organizations. Contact us for data-driven insights.
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
            <Grid item lg={4} md={4} sx={{ paddingX: { sm: ".5rem !important", xs: ".5rem !important" }}} >
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
                      <AccessTimeIcon sx={{"& svg": {fontSize: "1rem"}}} />
                    </ListItemIcon>
                    <Box>
                      <CustomFooterTypography sx={{fontWeight: "700 !important"}}>Office Hours:</CustomFooterTypography>
                      <CustomFooterTypography>Mon – Fri, 9 AM – 5 PM (NPT)</CustomFooterTypography>
                    </Box>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding >
                  <ListItemButton onClick={()=> window.open('https://goo.gl/maps/dzGmhYiHe5XGDEvp8','noopener, noreferrer')}>
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
                  <ListItemButton onClick={()=> window.open('https://goo.gl/maps/pLrPEzmHR6BmT7726', 'noopener, noreferrer')} >
                    <ListItemIcon>
                      <PlaceIcon sx={{"& svg": {fontSize: "1rem"}}} />
                    </ListItemIcon>
                    <Box>
                      <CustomFooterTypography sx={{fontWeight: "700 !important"}}>Nepal Office:</CustomFooterTypography>
                      <CustomFooterTypography>Naxal Bhatbhateni, Kathmandu</CustomFooterTypography>
                    </Box>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <Box sx={{ display: { xs : "flex", sm: "flex", md: "none"}}} color="#515458" justifyContent="center" width="100%" paddingY= ".5rem"> 
                    <Link sx={{color: "black"}} href="https://www.facebook.com/numericmind">
                      <FacebookIcon />
                    </Link>
                    <Link sx={{color: "black"}} href="https://twitter.com/numericmind"> 
                      <TwitterIcon sx={{ marginX: "1rem"}} />
                    </Link>
                    <Link sx={{color: "black"}} href="https://www.instagram.com/numericmind/?igshid=Y2IzZGU1MTFhOQ%3D%3D&fbclid=IwAR3XdC4q5za49sHDPau0WZcFM5JDIk8_3VUlmHq6ukI6qGF-MgVpI_SogY8">
                      <InstagramIcon  />
                    </Link>
                    <Link sx={{color: "black"}} href="https://www.linkedin.com/company/numericmind/">
                      <LinkedInIcon  />
                    </Link>
                  </Box>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Container>
        <Divider />
        <Container>
          <Box width="100%" marginTop=".5rem" display="flex" sx={{
            justifyContent: {
              xs: "center",
              sm: "center",
              md: "space-between"
            }
          }}>
            <CustomFooterTypography>NumericMind 2023. All rights reserved</CustomFooterTypography>
            <Box sx={{ display: { xs : "none", sm: "none", md: "flex"}}} justifyContent="space-between" width="8rem"> 
              <Link sx={{color: "black"}} href="https://www.facebook.com/numericmind">
                <FacebookIcon />
              </Link>
              <Link sx={{color: "black"}} href="https://twitter.com/numericmind"> 
                <TwitterIcon />
              </Link>
              <Link sx={{color: "black"}} href="https://www.instagram.com/numericmind/?igshid=Y2IzZGU1MTFhOQ%3D%3D&fbclid=IwAR3XdC4q5za49sHDPau0WZcFM5JDIk8_3VUlmHq6ukI6qGF-MgVpI_SogY8">
                <InstagramIcon  />
              </Link>
              <Link sx={{color: "black"}} href="https://www.linkedin.com/company/numericmind/">
                <LinkedInIcon />
              </Link>
            </Box>
          </Box>
        </Container>
      </Box>
    </Container>
  )
}

export default Footer