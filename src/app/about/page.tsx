import { Box } from "@chakra-ui/react";

import Resume from "../../components/Resume";
import { ContactForm } from "../../components/ContactForm";
import { colors } from "../../styles";
import { containerStyles } from "../../styles/projectStyles";

const About = () => {
  return (
    <>
      <Box bgColor={colors.primary.main}>
        <Box p="20px" sx={containerStyles}>
          <Resume />
        </Box>
      </Box>
      <Box id="contact" bgColor={colors.secondary.main} sx={containerStyles}>
        <ContactForm type="block" />
      </Box>
    </>
  );
};
export default About;
