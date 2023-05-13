import { Box } from "@mui/material";

import founderProfile from "../../assets/founderMessage.png";
import ButtonComponent from "../utils/ButtonComponent";
import { CustomDiscriptionTypography, CustomHeadingTypography } from "../utils/CustomTypography";

const FounderMessage = () => {
    return (
        <Box display="flex" justifyContent="space-between" alignItems="center" padding="2rem">
            <Box>
                <img src={founderProfile} alt="founder message" />
            </Box>
            <Box width="36rem">
                <CustomHeadingTypography>
                    Message From Our Founder
                </CustomHeadingTypography>
                <CustomDiscriptionTypography>
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