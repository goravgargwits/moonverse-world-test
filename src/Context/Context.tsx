import React, { createContext, useState } from 'react'
export type GlobalContent = {
  loader: boolean
  setLoader: (c: boolean) => void
}
export const LoaderContext = createContext<GlobalContent>({
  loader: false, // set a default value
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setLoader: () => {},
})
const LoaderLayout = ({ children }: any) => {
  const [loader, setLoader] = useState(false)
  return <LoaderContext.Provider value={{ loader, setLoader }}>{children}</LoaderContext.Provider>
}

export default LoaderLayout
