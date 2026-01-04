import type { CurrentWeatherUI } from "./CurrentWeatherUI";
import type {  ForecastUI } from "./ForecastDayUI";
import type { WeatherLocationUI } from "./WeatherLocationUI ";

export type WeatherPageUI = {
  location: WeatherLocationUI;
  current: CurrentWeatherUI;
  forecast: ForecastUI; // هنا forecast كائن فيه forecastday
};
