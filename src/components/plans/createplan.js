import React, { useState } from 'react'
import axios from 'axios'
import {Form,Button} from 'react-bootstrap'
import Swal from 'sweetalert2'
import Config from './../../config/config'

const Createplan=()=>{
    let axiosinstance=new axios.create({withCredentials:true})
    const [plan,setPlan]=useState({
        name:'',price:"",validity:""
    })

    const handleInputs=(e)=>{
        let name=e.target.name
        let value=e.target.value
        setPlan({...plan,[name]:value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        axiosinstance.post(`${Config.api_url}/api/plans`,plan)
        .then(res=>{
            Swal.fire(
                'succes',
                res.data.msg
            )
        })
        .catch(err=>{
            Swal.fire({
                icon:'error',
                text:err.msg
            })
        })
    }

    return(
        <Form>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={plan.name}
            placeholder="enter name"
            onChange={handleInputs}
          ></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="text"
            name="price"
            value={plan.price}
            placeholder="enter price"
            onChange={handleInputs}
          ></Form.Control>
        </Form.Group>

        <Form.Group>
        <Form.Label>Validity</Form.Label>
        <Form.Control
          type="text"
          name="validity"
          value={plan.validity}
          placeholder="enter validity"
          onChange={handleInputs}
        ></Form.Control>
      </Form.Group>
        
        <Button variant="primary" type="button" onClick={handleSubmit}>Create</Button>
      </Form>
    )
}

export default Createplan;