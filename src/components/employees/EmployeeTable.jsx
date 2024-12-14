const EmployeeTable = ({ employees, onEdit, onDelete, isAdmin }) => {
    return (
        <div>
            <table className="w-full border border-gray-300 rounded">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="px-4 py-2 border">ID</th>
                        <th className="px-4 py-2 border">Nombre</th>
                        <th className="px-4 py-2 border">Fecha de Ingreso</th>
                        <th className="px-4 py-2 border">Salario</th>
                        {isAdmin && (
                            <th className="px-4 py-2 border">Acciones</th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee.id} className="text-center">
                            <td className="px-4 py-2 border">{employee.id}</td>
                            <td className="px-4 py-2 border">{employee.name}</td>
                            <td className="px-4 py-2 border">
                                {new Date(employee.hire_date).toLocaleDateString("es-ES")}
                            </td>
                            <td className="px-4 py-2 border">
                                {new Intl.NumberFormat("es-ES", {
                                    style: "currency",
                                    currency: "USD",
                                }).format(employee.salary)}
                            </td>
                            {isAdmin && (
                                <td className="px-4 py-2 border flex justify-center gap-2">
                                    <button
                                        onClick={() => onEdit(employee)}
                                        className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
                                    >
                                        Editar
                                    </button>
                                    <button
                                        onClick={() => onDelete(employee.id)}
                                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                                    >
                                        Eliminar
                                    </button>
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
            <p className="text-sm text-gray-600 mt-2">
                Página 1 de 1 - Total empleados: {employees.length}
            </p>
        </div>
    );
};

export default EmployeeTable;
