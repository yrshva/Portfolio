import { WeatherIcon } from "../../../types/weather-app";

const getWeatherIcon = (icon: WeatherIcon) => {
  switch (icon) {
    case "01d":
      return "☀️";
    case "02d":
      return "⛅️";
    case "03d":
    case "02n":
    case "04d":
    case "03n":
    case "04n":
      return "☁️";
    case "09d":
    case "09n":
    case "10d":
    case "10n":
    case "11d":
    case "11n":
      return "🌧️";
    case "13d":
    case "13n":
      return "🌨️";
    case "50d":
    case "50n":
      return "🌫️";
    case "01n":
      return "🌙";
  }
};

export default getWeatherIcon;
