import React from 'react';
import { putFetch } from '../../commons/ApiMethods';
import 'bootstrap/dist/css/bootstrap.min.css';


function OrderStaterDelivered ({ id, state }) {

    const handleEditStateDelivered = async (event) =>{
        event.preventDefault();
        try{
        await putFetch(`orders/${id}`, { state: 4 })
        .then(() => {
            localStorage.setItem('stateBack', `${state}`);
            localStorage.setItem('idBack', `${id}`);
            console.log(`${localStorage.getItem('idBack')}`)
        })
        }catch(error){
            console.log(error)
        }
    }

    return (       
        <form onSubmit={handleEditStateDelivered}>
            <button className='btn btn-danger' type = 'submit'>Entregar</button>
        </form>
    );
}

export default OrderStaterDelivered;