import React, { createContext, useState } from "react";

export const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [answer, setAnswer] = useState("");

  return (
    <MyContext.Provider value={{ answer, setAnswer }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;
