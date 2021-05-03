import React, { useEffect, useState } from 'react';

import axios from "axios";
import Config from "./../../config/config"

const User=(props)=>{
    let axiosinstance=new axios.create({withCredentials:true})
    const [user,setUser]=useState({})
    useEffect(()=>{
        const data=async ()=>{
            const email=localStorage.getItem('email')
            console.log(email)
            const res=await axiosinstance.get(`${Config.api_url}/api/users/${email}`);
            console.log(res.data);
            setUser(res.data);
        }
        data()
    },[])

    return(
        <div className="container">
            <h2>{user.name}</h2>
            <h3>{user.email}</h3>
            <h4>{user.subscribed_plans}</h4>
        </div>
    )
}

export default User;