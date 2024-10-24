import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Message from "../Message";
import Loader from "../Loader";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  CardBody,
  FormControl,
  FormLabel,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../acciones/accionesUsuario";
import FormContainer from "../FormContainer";
import InputGroup from "react-bootstrap/InputGroup";
import { validEmail, validPassword } from "./Rejex";


function LoginScreen() {
  const navigate = useNavigate("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("")
  const [show, changeshow] = useState("fa fa-eye-slash");

  const dispatch = useDispatch();
  const userLogin = useSelector((state)=>state.userLogin);  
  const {error,loading,userInfo}=userLogin;

  const location = useLocation();
  const redirect = location.search?location.search.split("=")[1]:"/";

  useEffect(()=>{
    if (userInfo){
      navigate("/");
    }
  },[userInfo,redirect]);
 

  const submitHandler = (e) => {
    e.preventDefault();
    
    setMessage('cuenta no activa con las credenciales ingresadas, revisa tu email para activarla');
    dispatch(login(email,password))
    

  };
  const showPassword = () => {
    var x = document.getElementById("password");

    if (x.type == "password") {
      x.type = "text";
    
      changeshow(`fa fa-eye`);
    } else {
      x.type = "password";
      
      changeshow(`fa fa-eye-slash`);
    }
  };
 
  return (
    <>
      <Container className="mt-3">
        <Row>
          <Col md={4}></Col>
          <Col md={4}>


          {loading?(
          <Loader />
       ):(
        <Card>
              <Card.Header as="h3" className="text-center bg-black text-light">
                INICIAR SESION
              </Card.Header>
              <CardBody>
              {message && <Message variant="danger">{message}</Message>}
              
              {loading && <Loader />}
                
                <Form onSubmit={submitHandler}>
                  
                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label>
                      <span>
                        <i className="fa-regular fa-envelope"></i>{" "}
                      </span>{" "}
                      Direccion de Email
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="ingrese su email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>
                      {""}
                      <span>
                        <i className={show}></i>
                      </span>
                      {""} Contraseña
                    </Form.Label>
                    <InputGroup className="mb-3">
                      <InputGroup.Checkbox onClick={showPassword} /> {""}
                      <Form.Control
                        placeholder="Ingresa una contraseña"
                        required
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
            
                      ></Form.Control>
                    </InputGroup>
                  </Form.Group>
                  
                  <br />
                  <div className="d-grid gap-2">
                    <Button
                      className="btn btn-md btn-success"
                      type="submit"
                      
                    >
                      INGRESAR
                    </Button>
                  </div>
                </Form>
                <Row className="py-3">
                  <Col>
                    Usuario Nuevo?
                    <Link to="/signup">{" "}Registrarse</Link>
                  </Col>
                </Row>
              </CardBody>
            </Card>
       )}
           
          </Col>
          <Col md={4}></Col>
        </Row>
      </Container>
    </>
  );
}
export default LoginScreen;
