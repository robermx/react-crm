import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SpinnerSquare from '../../components/SpinnerSquare';

const ViewClient = () => {
  const { id } = useParams();
  const [actualClient, setActualClient] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAPIClient = async () => {
      try {
        const url = `http://localhost:4000/clientes/${id}`;
        const response = await fetch(url);
        const result = await response.json();
        setActualClient(result);
      } catch (error) {
        console.error(error);
      }
      setLoading(!loading);
    };
    getAPIClient();
  }, []);

  return loading ? (
    <SpinnerSquare />
  ) : Object.keys(actualClient).length === 0 ? (
    <div className="md:h-3/4 md:flex justify-center items-center">
      <h2 className="text-3xl rounded-lg font-bold bg-slate-900 px-6 py-3 w-auto inline-block text-blue-500">
        No hay resultados
      </h2>
    </div>
  ) : (
    <div className="md:h-3/4 md:flex justify-center items-center">
      <div className="text-center">
        <h2 className="text-3xl rounded-lg font-bold bg-slate-900 px-6 py-3 w-auto inline-block text-blue-500">
          Información del Cliente
        </h2>
        <h3 className="text-2xl rounded-lg font-bold mt-5">
          {actualClient?.cliente}
        </h3>
        <p className="text-xl rounded-lg mt-3 font-bold">
          <span>Empresa:</span> {actualClient?.empresa}
        </p>
        <p className="text-xl rounded-lg mt-3 font-bold">
          <span>Teléfono:</span> {actualClient?.telefono}
        </p>
        <p className="text-xl rounded-lg mt-3 font-bold">
          <span>Email:</span> {actualClient?.email}
        </p>
        <p className="text-xl rounded-lg mt-3 font-bold">
          <span>Código Postal:</span> {actualClient?.postal}
        </p>
        <p className="text-xl rounded-lg mt-3 font-bold">
          {actualClient?.notas}
        </p>
      </div>
    </div>
  );
};

export default ViewClient;
