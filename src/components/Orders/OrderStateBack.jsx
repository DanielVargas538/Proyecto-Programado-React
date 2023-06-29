import React, { useState, useEffect  } from 'react';
import { putFetch } from '../../commons/ApiMethods';
import 'bootstrap/dist/css/bootstrap.min.css';

function OrderStateBack () {

    const [message, setMessage] = useState('');

    
    const handleEditStateBack = async (event) =>{
        event.preventDefault();
        try{
        await putFetch(`orders/${localStorage.getItem('idBack')}`, { state: `${localStorage.getItem('stateBack')}` })
        .then(() => {
            setMessage('Orden Recuperada');
            console.log(`${localStorage.getItem('idBack')}`);
        })
        }catch(error){
        console.log(error)
        }
    }

    return (       
        <form onSubmit={handleEditStateBack}>
            <button className='btn btn-success' type = 'submit'>Recuperar</button>
        </form>
    );
}

export default OrderStateBack;