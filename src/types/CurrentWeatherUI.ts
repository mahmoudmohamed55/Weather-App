export type CurrentWeatherUI = {
  temperature: number;
  condition: {
    text: string;
    icon: string;
  };
  lat: number;
  lon: number;

  // From forecast today
  mintemp_c: number;
  mintemp_f: number;
  avgtemp_c: number;
  avgtemp_f: number;
  maxtemp_c: number;
  maxtemp_f: number;
  daily_chance_of_rain: number;
  avghumidity: number;
  maxwind_kph: number;
  maxwind_mph: number;
  temp_c: number;
  temp_f: number;

  // From current
  pressure_mb: number;
  humidity: number;
  wind_mph: number;
  wind_dir: string;
  wind_degree: number;
  wind_kph: number;
  gust_kph: number;
  vis_km: number;
  dewpoint_c: number;
  dewpoint_f: number;
  uv: number;
  precip_mm: number;
};
