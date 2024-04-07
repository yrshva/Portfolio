import { Box, Typography } from "@mui/material";
import React from "react";

import { codeFontFamily } from "../../styles";
import ExperienceItem, { ExperienceItemProps } from "./ExperienceItem";
import experience from "./helpers/experience";

const ExperienceSection = () => {
  return (
    <Box maxWidth="600px" mt={2}>
      <Typography fontFamily={codeFontFamily}>Experience</Typography>
      {experience.map((item, index) => (
        <ExperienceItem key={index} experience={item} />
      ))}
    </Box>
  );
};

export default ExperienceSection;
