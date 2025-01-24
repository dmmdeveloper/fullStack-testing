import { createContext, useContext } from "react";



const AppContext = createContext({
 hello : ()=>{},
 fetchProfile : ()=>{} , 
 profile : {},

});


export const AppContextProvider = AppContext.Provider;


export const useAppContext = ()=>{
    return useContext(AppContext);
}


