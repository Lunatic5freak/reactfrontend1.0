import React from "react"
import axios from 'axios'
import { Button } from "react-bootstrap";
import swal from 'sweetalert2'
import Config from './../../config/config'

const Plantable=(props)=>{

    const subscribe = async () => {
        let axiosinstance=new axios.create({withCredentials:true})
          let userid = localStorage.getItem("email");
          const res1=await axiosinstance.get(`${Config.api_url}/api/users/${userid}`);
          if(res1.data.subscribed_plans===props.name){
              swal.fire(
                  'error',
                  "can not upgrade to same plan"
              )
          }else{
            let plan = { subscribed_plans: props.name };
            const res = await axiosinstance.put(`${Config.api_url}/api/users/${userid}`, plan);
            swal.fire(
                "success",
                res.data.msg
            )
          }
      };

      const deletePlan=()=>{
          console.log('');
      }

    return props.role==='user'?(
        <tr>
        <td>{props.name}</td>
        <td>{props.price}</td>
        <td>{props.validity}</td>
        <td><Button onClick={subscribe}>Subscribe</Button></td>
       </tr>

    ):(<tr>
        <td>{props.name}</td>
        <td>{props.price}</td>
        <td>{props.validity}</td>
        <td><Button onClick={deletePlan}>Delete</Button></td>
       </tr>
       )

}
export default Plantable;