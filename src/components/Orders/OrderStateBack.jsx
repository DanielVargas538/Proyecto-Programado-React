import React, { useState, useEffect  } from 'react';
import { putFetch } from '../../commons/ApiMethods';
import 'bootstrap/dist/css/bootstrap.min.css';

function OrderStateBack () {

    const [message, setMessage] = useState('');

    
    const handleEditStateBack = async (event) =>{
        event.preventDefault();
        try{
        await putFetch(`orders/${sessionStorage.getItem('idBack')}`, { state: `${sessionStorage.getItem('stateBack')}`, module:0 })
        .then(() => {
            setMessage('Orden Recuperada');
            sessionStorage.setItem('idBack', 0)
            sessionStorage.setItem('stateBack', 0)
            console.log(`${sessionStorage.getItem('idBack')}`);
        })
        }catch(error){
        console.log(error)
        }
    }

    return (       
        <form onSubmit={handleEditStateBack}>
            <button className='btn btn-success' type = 'submit'>Recuperar Ultima Orden</button>
        </form>
    );
}

export default OrderStateBack;