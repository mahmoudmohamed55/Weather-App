export type ForecastDayUI = {
  date: string;
  label: "Tomorrow" | "After Tomorrow";

  temperature: number;
  conditionText: string;
  icon: string;

  minTemp: number;
  maxTemp: number;
  chanceOfRain: number;

  avgHumidity: number;
  avgVisibilityKm: number;
  maxWindSpeedMph: number;
};
