import React from 'react'
import { Link } from 'react-router-dom'
import { FaCartPlus} from "react-icons/fa";

const ShopNav = () => {
  return (
    <div className="container-fluid">
    <div className="row">
      <div className="col-md-10 mx-auto">
        <div className=" headerHome">
         
          <div className=" img">
           <h3>E<span>shop</span></h3>
           </div>
           <div className=" menu">
            <ul className="nav">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
           </div>
           <div className=" shopIcon">
            <Link to="/Inbox"><i><FaCartPlus/></i></Link>
           <span>(0)</span>
           </div>
          </div>
          </div>
          </div>
          </div>
          
  )
}

export default ShopNav
