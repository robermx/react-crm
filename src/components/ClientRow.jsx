import { useNavigate } from 'react-router-dom';

const ClientRow = ({ cliente, handleDelete }) => {
  const navigate = useNavigate();
  return (
    <tr className="border-b border-slate-600 last:border-0 hover:bg-black">
      <td className="py-3 px-5">{cliente?.cliente}</td>
      <td className="p-3">
        <p>{cliente?.email}</p>
        <p>{cliente?.telefono}</p>
      </td>
      <td className="p-3">{cliente?.empresa}</td>
      <td className="p-3 text-center">
        <button
          type="button"
          className="font-bold px-5 py-2 rounded-md bg-green-600 text-slate-900 mr-5"
          onClick={() => navigate(`/clientes/${cliente?.id}`)}
        >
          ver
        </button>
        <button
          type="button"
          className="font-bold px-5 py-2 rounded-md bg-blue-500 text-slate-900 mr-5"
          onClick={() => navigate(`/clientes/editar/${cliente?.id}`)}
        >
          Editar
        </button>
        <button
          type="button"
          className="font-bold px-5 py-2 rounded-md bg-red-700"
          onClick={() => handleDelete(cliente?.id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default ClientRow;
