import { Box, Typography } from "@mui/material";
import React from "react";
import { colors, fontSizes } from "../../styles";
import { Experience } from "./helpers/experience";

export interface ExperienceItemProps {
  experience: Experience;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience }) => {
  const { dates, position, company, description, location, imgUrl } =
    experience;

  return (
    <Box textAlign="start" mt={2}>
      <Box>
        <Typography color={colors.main.lighter} fontSize={fontSizes.M}>
          {dates}
        </Typography>
        <Box display="flex" gap={1} paddingBlock="4px">
          <Box>
            <img
              src={imgUrl}
              alt={company}
              width={25}
              style={{ borderRadius: 100 }}
            />
          </Box>
          <Box display="flex" flexDirection="row" gap={1}>
            <Typography fontWeight={600}>{company}</Typography>
            <Typography>-</Typography>
            <Typography fontStyle="italic">{position}</Typography>
            <Typography fontSize={fontSizes.M}>📍 {location}</Typography>
          </Box>
        </Box>
      </Box>
      {description.map((item, index) => (
        <Box display="flex" flexDirection="row" gap={1} key={index}>
          <Typography>✨</Typography>
          <Typography>{item}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default ExperienceItem;
