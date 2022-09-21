import { Outlet, Link, useLocation } from 'react-router-dom';

const MainLayout = () => {
  const location = useLocation();
  const actualUrl = location.pathname.split('/').pop();

  return (
    <div className="md:flex md:min-h-screen">
      <div className="md:w-1/4 bg-slate-900 px-5 py-8">
        <h2 className="text-3xl font-bold text-center text-red-600">
          CRM Clientes
        </h2>
        <nav className="mt-10">
          <Link
            className={`${
              actualUrl === 'clientes' && 'text-blue-500'
            } text-xl block mb-4 hover:text-red-600`}
            to="/clientes"
          >
            Clientes
          </Link>
          <Link
            className={`${
              actualUrl === 'nuevo' && 'text-blue-500'
            } text-xl block mb-4 hover:text-red-600`}
            to="/clientes/nuevo"
          >
            Nuevo Cliente
          </Link>
        </nav>
      </div>
      <div className="md:w-3/4 px-5 py-8 md:h-screen overflow-scroll">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
