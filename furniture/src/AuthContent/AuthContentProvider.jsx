import React, { createContext, useState } from 'react'
 export const AuthContent=createContext();
function AuthContentProvider({children}) {
    const[data,setData]=useState([]);
    const[categoryFilter,setCategoryFilter]=useState("");
    const[imgChair,setImgChair]=useState(false);
    console.log(imgChair)
  return (
    <AuthContent.Provider value={{data,setData,categoryFilter,setCategoryFilter,imgChair,setImgChair}}>{children}</AuthContent.Provider>
  )
}

export default AuthContentProvider
