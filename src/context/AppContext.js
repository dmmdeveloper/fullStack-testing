import { createContext, useContext } from "react";



const AppContext = createContext({
 hello : ()=>{},

});


export const AppContextProvider = AppContext.Provider;


export const useAppContext = ()=>{
    return useContext(AppContext);
}


