import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import OrderStateDelivered from '../components/Orders/OrderStateDelivered'
import OrderStateBack from '../components/Orders/OrderStateBack'
import './List.css'
const List = ({ contents }) => {

    console.log(contents)
    if (!contents || contents.length === 0) return <p>No hay Ordenes</p>

    const getStateLabel = (state) => {
        let label = "";
        let color = "";
      
        if (state === 0) {
          label = "A tiempo";
          color = "green";
        } else if (state === 1) {
          label = "Sobre Tiempo";
          color = "gold";
        } else if (state === 2) {
          label = "Demorado";
          color = "red";
        }
      
        return <span style={{ color }}>{label}</span>;
      };
    
    return (
        <div>
            <h2 className='title'>Ordenes Pendientes:</h2>
            <div className='btn-recover'>
                <OrderStateBack />
            </div>
                <tbody>
                    {contents.map(({id, date, state, dish: {name, description, photo_url}, client: {first_name ,last_name}}) => (
                    <div class='box'>
                        <div class='card'>
                            <img class='img' src={photo_url} alt='Photo'/>
                        </div>
                        <div class='info'>
                            <h1>{name}</h1>
                            <h2>{getStateLabel(state)}</h2>
                            <p>{description}</p>
                            <p>{date}</p>
                            <p>{first_name} {last_name}</p>
                            <div class='btn-delivered'>
                                <OrderStateDelivered id={id} state={state} />
                            </div>
                        </div>
                    </div>
                    
                ))}
                </tbody>
        </div>
    )
}

export default List;
