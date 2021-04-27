import React, { useState } from "react";
import Home from "../home/home";
import Admin from './../home/admin'
import Login from "./../login/login";



const Landing=()=>{
   const [token,setToken]=useState(null);
   if(token===null){
       return <Login setToken={setToken} />
   }else if(token.role==='user'){
       return <Home token={token}></Home>
   }
   else{
        return <Admin token={token}></Admin>
   }
}
export default Landing;