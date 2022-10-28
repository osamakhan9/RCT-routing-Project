import React, { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isAuth, setAuth] = useState(true);

  const toggleauth = () => {
    setAuth(isAuth);
  };

  return (
    <AuthContext.Provider value={{ isAuth: isAuth, toggleauth: toggleauth }}>
      {children}
    </AuthContext.Provider>
  );
};
