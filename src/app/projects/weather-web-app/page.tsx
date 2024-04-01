"use client";
import { Box, Button, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

import styles from "../../../styles/weatherAppStyles";
import getWeatherQueryConfig from "../../../components/weather-web-app/helpers/requests";
import QueryLoader from "../../../components/QueryLoader";
import Search from "../../../components/weather-web-app/Search";
import { City } from "../../../types/weather-app";
import CurrentWeather from "../../../components/weather-web-app/CurrentWeather";
import { fontSizes, mainFontFamily } from "../../../styles";

const WeatherWebApp = () => {
  const queryConfig = getWeatherQueryConfig();
  const locationQuery = useQuery(queryConfig.getCurrentLocation());
  const [city, setCity] = useState<City | null>(null);

  return (
    <QueryLoader query={locationQuery}>
      {({ city: name, lat, lon }) => {
        const currentCity: City = {
          name,
          lat: Number(lat),
          lon: Number(lon),
        };

        return (
          <Box sx={styles.container}>
            <Box sx={{ minWidth: "250px", width: "90%", maxWidth: "450px" }}>
              <Search
                onSelect={(value) => {
                  setCity(value);
                }}
              />
              <Button
                onClick={() => {
                  setCity(currentCity);
                }}
                variant="text"
                sx={{
                  textTransform: "unset",
                  marginTop: "5px",
                  padding: "2px",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: mainFontFamily,
                    fontSize: fontSizes.M,
                  }}
                >
                  Show current location weather
                </Typography>
              </Button>
              <CurrentWeather city={city ?? currentCity} />
            </Box>
          </Box>
        );
      }}
    </QueryLoader>
  );
};

export default WeatherWebApp;
