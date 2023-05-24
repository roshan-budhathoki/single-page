import React from "react";

import {
  Box,
  Container,
  Typography,
} from "@mui/material";
import { CustomServiceHeading, CustomServiceTypography } from "../utils/CustomTypography";

import { CustomAboutDiscription, CustomAboutUs } from '../utils/CustomTypography'

const ServiceWeb = () => {
  const [showClinical, setShowClinical] = React.useState(true);
  return (
    <Container >
      <Box
            sx={{ 
                paddingX: {sm: "1rem", md: "2rem", xs: "1rem"},
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
              Services
              </CustomServiceHeading>
              <Typography
                fontWeight="500"
                fontSize={{md: "1.5rem", sm: "1rem", xs: "1rem"}}
                lineHeight={{md:"2.25rem", sm: "1.5rem", xs: "1.5rem"}}
                textAlign="center"
                width={{md: "70rem", sm: "19.5rem", xs: "19.5rem"}}
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
              bgcolor={ showClinical ?  "#F05C26" : "transparent" }  
              color={ showClinical ? "#fff" : "#171819" } 
              borderRadius="10px" padding=".7rem" textAlign="center" 
              marginBottom="1rem"
              onClick={(e) =>{ e.preventDefault(); setShowClinical(true)}}
            >
              <CustomServiceTypography>
                Clinical Services
              </CustomServiceTypography>
            </Box>
            <Box 
              width={{ md: "50%", sm: "100%", xs: "100%" }}
              bgcolor={ showClinical ? "transparent" : "#F05C26"  }  
              color={ showClinical ?  "#171819" : "#fff" }  
              onClick={(e)=> { e.preventDefault(); setShowClinical(false)}}
              borderRadius="10px" padding=".7rem" textAlign="center" 
            >
              <CustomServiceTypography>
                Data Analytics Services
              </CustomServiceTypography>
            </Box>
          </Box>
        </Box>
      </Container>
      {
        showClinical && 
        <Container>
          <Box marginBottom={{md: "3rem", sm: "1rem", xs: "1rem"}} 
            textAlign={{ md: "start", sm: "center", xs: "center"}}
          >
            <CustomAboutUs
                fontSize={{ sm: "1rem", xs: "1rem", md: "2.5rem" }}
            >
                Clinical Trial Data Analysis  
            </CustomAboutUs>
            <CustomAboutDiscription 
                fontSize={{ md: "1.25rem", sm: "0.75rem", xs: "0.75rem"}}
                lineHeight={{ md: "1.9rem", sm: "1.125rem", xs: "1.125rem"}}
                marginTop={{ md: "1rem", sm: "0.3rem", xs: "0.3rem" }}
              >
                Numeric Mind may be a relatively new name in the industry but we comprise of 
                some of the most experienced individuals in the trade. We have a strong technical 
                understanding of the complete clinical trials life cycle and recognize the role and 
                importance of statistical data analysis.<br/>
                Our skilled teams are able to analyze the details in the Reporting and Analysis Plan (RAP) and build datasets including the Study Data Tabulation Model (SDTM) & Analysis Data Model (ADaM), perform relevant statistical analysis of these datasets, create the required tables, listings and figures and finally develop complete tailor-made reports, all while following the CDISC guidelines and regulations.
            </CustomAboutDiscription>
          </Box>
          <Box  marginBottom={{md: "3rem", sm: "1rem", xs: "1rem"}}
            textAlign={{ md: "start", sm: "center", xs: "center"}}
          >
            <CustomAboutUs
                fontSize={{ sm: "1rem", xs: "1rem", md: "2.5rem" }}
                marginTop={{ sm: "1rem", xs: "1rem" }}
            >
                Biostatistics
            </CustomAboutUs>
            <CustomAboutDiscription 
                fontSize={{ md: "1.25rem", sm: "0.75rem", xs: "0.75rem"}}
                lineHeight={{ md: "1.9rem", sm: "1.125rem", xs: "1.125rem"}}
                marginTop={{ md: "1rem", sm: "0.3rem", xs: "0.3rem" }}>
                Numeric Mind offers high-quality services in the biostatistics genre. 
                With the fusion of experienced programming and expertise in bio-statistics, 
                we can guide you and your research data to reach evidence-based statistical 
                decision makings and make the project a success.<br />
                Our biostatistician team is able to collaborate with clients to create study 
                designs, figure out the exact statistical methods required, and proceed forward 
                to analyze, visualize and provide reports with significant information.
            </CustomAboutDiscription>
          </Box>
        </Container>
      }
      {
        !showClinical && 
        <Container>
          <Box 
            marginBottom={{md: "3rem", sm: "1rem", xs: "1rem"}}
            textAlign={{ md: "start", sm: "center", xs: "center"}}
          >
            <CustomAboutUs
                fontSize={{ sm: "1rem", xs: "1rem", md: "2.5rem" }}
            >
               Business Decision Support  
            </CustomAboutUs>
            <CustomAboutDiscription 
                fontSize={{ md: "1.25rem", sm: "0.75rem", xs: "0.75rem"}}
                lineHeight={{ md: "1.9rem", sm: "1.125rem", xs: "1.125rem"}}
                marginTop={{ md: "1rem", sm: "0.3rem", xs: "0.3rem" }}>
                Businesses, Finances and Statistics go hand in hand. 
                Financial institutions generate a huge amount of data, data 
                which can be used to bring out information, instrumental in 
                development of future plans & policies, and decision making.<br />
                Numeric Mind offers basic to advanced statistical analysis based on the customer 
                level data and provides statistics-based solutions which help you develop effective 
                policies and make evidence-backed decisions. Thus, helping you and your business grow 
                and prepare for the future today.<br />
                Areas we are able to serve include each and every business but we want to focus on Insurance, 
                Risk Management, Asset Management, Banking, and Agribusiness at the moment.
            </CustomAboutDiscription>
          </Box>
          <Box 
            marginBottom={{md: "3rem", sm: "1rem", xs: "1rem"}}
            textAlign={{ md: "start", sm: "center", xs: "center"}}
          >
            <CustomAboutUs
                fontSize={{ sm: "1rem", xs: "1rem", md: "2.5rem" }}
                marginTop={{ sm: "1rem", xs: "1rem" }}
            >
               Statistical Programming
            </CustomAboutUs>
            <CustomAboutDiscription 
                fontSize={{ md: "1.25rem", sm: "0.75rem", xs: "0.75rem"}}
                lineHeight={{ md: "1.9rem", sm: "1.125rem", xs: "1.125rem"}}
                marginTop={{ md: "1rem", sm: "0.3rem", xs: "0.3rem" }}>
                We at Numeric Mind have a diverse team incorporating experts in multiple streams. 
                Thus, we are able to offer statistical programming services no matter what your research 
                or business is based on. Our teams are fully dedicated towards your specific programming needs. 
                We minutely analyze datasets from raw data, prepare databases and analysis plans. Besides, 
                we also provide protocol designs, sample size investigations, development of statistical 
                analysis plans, and mock table shells as well.
            </CustomAboutDiscription>
          </Box>  
          <Box marginBottom={{md: "3rem", sm: "1rem", xs: "1rem"}}
            textAlign={{ md: "start", sm: "center", xs: "center"}}
          >
            <CustomAboutUs
                fontSize={{ sm: "1rem", xs: "1rem", md: "2.5rem" }}
                marginTop={{ sm: "1rem", xs: "1rem" }}
            >
               Data Analytics & Visualization
            </CustomAboutUs>
            <CustomAboutDiscription 
                fontSize={{ md: "1.25rem", sm: "0.75rem", xs: "0.75rem"}}
                lineHeight={{ md: "1.9rem", sm: "1.125rem", xs: "1.125rem"}}
                marginTop={{ md: "1rem", sm: "0.3rem", xs: "0.3rem" }}>
                Collecting data for the future is what we are doing right now. 
                To process, mine and present data in a readable format are essential 
                steps to understanding data. Our teams can provide multiple data-visualization 
                and analysis in the form of tables, listings and figures custom-made to help you 
                understand your data better.
            </CustomAboutDiscription>
          </Box>
          <Box marginBottom={{md: "3rem", sm: "1rem", xs: "1rem"}}
            textAlign={{ md: "start", sm: "center", xs: "center"}}
          >
            <CustomAboutUs
                fontSize={{ sm: "1rem", xs: "1rem", md: "2.5rem" }}
                marginTop={{ sm: "1rem", xs: "1rem" }}
            >
               Statistical Modeling
            </CustomAboutUs>
            <CustomAboutDiscription 
                fontSize={{ md: "1.25rem", sm: "0.75rem", xs: "0.75rem"}}
                lineHeight={{ md: "1.9rem", sm: "1.125rem", xs: "1.125rem"}}
                marginTop={{ md: "1rem", sm: "0.3rem", xs: "0.3rem" }}>
                Being one of the leading statistical service companies, 
                Numeric Mind offers various statistical modeling services to help 
                you plan for a better future ahead.We work with various statistical 
                modeling techniques including Machine Learning and Deep learning to 
                create state-of-art models that will help you make precise and accurate 
                predictions of the future.<br/>  
                Numeric Mind team can develop and analyze simple uni-variate statistical
                 models as well as more complex multivariate models including cluster analysis, 
                 factor analysis, principal component analysis and time series analysis. Similarly, 
                 our team can also handle experimental design, non-parametric, Bayesian decision 
                 making, ANOVA, MANOVA, discriminate analysis.
            </CustomAboutDiscription>
          </Box>
        </Container>
      }
    </Container>
  );
};

export default ServiceWeb;
