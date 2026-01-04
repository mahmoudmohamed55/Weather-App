import Header from "@Components/header/header";
import UseHeader from "@Components/header/useHeader";
import Temp from "@Components/temp/temp";

const Today = () => {
  const { location, current, forecast, temp } = UseHeader();
  const today = forecast?.forecastday?.[0]?.day;
  const isC = temp === "C";
  return (
    <div className="bg-bg/50 dark:bg-bg-dark/70 p-2 rounded-2xl flex flex-col flex-1">
      <Header
        city={location?.name || ""}
        country={location?.country || ""}
        date={forecast?.forecastday[0]?.date || ""}
        day={0}
      />
      <div className="my-8 text-center">
        <p className="text-7xl  font-bold text-gray-800 dark:text-gray-200">
          {current?.temp_c}
          <span className="text-2xl">°{temp}</span>
        </p>
        <img src={current?.condition.icon} className="mx-auto w-20" alt="" />
        <p className="text-xl text-gray-500 dark:text-gray-400 mt-1">
          {current?.condition.text}
        </p>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Latitude: {location?.lat.toFixed(2)}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Longitude: {location?.lon.toFixed(2)}
        </p>
      </div>
      <Temp
        temp={temp}
        items={[
          {
            title: "Minimum Temperature",
            value: isC ? today?.mintemp_c : today?.mintemp_f,
          },
          {
            title: "Average Temperature",
            value: isC ? today?.avgtemp_c : today?.avgtemp_f,
          },
          {
            title: "Maximum Temperature",
            value: isC ? today?.maxtemp_c : today?.maxtemp_f,
          },
          {
            title: "Chance of Rain",
            value: today?.daily_chance_of_rain,
          },
          {
            title: "Humidity",
            value: today?.avghumidity,
          },
          {
            title: "Wind Speed",
            value: isC ? today?.maxwind_kph : today?.maxwind_mph,
          },
        ]}
      />
      <Temp
        temp={temp}
        items={[
          {
            title: "Pressure",
            value: current ? `${current.pressure_mb} mb` : "--",
          },
          {
            title: "Humidity",
            value: current ? `${current.humidity} %` : "--",
          },
          {
            title: "Wind Speed (mph)",
            value: current ? `${current.wind_mph} mph` : "--",
          },
          {
            title: "Wind Direction",
            value: current ? current.wind_dir : "--",
          },
          {
            title: "Wind Degree",
            value: current ? `${current.wind_degree}` : "--",
          },
          {
            title: "Wind Speed (km/h)",
            value: current ? `${current.wind_kph} km/h` : "--",
          },
        ]}
      />

      <Temp
        temp={temp}
        items={[
          {
            title: "Wind Gust",
            value: current ? `${current.gust_kph} kph` : "--",
          },
          {
            title: "Wind Chill",
            value: current ? `${current.wind_degree}°` : "--",
          },
          {
            title: "Visibility",
            value: current ? `${current.vis_km} km` : "--",
          },
          {
            title: "Dew Point",
            value: current
              ? `${current[`dewpoint_${temp === "C" ? "c" : "f"}`]}°`
              : "--",
          },
          {
            title: "UV Index",
            value: current ? current.uv : "--",
          },
          {
            title: "Precipitation",
            value: current ? `${current.precip_mm} mm` : "--",
          },
        ]}
      />
    </div>
  );
};
export default Today;
