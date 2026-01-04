import Header from "@Components/header/header";
import UseHeader from "@Components/header/useHeader";
import Temp from "@Components/temp/temp";

const AfterTomorrow = () => {
  const { location, forecast, temp } = UseHeader();

  const tomorrow = forecast?.forecastday[2];
  const isC = temp === "C";

  if (!tomorrow) return null;

  return (
    <div className="bg-bg/50 dark:bg-bg-dark/70 p-3 mt-4 rounded-2xl flex flex-col flex-1">
      <Header
        city={location?.name || ""}
        country={location?.country || ""}
        date={tomorrow.date}
        day={1}
      />

      {/* Main Temp */}
      <div className="mt-8 text-center">
        <p className="text-7xl font-bold text-gray-800 dark:text-gray-200">
          {isC ? tomorrow.day.maxtemp_c : tomorrow.day.maxtemp_f}
          <span className="text-2xl">°{temp}</span>
        </p>

        <img
          src={tomorrow.day.condition.icon}
          className="mx-auto w-20"
          alt=""
        />

        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          {tomorrow.day.condition.text}
        </p>
      </div>

      {/* Details */}
      <Temp
        temp={temp}
        items={[
          {
            title: "Minimum Temperature",
            value: isC ? tomorrow.day.mintemp_c : tomorrow.day.mintemp_f,
          },
          {
            title: "Average Temperature",
            value: isC ? tomorrow.day.avgtemp_c : tomorrow.day.avgtemp_f,
          },
          {
            title: "Maximum Temperature",
            value: isC ? tomorrow.day.maxtemp_c : tomorrow.day.maxtemp_f,
          },
          {
            title: "Chance of Rain",
            value: `${tomorrow.day.daily_chance_of_rain}%`,
          },
          {
            title: "Humidity",
            value: `${tomorrow.day.avghumidity}%`,
          },
          {
            title: "Wind Speed",
            value: `${tomorrow.day.maxwind_mph} mph`,
          },
        ]}
      />
    </div>
  );
};

export default AfterTomorrow;
