import { WeatherIcon } from "../../../types/weather-app";

const codeMapping = {
  "01d": "CLEAR_DAY",
  "02d": "PARTLY_CLOUDY_DAY",
  "03d": "CLOUDY",
  "04d": "CLOUDY",
  "09d": "RAIN",
  "10d": "RAIN",
  "11d": "RAIN",
  "13d": "SNOW",
  "50d": "FOG",
  "01n": "CLEAR_NIGHT",
  "02n": "PARTLY_CLOUDY_NIGHT",
  "03n": "CLOUDY",
  "04n": "CLOUDY",
  "09n": "RAIN",
  "10n": "RAIN",
  "11n": "RAIN",
  "13n": "SNOW",
  "50n": "FOG",
};

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
    case "10d":
    case "11d":
    case "09n":
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
