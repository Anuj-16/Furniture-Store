import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./productDetails.css"
import { AuthContent } from '../AuthContent/AuthContentProvider';

function ProductDetails() {
    const { imgChair,setImgChair } = useContext(AuthContent);
    const[dt,setDt]=useState("");
    const data=useParams();

    const GetData=async(e)=>{
   
        try{
            let result=await axios.get(`http://localhost:8080/products/${data.id}`);
            console.log(result.data)
            setDt(result.data);

        }catch(err){}
    }
    
    useEffect(()=>{
        GetData();
    },[]);
  return (
    <div className='prodtData'>
    <div style={{paddingRight:"50px"}} >
       {imgChair?( <img  src={dt.img1} alt={dt.title} />):( <img  src={dt.img2} alt={dt.title} />)}
    </div>
    <div>
        <h2 style={{color:"blue"}}>{dt.title}</h2>
        
        <p style={{fontWeight:"700"}}>Price :₹ {dt.price}</p>
       <p>{dt.decsription}</p>
       
        <button className='btn3' onClick={(e)=>setImgChair(true)}>colour-1</button>
        <button  className="btn3"onClick={(e)=>setImgChair(false)}>colour-2</button>
     <br />
     <button className='AtC1' >Add to Card</button>
     <button className='AtS1'>Buy Now</button>
    </div>
    </div>
  )
}

export default ProductDetails
