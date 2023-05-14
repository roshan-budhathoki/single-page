import { Box } from "@mui/material";

import ButtonComponent from "../utils/ButtonComponent";
import founderProfile from "../../assets/founderMessage.png";
import founderMobileProfile from "../../assets/founderMessageMobile.png";
import { CustomDiscriptionTypography, CustomHeadingTypography } from "../utils/CustomTypography";

const FounderMessage = () => {
    return (
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
                    I'm <b>Hemanta Shrestha</b>. I've worked as a data scientist and an economist for more than 20 years in predictive modelling, customer analytics, marketing analytics,
                    business analytics, data mining and financial planning. Having worked in the USA at notable telecom companies such as AT&T, Virgin Mobile & Nokia, I've acquired a 
                    lot of working experience on data science. 
                    I believe it's high time to give back to the community and help the new generation of aspiring data scientists to hone their skills and gain expertise in the field of data science.
                </CustomDiscriptionTypography>
                <ButtonComponent width="13rem" bgcolor="#F05C26">
                    Schedule a Meeting
                </ButtonComponent>
            </Box>
        </Box>
    )
}

export default FounderMessage;