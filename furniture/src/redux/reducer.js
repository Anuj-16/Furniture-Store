

import { FILTER_DATA, GET_DATA, PRICE_DATA } from './actionType';

let initialData={
    products:[]
}
function reducer(state=initialData,action) {
    const{type,payload}=action;
    switch (type) {
        case GET_DATA:return{...state,products:payload};
        case FILTER_DATA:return{...state,products:payload};
        case PRICE_DATA:return{...state,products:payload};
      
          
        default:return state;
        
    }
 
}

export default reducer;
