import { createContext, useContext, ReactNode, useState } from "react";
type ShoppingCartProviderProps = {
  children: ReactNode
}

type CartItem = {
  id: number
  quantity: number
}

type ShoppingCartContext = {
  getItemQuantity: (id: number) => number
  increaseCartQuantity: (id: number) => void
  decreaseCartQuantity: (id: number) => void
  removeFromCart: (id: number) => void
}
const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCare() {
  return useContext(ShoppingCartContext)
}


export function ShoppingCartProvider({children} : ShoppingCartProviderProps) {

  const [cartItems, setCartItems] = useState<CartItem[]>([])

  return <ShoppingCartContext.Provider value={{}}>
    {children}
  </ShoppingCartContext.Provider>

}