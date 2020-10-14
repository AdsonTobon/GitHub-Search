import React, { useState } from 'react'
import { Button, Form, FormControl, FormLabel, FormGroup, Row, Col, Badge} from 'react-bootstrap';
import Cookies from 'universal-cookie';
import  '../css/SignUp.css';

const SignUp = () => {

    const [datos, setDatos] = useState({
        name:"",
        lastName:"",
        cedula:"",
        nacimiento:"",
        email:"",
        usuario:"",
    });

    let cookies = new Cookies();

    const handleClick =()=>{
        cookies.set("name", datos.name,{ path: "/" });
        cookies.set("lastName",datos.lastName,{ path: "/" });
        cookies.set("cedula",datos.cedula,{ path: "/" });
        cookies.set("nacimiento",datos.nacimiento,{ path: "/" });
        cookies.set("email",datos.email,{ path: "/" });
        cookies.set("usuario",datos.usuario,{ path: "/" });
        window.location.href='/Home';
    }

    const handleChange =async (e)=>{
        await setDatos({ ...datos, [e.target.name]: e.target.value });
        console.log(datos);
      }

    return (
        <div className="Container-Principal">
            <div className="container-form">
            
            <Form >
                <FormGroup className="text-center">
                    <FormLabel >Por favor ingresar sus datos para <Badge variant="danger">Continuar</Badge></FormLabel>
                </FormGroup>
                <Row>
                    <Col sm={6}>
                    <FormGroup>
                        <FormLabel>Nombres</FormLabel>
                        <FormControl
                        type="text"
                        placeholder="Ingrese Nombres"
                        name="name"
                        defaultValue={datos.name}
                        onChange={handleChange}
                        required
                        />
                    </FormGroup>
                    </Col>
                    <Col sm={6}>
                    <FormGroup>
                        <FormLabel>Apellidos</FormLabel>
                        <FormControl
                        type="text"
                        placeholder="Ingrese Apellidos"
                        name="lastName"
                        defaultValue={datos.lastName}
                        onChange={handleChange}
                        required
                        />
                    </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6}>
                    <FormGroup>
                        <FormLabel>Cedula</FormLabel>
                        <FormControl
                        type="number"
                        placeholder="Ingrese numero cedula"
                        name="cedula"
                        defaultValue={datos.cedula}
                        onChange={handleChange}
                        required
                        />
                    </FormGroup>
                    </Col>
                    <Col sm={6}>
                    <FormGroup>
                        <FormLabel>Fecha de nacimiento</FormLabel>
                        <FormControl
                        type="date"
                        name="nacimiento"
                        defaultValue={datos.nacimiento}
                        onChange={handleChange}
                        required
                        />
                    </FormGroup>
                    </Col>
                </Row>
                    
                   
                    <FormGroup>
                        <FormLabel>Correo Electronico</FormLabel>
                        <FormControl
                        type="email"
                        placeholder="Ingrese su Email"
                        name="email"
                        defaultValue={datos.email}
                        onChange={handleChange}
                        required
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Usuario GitHub</FormLabel>
                        <FormControl
                        type="text"
                        placeholder="Ingrese usuario en GitHub"
                        name="usuario"
                        defaultValue={datos.usuario}
                        onChange={handleChange}
                        required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Button variant="dark" size="lg" block onClick={handleClick}>Ingresar</Button>
                    </FormGroup>
                </Form>
            
            </div>
            
        </div>
    )
}

export default SignUp
