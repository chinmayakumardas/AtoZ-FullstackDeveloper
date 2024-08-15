import { createContext,useState } from "react";

export const AppContext=createContext();

 const AppContextProvider=({children})=>{
    const [name,setName]=useState("CHINMAYA KUMAR DAS");
    const [age,setAge]=useState(24);
    const value={
        name,age,setAge,setName
    }
    return(
        <AppContext.Provider value={value}>
{children}
        </AppContext.Provider>
    )
}

export default AppContextProvider