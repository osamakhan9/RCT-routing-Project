import React from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={{ isAuth: isAuth, toggleauth: toggleauth }}>
      {children}
    </AuthContext.Provider>
  );
};
