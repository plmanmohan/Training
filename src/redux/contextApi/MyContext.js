import { createContext, useState } from "react";

const MyContext = createContext();

export const MyProvider = ({children}) => {
    const [value, setValue] = useState('Hellow World!')
    return (
        <MyContext.Provider value={value}>
            {children}
        </MyContext.Provider>
    );
}

export default MyContext