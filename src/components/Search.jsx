import React, { useState } from "react";
import {
  Button,
  Form,
  FormControl,
  FormGroup,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import "../css/Search.css";

const Search = () => {
  const [Data, setData] = useState([]);
  const [datos, setDatos] = useState([]);
  const [UserInput, setUserInput] = useState("");
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("");

  const handleChange = (e) => {
    setUserInput(e.target.value);
    console.log(e.target.value);
  };

  const handleClick = async () => {
    console.log(UserInput);
    try {
      let respuesta = await fetch(`https://api.github.com/users/${UserInput}/repos`);
      let data = await respuesta.json();

      let user = await fetch(`https://api.github.com/users/${UserInput}`);
      let info = await user.json();

      if (data.message) {
        setError(data.message);
      } else {
        setData(data);
        setDatos(info);
        setError(null);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSearchChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="container-principal">
      {UserInput !== "" ? (
        <div className="container-card">
          <div>
            <img className="img-avatar" src={datos.avatar_url} alt="Avatar" />
          </div>
          <div className="container-info">
            <div className="container-bio">
              <h2>{datos.login}</h2>
              <p>{datos.bio}</p>
            </div>
            <div>
              <ul>
                <li>Repos: {datos.public_repos}</li>
                <li>Followers: {datos.followers}</li>
                <li>Following: {datos.following}</li>
                <li>
                  <a href={datos.html_url}>Link Perfil</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <h1>Sin Resultados</h1>
      )}

      <Container fluid="lg">
        <div className="container-table">
          <div className="search">
            <Form>
              <FormGroup>
                <Row>
                  <Col sm={8}>
                    <FormControl
                      placeholder="GitHub user"
                      name="github user"
                      onChange={handleChange}
                    />
                  </Col>
                  <Col sm={4}>
                    <Button onClick={handleClick} block>
                      Search
                    </Button>
                  </Col>
                </Row>
              </FormGroup>
            </Form>
            <Form>
              <FormGroup>
                <Row>
                  <Col sm={12}>
                    <FormControl
                      placeholder="Buscador de repositorios"
                      name="repos"
                      onChange={handleSearchChange}
                    />
                  </Col>
                  
                </Row>
              </FormGroup>
            </Form>
          </div>
          <div className="table-content">
            <Table striped bordered hover variant="dark">
              <thead >
                <tr>
                  <td>Lenguaje</td>
                  <td>Branch</td>
                  <td>Url-Git</td>
                  <td>Nombre</td>
                  <td>Descripción</td>
                </tr>
              </thead>
              <tbody>
                {Data ? (
                  Data.map((datos, i) => 
                  
                  datos.name.includes(filter) && (
                    
                      <tr key={i}>
                        <td>{datos.language}</td>
                        <td>{datos.default_branch}</td>
                        <td>
                          <a href={datos.git_url}>Link Url</a>
                        </td>
                        <td>{datos.name}</td>
                        <td>{datos.description}</td>
                      </tr>
                    )
                  
                )) : (
                  <h1>{error}</h1>
                )}
              </tbody>
            </Table>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Search;
