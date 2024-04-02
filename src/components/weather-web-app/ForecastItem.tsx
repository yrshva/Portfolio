import { Box, Typography } from "@mui/material";
import React from "react";

import { DailyForecast } from "../../types/weather-app";
import { colors, fontSizes } from "../../styles";
import getForecastDay from "./helpers/getForecastDay";
import getWeatherIcon from "./helpers/weatherIcon";

interface ForecastItemProps {
  forecast: DailyForecast;
}
const ForecastItem: React.FC<ForecastItemProps> = ({ forecast }) => {
  const currentTemp = Math.round(forecast.temp.day);
  const tempMax = Math.round(forecast.temp.max);
  const tempMin = Math.round(forecast.temp.min);

  return (
    <Box
      sx={{
        backgroundColor: colors.primary.dark,
        padding: "16px",
        borderRadius: 5,
      }}
    >
      <Typography>{getForecastDay(forecast.dt)}</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Typography fontSize={fontSizes.XL}>{currentTemp}℃</Typography>
        <Typography fontSize={35}>
          {getWeatherIcon(forecast.weather[0].icon)}
        </Typography>
      </Box>
    </Box>
  );
};

export default ForecastItem;
