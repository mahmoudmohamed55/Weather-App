import type { CurrentWeatherUI } from "./CurrentWeatherUI";
import type { ForecastDayUI } from "./ForecastDayUI";
import type { WeatherLocationUI } from "./WeatherLocationUI ";

export type WeatherPageUI = {
  location: WeatherLocationUI;
  today: CurrentWeatherUI;
  forecast: ForecastDayUI[];
};
