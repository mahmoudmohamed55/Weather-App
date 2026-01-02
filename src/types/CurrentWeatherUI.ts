export type CurrentWeatherUI = {
  temperature: number;
  conditionText: string;
  icon: string;

  latitude: number;
  longitude: number;

  avgTemp: number;
  minTemp: number;
  maxTemp: number;
  feelsLike: number;

  cloudCover: number;
  chanceOfRain: number;

  pressure: number;
  humidity: number;

  windSpeedMph: number;
  windSpeedKph: number;
  windDirection: string;
  windDegree: number;
  windGustKph: number;

  windChill: number;
  visibilityKm: number;
  dewPoint: number;
  uvIndex: number;
  precipitationMm: number;
};
