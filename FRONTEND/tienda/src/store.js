import {createStore,combineReducers,applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { productoListaReductores,productoDetailsReductores } from './reductores/ProductoReductores';

const reducer = combineReducers({
    productosList:productoListaReductores,
    productoDetails:productoDetailsReductores
})

const initialState={}
const middleware=[thunk]
const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store;  