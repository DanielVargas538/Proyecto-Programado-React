import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import OrderStateDelivered from '../components/Orders/OrderStateDelivered'
import OrderStateBack from '../components/Orders/OrderStateBack'

const List = ({ contents }) => {
    if (!contents || contents.length === 0) return <p>No hay Ordenes</p>

    const getStateLabel = (state) => {
        if (state === 0) {
            return "A tiempo";
        } else if (state === 1) {
            return "Sobre Tiempo";
        } else if (state === 2) {
            return "Demorado";
        }
    }
    
    return (
        <div>
            <h2 style={{margin: "4px"}}>Estas son las Ordenes:</h2>
            <OrderStateBack />
            <table className="table table-striped-columns">
                <thead>
                    <tr>
                    <th style={{padding: "0 4em 0 4em"}}>id</th>
                    <th style={{padding: "0 4em 0 4em"}}>Fecha</th>
                    <th style={{padding: "0 4em 0 4em"}}>Estado</th>
                    <th style={{padding: "0 4em 0 4em"}}>Plato</th>
                    <th style={{padding: "0 4em 0 4em"}}>Descripcion</th>
                    <th style={{padding: "0 4em 0 4em"}}>Cliente</th>
                    <th/>
                    <th/>
                    </tr>
                </thead>
                <tbody>
                    {contents.map(({id, date, state, dish: {name, description}, client: {full_name}}) => (
                    <tr>
                        <td>{id}</td>
                        <td>{date}</td>
                        <td>{getStateLabel(state)}</td>
                        <td>{name}</td>
                        <td>{description}</td>
                        <td>{full_name}</td>
                        <td>
                            <OrderStateDelivered id={id} state={state} />
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default List;
