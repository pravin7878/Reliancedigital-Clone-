import React, { createContext,useState } from 'react'

export const Allcontext = createContext()
// export const CartitemContext = createContext() 

export default function ContextProvider({ children }) {
    const [Authstate, setAuthstate] = useState({isAuth:false,token:null})
    const [cartitem, setcartitem] = useState([])
    const [cartitemCount, setcartitemCount] = useState(0)
const [quary, setquary] = useState('')

    return (
        <Allcontext.Provider value={{Authstate,setcartitem,cartitem,cartitemCount,setcartitemCount,setquary,quary}}>
            {children}
        </Allcontext.Provider>
    )
}
