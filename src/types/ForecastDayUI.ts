export type ForecastDayUI = {
  date: string;
  label: "Tomorrow" | "After Tomorrow";
  temperature: number;
  conditionText: string;
  icon: string;
  forecastday: {
    date: string;
    day: {
      maxtemp_c: number;
      mintemp_c: number;
      avgtemp_c: number;
      maxwind_mph: number;
      totalprecip_mm: number;
      condition: {
        text: string;
        icon: string;
      };
    };
  }[];
  minTemp: number;
  maxTemp: number;
  chanceOfRain: number;

  avgHumidity: number;
  avgVisibilityKm: number;
  maxWindSpeedMph: number;
};
