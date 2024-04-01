export interface CurrentLocationReponse {
  businessName: string;
  businessWebsite: string;
  city: string;
  continent: string;
  country: string;
  countryCode: string;
  ipName: string;
  ipType: string;
  isp: string;
  lat: number;
  lon: number;
  org: string;
  query: string;
  region: string;
  status: "success" | "error";
}

export interface Coordinates {
  lon: number;
  lat: number;
}
export interface City extends Coordinates {
  name: string;
}

export type WeatherCondition =
  | "Thunderstorm"
  | "Drizzle"
  | "Rain"
  | "Snow"
  | "Mist"
  | "Smoke"
  | "Haze"
  | "Dust"
  | "Fog"
  | "Sand"
  | "Dust"
  | "Ash"
  | "Squall"
  | "Tornado"
  | "Clear"
  | "Clouds";

export interface CurrentWeatherDetails {
  id: number;
  main: "Clouds";
  description: "broken clouds";
  icon: "04n";
}

export interface CurrentWeatherResponse {
  coord: Coordinates;
  weather: Array<CurrentWeatherDetails>;
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: Date;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: Date;
    sunset: Date;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
