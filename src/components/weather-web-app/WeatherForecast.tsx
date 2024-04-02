import { useQuery } from "@tanstack/react-query";
import React from "react";

import { City } from "../../types/weather-app";
import getWeatherQueryConfig from "./helpers/requests";
import QueryLoader from "../QueryLoader";
import { Box } from "@mui/material";
import ForecastItem from "./ForecastItem";

interface WeatherForecastProps {
  city: City;
}

const WeatherForecast: React.FC<WeatherForecastProps> = ({ city }) => {
  const queryConfig = getWeatherQueryConfig();
  const query = useQuery(
    queryConfig.getForecast({
      lat: city.lat,
      lon: city.lon,
    })
  );

  return (
    <QueryLoader query={query}>
      {({ daily }) => {
        return (
          <Box
            sx={{
              display: "flex",
              rowGap: 4,
              columnGap: 8,
              flexWrap: "wrap",
              justifyContent: "center",
              maxWidth: "900px",
              mt: "32px",
            }}
          >
            {daily.map((item) => (
              <ForecastItem forecast={item} key={item.dt} />
            ))}
          </Box>
        );
      }}
    </QueryLoader>
  );
};

export default WeatherForecast;
