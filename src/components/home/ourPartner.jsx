import React from 'react'
import { Box, Typography, TextField } from '@mui/material'

import Eclipse from '../../assets/eclipse.png';
import Cambridge from '../../assets/Cambridge.png';
import Microsoft from '../../assets/Microsoft.png';
import Standford from '../../assets/Standford.png';
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
    <Box position="relative" sx={{
        backgroundImage: "linear-gradient(to right bottom, #f3f1fe, #f0f3ff, #eef4fe, #eef6fd, #eef7fc)",
      }}>
        <Box padding="2rem">
          <CustomHeadingTypography
              fontSize="2.5rem"
              textAlign="center"
          >
              Our Partners & Alliances
          </CustomHeadingTypography>
          <Box display="flex" justifyContent="center" paddingY="3rem" marginBottom="4rem">
            <Box width="50%" justifyContent="space-between" display="flex" alignItems="center">
              <img src={Standford} alt="standford Profile" height="40px" width="88px"/>
              <img src={Cambridge} alt="cambridge Profile" height="24px" width="118px"/>
              <img src={Microsoft} alt="microsoft Profile" height="24px" width="116px"/>
            </Box>
          </Box>
          <Box display="flex" justifyContent="space-between">
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
            <Box width="578px" zIndex="10" marginLeft="47%" position="absolute" bgcolor="white" padding="1.5rem" borderRadius="1rem">
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
              marginLeft: "83%",
              marginTop: "-4rem"
            }} />
            <img
              src={MenuDesign} 
              alt="Menu Design"
              style={{
                position: "absolute",
                marginLeft: "42%",
                marginTop: "-2rem"
              }}
            />
          </Box>
        </Box>
        <Box width="100%" marginTop="4rem" height="15rem" bgcolor="#F05C26">
          <img src={Eclipse} alt="eclipse looks" style={{marginTop: "1.7rem"}}/>
          <img src={ContactBelows} alt="eclipse looks" style={{ position: "absolute", marginTop: "1rem", marginLeft: "38%"}}/>
        </Box>
    </Box>
  )
}

export default OurPartner