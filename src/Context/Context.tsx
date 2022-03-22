import React, { createContext, useState, useMemo } from "react";
export type GlobalContent = {
  loader: boolean
  setLoader:(c: boolean) => void
}
export const LoaderContext = createContext<GlobalContent>({
  loader: false, // set a default value
  setLoader: () => {},
  })
const LoaderLayout = ({ children, ...rest }:any) => {
  // const [loader, setLoader] = useState(false);
  const [loader, setLoader] = useState(false)
  return (
        <LoaderContext.Provider value={{loader, setLoader}}>
          {children}
        </LoaderContext.Provider>
  );
};
export default LoaderLayout;