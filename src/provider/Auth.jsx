import React from 'react';
const UserContext = React.createContext();

const UserProvider = ({children})=>{

    const [user,setUser] = React.useState({loginStatus:false,data:[]})
    const updateUser = (user)=>{
        setUser(user);
    }

    return(
        <UserContext.Provider value={{ user, updateUser }}>
            {children}
        </UserContext.Provider>
    )

}


export {UserContext,UserProvider}