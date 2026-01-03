import Header from "@Components/header/header";
import UseHeader from "@Components/header/useHeader";

const Today = () => {
  const { location, current, forecast, temp } = UseHeader();

  return (
    <div className="bg-bg/50 dark:bg-bg-dark/70 p-2 rounded-2xl">
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
          Latitude: {location?.lat}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Longitude: {location?.lon}
        </p>
      </div>
    </div>
  );
};
export default Today;
