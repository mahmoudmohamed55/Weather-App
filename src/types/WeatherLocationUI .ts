export type WeatherLocationUI = {
  name: string;
  country: string;
  city: string;
  date: string;
  label?: "Today" | "Tomorrow" | "After Tomorrow";
  lon: number;
  lat: number;
};
