import React, { useContext, useState } from 'react'


const RouteContext = React.createContext({});

export const useRouteContext = () => {
    return useContext(RouteContext);
}


export function RouteContextProvider({ children }) {
    const [parametar, setParametar] = useState(1);

    return <RouteContext.Provider value={{parametar, setParametar}}>
        {children}
    </RouteContext.Provider>
}