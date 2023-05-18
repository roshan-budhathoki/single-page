import React from "react";

import {
  Box,
  Container,
  Typography,
} from "@mui/material";
import { CustomServiceHeading } from "../utils/CustomTypography";

const ServiceWeb = () => {
  return (
    <Container >
      <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
      >
          <Box>
              <CustomServiceHeading textAlign="center" marginTop="3rem">
              Services
              </CustomServiceHeading>
              <Typography
              fontWeight="500"
              fontSize="1.5rem"
              lineHeight="2.5rem"
              textAlign="center"
              width="70rem"
              marginTop="1rem"
              >
              Numeric Mind is a statistical consulting company providing full
              statistical analysis services primarily to the clients from Biotech,
              Healthcare, and Pharmaceuticals industries. Numeric Mind also provides
              statistical solutions and training services to academic and research
              institutions, government and non-government organizations across the
              globe.
              </Typography>
          </Box>
      </Box>
    </Container>
  );
};

export default ServiceWeb;
