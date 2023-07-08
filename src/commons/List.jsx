import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import OrderStateDelivered from '../components/Orders/OrderStateDelivered'
import OrderStateBack from '../components/Orders/OrderStateBack'
import './List.css'
import dayjs from 'dayjs';
import 'dayjs/locale/es-mx';


dayjs.locale('es-mx');

const List = ({ contents }) => {
    const orders = contents.orders;
    const ordersCount = contents.orders_count;
    if (!orders || orders.length === 0) return <p>No hay Ordenes</p>

    const getStateLabel = (state) => {
        let label = "";
        let color = "";
      
        if (state === "on_time") {
          label = "A tiempo";
          color = "green";
        } else if (state === "late") {
          label = "Sobre Tiempo";
          color = "gold";
        } else if (state === "delayed") {
          label = "Demorado";
          color = "red";
        }
      
        return <span style={{ color }}>{label}</span>;
      };
    
    return (
        <div>
            <br/>
            <div className='legend'>Ordenes faltantes: {ordersCount}</div>
            <div className='btn-recover'>
                <OrderStateBack /> 
            </div>
            
                <tbody>
                    {orders.map(({id, date, state, quantity ,dish: {name, photo_url}, client: {first_name ,last_name}}) => (
                    <div class='box'>
                        <div class='card'>
                            <img class='img' src={photo_url} alt='Photo'/>
                        </div>
                        <div class='info'>
                            <h1>{name}</h1>
                            <h2>{getStateLabel(state)}</h2>
                            <p>Cantidad {quantity}</p>
                            <p>Día: {dayjs(date).format('dddd')}</p>
                            <p>Hora: {dayjs(date).format('HH:mm')}</p>
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
