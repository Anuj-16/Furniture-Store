import React, { createContext, useState } from 'react'
 export const AuthContent=createContext();
function AuthContentProvider({children}) {
    const[data,setData]=useState([]);
    const[categoryFilter,setCategoryFilter]=useState("");
    const[imgChair,setImgChair]=useState(false);
    const[store,setStore]=useState([]);
    console.log(imgChair)
  return (
    <AuthContent.Provider value={{data,setData,categoryFilter,setCategoryFilter,imgChair,setImgChair,store,setStore}}>{children}</AuthContent.Provider>
  )
}

export default AuthContentProvider
