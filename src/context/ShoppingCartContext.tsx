import { createContext, useContext, ReactNode } from "react";
type ShoppingCartProviderProps = {
  children: ReactNode
}
const ShoppingCartContext = createContext({})

export function useShoppingCare() {
  return useContext(ShoppingCartContext)
}


export function ShoppingCartProvider({children}) {
  return <ShoppingCartContext.Provider value={{}}>
    {children}
  </ShoppingCartContext.Provider>

}