import React, { createContext } from "react";
import useFire from "../../hooks/useFire";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const allContext = useFire();
  return (
    <AuthContext.Provider value={allContext}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
