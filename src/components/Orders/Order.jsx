import React, {useState, useEffect} from 'react';
import WithLoadingState from '../../commons/WithLoadingState';
import List from '../../commons/List';
import Cable from '../../commons/Cable'

export function Index() {
  const LoadingList = WithLoadingState(List);
  const [contents, setContents] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {

    const channel = Cable.subscriptions.create('OrderChannel', {
    received(data) {

      setContents(JSON.parse(data.order_data));
      setLoading(false);
      },
    });

  }, [ setContents, setLoading, ]);

  return (
    <>
      <h2 style={{ margin: '4px' }}>Conexion con API local</h2>
      <LoadingList isLoading={loading} contents={contents}  />
    </>
  );
}


export default Index;