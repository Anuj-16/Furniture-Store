import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../redux/action";
import { AuthContent } from "../AuthContent/AuthContentProvider";
import "../Product.css";
import { Link } from "react-router-dom";

function Table() {
    const { data, setData,imgChair,setImgChair } = useContext(AuthContent);
    const dispatch = useDispatch();
    const { products } = useSelector((stre) => stre.reducer);
    setData(products);
    console.log(data);
    useEffect(() => {
      dispatch(getData("table"));
    }, []);
  
  
  
  
    return (
      <div className="othermain1">
        <div className="othermain11">
          <label>
            Category :
            <select className="filter-by-category">
              <option value="">All Categories</option>
              <option value="sidetable">Side Table</option>
              <option value="laptoptable">Laptop Table</option>
              <option value="outdoor">Outdoor Chair</option>
              <option value="living">Living Room Chair</option>
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
            <Link className="linksStyle" to={`/products/${el.id}`}>
              {imgChair?(<img src={el.img2} alt={el.title} />):(<img src={el.img1} alt={el.title} />)}
              <h4 style={{ color: "blue" }}>{el.title}</h4>
              <p>Price: ₹ {el.price}</p>
            </Link>
          ))}
        </div>
      </div>
    );
}

export default Table
