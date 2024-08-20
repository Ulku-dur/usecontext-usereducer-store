import { createContext, useReducer } from "react";
import reducer, { initialState } from "./reducer";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToBasket = (product) => {
    const updatedBasket = [...state.products, product]; // Use spread to avoid mutating the state
    updatePrice(updatedBasket);
    
    dispatch({
      type: "add",
      payload: updatedBasket
    });
  };

  const removeFromBasket = (product) => {
    const updatedBasket = state.products.filter(
      (currentProduct) => currentProduct.name !== product.name
    );
    updatePrice(updatedBasket);
    
    dispatch({
      type: "remove",
      payload: updatedBasket
    });
  };

  const updatePrice = (products) => {
    const total = products.reduce((acc, product) => acc + product.price, 0);
    dispatch({
      type: "update price",
      payload: total 
    });
  };

  const value = {
    total: state.total,
    products: state.products, // Fixed typo here
    addToBasket, // Fixed function name here
    removeFromBasket
  };

  return (
    <StoreContext.Provider value={value}>
      {children}
    </StoreContext.Provider>
  );
};
