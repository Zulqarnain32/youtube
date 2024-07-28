import { createContext, useContext, useEffect, useState } from "react";
import { fetchYoutubeData } from "../utils/rapidapi";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const [value, setValue] = useState("New")


    useEffect(() => {
        fetchAllData(value)
    }, [value])

    const fetchAllData = (query) => {
        setLoading(true)
        fetchYoutubeData(`search/?q=${query}`).then((res) => {
            setData(res)
            setLoading(false)
        })
    }

    return (
        <>
            <AuthProvider value={{ data, loading, setValue }}>
                {children}
            </AuthProvider>
        </>
    )
}

export const useAuth = () => useContext(AuthContext)