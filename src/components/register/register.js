import React,{useState} from "react";
import axios from "axios";
import { useHistory } from "react-router";
import Swal from "sweetalert2"

const Signup=()=>{
    const history=useHistory();
    const [user,setUser]=useState({
        name:"",email:"",password:""
    })

    const handleInputs=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setUser({...user,[name]:value})
    }
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        let axiosinstance=new axios.create({});
        axiosinstance.post('https://moleculerbackend.herokuapp.com/api/users',
        user)
        .then(data=>{
            console.log(data);
            Swal.fire(
                "Success",
                "registered successfully"
              );
              history.push('/login')
        })
        .catch(err=>{
            console.log(err);
        })
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="name">Userid</label>
            <input type="text" className="form-control" name="name"
                value={user.name}
                onChange={handleInputs}
                placeholder="Enter your id" />
        </div>
        <div className="form-group">
            <label htmlFor="email">Userid</label>
            <input type="text" className="form-control" name="email"
                value={user.email}
                onChange={handleInputs}
                placeholder="Enter your id" />
        </div>
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" name="password"
                value={user.password}
                onChange={handleInputs}
                placeholder="Enter your Password" />
        </div>
        <button onClick={handleSubmit} className="btn btn-primary">Submit</button>
    </form>
        </>
    )
}

export default Signup;