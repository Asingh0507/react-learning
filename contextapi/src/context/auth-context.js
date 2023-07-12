import React from 'react'

const authContext = React.createContext({
    isLogged : false,
    onLogout : (()=>{
        
    })
});

export default authContext