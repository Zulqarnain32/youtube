import { createContext, useContext, useEffect, useState } from "react";
import { fetchYoutubeData } from "../utils/rapidapi";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [value, setValue] = useState("New");

    useEffect(() => {
        // console.log("Value changed:", value);
        fetchAllData(value);
    }, [value]);

    const fetchAllData = async (query) => {
        // setLoading(true);
        try {
            const res = await fetchYoutubeData(`search/?q=${query}`);
            setData(res);
            // setLoading(false)
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            // setLoading(false);
        }
    };
    //  console.log( "data is ",data);
    return (
        <>
      
        <AuthContext.Provider value={{ data, loading, setValue }}>
            {children}
        </AuthContext.Provider>
        </>
    );
}

export const useAuth = () => useContext(AuthContext);
