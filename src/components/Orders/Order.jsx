import React, {useState, useEffect} from 'react';
import WithLoadingState from '../../commons/WithLoadingState';
import List from '../../commons/List';
import Cable from '../../commons/Cable'

export function Index() {
  const LoadingList = WithLoadingState(List);
  const [contents, setContents] = useState([]);

  
  useEffect(() => {
    try {
      const channel = Cable.subscriptions.create('OrderChannel', {
        received(data) {
          setContents(JSON.parse(data.order_data));
        },
      });
    } catch (error) {
      
    }
  }, [setContents]);
  

  return (
    <>
      <LoadingList contents={contents}  />
    </>
  );
}


export default Index;