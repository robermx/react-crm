import { useState, useEffect } from 'react';
import ClientRow from '../../components/ClientRow';

const HomePage = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const getClientsAPI = async () => {
      try {
        const url = 'http://localhost:4000/clientes';
        const response = await fetch(url);
        const result = await response.json();
        setClients(result);
      } catch (error) {
        console.error(error);
      }
    };
    getClientsAPI();
  }, []);

  const handleDelete = async (id) => {
    const confiirmation = confirm('¿Seguro deseas eliminar a este cliente?');
    if (confiirmation) {
      try {
        const url = `http://localhost:4000/clientes/${id}`;
        const response = await fetch(url, {
          method: 'DELETE',
        });
        await response.json();
        const arrayClients = clients.filter((client) => client.id !== id);
        setClients(arrayClients);
      } catch (e) {
        console.error(e);
      }
    }
  };

  return (
    <>
      <div className="text-center">
        <h1 className="font-bold text-3xl mb-2 text-blue-500 bg-slate-900 py-3 w-72 rounded-lg mx-auto ">
          Lista de Clientes
        </h1>
        <p className="font-bold text-xl">Listado de clientes a administrar</p>
      </div>
      <table className="w-full mt-5 table-auto bg-slate-900">
        <thead className="bg-red-700">
          <tr>
            <th className="p-2">Nombre</th>
            <th className="p-2">Contacto</th>
            <th className="p-2">Empresa</th>
            <th className="p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <ClientRow
              key={client.id}
              cliente={client}
              handleDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default HomePage;
