import logo from "@Assets/logo.png";
import actGetData from "@Store/data/actGetData";
import { toggleTemp } from "@Store/data/dataSlice";
import { useAppDispatch, useAppSelector } from "@Store/hooks";
import { toggleTheme } from "@Store/theme/themeSlice";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaRegSun, FaSun } from "react-icons/fa";
import { FaBinoculars } from "react-icons/fa";
const Navbar = () => {
  const { mode } = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();
  const { error, temp } = useAppSelector((state) => state.weather);
  const [value, setValue] = useState<string>("");
  type TempUnit = "C" | "F";

  const handleTemp = (unit: TempUnit) => {
    dispatch(toggleTemp(unit));
  };
  const handleMode = () => {
    dispatch(toggleTheme());
  };

  const handleSearch = () => {
    if (!value.trim()) return;
    dispatch(actGetData(value.trim()));
  };
  useEffect(() => {
    dispatch(actGetData("Cairo"));
  }, [dispatch]);
  useEffect(() => {
    if (!value.trim()) return;
    const timer = setTimeout(() => {
      handleSearch();
    }, 1500);
    return () => {
      clearTimeout(timer);
    };
  }, [dispatch, value]);
  useEffect(() => {
    if (!error) return;

    toast.error("City not found 🌍", {
      duration: 1000,
      id: "city-not-found",
    });
  }, [error]);

  return (
    <nav
      className={`
           rounded-2xl my-4 border-b
        bg-bg dark:bg-bg-dark
        border-app dark:border-border-dark
      `}
    >
      <div className="mx-auto max-w-7xl px-3">
        <div className="flex h-16 items-center">
          <div className="flex items-center">
            <img src={logo} alt="logo" className="h-10 w-auto" />
          </div>

          <div className="mx-3 flex-1 flex justify-center items-center">
            <div className="relative w-full sm:w-1/2">
              <input
                type="search"
                placeholder="Search city..."
                className="
        w-full rounded-md px-3 py-2 pr-10 text-sm
        bg-surface dark:bg-surface-dark
        text-text dark:text-text-dark
        border border-border dark:border-border-dark
        placeholder:text-text-muted dark:placeholder:text-text-muted-dark
        focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark
      "
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <button
                className={`absolute right-2 cursor-pointer top-1/2 -translate-y-1/2 bg-bg dark:bg-bg-dark p-1.5 rounded-md text-text-muted dark:text-text-muted-dark hover:text-text dark:hover:text-text-dark ${
                  !value.trim() ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={handleSearch}
                aria-label="Search"
                disabled={!value.trim()}
              >
                <FaBinoculars className="text-lg" />
              </button>
            </div>
          </div>

          <div className="ml-auto flex items-center gap-2">
            {mode === "dark" ? (
              <FaSun
                className="cursor-pointer text-2xl text-primary-dark"
                onClick={handleMode}
              />
            ) : (
              <FaRegSun
                className="cursor-pointer text-2xl text-text-muted"
                onClick={handleMode}
              />
            )}

            <button
              className={`
                cursor-pointer rounded-md px-3 py-2 text-sm
            
                border border-border dark:border-border-dark
                hover:bg-primary hover:text-white dark:hover:bg-primary-dark dark:hover:text-white
                ${
                  temp === "C"
                    ? "bg-primary text-white dark:bg-primary-dark dark:text-white"
                    : "  bg-surface dark:bg-surface-dark   text-text dark:text-text-dark "
                }
              `}
              onClick={() => handleTemp("C")}
            >
              °C
            </button>
            <button
              className={`
                cursor-pointer rounded-md px-3 py-2 text-sm
              
                border border-border dark:border-border-dark
                hover:bg-primary hover:text-white dark:hover:bg-primary-dark dark:hover:text-white
                              ${
                                temp === "F"
                                  ? "bg-primary text-white dark:bg-primary-dark dark:text-white"
                                  : "  bg-surface dark:bg-surface-dark   text-text dark:text-text-dark "
                              }
              `}
              onClick={() => handleTemp("F")}
            >
              °F
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
