import axios from "axios"
import { GET_DATA } from './actionType';
import { useContext } from "react";
import { AuthContent } from "../AuthContent/AuthContentProvider";


let urlData=` http://localhost:8080/products`;

export const getData=(cate)=>async(dispatch)=>{


try{
   let result=await axios(`${urlData}?category=${cate}`);
    dispatch({type:GET_DATA,payload:result.data});
}catch(err){
    console.log("error")
}

}