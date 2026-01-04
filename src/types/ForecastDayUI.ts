export type ForecastDayUI = {
  date: string;
  day: {
    maxtemp_c: number;
    mintemp_c: number;
    avgtemp_c: number;
    maxtemp_f: number;
    mintemp_f: number;
    avgtemp_f: number;
    daily_chance_of_rain: number;
    avghumidity: number;
    maxwind_kph: number;
    maxwind_mph: number;
    condition: {
      text: string;
      icon: string;
    };
  };
};

export type ForecastUI = {
  forecastday: ForecastDayUI[]; 
};