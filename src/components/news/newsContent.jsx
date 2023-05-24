import React from 'react'
import {
    Box,
    Container,
    Typography,
    Grid,
    Link
  } from "@mui/material";
import { CustomServiceHeading,  } from "../utils/CustomTypography";
import newsPicture from "../../assets/newsSample.png";
import newsPicture2 from "../../assets/newsSample2.png";
  
const NewsContent = () => {
    const newsList = [
        {
            newsHeading: "Scientists Reverse Engineer mRNA Sequence of Moderna Vaccine", 
            path: "#",
            imagePath: newsPicture
        },
        {
            newsHeading: "Scientists Reverse Engineer mRNA Sequence of Moderna Vaccine", 
            path: "#",
            imagePath: newsPicture
        },
        {
            newsHeading: "Scientists Reverse Engineer mRNA Sequence of Moderna Vaccine", 
            path: "#",
            imagePath: newsPicture2
        },
        {
            newsHeading: "Scientists Reverse Engineer mRNA Sequence of Moderna Vaccine", 
            path: "#",
            imagePath: newsPicture2
        },
    ]
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
                marginTop={{md: "2rem", }}
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
                Numeric Mind is a statistical consulting company providing full
                statistical analysis services primarily to the clients from Biotech,
                Healthcare, and Pharmaceuticals industries. Numeric Mind also provides
                statistical solutions and training services to academic and research
                institutions, government and non-government organizations across the
                globe.
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
                                <img src={news.imagePath} alt="new heading"/>
                            </Box>
                            <Box sx={{ 
                                boxShadow: { sm: "0px 4px 4px rgba(0, 0, 0, 0.25)", xs: "0px 4px 4px rgba(0, 0, 0, 0.25)", md: "none" },
                                background:{ sm: "#fff", md: "none", xs:"#fff"}, borderRadius: "1rem",
                                paddingX: "2rem", paddingY:"1.25rem",
                                display: "flex", flexDirection: "column"}}>
                                <Link fontWeight="600" fontSize="1.25rem" href={news.path} fontFamily="Poppins" color="#000000">
                                {news.newsHeading}
                                </Link>
                                <Link fontWeight="600" fontSize="1rem" marginTop="2rem" marginBottom={{ md: "0rem", sm: "1rem", xs: "1rem" }} href={news.path} fontFamily="Poppins">
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