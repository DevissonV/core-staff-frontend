import { createContext, useState, useContext } from "react";
import { getToken } from "../utils/authHelpers"; 
import { jwtDecode } from "jwt-decode";


const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState(() => {
        const storedToken = getToken();
        const storedUser = storedToken ? localStorage.getItem("user") : null;
        return {
            token: storedToken,
            user: storedUser ? JSON.parse(storedUser) : null,
        };
    });

    const login = (token) => {
        const decodedToken = jwtDecode(token);
        const userWithId = {
            id: decodedToken.id, 
            username: decodedToken.username,
            role: decodedToken.role,
        };

        setAuthState({ token, user: userWithId });
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(userWithId));
    };

    const logout = () => {
        if (!authState.token && !authState.user) return;
        setAuthState({ token: null, user: null });
        localStorage.removeItem("token");
        localStorage.removeItem("user");
    };

    return (
        <AuthContext.Provider value={{ authState, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
