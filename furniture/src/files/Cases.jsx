import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../redux/action";
import { AuthContent } from "../AuthContent/AuthContentProvider";
import "../Product.css";
import { Link } from "react-router-dom";


function Cases() {
  const { data, setData,imgChair,setImgChair ,store,setStore} = useContext(AuthContent);
  const dispatch = useDispatch();
  const { products } = useSelector((stre) => stre.reducer);
  setData(products);
  console.log(data);
  useEffect(() => {
    dispatch(getData("shelve"));
  }, [dispatch]);


  const storeData=(el)=>{
    if(store.length!==0){
      let condi=store.filter((ele)=>{
        return el.title===ele.title
    })
    console.log(condi)
    if(condi.length>=1){
      alert("item is already in cart")
    }
    else{
      setStore([...store,el])
    }

    }else{
       setStore([...store,el])
    }

   
  }

  return (
    <div className="othermain1">
      <div className="othermain11">
        <label style={{marginLeft:""}}>
          Category :
          <select className="filter-by-category">
            <option value="">All Categories</option>
            <option value="study">Book Shelve</option>
            <option value="decoration">Decoration</option>
           
          </select>
        </label>
        <br />
        <labe className="label2">
          Price Sorting :
          <select className="sorting-by-category" >
            <option value="">All Soting</option>
            <option value="asc">Low to high</option>
            <option value="desc">High to low</option>
            
          </select>
        </labe>
        <br />
        <div className="btn1">
        <button onClick={(e)=>setImgChair(true)}>colour-1</button>
        <button onClick={(e)=>setImgChair(false)}>colour-2</button>
        </div>
      </div>
      <div className="otherData">
          {data.map((el) => (
           <div className="linksStyle">
                <Link style={{textDecoration:"none"}} to={`/products/${el.id}`}>
                <div className="box">
             {imgChair?(<img src={el.img1} alt={el.title} />):(<img src={el.img2} alt={el.title} />)}
             </div>
              <h4 style={{ color: "blue" }}>{el.title}</h4>
            </Link>
              <div className="showd">
            <p>Price: ₹ {el.price}</p>
            <button className="btnAtC"onClick={(el)=>storeData(el)}>Add to Card</button>
            </div>
            </div>
          ))}
        </div>
    </div>
  );
}

export default Cases
