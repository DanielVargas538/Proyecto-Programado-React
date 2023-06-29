import React, {useState} from 'react';
import Order from '../components/Orders/Order';

function Home() {
  const [refresh, setRefresh] = useState(true);

  return (
    <div className=''>
      <Order refresh={refresh} setRefresh={setRefresh}/>  
    </div>
  );
}

export default Home;