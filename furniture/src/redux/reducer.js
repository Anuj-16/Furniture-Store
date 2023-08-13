
import { GET_DATA } from './actionType';

let initialData={
    products:[]
}
function reducer(state=initialData,action) {
    const{type,payload}=action;
    switch (type) {
        case GET_DATA:return{...state,products:payload};
      
          
        default:return state;
        
    }
 
}

export default reducer;
