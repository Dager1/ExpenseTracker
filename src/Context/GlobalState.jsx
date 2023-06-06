import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//Initial state
const initialState = {
  transaction: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ],
};

//create context
export const GlobalConstext = createContext(initialState);

//Provider componets
export const GlobalProvider = ({ children }) => {
  const [state, dispacth] = useReducer(AppReducer, initialState);
  return (
    <GlobalConstext.Provider
      value={{
        transaction: state.transaction,
      }}>
      {childer}
    </GlobalConstext.Provider>
  );
};
