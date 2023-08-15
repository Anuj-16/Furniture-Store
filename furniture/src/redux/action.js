import axios from "axios"
import { AUTH, CLIENT_NAME, GET_DATA, PERMIT } from './actionType';




let urlData=` http://localhost:8080/products`;

export const getData=(cate)=>async(dispatch)=>{


try{
   let result=await axios(`${urlData}?category=${cate}`);
 
    dispatch({type:GET_DATA,payload:result.data});
}catch(err){
    console.log("error")
}

}


// FOR LOGIN AND SIGNUP

export const Authenticate=(payload)=>{
    return{
        type:AUTH,
        payload
    }
}
export const clientName=(payload)=>{
    return{
        type: CLIENT_NAME,
        payload
    }
}

export const  givePermmission=(payload)=>{
return{
    type:PERMIT,
    payload
}
}

