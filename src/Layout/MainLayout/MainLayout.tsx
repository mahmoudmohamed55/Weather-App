import Footer from "@Components/common/Footer";
import Navbar from "@Components/common/Navbar";
import cloud from "@Assets/cloud-back.jpg";
import sunny from "@Assets/sunny-back.jpg";
import { useAppSelector } from "@Store/hooks";
const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { mode } = useAppSelector((state) => state.theme);
  return (
    <div
      className={`flex flex-col min-h-screen bg-cover bg-center bg-bg dark:bg-bg-dark transition-all duration-500 ease-in-out`}
      style={{ backgroundImage: `url(${mode === "dark" ? sunny : cloud})` }}
    >
      <Navbar />
      <main className="grow w-full">{children}</main>
      <Footer />
    </div>
  );
};
export default MainLayout;
