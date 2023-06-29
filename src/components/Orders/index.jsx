import React, { useState, useEffect } from 'react';
import WithLoadingState from '../../commons/WithLoadingState';
import List from '../../commons/List';
import { getFetch, subscribeToOrderChannel } from '../../commons/ApiMethods';


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
    }, [refresh, setContents, setLoading, setRefresh]);
  
    return (
      <>
        <h2 style={{ margin: '4px' }}>Conexion con API local</h2>
        <LoadingList isLoading={loading} contents={contents} setRefresh={setRefresh} />
      </>
    );
  }

export default Index;