import React from "react";

import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav } from "react-bootstrap";

function Header() {
  return (
    <>
      <Navbar className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <LinkContainer to="/">
            <Nav.Link className="navbar-brand">OferClick</Nav.Link>
          </LinkContainer>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <LinkContainer to="/">
                  <Nav.Link className="navbar-link active">Inicio <i className="fa-solid fa-shop"></i></Nav.Link>
                </LinkContainer>
              </li>

              <li className="nav-item">
                <LinkContainer to="/Carrito">
                  <Nav.Link className="nav-link">Carrito</Nav.Link>
                </LinkContainer>
              </li>

              <li className="nav-item dropdown">
                <LinkContainer to="/signup">
                  <Nav.Link
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Cuenta de Usuario 
                  </Nav.Link>
                </LinkContainer>
                <div className="dropdown-menu">
                  <LinkContainer to="/Login">
                    <Nav.Link className="dropdown-item" href="#">
                      Ingresar
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/Signup">
                    <Nav.Link className="dropdown-item" href="#">
                      Registrarse
                    </Nav.Link>
                  </LinkContainer>

                  <div className="dropdown-divider">algo mas</div>
                  <LinkContainer to="/Logout">
                  <Nav.Link className="dropdown-item" href="#">
                    Salir
                  </Nav.Link>
                  </LinkContainer>
                </div>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-sm-2"
                type="search"
                placeholder="Busqueda"
              />
              <button className="btn btn-secondary my-2 my-sm-0" type="submit">
                Buscar
              </button>
            </form>
          </div>
        </div>
      </Navbar>
    </>
  );
}
export default Header;
