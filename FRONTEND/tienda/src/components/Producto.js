import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

function Producto({ producto }) {
  return (
    <Card className="my-3 p3 rounded">      
      <Link to={`/product/${producto._id}`}>
        <Card.Img src={producto.imagen} style={{height:140, width:160,}}/>
      </Link>
      <Card.Body>
        <Link to={`/product/${producto._id}`} className="text-dark">
          <Card.Title as="h3">
            {producto.nombreproducto}
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <div className="my-3">{producto.calificacion} en reseñas</div>
        </Card.Text>

        <Card.Text as="h3">{producto.precio} €</Card.Text>
        <Rating
          value={producto.calificacion}
          text={`${producto.numeroReseñas} de ${producto.numeroReseñas} reseñas`}
          color={"#f8e825"}
        />
      </Card.Body>
    </Card>
  );
}

export default Producto;
