import React from 'react'
import { Box, Typography, styled } from '@mui/material'

const SingleCareerWeb = () => {
    const CustomJobDescription = styled(Typography)({
        fontWeight: 700,
        lineHeight:"2.25rem",
        fontSize:"1.5rem", 
        color:"#1F284F",
        marginTop:"2rem",
    });

    const CustomBoxDesign = styled(Box)({
        display: "flex"
    })

    const CustomTitleTypography = styled(Typography)({
        fontWeight: 400,
        fontSize: "1.5rem",
        color:"#17181A",
        lineHeight: "2.25rem"
    })

    return (
        <Box paddingLeft="1.6rem" >
            <Typography
                fontWeight={700}
                lineHeight="3rem"
                fontSize="2.5rem"
                color="#1F284F"
                marginTop="3rem"
            >
                Clinical Statistical / SAS Trainees
            </Typography>

            <CustomJobDescription>
                Job Title: Clinical Statistical /SAS Trainees<br />
                Number of open positions: 5<br/>
                Work: 100% Remote
            </CustomJobDescription>
            <Typography
                fontWeight={400}
                fontSize="1.25rem"
                color="#17181A"
                lineHeight="30px"
                marginTop="1rem"
            >
                NumericMind is looking to hire 5 Statistical/SAS trainees who are passionate about 
                building up his/her professional career in Clinical Programming and Pharmaceutical 
                industry in the U.S. In order to prepare for real world Clinical Programming projects, 
                the company will train the selected candidates by offering online and instructor-led SAS 
                trainings. During and following the completion of the trainings, company will also pay the 
                trainees attractive monthly stipends.
            </Typography>
            <CustomJobDescription>
                Training Timeline, Compensations and Expectations
            </CustomJobDescription>
            <CustomBoxDesign>
                <CustomJobDescription>
                    Training Phase 1 (4 Weeks):                             
                </CustomJobDescription>
                <CustomJobDescription fontWeight="400 !important">
                    Instructor-led Base SAS training.
                </CustomJobDescription>
            </CustomBoxDesign>
            <Box>
                <ul>
                    <li>
                        <CustomTitleTypography>
                            Our industry experts will evaluate the trainees on a weekly basis for 4 weeks.
                        </CustomTitleTypography>
                    </li>
                    <li>
                        <CustomTitleTypography>
                            After 4 weeks of training, each candidate will be evaluated before they are retained for further trainings.
                        </CustomTitleTypography>
                    </li>
                    <li>
                        <CustomTitleTypography>
                            If they are retained, they will have to go through 15 weeks of Phase 2 Training (Clinical SAS).
                        </CustomTitleTypography>
                    </li>
                </ul>
            </Box>
            <CustomBoxDesign>
                <CustomJobDescription>
                    Training Phase 2 (15 Weeks):                              
                </CustomJobDescription>
                <CustomJobDescription fontWeight="400 !important">
                    Instructor-led SAS Clinical Programming.
                </CustomJobDescription>
            </CustomBoxDesign>
            <Box>
                <ul>
                    <li>
                        <CustomTitleTypography>
                            After successful completion of total 19 weeks of formal training, the final candidates 
                            will be selected through company’s evaluation process. The finalized candidates will be 
                            employed as an intern (paid) for 3 months before company is ready to hire them as fulltime 
                            SAS programmers.
                        </CustomTitleTypography>
                    </li>
                    <li>
                        <CustomTitleTypography>
                            The selected candidates will have to make a commitment to work for NumericMind at least 
                            for 2 full years from the date of hire as a fulltime employee. If they fail to fulfill their 
                            obligations, they are required to pay all expenses incurred on them (training cost plus 
                            monthly stipends).
                        </CustomTitleTypography>
                    </li>
                    <li>
                        <CustomTitleTypography>
                            If a candidate discontinues training program/internship before completion, they are expected
                            to pay NumericMind all expenses incurred on them (training costs and monthly stipends).
                        </CustomTitleTypography>
                    </li>
                </ul>
            </Box>
            <CustomJobDescription>
                Required
            </CustomJobDescription>
            <CustomTitleTypography marginTop="1rem">
                The ideal candidate would have STRONG communication skills and a Bachelor’s/Master’s degree in Engineering 
                (BE/B. Tech); Computer Science/Programming, Statistics, Biostatistics, Bioinformatics, Biotechnology, or Mathematics.
            </CustomTitleTypography>
            <CustomBoxDesign>
                <CustomJobDescription fontWeight="400 !important">
                    <b>To apply</b>: Send your CV/Resume <b>hr@numericmind.com</b> before 19th March 2023
                </CustomJobDescription>
            </CustomBoxDesign>
        </Box>
    )
}

export default SingleCareerWeb