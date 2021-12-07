import {MenuItem} from "../models/MenuItem";
import {createContext} from "react";

interface ShoppingCart {
    cartItems: MenuItem[];
    setCartItems: (items: MenuItem[]) => void;
}

export const ShoppingCartContext = createContext<ShoppingCart>({} as ShoppingCart);

/*
    cartItems: [],
    addItem: (item: MenuItem) => {},
    removeItem: (item: MenuItem) => {},
    clearCart: () => {},
    totalPrice: 0
 */