export type CurrentWeatherUI = {
  temperature: number;
  condition: {
    text: string;
    icon: string;
  };
  icon: string;

  latitude: number;
  longitude: number;

  avgTemp: number;
  minTemp: number;
  maxTemp: number;
  feelsLike: number;
  temp_c: string;
  temp_f: string;
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
