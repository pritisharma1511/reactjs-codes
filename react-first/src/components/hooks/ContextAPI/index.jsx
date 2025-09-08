
// import { createContext, useContext } from "react";
import { createContext, use } from "react";

// 1 step
export const BioContext = createContext();

// 2nd step
export const BioProvider = ({ children }) => {
  const myName = "vinod";
  const myAge = 30;
  console.log(children);

  return (
    <BioContext.Provider value={{ myName, myAge }}>
      {children}
    </BioContext.Provider>
  );
};

//custom hook
const useBioContext = () => {
  const context = useContext(BioContext);
  if (context === undefined) {
    throw new Error("Component must be wrapped with BioProvider");
  }
  return context;
}
