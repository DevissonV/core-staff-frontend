import { useState, useEffect } from "react";
import EmployeeTable from "../components/employees/EmployeeTable";
import EmployeeModal from "../components/employees/EmployeeModal";
import { getEmployees, deleteEmployee, createEmployee, updateEmployee } from "../services/employeeService";
import { showSuccess, showError, showConfirmation } from "../utils/alertService";

const EmployeesPage = () => {
    const [employees, setEmployees] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        try {
            const data = await getEmployees();
            setEmployees(data);
        } catch (error) {
            showError("Error al obtener empleados");
        }
    };

    const handleOpenModal = (employee = null) => {
        setSelectedEmployee(employee);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setSelectedEmployee(null);
        setIsModalOpen(false);
    };

    const handleSaveEmployee = async (employeeData) => {
        try {
            if (employeeData.id) {
                await updateEmployee(employeeData.id, employeeData);
                showSuccess("Empleado actualizado correctamente");
            } else {
                await createEmployee(employeeData);
                showSuccess("Empleado creado correctamente");
            }
            fetchEmployees();
            handleCloseModal();
        } catch (error) {
            showError("Hubo un error al guardar el empleado");
        }
    };

    const handleDeleteEmployee = async (id) => {
        try {
            const isConfirmed = await showConfirmation(
                "¿Estás seguro?",
                "No podrás revertir esta acción"
            );
            if (isConfirmed) {
                await deleteEmployee(id);
                showSuccess("Empleado eliminado correctamente");
                fetchEmployees();
            }
        } catch (error) {
            showError("Hubo un error al eliminar el empleado");
        }
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Gestión de Empleados</h1>
            <button
                onClick={() => handleOpenModal()}
                className="mb-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
            >
                Crear Empleado
            </button>
            <EmployeeTable
                employees={employees}
                onEdit={handleOpenModal}
                onDelete={handleDeleteEmployee}
            />
            <EmployeeModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onSubmit={handleSaveEmployee}
                initialData={selectedEmployee}
            />
        </div>
    );
};

export default EmployeesPage;
