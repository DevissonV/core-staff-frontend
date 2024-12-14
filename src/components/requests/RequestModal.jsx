import { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";

const RequestModal = ({ isOpen, onClose, onSubmit, initialData }) => {
    const { authState } = useAuth();
    const [form, setForm] = useState({
        code: "",
        description: "",
        summary: "",
    });

    useEffect(() => {
        if (initialData) {  
            setForm({
                id:  initialData.id || "",
                code: initialData.code || "",
                description: initialData.description || "",
                summary: initialData.summary || "",
            });
        } else {
          setForm({
              code: "",
              description: "",
              summary: "",
          });
      }
    }, [initialData,isOpen]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const requestData = {
            ...form,
            employee_id: authState.user.id,
        };
        onSubmit(requestData);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded p-6 w-1/3">
                <h2 className="text-xl font-bold mb-4">
                    {form.code ? "Editar Solicitud" : "Crear Solicitud"}
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Código</label>
                        <input
                            type="text"
                            name="code"
                            value={form.code}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Descripción</label>
                        <textarea
                            name="description"
                            value={form.description}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Resumen</label>
                        <input
                            type="text"
                            name="summary"
                            value={form.summary}
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

export default RequestModal;
