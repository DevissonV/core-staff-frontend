const RequestTable = ({ requests, onEdit, onDelete, isAdmin }) => {
  return (
    <div>
      <table className="w-full border border-gray-300 rounded">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2 border">ID</th>
            <th className="px-4 py-2 border">Código</th>
            <th className="px-4 py-2 border">Descripción</th>
            <th className="px-4 py-2 border">Resumen</th>
            {isAdmin && (
              <th className="px-4 py-2 border">Acciones</th>
            )}
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request.id} className="text-center">
              <td className="px-4 py-2 border">{request.id}</td>
              <td className="px-4 py-2 border">{request.code}</td>
              <td className="px-4 py-2 border">{request.description}</td>
              <td className="px-4 py-2 border">{request.summary}</td>
              {isAdmin && (
                <td className="px-4 py-2 border flex justify-center gap-2">
                  <button
                    onClick={() => onEdit(request)}
                    className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => onDelete(request.id)}
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
    </div>
  );
};

export default RequestTable;
