import {
  Box,
  FormControl,
  InputLabel,
  Select,
  Typography,
} from "@mui/material";
import React from "react";
import { colors } from "../../../styles";
import { containerStyles } from "../../../styles/projectStyles";

const DictionaryWebApp = () => {
  return <Box sx={containerStyles} bgcolor={colors.primary.main}></Box>;
};

export default DictionaryWebApp;
