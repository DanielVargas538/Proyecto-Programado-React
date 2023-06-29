import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';

const List = ({ contents }) => {
    if (!contents || contents.length === 0) return <p>No hay contenidos</p>
    const getStateLabel = (state) => {
        if (state === "on_time") {
            return "A tiempo";
        } else if (state === "late") {
            return "Sobre Tiempo";
        } else if (state === "delayed") {
            return "Demorado";
        }
    }

    const getImageUrl = (photo) => {
        const blob = new Blob([photo], { type: 'image/jpeg' });
        return URL.createObjectURL(blob);
      };

    return (
        <div>
            <h4>Estos son los datos disponibles</h4>
            <table className="table table-striped-columns">
                <thead>
                    <tr>
                    <th style={{padding: "0 4em 0 4em"}}>Fecha</th>
                    <th style={{padding: "0 4em 0 4em"}}>Estado</th>
                    <th style={{padding: "0 4em 0 4em"}}>Plato</th>
                    <th style={{padding: "0 4em 0 4em"}}>Descripcion</th>
                    <th style={{padding: "0 4em 0 4em"}}>Cliente</th>
                    </tr>
                </thead>
                <tbody>
                    {contents.map(({date, state, dish: {name, description}, client: {first_name}}) => (
                    <tr>
                        <td>{date}</td>
                        <td>{getStateLabel(state)}</td>
                        <td>{name}</td>
                        <td>{description}</td>
                        <td>{first_name}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default List;
