import React, { useEffect, useState } from 'react';
import axios from "axios";

const Users=(props)=>{
    let axiosinstance=new axios.create({withCredentials:true})
    const [users,setUsers]=useState([])
    useEffect(()=>{
        const data=async ()=>{
            const res=await axiosinstance.get('https://moleculerbackend.herokuapp.com/api/users');
            console.log(res.data);
            setUsers(res.data);
        }
        data()
    },[])



    return(
        <>

        <table className="table table-striped">
    <thead>
      <tr>
        <td>Name</td>
        <td>Email</td>
        <td>Plan</td>
      </tr>
    </thead>
    <tbody>
      {users.map((i,index) => (
        <tr key={index}>
            <td>{i.name}</td>
            <td>{i.email}</td>
            <td>{i.subscribed_plans}</td>
        </tr>
      ))}
    </tbody>
  </table>
  </>
    )
}

export default Users;
