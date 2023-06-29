import React, { useState, useEffect } from 'react';
import WithLoadingState from '../../commons/WithLoadingState';
import List from '../../commons/List';
import { getFetch } from '../../commons/ApiMethods';
import cable from '../../commons/cable';

export function Index({ refresh, setRefresh }) {
  const LoadingList = WithLoadingState(List);
  const [contents, setContents] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!refresh) return;

    setLoading(true);

    getFetch('orders/filter').then((data) => {
      setContents(data);
      setLoading(false);
    });

    const channel = cable.subscriptions.create('OrderChannel', {
      received(data) {
        // Maneja los datos recibidos del canal (actualiza la tabla, etc.)
        console.log('Received data from OrderChannel:', data);
        // Actualiza los contenidos con los datos recibidos
        setContents(data);
      },
    });

    return () => {
      // Desconecta el canal al desmontar el componente
      channel.unsubscribe();
    };
  }, [refresh, setContents, setLoading, setRefresh]);

  return (
    <>
      <h2 style={{ margin: '4px' }}>Conexion con API local</h2>
      <LoadingList isLoading={loading} contents={contents} setRefresh={setRefresh} />
    </>
  );
}

export default Index;
