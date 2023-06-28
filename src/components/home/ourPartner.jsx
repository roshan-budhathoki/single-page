import axios from 'axios';
import React, { useState } from 'react'
import { useSnackbar } from 'notistack';
import { Box, Typography, TextField, Container, Link } from '@mui/material'

import Eclipse from '../../assets/eclipse.png';
import Nimble from '../../assets/ourpartner/nimble.png';
import MobileNimble from '../../assets/ourpartner/mobileNimble.png';
import Val from '../../assets/ourpartner/val.png';
import MobileVal from '../../assets/ourpartner/mobileVal.png';
import Wiseyak from '../../assets/ourpartner/wiseyak.png';
import MobileWiseyak from '../../assets/ourpartner/mobileWiseyak.png'

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
  const { enqueueSnackbar } = useSnackbar();
  
  const [fullName, setFullName] = useState(null);
  const [contactNumber, setContactNumber] = useState(null);
  const [email, setEmail] = useState(null);


  const handleContact = () => {
    if(fullName === '' || contactNumber === '' || email === '' ){
      enqueueSnackbar("Please fill all the filled", {
        variant: 'error',
      })
      return
    }
    if(fullName === null || contactNumber === null || email === null ){
      enqueueSnackbar("Please fill all the field", {
        variant: 'error',
      })
      return
    }

    axios.post('https://backend.numericmind.com/sendEmail', {
        fullName,
        phoneNumber: contactNumber,
        email
    }).then(() => {
      enqueueSnackbar("Thank you for your time", {
        variant: 'success',
      })
      setContactNumber('');
      setEmail('');
      setFullName('');
    });
  }

  return (
      <Box position="relative" sx={{
          backgroundImage: "linear-gradient(to right bottom, #f3f1fe, #f0f3ff, #eef4fe, #eef6fd, #eef7fc)",
        }}>
          <Container>
            <Box padding={{ md: "2rem", sm: "1rem", xs: "1rem" }}>
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
                <Box width = "100%" justifyContent="space-between" display="flex" alignItems="center">
                  <Link href="https://nimble-cr.com/nimble-workspace/">
                    <img src={Nimble} alt="standford Profile"/>
                  </Link>
                  <Link href="https://wiseyak.com/">
                    <img src={Wiseyak} alt="microsoft Profile" />
                  </Link>
                  <Link href="http://ovalanalytics.com/">
                    <img src={Val} alt="cambridge Profile" />
                  </Link>
                </Box>
              </Box>
              <Box sx={{ display: { xs : "flex", sm: "flex", md: "none"}}} justifyContent="center" paddingY="2rem" marginBottom=".5rem">
                <Box width="16rem" justifyContent="space-between" display="flex" alignItems="center">
                  <Link href="https://nimble-cr.com/nimble-workspace/">
                    <img src={MobileNimble} alt="cambridge Profile" />
                  </Link>
                  <Link href="http://ovalanalytics.com/">
                    <img src={MobileVal} alt="standford Profile" />
                  </Link>
                  <Link href="https://wiseyak.com/">
                    <img src={MobileWiseyak} alt="microsoft Profile" />
                  </Link>
                </Box>
              </Box>
              <Box sx={{ display: { xs : "flex", sm: "flex", md: "none"}}} flexDirection="column" alignItems="center"  justifyContent="center" borderRadius="1rem" padding="3rem" bgcolor="#1F384F">
                <Typography fontWeight="600" fontSize="1.5rem" lineHeight="34.5px" color="#fff" textAlign="center">
                  Receive updates from us.
                </Typography>
                <ButtonComponent bgcolor="#F05C26" width="8.6rem" marginTop="1rem">
                  <Link href="mailto:hemanta.shrestha@wiseyak.com" width="100%" sx={{ color: "#fff", textDecoration: "none"}}> 
                    Contact US
                  </Link>                  
                </ButtonComponent>
              </Box>
              <Container>
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
                      Contact us for meetings and demos, 
                      our team will reach to you.
                    </CustomDiscriptionTypography>
                  </Box>
                  <Container>
                    <Box zIndex="10" width="23%" marginRight="6rem" marginLeft="4rem" position="absolute" bgcolor="white" padding="1.5rem" borderRadius="1rem">
                      <CustomHeadingTypography textAlign="center" marginBottom="1.5rem">
                        Contact Us
                      </CustomHeadingTypography>
                      <TextField id="outlined-basic" 
                        value={fullName ?? ''}
                        onChange={(event) =>  { 
                          event.preventDefault();
                          setFullName(event.target.value);
                        }}
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
                      <TextField id="outlined-basic" type="number" fullWidth label="Enter your number"
                        onChange={(event) => {
                          event.preventDefault();  
                          setContactNumber(event.target.value);
                        }}
                        value={contactNumber ?? ''}
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
                            '& label.Mui-focused': {
                              color: 'red !important',
                            },
                          },
                        }}
                        variant="outlined" sx={textFieldStyle}/>
                      <TextField id="outlined-basic" type="email" fullWidth label="Enter your email address" variant="outlined"
                        value={email ?? ''}
                        onChange={(event) => { 
                          event.preventDefault();
                          setEmail(event.target.value);
                        }}
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
                      <ButtonComponent width="8.5rem" bgcolor="#FFCC00" sx={{cursor: "pointer"}} onClick={handleContact}>
                        Submit
                      </ButtonComponent>
                    </Box>
                    <img src={FormTopCircle} alt="contact form background" style={{
                      position: "absolute",
                      marginLeft: "24%",
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
              </Container>
            </Box>
          </Container>
          <Box sx={{ display: { xs : "none", sm: "none", md: "flex"}}} width="100%" marginTop="4rem" height="15rem" bgcolor="#F05C26">
            <img src={Eclipse} alt="eclipse looks" style={{ marginTop: "1.5rem", marginBottom: "1.5rem"}}/>
            <img src={ContactBelows} alt="eclipse looks" style={{ position: "absolute", marginTop: "1rem", marginLeft: "48%"}}/>
          </Box>
      </Box>
  )
}

export default OurPartner