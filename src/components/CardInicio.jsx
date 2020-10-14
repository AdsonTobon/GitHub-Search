import React from "react";
import { Card } from "react-bootstrap";
import GitHub from '../images/github.png';
import '../css/CardInicio.css';

const CardInicio = () => {



  return (
    <div className="container-card">
      <div className="container-img">
        <img  className="img-github" src={GitHub} alt="Logo GitHub"/>
      </div>
      <div className="Container-info">
      <Card  style={{ width: "18rem" }} className="card text-white bg-dark mb-3">
              <Card.Header>GitHub Search</Card.Header>
              <Card.Body>
                <Card.Title>Modo de Uso </Card.Title>
                <Card.Text>
                Para usar el servicio de búsqueda de usuarios GitHub, la persona tendrá que 
                  ingresar los datos en el formulario y una vez adentro de la pestaña Home, ingresará
                  un usuario activo de GitHub para validar la información que desee. ¡Gracias!
                </Card.Text>
              </Card.Body>
            </Card>
      </div>
      <div>
          <footer> <a href="https://github.com/AdsonTobon" rel="noopener noreferrer">Anderson Tobon Perez</a>  | 2020</footer>
      </div>
    </div>
  );
};

export default CardInicio;
