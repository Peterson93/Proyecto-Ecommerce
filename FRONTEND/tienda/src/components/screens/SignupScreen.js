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
import { signup } from "../../acciones/accionesUsuario";
import FormContainer from "../FormContainer";
import InputGroup from "react-bootstrap/InputGroup";
import { validEmail, validPassword } from "./Rejex";


function SignupScreen() {
  const navigate = useNavigate("");
  const [fname, setName] = useState("");
  const [Lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [show, changeshow] = useState("fa fa-eye-slash");

  const dispatch = useDispatch();
  const location = useLocation();
  const redirect = location.search?location.search.split("=")[1]:"/"

  const userSignup = useSelector((state)=>state.userSignup);  
  const {error,loading,userInfo}=userSignup

  useEffect(()=>{
    if (userInfo){
      setMessage(userInfo.details)
      setName('')
      setLName('')
      setEmail('')
      setPassword('')
      setConfirmPassword('')
    }
  },[userInfo,redirect])

  const submitHandler = (e) => {
    e.preventDefault();
    if (password != confirmPassword) {
      setMessage("las constraseñas no coinciden");
      navigate("/signup");

    } else if (!validPassword.test(password)) {
      setMessage("la contraseña no es valida");

    } else {
      dispatch(signup(fname,Lname,email,password))
      setMessage("su registro ha sido exitoso")
      navigate("/signup")
    }
  };
  const showPassword = () => {
    var x = document.getElementById("pass1");
    var z = document.getElementById("pass2");
    if (x.type == "password" && z.type == "password") {
      x.type = "text";
      z.type = "text";
      changeshow(`fa fa-eye`);
    } else {
      x.type = "password";
      z.type = "password";
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
       ): error?(
          <Message variant='danger'>{error}</Message>
       ):(

            <Card>
              <Card.Header as="h3" className="text-center bg-black text-light">
                REGISTRO
              </Card.Header>
              <CardBody>
                {message && <Message variant="danger">{message}</Message>}
                {error && <Message variant="danger">{error}</Message>}
                {loading && <Loader />}
                <Form onSubmit={submitHandler}>
                  <Form.Group className="mb-3" controlId="fname">
                    <Form.Label>
                      <span>
                        <i className="fa fa-user"></i>{" "}
                      </span>{" "}
                      Nombres
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="ingrese su nombre"
                      value={fname}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="lname">
                    <Form.Label>
                      <span>
                        <i className="fa fa-user"></i>{" "}
                      </span>{" "}
                      Apellidos
                    </Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="ingrese sus apellidos"
                      value={Lname}
                      onChange={(e) => setLName(e.target.value)}
                    />
                  </Form.Group>
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
                    <small>
                      la contraseña debe contener
                      almenos[1-9][a-z][A-z][_$@*!..] y 5 caracteres
                    </small>
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
                        required
                        type="password"
                        placeholder="Ingresa una contraseña"
                        onChange={(e) => setPassword(e.target.value)}
                        id="pass1"
                        value={password}
                      ></Form.Control>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <FormLabel>
                    <span>
                        <i className={show}></i>
                      </span>
                      {""} Confirmar contraseña
                    </FormLabel>
                    <InputGroup className="mb-3">
                      <InputGroup.Checkbox onClick={showPassword}/> {""}
                      <Form.Control
                        required
                        type="password"
                        placeholder="confirme su contraseña"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        id="pass2"
                        value={confirmPassword}
                      ></Form.Control>
                    </InputGroup>
                  </Form.Group>
                  <br />
                  <div className="d-grid gap-2">
                    <Button
                      className="btn btn-md btn-success"
                      type="submit"
                      variant="success"
                    >
                      Registrarse
                    </Button>
                  </div>
                </Form>
                <Row className="py-3">
                  <Col>
                    Ya eres usuario?
                    <Link to="/login"> Ingresar</Link>
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
export default SignupScreen;
