import React from "react";

import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../acciones/accionesUsuario";

function Header() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <>
      <Navbar className="navbar navbar-expand-lg bg-black" data-bs-theme="dark">
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
                  <Nav.Link className="navbar-link active">
                    Inicio <i className="fa-solid fa-shop"></i>
                  </Nav.Link>
                </LinkContainer>
              </li>

              <li className="nav-item">
                <LinkContainer to="/Carrito">
                  <Nav.Link className="nav-link">Carrito</Nav.Link>
                </LinkContainer>
              </li>

              {userInfo ? (
                <li className="nav-item dropdown">
                  <LinkContainer to="/signup">
                    <Nav.Link
                      className="nav-link dropdown-toggle"
                      data-bs-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Bienvenido {userInfo.name}
                    </Nav.Link>
                  </LinkContainer>
                  <div className="dropdown-menu">
                    <Nav.Link className="dropdown-item" onClick={logoutHandler}>
                      Salir
                    </Nav.Link>
                  </div>
                </li>
              ) : (
                <li className="nav-item dropdown">
                  <LinkContainer to="/Signup">
                    <Nav.Link
                      className="nav-link dropdown-toggle"
                      data-bs-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Usuario Nuevo?
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
                    
                  </div>
                </li>
              )}
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
      <marquee behavior=""direccion="">SITIO WEB CREADO POR - PETERSON DE LA ROSA</marquee>
    </>
  );
}
export default Header;
