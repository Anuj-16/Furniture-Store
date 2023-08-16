

import { CART_TOTAL, FILTER_DATA, GET_DATA, PAYMENT_INFO, PRICE_DATA, USER_INFO } from './actionType';

let initialData={
    products:[],
    carttotal:'',
    userInfo:{},

}

function reducer(state=initialData,action) {
    const{type,payload}=action;
    switch (type) {
        case GET_DATA:return{...state,products:payload};
        case FILTER_DATA:return{...state,products:payload};
        case PRICE_DATA:return{...state,products:payload};
      
        case CART_TOTAL:{
            return{...state,carttotal:action.payload}
        }
        case USER_INFO:{
            return{...state,userInfo:action.payload}
        }
        case PAYMENT_INFO:{
            return{...state,paymentInfo:action.payload}
        }
          
        default:return state;
        
    }
 
}

export default reducer;
