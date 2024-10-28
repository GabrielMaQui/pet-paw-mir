import  { useState, useEffect } from 'react';
import Title from './ui/Title';

const BlockedAccounts = () => {
  const [cuentas, setCuentas] = useState([]);

  useEffect(() => {
    // Lógica para obtener la lista de cuentas bloqueadas desde la API
    // setCuentas(data);
  }, []);

  const desbloquearCuenta = (id) => {
    // Lógica para desbloquear la cuenta en la API
    setCuentas(cuentas.filter((cuenta) => cuenta.id !== id));
  };

  return (
    <div className='text-custom-200 mt-10'>
      <Title text="Cuentas bloqueadas"/>
      {cuentas.length === 0 ? (
        <p>No tienes cuentas bloqueadas.</p>
      ) : (
        <ul className="space-y-4">
          {cuentas.map((cuenta) => (
            <li key={cuenta.id} className="flex items-center">
              <img
                src={cuenta.foto}
                alt={cuenta.nombre}
                className="w-12 h-12 rounded-full mr-4"
              />
              <span className="flex-1">{cuenta.nombre}</span>
              <button
                onClick={() => desbloquearCuenta(cuenta.id)}
                className="bg-blue-500 text-white py-1 px-3 rounded"
              >
                Desbloquear
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BlockedAccounts;
