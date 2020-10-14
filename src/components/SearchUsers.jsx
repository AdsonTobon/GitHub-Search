import React, { useState } from "react";
import {
  Button,
  Form,
  FormControl,
  FormGroup,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import "../css/Search.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";

const { SearchBar } = Search;

const SearchUsers = () => {
  const [Data, setData] = useState([]);
  const [datos, setDatos] = useState([]);
  const [UserInput, setUserInput] = useState("");
  const [error, setError] = useState(null);
  

  const handleChange = (e) => {
    setUserInput(e.target.value);
    console.log(e.target.value);
  };

  const handleClick = async () => {
    console.log(UserInput);
    try {
      let respuesta = await fetch(
        `https://api.github.com/users/${UserInput}/repos`
      );
      let data = await respuesta.json();

      let user = await fetch(`https://api.github.com/users/${UserInput}`);
      let info = await user.json();
        console.log(data)
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



  const columns = [
    { dataField: "language", text: "Lenguaje" },
    { dataField: "default_branch", text: "Branch" },
    { dataField: "git_url", text: "Url-Git" },
    { dataField: "name", text: "Nombre" },
    { dataField: "description", text: "Descripción" },
  ];

  return (
    <div className="container-principal">
      {UserInput !== "" ? (
        <div className="container-card">
          <div>
            <img className="img-avatar" src={datos.avatar_url} alt="" />
          </div>
          <div className="container-info">
            <div className="container-bio">
              <h2>{datos.login}</h2>
              <p>{datos.bio}</p>
            </div>
            <div className="container-repos">
              <ul>
                <li>Repos: {datos.public_repos}</li>
                <li>Followers: {datos.followers}</li>
                <li>Following: {datos.following}</li>
                <li>
                  <a href={datos.html_url}  rel="noopener noreferrer">Link Perfil</a>
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
            
          </div>
          <div className="table-content">
            <ToolkitProvider keyField="id" data={Data} columns={columns} search>
              {(props) => (
                <div>
                  <SearchBar {...props.searchProps} placeholder="Buscador de repositorios" />

                  <BootstrapTable
                    {...props.baseProps}
                    pagination={paginationFactory()}
                  />
                </div>
              )}
            </ToolkitProvider>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SearchUsers;
