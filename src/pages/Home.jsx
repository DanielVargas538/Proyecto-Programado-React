import React, {useState} from 'react';
import Index from '../components/Orders';

function Home() {
  const [refresh, setRefresh] = useState(true);

  return (
    <div className=''>
      <Index refresh={refresh} setRefresh={setRefresh}/>  
    </div>
  );
}

export default Home;