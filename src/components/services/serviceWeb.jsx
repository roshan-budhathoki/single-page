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
              NumericMind is a leading statistical consulting company specializing in comprehensive analysis services for 
              Biotech, Healthcare, 
              and Pharmaceuticals. We also offer statistical solutions and training to academic, research institutions, 
              and global government/non-government organizations. Unlock data-driven insights with NumericMind's expertise.
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
              sx={{ cursor: "pointer"}}
              color={ showClinical ? "#fff" : "#171819" } 
              borderRadius="10px" padding=".7rem" textAlign="center" 
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
              sx={{ cursor: "pointer"}}
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
                Although NumericMind is a new player in the industry, we boast a team of seasoned experts with 
                extensive experience. We possess a strong technical understanding of the entire clinical trials 
                life cycle and acknowledge the crucial role of statistical data analysis.<br />
                Our skilled teams excel at analyzing Reporting and Analysis Plans (RAP) and constructing 
                datasets using the Study Data Tabulation Model (SDTM) and Analysis Data Model (ADaM). We conduct 
                relevant statistical analysis on these datasets, create necessary tables, listings, and figures, 
                and develop customized reports. Throughout the process, we strictly adhere to the guidelines and 
                regulations set forth by CDISC.<br/>
                With NumericMind, you can trust our expertise to guide your research data towards evidence-based 
                statistical decision-making, ensuring project success. Our biostatisticians collaborate closely with 
                clients, offering assistance in study design, selecting appropriate statistical methods, and providing 
                comprehensive analysis, visualization, and reporting with meaningful insights.<br />
                Choose NumericMind for meticulous attention to detail, adherence to industry standards, and a 
                dedication to delivering quality solutions in biostatistics.
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
                NumericMind delivers exceptional, high-quality biostatistics services. 
                Our experienced team combines programming skills with expertise in bio-statistics 
                to guide you towards evidence-based statistical decision-making, ensuring project success. 
                Collaborating closely with clients, our biostatisticians help create study designs, identify 
                precise statistical methods, analyze and visualize data, and generate insightful reports. Trust 
                NumericMind to unlock the full potential of your research data and provide you with the valuable 
                information needed for informed decision-making. 
                Choose us for comprehensive biostatistical solutions that drive your project towards success.
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
                  The synergy between businesses, finances, and statistics is undeniable. Financial institutions generate vast amounts of data, which holds valuable insights for future planning, policy development, and decision-making.
                  NumericMind specializes in offering a wide range of statistical analysis services, tailored to customer-level data. Our statistics-based solutions empower you to formulate effective policies and make evidence-backed decisions, fostering business growth and future readiness.<br/>
                  While we cater to all business sectors, our current focus lies in Insurance, Risk Management, Asset Management, Banking, and Agribusiness. Trust NumericMind to unlock the potential within your data, driving informed strategies and positioning your business for a successful future.
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
                At NumericMind, our diverse team comprises experts from various domains, 
                enabling us to provide statistical programming services tailored to your 
                research or business needs. Our dedicated teams meticulously analyze datasets, 
                prepare databases, and develop analysis plans. Additionally, we offer protocol 
                designs, sample size investigations, development of statistical analysis plans, 
                and mock table shells. With our comprehensive expertise, we cater to a wide range 
                of industries, ensuring accurate and efficient statistical programming solutions. 
                Trust NumericMind for precise data analysis and 
                programming support that drives the success of your projects.
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
                We focus on collecting data for the future. Our expert teams excel at processing, mining, and presenting
                 data in a reader-friendly format. With custom-made tables, listings, and figures, we offer comprehensive 
                 data visualization and analysis to enhance your understanding of valuable insights.
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
                
                  As a leading statistical service provider, NumericMind offers diverse statistical 
                  modeling services to shape your future planning. Our expertise encompasses advanced 
                  techniques like Machine Learning and Deep Learning, enabling us to develop cutting-edge 
                  models for precise future predictions.<br />

                  NumericMind's talented team excels in creating both simple uni-variate models and complex 
                  multivariate models, including cluster analysis, factor analysis, principal component 
                  analysis, and time series analysis. Additionally, we specialize in experimental design, 
                  non-parametric methods, Bayesian decision making, ANOVA, MANOVA, and discriminate analysis.
                  Trust NumericMind for state-of-the-art statistical modeling solutions that empower your 
                  decision-making and drive success.
            </CustomAboutDiscription>
          </Box>
        </Container>
      }
    </Container>
  );
};

export default ServiceWeb;
