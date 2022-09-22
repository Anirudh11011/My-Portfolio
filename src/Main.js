import React, {Component} from "react";
import {Route,NavLink,Link,HashRouter, Routes} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import { library, Library } from "@fortawesome/fontawesome-svg-core";
import{
    fab,
    faTwitterSquare,
    faFacebook,
    faLinkedin,
    
} from "@fortawesome/free-brands-svg-icons";

library.add(fab,faTwitterSquare,
    faFacebook,
    faLinkedin,);

class Main extends Component{
    render(){
        return(
        <HashRouter>   
        <div>
        <div>
        <Link className="logo" to="/"> Anirudh Kashyap </Link>
        </div>
             
             <ul className="header">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
             </ul>
             <div className="content">
             <Routes>
             <Route exact path="/" element={<Home/>}></Route>
             <Route exact path="/About" element={<About/>}></Route>
             <Route exact path="/Contact" element={<Contact/>}></Route>
             </Routes>

             </div>
        </div>
        </HashRouter> 
        )
    }
}
export default Main;