import { useState, useEffect } from "react";

const EmployeeModal = ({ isOpen, onClose, onSubmit, initialData }) => {
  const [form, setForm] = useState(initialData || { name: "", hire_date: "", salary: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (initialData) {
      setForm({
        name: initialData.name || "",
        hire_date: initialData.hire_date ? initialData.hire_date.split("T")[0] : "",
        salary: initialData.salary || "",
      });
    } else {
      setForm({
        name: "",
        hire_date: "",
        salary: "",
      });
    }
  }, [initialData, isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const employeeData = {
      ...form,
      id: initialData ? initialData.id : undefined,
    };
    onSubmit(employeeData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded p-6 w-1/3">
        <h2 className="text-xl font-bold mb-4">{form.id ? "Editar Empleado" : "Crear Empleado"}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Nombre</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Fecha de Ingreso</label>
            <input
              type="date"
              name="hire_date"
              value={form.hire_date}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Salario</label>
            <input
              type="number"
              name="salary"
              value={form.salary}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeModal;
