import {createStore,combineReducers,applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { productoListaReductores,productoDetailsReductores } from './reductores/ProductoReductores';
import { userLoginReducers,userSignupReducers } from './reductores/usuarioReducer';
import { carritoReducer } from './reductores/CarritoReducer';


const reducer = combineReducers({
    productosList:productoListaReductores,
    productoDetails:productoDetailsReductores,
    userLogin:userLoginReducers,
    userSignup:userSignupReducers,
    carrito:carritoReducer,
    }
  )

  const cartItemsFromStorage = localStorage.getItem('cartItems')?
  JSON.parse(localStorage.getItem('cartItems')): []

  const userInfoFromStorage = localStorage.getItem('userInfo')?
  JSON.parse(localStorage.getItem('userInfo')): null


  const initialState = {
    carrito:{cartItems:cartItemsFromStorage},
    userLogin:{userInfo:userInfoFromStorage}
}


const middleware=[thunk]
const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store;  