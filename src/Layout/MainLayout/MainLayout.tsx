import Footer from "@Components/common/Footer";
import Navbar from "@Components/common/Navbar";

import sunny from "@Assets/sunny-back.jpg";
import snow from "@Assets/snow-back.jpg";
import cloud from "@Assets/cloud-back.jpg";
import  UseHeader from "@Components/header/useHeader";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { current } = UseHeader();
  return (
    <div
      className={`flex flex-col  min-h-screen bg-cover bg-center bg-bg dark:bg-bg-dark transition-all duration-500 ease-in-out`}
      style={{
        backgroundImage: `url(${
          current?.condition.text === "Partly Cloudy" ||
          current?.condition.text === "Partly cloudy" ||
          current?.condition.text === "Clear" ||
          current?.condition.text === "Sunny"
            ? sunny
            : current?.condition.text === "Cloudy" ||
              current?.condition.text === "Overcast" ||
              current?.condition.text === "Mist" ||
              current?.condition.text === "Fog"
            ? cloud
            : snow
        })`,
      }}
    >
      <div className="  container mx-auto px-3 sm:px-0 ">
        <Navbar />
      </div>
      <main className=" px-3 sm:px-0  mb-1 ">
        <div className="container  mx-auto bg-bg/60 dark:bg-bg-dark/70 mb-2.5 rounded-2xl px-3 sm:px-6 py-4">
          {children}
        </div>
      </main>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};
export default MainLayout;
