import { Box, Container, IconButton, Link } from "@mui/material";

import ButtonComponent from "../utils/ButtonComponent";
import founderProfile from "../../assets/founderMessage.png";
import founderMobileProfile from "../../assets/founderMessageMobile.png";
import { CustomDiscriptionTypography, CustomHeadingTypography } from "../utils/CustomTypography";
import { useNavigate } from "react-router-dom";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const FounderMessage = () => {
    const navigate  = useNavigate();
    return (
        <Container>
            <Box sx={{ 
                    display: { xs : "block", sm: "block", md: "flex"},
                    paddingX: {sm: "1rem", md: "2rem", xs: "1rem"}
                }} 
                justifyContent="space-between" alignItems="center" paddingY="2rem" 
            >
                <Box sx={{ display: { xs : "none", sm: "none", md: "flex"}}} >
                    <img src={founderProfile} alt="founder message" />
                </Box>
                <Box sx={{ display: { xs : "flex", sm: "flex", md: "none"}}} justifyContent="center" alignItems="center" marginBottom="1.5rem">
                    <img src={founderMobileProfile} alt="founder message" />
                </Box>
                <Box sx={{ width: { xs: "100%", sm: "100%", md: "36rem"}}}>
                    <CustomHeadingTypography
                        sx={{ justifyContent: "center", display: { xs : "flex", sm: "flex", md: "none"}}}

                    >
                        Our CEO
                    </CustomHeadingTypography>
                    <CustomHeadingTypography
                        sx={{ display: { xs : "none", sm: "none", md: "flex"}}}
                    >
                        Message From Our CEO
                    </CustomHeadingTypography>
                    <CustomDiscriptionTypography
                        sx={{
                            fontSize: { xs: "0.8rem", sm: "0.8rem", md: "1.25rem" }
                        }}
                    >
                        My name is <b>Dr. Hemanta Shrestha, </b> and I have dedicated over two decades to the fields 
                        of data science, statistics, and business analytics. Throughout my career, I have acquired 
                        extensive experience in statistical and financial modeling, corporate strategy and planning, 
                        and business decision support. With a focus on data analytics and statistical modeling, 
                        I have worked for esteemed companies such as AT&T, Virgin Mobile, and Nokia in the United States, 
                        refining my data and analytical skills. Currently, I am thrilled to 
                        lead NumericMind, a rapidly growing clinical programming and data analytics service company. 
                    </CustomDiscriptionTypography>
                    <Box display="flex">
                        <ButtonComponent width={{ md: "13rem", sm: "10rem", xs: "10rem"}} bgcolor="#F05C26" sx={{ cursor: "pointer"}} onClick={() => navigate('/about/wordFromCeo')}>
                            Read More
                        </ButtonComponent>
                        <IconButton sx={{ background: "#f05c26", color: "white", border: "2px solid #f05c26", borderRadius: "10px", paddingY: "0px", marginLeft: "1rem"}}>
                            <Link sx={{textDecoration: "none", color: "white", marginBottom: "-6px"}} href="https://www.linkedin.com/in/hemantash/">
                                <LinkedInIcon fontSize="3rem" />
                            </Link>
                        </IconButton>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default FounderMessage;