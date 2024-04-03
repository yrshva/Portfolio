"use client";
import { Box, Button, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

import ShowCurrentLocation from "../../../components/weather-web-app/ShowCurrentLocation";
import getWeatherQueryConfig from "../../../components/weather-web-app/helpers/requests";
import WeatherForecast from "../../../components/weather-web-app/WeatherForecast";
import CurrentWeather from "../../../components/weather-web-app/CurrentWeather";
import QueryLoader from "../../../components/QueryLoader";
import Search from "../../../components/weather-web-app/Search";
import { City } from "../../../types/weather-app";
import { colors } from "../../../styles";

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
          <Box
            sx={{
              minHeight: "100vh",
              backgroundColor: colors.primary.main,
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  width: "90%",
                  minWidth: "250px",
                  maxWidth: "450px",
                  alignSelf: "center",
                  mt: "90px",
                }}
              >
                <Search
                  onSelect={(value) => {
                    setCity(value);
                  }}
                />
                <ShowCurrentLocation onClick={() => setCity(currentCity)} />
                <CurrentWeather city={city ?? currentCity} />
              </Box>
              <WeatherForecast city={city ?? currentCity} />
            </Box>
          </Box>
        );
      }}
    </QueryLoader>
  );
};

export default WeatherWebApp;
