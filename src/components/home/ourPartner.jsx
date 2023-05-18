import React from 'react'
import { Box, Typography, TextField, Container } from '@mui/material'

import Eclipse from '../../assets/eclipse.png';
import Cambridge from '../../assets/Cambridge.png';
import MobileCambridge from '../../assets/mobileUniversity.png';
import Microsoft from '../../assets/Microsoft.png';
import MobileMicrosoft from '../../assets/mobileMicrosoft.png';
import Standford from '../../assets/Standford.png';
import MobileStandford from '../../assets/mobileGoogle.png'
import MenuDesign from '../../assets/MenuDesign.png';
import ButtonComponent from '../utils/ButtonComponent';
import ContactBelows from '../../assets/ContactBelows.png';
import FormTopCircle from '../../assets/formTopCircle.png';
import { CustomDiscriptionTypography, CustomHeadingTypography } from '../utils/CustomTypography'

const OurPartner = () => {
  const textFieldStyle ={ 
    marginBottom: "1.5rem", 
    color: "#B7BFC7", 
    borderRadius: "10px"
  } 
  return (
    <Container>
      <Box position="relative" sx={{
          backgroundImage: "linear-gradient(to right bottom, #f3f1fe, #f0f3ff, #eef4fe, #eef6fd, #eef7fc)",
        }}>
          <Box padding="2rem">
            <CustomHeadingTypography
                fontSize="2.5rem"
                textAlign="center"
                justifyContent="center"
                sx={{ display: { xs : "none", sm: "none", md: "flex"}}}
            >
                Our Partners & Alliances
            </CustomHeadingTypography>
            <CustomHeadingTypography
                fontSize="0.8rem !important"
                fontWeight="600"
                textAlign="center"
                sx={{ display: { xs : "flex", sm: "flex", md: "none"}}}
            >
                Trusted By over 150,000 Companies including
            </CustomHeadingTypography>

            <Box sx={{ display: { xs : "none", sm: "none", md: "flex"}}} justifyContent="center" paddingY="3rem" marginBottom="4rem">
              <Box width = "50%" justifyContent="space-between" display="flex" alignItems="center">
                <img src={Standford} alt="standford Profile" height="40px" width="88px"/>
                <img src={Cambridge} alt="cambridge Profile" height="24px" width="118px"/>
                <img src={Microsoft} alt="microsoft Profile" height="24px" width="116px"/>
              </Box>
            </Box>
            <Box sx={{ display: { xs : "flex", sm: "flex", md: "none"}}} justifyContent="center" paddingY="2rem" marginBottom=".5rem">
              <Box width="100%" justifyContent="space-between" display="flex" alignItems="center">
                <img src={MobileCambridge} alt="cambridge Profile" />
                <img src={MobileStandford} alt="standford Profile" />
                <img src={MobileMicrosoft} alt="microsoft Profile" />
              </Box>
            </Box>
            <Box sx={{ display: { xs : "flex", sm: "flex", md: "none"}}} flexDirection="column" alignItems="center"  justifyContent="center" borderRadius="1rem" padding="3rem" bgcolor="#1F384F">
              <Typography fontWeight="600" fontSize="1.5rem" lineHeight="34.5px" color="#fff" textAlign="center">
                Receive updates from us.
              </Typography>
              <ButtonComponent bgcolor="#F05C26" width="8.6rem" marginTop="1rem">
                Contact US
              </ButtonComponent>
            </Box>
            <Box sx={{ display: { xs : "none", sm: "none", md: "flex"}}} justifyContent="space-between">
              <Box>
                <Typography
                  fontWeight="600"
                  fontSize="3.125rem"
                  width="28rem"
                  lineHeight="3.75rem"
                >
                  Receive updates from us.
                </Typography>
                <CustomDiscriptionTypography width="28rem" >
                  Contact us for meeting and demo, 
                  our team will reach to you.
                </CustomDiscriptionTypography>
              </Box>
              <Container>
                <Box zIndex="10" marginRight="6rem" marginLeft="4rem" position="absolute" bgcolor="white" padding="1.5rem" borderRadius="1rem">
                  <CustomHeadingTypography textAlign="center" marginBottom="1.5rem">
                    Contact Us
                  </CustomHeadingTypography>
                  <TextField id="outlined-basic" 
                    InputProps={{
                      sx: {
                        '&:hover fieldset': {
                          border: '2px solid #B7BFC7 !important',
                          borderRadius: "10px",
                        },
                        '&:focus-within fieldset, &:focus-visible fieldset': {
                          border: '2px solid #B7BFC7 !important',
                          borderRadius: "10px",
                        },
                      },
                    }}
                    fullWidth label="Enter your name" variant="outlined" sx={textFieldStyle} />
                  <TextField id="outlined-basic" fullWidth label="Enter your number"
                    InputProps={{
                      sx: {
                        '&:hover fieldset': {
                          border: '2px solid #B7BFC7 !important',
                          borderRadius: "10px",
                        },
                        '&:focus-within fieldset, &:focus-visible fieldset': {
                          border: '2px solid #B7BFC7 !important',
                          borderRadius: "10px",
                        },
                      },
                    }}
                    variant="outlined" sx={textFieldStyle}/>
                  <TextField id="outlined-basic" fullWidth label="Enter your email address" variant="outlined"
                    InputProps={{
                      sx: {
                        '&:hover fieldset': {
                          border: '2px solid #B7BFC7 !important',
                          borderRadius: "10px",
                        },
                        '&:focus-within fieldset, &:focus-visible fieldset': {
                          border: '2px solid #B7BFC7 !important',
                          borderRadius: "10px",
                        },
                      },
                    }}
                  sx={textFieldStyle}/>
                  <ButtonComponent width="8.5rem" bgcolor="#FFCC00">
                    Submit
                  </ButtonComponent>
                </Box>
                <img src={FormTopCircle} alt="contact form background" style={{
                  position: "absolute",
                  marginLeft: "39%",
                  marginTop: "-6rem"
                }} />
                <img
                  src={MenuDesign} 
                  alt="Menu Design"
                  style={{
                    position: "absolute",
                    marginTop: "-2rem"
                  }}
                />
              </Container>
            </Box>
          </Box>
          <Box sx={{ display: { xs : "none", sm: "none", md: "flex"}}} width="100%" marginTop="4rem" height="15rem" bgcolor="#F05C26">
            <img src={Eclipse} alt="eclipse looks" style={{ marginTop: "1.5rem", marginBottom: "1.5rem"}}/>
            <img src={ContactBelows} alt="eclipse looks" style={{ position: "absolute", marginTop: "1rem", marginLeft: "45%"}}/>
          </Box>
      </Box>
    </Container>
  )
}

export default OurPartner