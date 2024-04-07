import { Box } from "@mui/material";

import { ContactForm } from "../../components/ContactForm";
import { colors } from "../../styles";
import { containerStyles } from "../../styles/projectStyles";
import SkillsSection from "../../components/about-page/SkillsSection";
import ExperienceSection from "../../components/about-page/ExperienceSection";

const About = () => {
  return (
    <>
      <Box bgcolor={colors.primary.main}>
        <Box p="20px" sx={{ ...containerStyles, flexDirection: "column" }}>
          <SkillsSection />
          <ExperienceSection />
        </Box>
      </Box>
      <Box id="contact" bgcolor={colors.secondary.main} sx={containerStyles}>
        <ContactForm type="block" />
      </Box>
    </>
  );
};
export default About;
