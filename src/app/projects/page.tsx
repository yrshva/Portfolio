import {
  Box,
  FormControl,
  InputLabel,
  Select,
  Typography,
} from "@mui/material";
import React from "react";
import { colors } from "../../styles";
import { containerStyles } from "../../styles/projectStyles";
import SelectProject from "../../components/projects/SelectProject";

const Projects = () => {
  return (
    <Box sx={containerStyles} bgcolor={colors.primary.main}>
      <Box sx={{ width: "300px" }}>
        <Typography textAlign="start">Select a project to view</Typography>
        <SelectProject />
      </Box>
    </Box>
  );
};

export default Projects;
