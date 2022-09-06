import React from 'react'
import './Nav.css'

const Nav = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" role="button" href="#offcanvasExample" data-bs-toggle="offcanvas" aria-controls="offcanvasExample" >
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExample">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExample">Offcanvas</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
  <ul class="navbar-nav m-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link px-3 "  href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link px-3 " href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link px-3 " href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link px-3 " href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link px-3 " href="#">Link</a>
        </li>
      
      </ul>
      <form class="d-flex" role="search">
        <button class="btn btn-outline-success px-3" type="submit">Search</button>
      </form>
  </div>
</div>

   
     
      
    </div>
</nav></>
  )
}

export default Nav
