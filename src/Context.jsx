// Create a context (Warehouse)
// Provider
// consumer
import React, { useContext } from "react";

const AppContext = React.createContext();

const AppProvider =({children}) =>{
    return <AppContext.Provider value="Syed Salman & Mohammad Sohail">
        {children}
    </AppContext.Provider>
};

//Golobal Custom hook

const  useGlobalContext =() =>{
    return useContext(AppContext)
}
export {AppContext , AppProvider ,useGlobalContext};
