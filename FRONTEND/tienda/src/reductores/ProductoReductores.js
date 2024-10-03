import { PRODUCT_LIST_REQUEST,PRODUCT_LIST_SUCCESS,PRODUCT_LIST_FAIL,PRODUCT_DETAILS_REQUEST,PRODUCT_DETAILS_SUCCESS,PRODUCT_DETAILS_FAIL } from "../constantes/ProductosConstantes";

export const productoListaReductores =(state={productos:[]},action)=>{

    switch(action.type){
        case PRODUCT_LIST_REQUEST:
            return {loading:true,productos:[]}
        case PRODUCT_LIST_SUCCESS:
            return {loading:false,productos:action.payload}
        case PRODUCT_LIST_FAIL:
            return {loading:false,error:action.payload}

        default:
            return state
    }
} 

export const productoDetailsReductores =(state={producto:[]},action)=>{

    switch(action.type){
        case PRODUCT_DETAILS_REQUEST:
            return {loading:true,...state}
        case PRODUCT_DETAILS_SUCCESS:
            return {loading:false,producto:action.payload}
        case PRODUCT_DETAILS_FAIL:
            return {loading:false,error:action.payload}

        default:
            return state
    }
} 