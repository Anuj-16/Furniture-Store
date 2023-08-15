import axios from "axios"
import { FILTER_DATA, GET_DATA, PRICE_DATA } from './actionType';



let urlData=` http://localhost:8080/products`;

export const getData=(cate)=>async(dispatch)=>{


try{
   let result=await axios.get(`${urlData}?category=${cate}`);
 
    dispatch({type:GET_DATA,payload:result.data});
}catch(err){
    console.log("error")
}

}

export const filterVal=(cate,name,price)=>async(dispatch)=>{
    try{
      if(name){
        let result=await axios.get(`${urlData}?type=${name}`);
 
        dispatch({type:FILTER_DATA,payload:result.data});
      }else{
         let result=await axios.get(`${urlData}?category=${cate}`);
 
    dispatch({type:FILTER_DATA,payload:result.data})
      }
           
    }catch(err){}
}
export const priceFilter=(cate,price)=>async(dispatch)=>{
    try{
    
        if(price){
          let result=await axios.get(`${urlData}?_sort=price&_order=${price}&category=${cate}`);
 
        dispatch({type:PRICE_DATA,payload:result.data});
        }else{
          let result=await axios.get(`${urlData}?&category=${cate}`);
 
        dispatch({type:PRICE_DATA,payload:result.data});
        }
      
           
    }catch(err){}
}
