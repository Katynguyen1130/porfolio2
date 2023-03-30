import React, { createContext, useContext, useReducer, useState, useEffect } from "react";

type AppContextType = {
  splash: boolean;
  setSplash: React.Dispatch<React.SetStateAction<boolean>>;
  theme: string;
  toggleTheme: (theme: "light" | "dark") => void;
};

const initialAppContext: AppContextType = {
  splash: true,
  setSplash: () => null,
  theme: typeof window !== "undefined" ? localStorage.getItem("theme") || "dark" : "dark",
  toggleTheme: () => null,
};

const AppContext = createContext<AppContextType>(initialAppContext);

export const AppProvider = ({
  children,
  defaultValue = initialAppContext,
}: {
  children: React.ReactNode;
  defaultValue?: AppContextType;
}) => {
  const [splash, setSplash] = useState<boolean>(defaultValue.splash);
  const [theme, setTheme] = useState(defaultValue.theme);

  const toggleTheme = (theme: "light" | "dark") => {
    setTheme(theme);
  };

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  return (
    <AppContext.Provider value={{ splash, setSplash, theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const { splash, setSplash, theme, toggleTheme } = useContext(AppContext);
  return {
    splash,
    setSplash,
    theme,
    toggleTheme,
  };
};
