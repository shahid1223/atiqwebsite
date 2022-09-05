import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css' 
import { FaShoppingBag } from "react-icons/fa";
import { useCart } from "react-use-cart"


function Navbar() {
  const {
    isEmpty,
    totalItems,
  } = useCart();

  return (
    <div className="container-fluid nav-bg">
        <div className="row">
            <div className="col-md-10 mx-auto">
            <nav className="navbar navbar-expand-lg  ">
             <div className="container-fluid">
      <Link className="navbar-brand" to="/">Website</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
           <div className="collapse navbar-collapse" id="navbarSupportedContent">
     <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
           <li className="nav-item ">
          <Link className="nav-link "  to="/">Home</Link>
           </li>
          <li className="nav-item">
          <Link className="nav-link" to="/About">About</Link>
          </li>
       
          <li className="nav-item">
          <Link className="nav-link" to="/Contact">Contact</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/Service">Service</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/shop"><FaShoppingBag/>{!isEmpty && <span>{totalItems}</span> }<span>cart</span></Link>
          </li>
        
      </ul>
     
    </div>
  </div>
</nav>
</div>
</div>
</div>
          
  )
}

export default Navbar
