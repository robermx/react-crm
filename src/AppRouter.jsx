import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginSession from './layout/LoginSession';
import MainLayout from './layout/MainLayout';
import EditClient from './views/customer/EditClient';
import ViewClient from './views/customer/ViewClient';
import HomePage from './views/customer/HomePage';
import NewClient from './views/customer/NewClient';
import LoginForm from './views/login/LoginForm';

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginSession />}>
            <Route index element={<LoginForm />} />
          </Route>
          <Route path="/clientes" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="nuevo" element={<NewClient />} />
            <Route path="editar/:id" element={<EditClient />} />
            <Route path=":id" element={<ViewClient />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
