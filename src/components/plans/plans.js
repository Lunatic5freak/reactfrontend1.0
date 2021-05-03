import React, { useEffect, useState } from "react";
import axios from "axios";
import Plantable from "./plantable";
import Config from './../../config/config'

const Plans = (props) => {
  const axiosinstance = new axios.create({withCredentials:true});

  const [plans, setPlans] = useState([]);
  const [role,setRole]=useState();
  useEffect(() => {
      const id=localStorage.getItem('email')
    axiosinstance.get(`${Config.api_url}/api/users/${id}`)
    .then(res=>{
        setRole(res.data.role)
    })
    const data =  () => {
      axiosinstance.get(`${Config.api_url}/api/plans`)
      .then(res=>{
        setPlans(res.data);
      })
      
    };
    data();
  }, []);
  console.log(plans);


  return plans.length !== 0 ? (
    <>
    <table className="table table-striped">
    <thead>
      <tr>
        <td>Name</td>
        <td>Price</td>
        <td>Validity(months)</td>
        <td>Action</td>
      </tr>
    </thead>
    <tbody>
      {plans.map((i) => (
        <Plantable 
            role={role}
            name={i.name}
            price={i.price}
            validity={i.validity} />
      ))}
    </tbody>
  </table>
    </>
  ):(<h1>loading</h1>)
};
export default Plans;
