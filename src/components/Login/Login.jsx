import React, { useState }  from "react";
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getFetchLogin } from '../../commons/ApiMethods';
import { useNavigate } from 'react-router-dom';

function Login({setIsLoggedIn}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const navigate = useNavigate();
  
    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            getFetchLogin('user_logs/params',`${email}`,`${password}`)
            .then((response) => {
              if(response === 200){
                setMessage('Sesion Iniciada Con exito');
                setIsLoggedIn(true)
                sessionStorage.setItem('isLoggedIn', 'true');
                setTimeout(() => {
                    navigate('/');
                }, 1000);
              }else{
                setMessage('Usuario no encontrado');
              }})
        }catch(error){
          console.log(error);
        }
    }

    return (
        <div className="Auth-form-container">
          <form className="Auth-form" onSubmit={handleSubmit}>
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Iniciar Sesion</h3>
              <div className="form-group mt-3">
                <label>Correo Electronico</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="Ingrese su correo"
                  value = {email}
                  onChange={(e) => { setEmail(e.target.value); }}
                />
              </div>
              <div className="form-group mt-3">
                <label>Contraseña</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Ingrese su contraseña"
                  value = {password}
                  onChange={(e) => { setPassword(e.target.value); }}
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary">
                  Ingresar
                </button>
              </div>
              <div>{message ? <p>{message}</p> : <br />}</div>
            </div>
          </form>
        </div>
      )
}


export default Login;