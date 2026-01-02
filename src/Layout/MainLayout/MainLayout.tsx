import Footer from "@Components/common/Footer";
import Navbar from "@Components/common/Navbar";

import sunny from "@Assets/sunny-back.jpg";

const MainLayout = ({ children }: { children: React.ReactNode }) => {

  return (
    <div
      className={`flex flex-col min-h-screen bg-cover bg-center bg-bg dark:bg-bg-dark transition-all duration-500 ease-in-out`}
      style={{ backgroundImage: `url(${sunny})` }}
    >
      <div className="mx-auto container px-3">
        <Navbar />
      </div>
      <main className="grow w-full max-w-7xl">{children}</main>
      <Footer />
    </div>
  );
};
export default MainLayout;
