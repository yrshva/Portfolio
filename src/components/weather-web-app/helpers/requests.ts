import { FetchQueryOptions } from "@tanstack/react-query";
import {
  CurrentLocationReponse,
  CurrentWeatherResponse,
  Coordinates,
  WeatherForecastResponse,
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
      staleTime: 15 * 60 * 1000,
    };
  },
  getCurrentWeather: ({
    lat,
    lon,
  }: Coordinates): FetchQueryOptions<CurrentWeatherResponse> => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY}&units=metric`;
    return {
      queryKey: ["current-weather", lat, lon],
      queryFn: async () =>
        await fetch(apiUrl)
          .then((res) => res.json())
          .catch((err) => {
            console.warn(err);
            throw new Error(err);
          }),
      staleTime: 15 * 60 * 1000,
    };
  },
  getForecast: ({
    lat,
    lon,
  }: Coordinates): FetchQueryOptions<WeatherForecastResponse> => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,hourly,minutely,alerts&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY}&units=metric`;
    return {
      queryKey: ["weather-forecast", lat, lon],
      queryFn: async () =>
        await fetch(apiUrl)
          .then((res) => res.json())
          .catch((err) => {
            console.warn(err);
            throw new Error(err);
          }),
      staleTime: 15 * 60 * 1000,
    };
  },
});

export default getWeatherQueryConfig;
