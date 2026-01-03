import MainLayout from "@Layout/MainLayout/MainLayout";
import { useAppSelector } from "@Store/hooks";

import { useEffect } from "react";
import "./index.css";
import Today from "@Components/WeatherUi/Today";
import { Toaster } from "react-hot-toast";
import Tomorrow from "@Components/WeatherUi/Tomorrow";
import AfterTomorrow from "@Components/WeatherUi/AfterTomorrow";

const App = () => {
  const { mode } = useAppSelector((state) => state.theme);
  useEffect(() => {
    const root = document.documentElement;
    if (mode === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [mode]);

  return (
    <>
      <Toaster position="top-center" />
      <MainLayout>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-5">
            <Today />
          </div>
          <div className="md:col-span-7">
            <Tomorrow />
            <AfterTomorrow />
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default App;
