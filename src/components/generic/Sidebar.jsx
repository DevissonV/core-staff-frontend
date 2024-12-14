import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const Sidebar = () => {
    const navigate = useNavigate();
    const { authState, logout } = useAuth();
    const { token } = authState;

    const handleLogout = () => {
        logout();
    };

    if (!token) return null;

    return (
        <div className="w-64 bg-gray-800 text-white p-5 h-screen">
            <h2 className="text-2xl font-bold mb-8">Panel de Control</h2>
            <ul>
                <li>
                    <button
                        onClick={() => navigate("/employees")}
                        className="w-full text-left py-2 px-4 hover:bg-gray-700 transition rounded"
                    >
                        Empleados
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => navigate("/requests")}
                        className="w-full text-left py-2 px-4 hover:bg-gray-700 transition rounded"
                    >
                        Solicitudes
                    </button>
                </li>
                <li>
                    <button
                        onClick={handleLogout}
                        className="w-full text-left py-2 px-4 bg-red-600 hover:bg-red-700 transition rounded mt-8"
                    >
                        Cerrar sesión
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
