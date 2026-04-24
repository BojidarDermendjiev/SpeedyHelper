import React, { createContext, useState } from "react";

export const CalcContext = createContext();

export const CalcProvider = ({ children }) => {
  const [calcData, setCalcData] = useState({
    inputValues: {
      speedy: "",
      twoHundredLvlInput: "",
      hundredLvlInput: "",
      fiftyLvlInput: "",
      twentyLvlInput: "",
      tenLvlInput: "",
    },
    results: {
      twoHundredLvlValue: 0,
      hundredLvlValue: 0,
      fiftyLvlValue: 0,
      twentyLvlValue: 0,
      tenLvlValue: 0,
      total: 0,
    },
    hasData: false,
  });

  return (
    <CalcContext.Provider value={{ calcData, setCalcData }}>
      {children}
    </CalcContext.Provider>
  );
};
