import React, { useEffect,} from 'react'
import { Container, Row, Col,} from "react-bootstrap";
import Producto from '../Producto';
import { listProducts } from '../../acciones/ProductosAcciones';
import {useDispatch,useSelector} from 'react-redux'
import Loader from '../Loader';
import Message from '../Message'


function InicioScreen() {
  const dispatch=useDispatch()
  const productosList=useSelector((state)=>state.productosList);
  const {error,loading,productos}=productosList

  /* const[productos,setproductos]=useState([]) */

   useEffect (()=>{
    dispatch(listProducts())
  /* async function traerproductos() {
   const {data}= await axios.get('/api/products/')
   setproductos(data)
      
    }
    traerproductos() */
  },[dispatch]);
  /*console.log(productos)*/

  return (
    <Container>
      <div>SITIO WEB CREADO POR - PETERSON DE LA ROSA</div>

      <br />
      

      {
        loading?(
          <Loader/>
        ):error ? (
          <Message variant='danger'>{error}</Message>
        ):(

      
      <Row>
        {productos && productos.map((producto)=>( 
          <Col key={producto._id} sm={12} md={6} lg={4} xl={3}>

            <Producto producto={producto}/>
            
          </Col>
        ))}
       </Row>
        )}
    </Container>
  )
}

export default InicioScreen
