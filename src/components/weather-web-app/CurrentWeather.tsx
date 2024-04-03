"use client";
import { useQuery } from "@tanstack/react-query";
import { Box, Typography } from "@mui/material";
import React from "react";

import { colors, fontSizes } from "../../styles";
import { City } from "../../types/weather-app";
import getWeatherQueryConfig from "./helpers/requests";
import getWeatherIcon from "./helpers/weatherIcon";
import QueryLoader from "../QueryLoader";
import LocalTime from "./LocalTime";

interface CurrentWeatherProps {
  city: City;
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ city }) => {
  const queryConfig = getWeatherQueryConfig();
  const query = useQuery(
    queryConfig.getCurrentWeather({
      lat: city.lat,
      lon: city.lon,
    })
  );

  return (
    <QueryLoader query={query}>
      {({ main, timezone, wind, weather }) => {
        const formattedTemp = `${Math.round(main.temp)}℃`;
        const formattedWind = `Wind: ${Math.round(wind.speed)} km/h`;
        const formattedTempMax = `Max: ${Math.round(main.temp_max)}℃`;
        const formattedTempMin = `Min: ${Math.round(main.temp_min)}℃`;
        return (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: 2,
              alignItems: "center",
            }}
          >
            <Box sx={{ width: "45%", overflowWrap: "break-word" }}>
              <Typography fontSize={fontSizes.XL}>{city.name}</Typography>
              <LocalTime timezone={timezone} />
            </Box>
            <Box>
              <Typography fontSize={40}>
                {getWeatherIcon(weather[0].icon)}
              </Typography>
            </Box>
            <Box
              sx={{
                width: "45%",
                textAlign: "end",
                overflowWrap: "break-word",
              }}
            >
              <Typography fontSize={fontSizes.XL} fontWeight={500}>
                {formattedTemp}
              </Typography>
              <Typography fontSize={fontSizes.M} color={colors.main.lighter}>
                {formattedWind}
              </Typography>
              <Typography fontSize={fontSizes.M} color={colors.main.lighter}>
                {formattedTempMax} | {formattedTempMin}
              </Typography>
            </Box>
          </Box>
        );
      }}
    </QueryLoader>
  );
};

export default CurrentWeather;
