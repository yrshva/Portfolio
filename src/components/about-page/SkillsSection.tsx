import { Box, Typography } from "@mui/material";
import React from "react";

import badge from "./helpers/badge";
import { codeFontFamily } from "src/styles";

const backgroundColor = "20232A";

const SkillsSection = () => {
  return (
    <Box maxWidth="600px">
      <Typography fontFamily={codeFontFamily}>Skills</Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          mt: 2,
        }}
      >
        {badge.map(({ label, logo }, index) => (
          <img
            key={index}
            src={`https://img.shields.io/badge/${label}-${backgroundColor}?style=for-the-badge&logo=${logo.name}&logoColor=${logo.color}`}
            alt="Adobe XD Badge"
          />
        ))}
      </Box>
    </Box>
  );
};

export default SkillsSection;
