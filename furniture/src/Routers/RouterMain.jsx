import React from 'react'
import { Routes, Route} from "react-router-dom";
import Other from '../files/Other';
import Chair from '../files/Chair';
import Table from '../files/Table';
import Cases from '../files/Cases';
import Lambs from '../files/Lambs';
import Sofas from '../files/Sofas';
import ProductDetails from '../components/ProductDetails';

function RouterMain() {
  return (
   <Routes>
    <Route path="/"element={<Other/>}/>
    <Route path="/chair"element={<Chair/>}/>
    <Route path="/table"element={<Table/>}/>
    <Route path="/shelve"element={<Cases/>}/>
    <Route path="/lambs"element={<Lambs/>}/>
    <Route path="/sofas"element={<Sofas/>}/>
    <Route path="/products/:id"element={<ProductDetails/>}/>

   
   </Routes>
  )
}

export default RouterMain