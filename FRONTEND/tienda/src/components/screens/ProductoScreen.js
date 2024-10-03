import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {Row,Col,Image,ListGroup,Button,Card,Container,} from "react-bootstrap";
import Rating from "../Rating";
import { useDispatch, useSelector } from "react-redux";
import { productoDetailsReductores } from "../../reductores/ProductoReductores";
import { listProductsDetails } from "../../acciones/ProductosAcciones";


function ProductoScreen(params) {
  const {id} = useParams();
  const dispatch=useDispatch();
  const productoDetails=useSelector((state)=>state.productoDetails);
  const {error,loading,producto}=productoDetails
 
  useEffect(() => {
    
    dispatch(listProductsDetails(id))

  }, [dispatch,params]);
  return (
    <Container>
      <div>
        <Link to="/" className="btn btn-dark my-3">
          volver atrás
        </Link>
       {loading?(
        <h1>loading..</h1>
       ):error?(
        {error}
       ):(
        
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
                  text={`${producto.numeroReseñas} reseñas`}
                  color={"#f8e825"}
                />
              </ListGroup.Item>
              <ListGroup.Item>Marca: {producto.marcaproducto} </ListGroup.Item>

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
                      <strong>{producto.precio} €</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Estado:</Col>
                    <Col>
                      {producto.cantidadenstock> 0 ? "En Stock" : "Fuera de Stock"}
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    className="btn-block btn-success"
                    disabled={producto.cantidadenstock === 0}
                    type="button"
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
