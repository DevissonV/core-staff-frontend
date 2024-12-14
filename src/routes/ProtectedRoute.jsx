import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { jwtDecode } from "jwt-decode";
import { showError } from "../utils/alertService";

const ProtectedRoute = ({ children, requiredRoles }) => {
    const { authState, logout } = useAuth();
    const { token, user } = authState;

    const isTokenExpired = (token) => {
        try {
            const decodedToken = jwtDecode(token);
            const expirationDate = decodedToken.exp * 1000;
            return expirationDate < Date.now();
        } catch (error) {
            showError("Sesión finalizada");
            return true;
        }
    };

    if (!token || isTokenExpired(token)) {
        logout();
        return <Navigate to="/login" replace />;
    }

    if (requiredRoles && !requiredRoles.includes(user?.role)) {
        return <Navigate to="/unauthorized" replace />;
    }

    return children;
};

export default ProtectedRoute;
