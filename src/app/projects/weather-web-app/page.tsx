"use client";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React from "react";

import styles from "../../../styles/weatherAppStyles";
import getWeatherQueryConfig from "../../../components/weather-web-app/helpers/requests";
import QueryLoader from "../../../components/QueryLoader";

const WeatherWebApp = () => {
  const queryConfig = getWeatherQueryConfig();
  const locationQuery = useQuery(queryConfig.getCurrentLocation());

  return (
    <Box sx={styles.container}>
      <QueryLoader query={locationQuery}>
        <Typography>{locationQuery.data?.city}</Typography>
      </QueryLoader>
    </Box>
  );
};

export default WeatherWebApp;
