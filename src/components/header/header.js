import React from "react";
import { BrowserRouter, Link, Route, Switch} from "react-router-dom";
import Landing from "../landing/landing";
import Plans from "../plans/plans";
import Home from "../home/home";
import Users from "../users/users";
import User from "../users/user";
import Createplan from "../plans/createplan";
import { Button } from "react-bootstrap";
import axios from 'axios'
import Swal from "sweetalert2";
const Header=(props)=>{
    let axiosinstance=new axios.create({withCredentilas:true})
    const logout=async ()=>{
        console.log('inside login fun');
        const res=await axiosinstance.get('https://moleculerbackend.herokuapp.com/api/logout');
        localStorage.removeItem('email')
        document.cookie.split(';')
        window.location.reload()
        Swal.fire(
            "succes",
            res.data.msg
        )
        
    }

    return props.role==='user' ? (
        <BrowserRouter>

        <nav className="navbar navbar-expand-md bg-primary navbar-dark" style={{justifyContent:'center'}}>
        <p className="navbar-brand">MOOL</p>
			<button className="navbar-toggler" type="button" data-toggle="collapse"
				data-target="#collapsibleNavbar">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="navbar navbar-collapse" id="collapsibleNavbar">
				<ul className="navbar-nav" style={{marginLeft:'30%'}}>
                    	<li className="nav-item">
                        <Link to="/home" style={{color:'black'}}>Home</Link>
					</li>
                
                    <li className="nav-item">
                        <Link to="/plans" style={{color:'black'}} className="nav-link">Plans</Link>
                    </li>
                        <Button variant="primary" onClick={logout}>Logout</Button>
					<li className="nav-item">
						<Link to="/user" style={{color:'black'}}>MyDetails</Link>
					</li>
					
				</ul>
			</div>
		</nav>

        <Switch>
            <Route path="/home" exact component={Home}></Route>
            <Route path="/plans" exact component={Plans}></Route>
            <Route path="/logout" exact component={Landing}></Route>
            <Route path="/user" exact component={User}></Route>
        </Switch>
           
        </BrowserRouter>
    ) : (
        <BrowserRouter>

        <nav className="navbar navbar-expand-md bg-primary navbar-dark" style={{justifyContent:'center'}}>
        <p className="navbar-brand">MOOL</p>
			<button className="navbar-toggler" type="button" data-toggle="collapse"
				data-target="#collapsibleNavbar">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="navbar navbar-collapse" id="collapsibleNavbar">
				<ul className="navbar-nav" style={{marginLeft:'30%'}}>
                    	<li className="nav-item">
                        <Link to="/home" style={{color:'black'}}>Home</Link>
					</li>
                
                    <li className="nav-item">
                        <Link to="/plans" style={{color:'black'}} className="nav-link">Plans</Link>
                    </li>
                    <Button variant="primary" onClick={logout}>Logout</Button>
					<li className="nav-item">
						<Link to="/users" style={{color:'black'}}>Users</Link>
					</li>
                    <li>
                        <Link to="/createplan" style={{color:'black'}}>Create plan</Link>

                    </li>

                    <li className="nav-item">
						<Link to="/user" style={{color:'black'}}>MyDetails</Link>
					</li>
					
				</ul>
			</div>
		</nav>

        <Switch>
            <Route path="/home" exact component={Home}></Route>
            <Route path="/plans" exact component={Plans}></Route>
            <Route path="/logout" exact component={Landing}></Route>
            <Route path="/users" exact component={Users}></Route>
            <Route path="/createplan" exact component={Createplan} ></Route>
            <Route path="/user" exact component={User}></Route>
        </Switch>
        </BrowserRouter>
    )
}

export default Header;