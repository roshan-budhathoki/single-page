import React from 'react'
import {
    Box,
    Container,
    Typography,
    Grid,
    Link
  } from "@mui/material";
import { CustomServiceHeading,  } from "../utils/CustomTypography";

import news1 from "../../assets/news1.png";
import news2 from "../../assets/news2.png";
import news3 from "../../assets/news3.png";
import news4 from "../../assets/news4.png";
import news5 from "../../assets/news5.png";
import news6 from "../../assets/news6.png";
import news7 from "../../assets/news7.png";

export const newsList = [
    {
        newsHeading: "Scientists Reverse Engineer mRNA Sequence of Moderna Vaccine", 
        path: "https://numericmind.com/scientists-reverse-engineer-mrna-sequence-of-moderna-vaccine/",
        imagePath: news1
    },
    {
        newsHeading: "New Malaria Vaccine Shows Most Efficacy of Any to Date: Small Trial", 
        path: "https://numericmind.com/new-malaria-vaccine-shows-most-efficacy-of-any-to-date-small-trial/",
        imagePath: news2
    },
    {
        newsHeading: "COVID-19 Vaccine Combos Aim to Boost Immunity", 
        path: "https://numericmind.com/covid-19-vaccine-combos-aim-to-boost-immunity/",
        imagePath: news3
    },
    {
        newsHeading: "NIH Halts Outpatient COVID-19 Convalescent Plasma Trial", 
        path: "https://numericmind.com/nih-halts-outpatient-covid-19-convalescent-plasma-trial/",
        imagePath: news4
    },
    {
        newsHeading: "Q&A: New Trials Tackle COVID-19 Vaccines in Pregnancy", 
        path: "https://numericmind.com/qa-new-trials-tackle-covid-19-vaccines-in-pregnancy/",
        imagePath: news5
    },
    {
        newsHeading: "High Risk of Bias in Early COVID-19 Studies: Meta-Analysis", 
        path: "https://numericmind.com/high-risk-of-bias-in-early-covid-19-studies-meta-analysis/",
        imagePath: news6
    },
    {
        newsHeading: "Eli Lilly Claims New Drug Can Slow Alzheimer’s-Related Decline", 
        path: "https://numericmind.com/eli-lilly-claims-new-drug-can-slow-alzheimers-related-decline/",
        imagePath: news7
    },
]

const NewsContent = () => {
  return (
    <Container>
         <Box
            sx={{ 
                paddingX: {sm: "1rem", md: "2rem", xs: "1rem"},
                paddingY: "1rem"
            }}
            textAlign={{ md: "start", sm: "center", xs: "center"}}
        >
            <CustomServiceHeading 
                textAlign="center" 
                fontSize={{ sm: "1.5rem", xs: "1.5rem", md: "2.5rem" }}
                marginTop={{md: "2rem", xs: "1rem",  sx: "1rem" }}
            >
                New and Events
            </CustomServiceHeading>
            <Typography
                fontWeight="500"
                fontSize={{md: "1.5rem", sm: "1rem", xs: "1rem"}}
                lineHeight={{md:"2.25rem", sm: "1.5rem", xs: "1.5rem"}}
                textAlign="center"
                width={{md: "70rem", sm: "19.5rem", xs: "19.5rem"}}
                marginTop="1rem"
                >
                Stay updated with the latest news and events in the data analytics industry with Numeric Mind. 
                Discover valuable insights, trends, and advancements through our informative 
                articles and participate in exciting events that shape the future of data analysis.
            </Typography>
        </Box>
            <Grid container spacing={{ xs: 2 }} columns={{ xs: 4, sm: 8, md: 12 }} marginBottom={{md: "4rem", sm: "2rem", xs: "2rem" }} marginTop="2rem !important">
            {
                newsList.map((news, index) => 
                <Grid item xs={12} sm={12} md={6} key={index} sx={{
                marginTop: "1rem"
                }}>
                    <Container>
                        <Box sx={{ display:"flex",}}>
                            <Box display={{ md: "flex", sm: "none", xs: "none" }}>
                                <img src={news.imagePath} alt="new heading" height="160px" width="170px"/>
                            </Box>
                            <Box sx={{ 
                                boxShadow: { sm: "0px 4px 4px rgba(0, 0, 0, 0.25)", xs: "0px 4px 4px rgba(0, 0, 0, 0.25)", md: "none" },
                                background:{ sm: "#fff", md: "none", xs:"#fff"}, borderRadius: "1rem",
                                paddingX: "1rem", paddingY:"1rem",
                                display: "flex", flexDirection: "column"}}>
                                <Link fontWeight="600" fontSize="1.25rem" href={news.path} fontFamily="Poppins" color="#000000">
                                {news.newsHeading}
                                </Link>
                                <Link fontWeight="600" fontSize="1rem" marginTop="1rem" marginBottom={{ md: "0rem", sm: "1rem", xs: "1rem" }} href={news.path} fontFamily="Poppins">
                                    View Article
                                </Link>
                            </Box>
                        </Box>
                    </Container>
                </Grid>
                )
            }
            </Grid>
    </Container>
  )
}

export default NewsContent