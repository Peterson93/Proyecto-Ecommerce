import React, { useEffect } from "react";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
  Container,
} from "react-bootstrap";
import Message from "../Message";
import { addToCart, removeFromCart } from "../../acciones/carritoAcciones";

function CartScreen({ params, location, history }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const productoId = id;
  const cantidad = location.search ? Number(location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();

  console.log(productoId, cantidad);
  // console.log("Location:", location.pathname);
  // console.log("History:", navigate.lenght);

  const carrito = useSelector((state) => state.carrito);
  const { cartItems } = carrito;

  useEffect(() => {
    if (productoId) {
      dispatch(addToCart(productoId, cantidad));
    }
  }, [dispatch, productoId, cantidad]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };
  const checkoutHandler = () => {
    navigate("/login?redirect=shipping");
  };

  return (
    <Container>
      <Row>
        <Col md={8}>
          <h1>Carrito de Compras</h1>
          {cartItems.length === 0 ? (
            <Message variant="info">
              Tu carrito está vacio <Link to="/">Volver Atras</Link>
            </Message>
          ) : (
            <Container>
              <ListGroup variant="flush">
                {cartItems.map((item) => (
                  <ListGroup.Item key={item.producto}>
                    <Row>
                      <Col md={2}>
                        <Image
                          src={item.imagen}
                          alt={item.nombre}
                          fluid
                          rounded
                        />
                      </Col>
                      <Col md={3}>
                        <Link to={`/product/${item.producto}`}>
                          {item.nombre}
                        </Link>
                      </Col>

                      <Col md={2}>${item.precio}</Col>

                      <Col md={3}>
                        <Form.Control
                          as="select"
                          value={item.cantidad}
                          onChange={(e) =>
                            dispatch(
                              addToCart(item.producto, Number(e.target.value))
                            )
                          }
                        >
                          {[...Array(item.cantidadenstock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>

                      <Col md={1}>
                        <Button
                          type="button"
                          variant="light"
                          onClick={() => removeFromCartHandler(item.producto)}
                        >
                          <i className="fas fa-trash"></i>
                        </Button>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Container>
          )}
        </Col>

        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>
                  Subtotal (
                  {cartItems.reduce((acc, item) => acc + item.cantidad, 0)})
                  items
                </h2>
                $
                {cartItems
                  .reduce((acc, item) => acc + item.cantidad * item.precio, 0)
                  .toFixed(2)}
              </ListGroup.Item>
            </ListGroup>

            <ListGroup.Item>
              <Button
                type="button"
                className="btn-block"
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
              >
                completar pedido
              </Button>
            </ListGroup.Item>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CartScreen;
