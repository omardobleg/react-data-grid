import { PropsWithChildren, createContext } from "react";

export const WheatherContext = createContext<string>("");

export const WeatherProvider = ({
  city = "Madrid",
  children,
}: PropsWithChildren<{ city?: string }>) => {
  return (
    <WheatherContext.Provider value={city}>{children}</WheatherContext.Provider>
  );
};
