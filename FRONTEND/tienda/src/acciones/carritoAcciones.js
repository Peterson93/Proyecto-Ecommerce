import axios from 'axios';
import { CART_ADD_ITEM ,CART_REMOVE_ITEM} from '../constantes/CarritoConstantes';


export const addToCart = (id, cantidad) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/product/${id}`)

    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            producto: data._id,
            nombre: data.nombreproducto,
            imagen: data.imagen,
            precio: data.precio,
            cantidadenstock: data.cantidadenstock,
            cantidad
        }
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().carrito.cartItems))
}
export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id,
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().carrito.cartItems))
}