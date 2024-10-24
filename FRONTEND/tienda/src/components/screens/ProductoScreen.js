import React, { useEffect,useState } from "react";
import { Link, useParams,useNavigate,useLocation } from "react-router-dom";
import {Row,Col,Image,ListGroup,Button,Card,Container,Form} from "react-bootstrap";
import Rating from "../Rating";
import { useDispatch, useSelector } from "react-redux";
import { productoDetailsReductores } from "../../reductores/ProductoReductores";
import { listProductsDetails } from "../../acciones/ProductosAcciones";
import Loader from "../Loader";
import Message from "../Message";


function ProductoScreen({history,match,params }) {

  const navigate = useNavigate();
  const location = useLocation();
  const {id} = useParams();
  const [cantidad,setCantidad] = useState(1)
  const dispatch = useDispatch();
  const productoDetails = useSelector((state) => state.productoDetails);
  const { loading, error, producto } = productoDetails;

  useEffect(()=>{
    dispatch(listProductsDetails(id));



  },[dispatch,params]);

  const addToCartHandler = ()=>{
    navigate(`/Carrito/${id}?cantidad=${cantidad}`)

 }
 
  return (
    <Container>
    <div>
      <Link to="/" className="btn btn-dark my-3">
        {" "}
        Volver
      </Link>


{loading ? (
        <Loader />
        
      ) : error ? (
        <Message variant='danger'>{error} </Message>
      ) : (
        <Row>
          <Col md={6}>
            <Image src={producto.imagen} alt={producto.nombreproducto} fluid />
          </Col>

          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{producto.nombreproducto}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={producto.calificacion}
                  text={`${producto.numeroReseñas} reviews`}
                  color={"#f8e825"}
                />
              </ListGroup.Item>
              <ListGroup.Item>Marca: ${producto.marcaproducto}</ListGroup.Item>

              <ListGroup.Item>
                Descripcion: {producto.informacionproducto}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Precio:</Col>
                    <Col>
                      <strong>${producto.precio}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Estado:</Col>
                    <Col>
                      {producto.cantidadenstock > 0 ? "En Stock" : "Fuera de Stock"}
                    </Col>
                  </Row>
                </ListGroup.Item>

            {producto.cantidadenstock >0 && (
              <ListGroup.Item>

                <Row>

                  <Col>Cantidad</Col>
                  <Col xs="auto" className="my-1">
                        <Form.Control
                          as="select"
                          value={cantidad}
                          onChange={(e) => setCantidad(e.target.value)}
                        >
                          {[...Array(producto.cantidadenstock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>





                </Row>
                </ListGroup.Item>
            )}

                <ListGroup.Item>
                  <Button
                    className="btn-block btn-success"
                    disabled={producto.cantidadenstock == 0}
                    type="button"
                    onClick={addToCartHandler}
                  >
                    Añadir al Carrito
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
     
      )}
    </div>
    </Container>
  );
}

export default ProductoScreen;