import { Box, Container } from "@mui/material";

import ButtonComponent from "../utils/ButtonComponent";
import founderProfile from "../../assets/founderMessage.png";
import founderMobileProfile from "../../assets/founderMessageMobile.png";
import { CustomDiscriptionTypography, CustomHeadingTypography } from "../utils/CustomTypography";
import { useNavigate } from "react-router-dom";

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
                <Box sx={{ display: { xs : "none", sm: "none", md: "flex"}}}>
                    <img src={founderProfile} alt="founder message" />
                </Box>
                <Box sx={{ display: { xs : "flex", sm: "flex", md: "none"}}}>
                    <img src={founderMobileProfile} alt="founder message" />
                </Box>
                <Box sx={{ width: { xs: "20rem", sm: "20rem", md: "36rem"}}}>
                    <CustomHeadingTypography
                        sx={{ display: { xs : "flex", sm: "flex", md: "none"}}}
                    >
                        Our Founder
                    </CustomHeadingTypography>
                    <CustomHeadingTypography
                        sx={{ display: { xs : "none", sm: "none", md: "flex"}}}
                    >
                        Message From Our Founder
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
                    <ButtonComponent width="13rem" bgcolor="#F05C26" sx={{ cursor: "pointer"}} onClick={() => navigate('/about/wordFromCeo')}>
                        Read More
                    </ButtonComponent>
                </Box>
            </Box>
        </Container>
    )
}

export default FounderMessage;