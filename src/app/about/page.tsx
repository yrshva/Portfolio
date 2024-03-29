import Resume from "../../components/Resume";
import { ContactForm } from "../../components/ContactForm";
import { colors } from "../../styles";
import { containerStyles } from "../../styles/projectStyles";
import { Box } from "@mui/material";

const About = () => {
  return (
    <>
      <Box bgcolor={colors.primary.main}>
        <Box p="20px" sx={containerStyles}>
          <Resume />
        </Box>
      </Box>
      <Box id="contact" bgcolor={colors.secondary.main} sx={containerStyles}>
        <ContactForm type="block" />
      </Box>
    </>
  );
};
export default About;
