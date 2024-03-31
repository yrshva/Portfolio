import { FetchQueryOptions } from "@tanstack/react-query";
import {
  CurrentLocationReponse,
  CurrentWeatherResponse,
  GetCurrentWeatherQueryParams,
} from "../../../types/weather-app";

const getWeatherQueryConfig = () => ({
  getCurrentLocation: (): FetchQueryOptions<CurrentLocationReponse> => {
    const apiUrl = `https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_FINDER_API_KEY}`;
    return {
      queryKey: ["ip-finder"],
      queryFn: async () =>
        await fetch(apiUrl)
          .then((res) => res.json() as unknown as CurrentLocationReponse)
          .catch((err) => {
            console.warn(err);
            throw new Error(err);
          }),
      staleTime: 5 * 60 * 1000,
    };
  },
  getCurrentWeather: ({
    latitude,
    longitude,
  }: GetCurrentWeatherQueryParams): FetchQueryOptions<CurrentWeatherResponse> => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY}&units=metric`;
    return {
      queryKey: ["current-weather", latitude, longitude],
      queryFn: async () =>
        await fetch(apiUrl)
          .then((res) => res.json() as unknown as CurrentWeatherResponse)
          .catch((err) => {
            console.warn(err);
            throw new Error(err);
          }),
      staleTime: 5 * 60 * 1000,
    };
  },
});

export default getWeatherQueryConfig;
