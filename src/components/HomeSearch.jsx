import React from 'react'
import Cookies from 'universal-cookie';
import Search from './Search';
import { Button } from 'react-bootstrap';
import '../css/Home.css';
const HomeSearch = () => {
    let cookies = new Cookies();

    const CerrarSesion=()=>{
        cookies.remove("name",{path:"/"});
        cookies.remove("lastName",{path:"/"});
        cookies.remove("cedula",{path:"/"});
        cookies.remove("nacimiento",{path:"/"});
        cookies.remove("email",{path:"/"});
        cookies.remove("usuario",{path:"/"});
        
        window.location.href="/"
    }

    return (
        <div className="container-principal">
            <div className="container-header">
                <div>
                    <h1>@{cookies.get("usuario")}</h1>
                </div>
                <div className="container-datos">
                    
                        <span className="datos-info-usuario"><b>Name:</b>{cookies.get("name")} {cookies.get("lastName")}</span>
                    
                    
                        <span className="datos-info-usuario"><b>ID:</b>{cookies.get("cedula")}</span>
                        <span className="datos-info-usuario"><b>BY:</b>{cookies.get("nacimiento")}</span>
                        <span className="datos-info-usuario"><b>@:</b>{cookies.get("email")}</span>
                    
                    
                        
                    
                </div>
                <Button variant="info" onClick={CerrarSesion} className="datos-info-usuario">Cerrar Sesión</Button>
            </div>
            <div className="container-Search">
                <Search/>
            </div>
        </div>
    )
}

export default HomeSearch
