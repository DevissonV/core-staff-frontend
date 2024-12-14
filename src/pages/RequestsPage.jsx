import { useState, useEffect } from "react";
import { getRequests, deleteRequest, createRequest, updateRequest } from "../services/requestService";
import RequestTable from "../components/requests/RequestTable";
import RequestModal from "../components/requests/RequestModal";
import { showSuccess, showError, showConfirmation } from "../utils/alertService";

const RequestsPage = () => {
    const [requests, setRequests] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedRequest, setSelectedRequest] = useState(null);

    useEffect(() => {
        fetchRequests();
    }, []);

    const fetchRequests = async () => {
        try {
            const data = await getRequests();
            setRequests(data);
        } catch (error) {
            showError("Hubo un error al cargar las solicitudes");
        }
    };

    const handleOpenModal = (request = null) => {
        setSelectedRequest(request);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setSelectedRequest(null);
        setIsModalOpen(false);
    };

    const handleSaveRequest = async (requestData) => {
        try {
            if (requestData.id) {
                await updateRequest(requestData.id, requestData);
                showSuccess("Solicitud actualizada correctamente");
            } else {
                await createRequest(requestData);
                showSuccess("Solicitud creada correctamente");
            }
            fetchRequests();
            handleCloseModal();
        } catch (error) {
            showError("Hubo un error al guardar la solicitud");
        }
    };

    const handleDeleteRequest = async (id) => {
            try {
                const isConfirmed = await showConfirmation(
                    "¿Estás seguro?",
                    "No podrás revertir esta acción"
                );
                if (isConfirmed) {
                    await deleteRequest(id);
                    fetchRequests();
                    showSuccess("solicitud eliminada correctamente");
                }
            } catch (error) {
                showError("Hubo un error al eliminar la solicitud");
            }
        };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Gestión de Solicitudes</h1>
            <button
                onClick={() => handleOpenModal()}
                className="mb-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
            >
                Crear Solicitud
            </button>
            <RequestTable
                requests={requests}
                onEdit={handleOpenModal}
                onDelete={handleDeleteRequest}
            />
            <RequestModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onSubmit={handleSaveRequest}
                initialData={selectedRequest}
            />
        </div>
    );
};

export default RequestsPage;
