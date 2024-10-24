import { USER_LOGIN_FAIL,USER_LOGIN_SUCCESS,USER_LOGOUT,USER_LOGIN_REQUEST,

    USER_SIGNUP_FAIL,USER_SIGNUP_SUCCESS,USER_SIGNUP_REQUEST

} from '../constantes/UsuariosConstantes'

export const userLoginReducers =(state={},action)=>{

    switch(action.type){
        case USER_LOGIN_REQUEST:
            return {laoding:true}
        case USER_LOGIN_SUCCESS:
            return {laoding:false,userInfo:action.payload}
        case USER_LOGIN_FAIL:
            return {laoding:false,error: action.payload}

        case USER_LOGOUT:
            return { }

        default:
            return state
    }

}

export const userSignupReducers = (state={  },action) =>{

    switch(action.type){
        case USER_SIGNUP_REQUEST:
            return {loading:true}
        case USER_SIGNUP_SUCCESS:
            return {loading:false,userInfo:action.payload}
        case USER_SIGNUP_FAIL:
            return {loading:false, error: action.payload }
        case USER_LOGOUT:
            return { }

        default:
            return state
    }

}