import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) =>{
    const [user,setUser] = useState(null);
    return (
        <UserContext.Provider value={{user,setUser}}>
        {children} 
        </UserContext.Provider>
    )
}

export default UserContextProvider

 //{children}: This is where the children prop is rendered. children represents any components or elements that are nested inside the <UserContextProvider> component when it's used. For example, if you use <UserContextProvider><MyComponent /></UserContextProvider>, then <MyComponent /> will be the children. This allows the UserContextProvider to wrap other components and provide context to them.