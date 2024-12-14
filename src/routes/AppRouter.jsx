import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import ProtectedRoute from "./ProtectedRoute";
import Sidebar from "../components/generic/Sidebar";
import { ROLES } from "../utils/constants";

const LoginPage = lazy(() => import("../pages/LoginPage"));
const EmployeesPage = lazy(() => import("../pages/EmployeesPage"));
const RequestsPage = lazy(() => import("../pages/RequestsPage"));
const UnauthorizedPage = lazy(() => import("../pages/UnauthorizedPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

const Loading = () => <div>Loading...</div>;

const AppRouter = () => (
    <Suspense fallback={<Loading />}>
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/unauthorized" element={<UnauthorizedPage />} />

            <Route
                path="/employees"
                element={
                    <ProtectedRoute requiredRoles={[ROLES.ADMIN, ROLES.EMPLOYEE]}>
                        <div className="flex">
                            <Sidebar />
                            <div className="flex-1 p-5">
                                <EmployeesPage />
                            </div>
                        </div>
                    </ProtectedRoute>
                }
            />
            <Route
                path="/requests"
                element={
                    <ProtectedRoute requiredRoles={[ROLES.ADMIN, ROLES.EMPLOYEE]}>
                        <div className="flex">
                            <Sidebar />
                            <div className="flex-1 p-5">
                                <RequestsPage />
                            </div>
                        </div>
                    </ProtectedRoute>
                }
            />

            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </Suspense>
);

export default AppRouter;
