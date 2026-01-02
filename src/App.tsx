import MainLayout from "@Layout/MainLayout/MainLayout";
import { useAppDispatch, useAppSelector } from "@Store/hooks";
import { toggleTheme } from "@Store/theme/themeSlice";
import { useEffect } from "react";
import "./index.css";

const App = () => {
  const dispatch = useAppDispatch();
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
      <MainLayout>
        <button
          className="text-black dark:text-white"
          onClick={() => dispatch(toggleTheme())}
        >
          Toggle Theme
        </button>
      </MainLayout>
    </>
  );
};

export default App;
