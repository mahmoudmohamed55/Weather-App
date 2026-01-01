import logo from "@Assets/logo.png";
import { useAppDispatch, useAppSelector } from "@Store/hooks";
import { toggleTheme } from "@Store/theme/themeSlice";
import { FaRegSun, FaSun } from "react-icons/fa";

const Navbar = () => {
  const { mode } = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();

  const handleMode = () => {
    dispatch(toggleTheme());
  };

  return (
    <nav
      className={`
        container mx-auto w-full rounded-2xl my-4 border-b
        bg-bg dark:bg-bg-dark
        border-app dark:border-border-dark
      `}
    >
      <div className="mx-auto max-w-7xl px-3">
        <div className="flex h-16 items-center">
          <div className="flex items-center">
            <img src={logo} alt="logo" className="h-10 w-auto" />
          </div>

          <div className="mx-3 flex flex-1 justify-center">
            <input
              type="search"
              placeholder="Search city..."
              className={`
                w-full sm:w-1/2 rounded-md px-3 py-2 text-sm
                bg-surface dark:bg-surface-dark
                text-text dark:text-text-dark
                border border-border dark:border-border-dark
                placeholder:text-text-muted dark:placeholder:text-text-muted-dark
                focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark
              `}
            />
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
                bg-surface dark:bg-surface-dark
                text-text dark:text-text-dark
                border border-border dark:border-border-dark
                hover:bg-primary hover:text-white dark:hover:bg-primary-dark dark:hover:text-white
              `}
            >
              °C
            </button>
            <button
              className={`
                cursor-pointer rounded-md px-3 py-2 text-sm
                bg-surface dark:bg-surface-dark
                text-text dark:text-text-dark
                border border-border dark:border-border-dark
                hover:bg-primary hover:text-white dark:hover:bg-primary-dark dark:hover:text-white
              `}
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
