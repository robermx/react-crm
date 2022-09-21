import { useState, useEffect, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import ErrorAlert from './ErrorAlert';
import SpinnerSquare from '../components/SpinnerSquare';

const FormClient = ({ actualClient, loading }) => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 766) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // create an event listener
  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
  }, [isMobile]);

  const clientSchema = Yup.object().shape({
    cliente: Yup.string()
      .min(6, 'El nombre es muy corto')
      .max(40, 'El nombre es muy largo')
      .required('El nombre es obligatorio'),
    empresa: Yup.string()
      .min(3, 'Nombre de empresa muy corto')
      .max(20, 'Nombre de empresa muy largo ')
      .required('La empresa es obligatoria'),
    telefono: Yup.number()
      .positive('No se admiten números negativos')
      .integer('Número no válido')
      .typeError('Solo se admiten números')
      .required('El Teléfono es obligatorio'),
    email: Yup.string()
      .email('Este email no es válido')
      .required('El email es obligatorio'),
    postal: Yup.number()
      .positive('No se admiten números negativos')
      .integer('Número no válido')
      .typeError('Solo se admiten números')
      .typeError('Solo se admiten números')
      .required('El código postal no es válido'),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      let response;
      if (actualClient.id) {
        // Editar un registro
        const url = `http://localhost:4000/clientes/${actualClient.id}`;
        response = await fetch(url, {
          method: 'PUT',
          body: JSON.stringify(values),
          headers: {
            'content-Type': 'application/json',
          },
        });
      } else {
        // Crear un nuevo registro
        const url = 'http://localhost:4000/clientes';
        response = await fetch(url, {
          method: 'POST',
          body: JSON.stringify(values),
          headers: {
            'content-Type': 'application/json',
          },
        });
      }
      await response.json();
      resetForm();
      navigate('/clientes');
    } catch (error) {
      console.error(error);
    }
  };

  return loading ? (
    <SpinnerSquare />
  ) : (
    <div className="bg-slate-900 mt-8 px-5 pt-5 pb-2 rounded-lg md:w-3/4 mx-auto">
      <h2 className="text-blue-500 text-xl font-bold text-center">
        {actualClient?.cliente ? 'Editar Cliente' : 'Agregar Cliente'}
      </h2>
      <Formik
        initialValues={{
          cliente: actualClient?.cliente ?? '',
          empresa: actualClient?.empresa ?? '',
          telefono: actualClient?.telefono ?? '',
          email: actualClient?.email ?? '',
          postal: actualClient?.postal ?? '',
          notas: actualClient?.notas ?? '',
        }}
        enableReinitialize={true}
        onSubmit={handleSubmit}
        validationSchema={clientSchema}
      >
        {({ errors, touched }) => (
          <Form className="my-4" autoComplete="off">
            <Field
              id="cliente"
              name="cliente"
              className={`${
                errors.cliente && touched.cliente ? 'mb-0' : 'mb-8'
              } block w-full bg-slate-800 py-3 px-4 rounded-lg`}
              placeholder="Ingresa nombre completo"
            />
            {errors.cliente && touched.cliente ? (
              <ErrorAlert error={errors.cliente} />
            ) : null}
            <div className="md:grid md:grid-cols-2 md:order-2 gap-8">
              <Field
                id="empresa"
                name="empresa"
                className={`${
                  (errors.empresa && touched.empresa) ||
                  (!isMobile && errors.telefono && touched.telefono)
                    ? 'mb-0'
                    : 'mb-8'
                } block w-full bg-slate-800 py-3 px-4 rounded-lg`}
                placeholder="Empresa:"
              />

              {isMobile && (
                <Fragment>
                  {errors.empresa && touched.empresa ? (
                    <ErrorAlert error={errors.empresa} />
                  ) : null}
                </Fragment>
              )}

              <Field
                id="telefono"
                name="telefono"
                type="tel"
                className={`${
                  (errors.telefono && touched.telefono) ||
                  (!isMobile && errors.empresa && touched.empresa)
                    ? 'mb-0'
                    : 'mb-8'
                } block w-full bg-slate-800 py-3 px-4 rounded-lg`}
                placeholder="Teléfono"
              />

              {isMobile && (
                <Fragment>
                  {errors.telefono && touched.telefono ? (
                    <ErrorAlert error={errors.telefono} />
                  ) : null}
                </Fragment>
              )}
            </div>
            {!isMobile && (
              <div className="md:flex justify-between gap-8">
                {errors.empresa && touched.empresa ? (
                  <ErrorAlert error={errors.empresa} />
                ) : null}
                {errors.telefono && touched.telefono ? (
                  <ErrorAlert error={errors.telefono} />
                ) : null}
              </div>
            )}

            <div className="md:flex justify-between gap-8">
              <Field
                id="email"
                name="email"
                className={`${
                  (errors.email && touched.email) ||
                  (!isMobile && errors.postal && touched.postal)
                    ? 'mb-0'
                    : 'mb-8'
                } block w-full bg-slate-800 py-3 px-4 rounded-lg`}
                placeholder="Email:"
              />

              {isMobile && (
                <Fragment>
                  {errors.email && touched.email ? (
                    <ErrorAlert error={errors.email} />
                  ) : null}
                </Fragment>
              )}

              <Field
                id="postal"
                name="postal"
                type="tel"
                className={`${
                  (errors.postal && touched.postal) ||
                  (!isMobile && errors.email && touched.email)
                    ? 'mb-0'
                    : 'mb-8'
                } block w-full bg-slate-800 py-3 px-4 rounded-lg`}
                placeholder="Código Postal"
              />

              {isMobile && (
                <Fragment>
                  {errors.postal && touched.postal ? (
                    <ErrorAlert error={errors.postal} />
                  ) : null}
                </Fragment>
              )}
            </div>
            {!isMobile && (
              <div className="md:flex justify-between gap-8">
                {errors.email && touched.email ? (
                  <ErrorAlert error={errors.email} />
                ) : null}
                {errors.postal && touched.postal ? (
                  <ErrorAlert error={errors.postal} />
                ) : null}
              </div>
            )}
            <Field
              id="notas"
              name="notas"
              as="textarea"
              className="block w-full bg-slate-800 py-3 px-4 rounded-lg h-40"
              placeholder="Notas del cliente"
            />
            <input
              type="submit"
              value={
                actualClient?.cliente ? 'Actualizar Cliente' : 'Agregar Cliente'
              }
              className="bg-red-700 ml-auto block py-3 px-8 rounded-lg font-bold cursor-pointer mt-5"
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

FormClient.defaultProps = {
  actualClient: {},
};

export default FormClient;
