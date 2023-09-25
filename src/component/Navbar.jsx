import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <div className='container z-index shadow position-sticky'>
        <div className='row'>
            <div className='col-12-lg'>
    <nav className="navbar navbar-expand-lg blur border-radius-xl top-0 z-index-3 shadow position-absolute my-3 py-2 start-0 end-0 mx-4" style={{backgroundColor:'#e3f2fd',borderRadius: '15px'}}>
  <div className="container-fluid">
    <Link className="navbar-brand font-weight-bolder ms-lg-0 ms-3" to={"/"}>Student Portal</a>
    <button className="navbar-toggler" type="button" >
      
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
      <Link to={"/"}  className='nav-link'>Home</Link>
      </div>
      <div className="navbar-nav">
      <Link to={"/signup"} className='nav-link'>Sign up</Link>
      </div>
      <div className="navbar-nav">
      <Link to={"/form"} className='nav-link'>Form</Link>
      </div>
      <div className="navbar-nav">
      <Link to={"/dashboard"} className='nav-link'>Dashboard</Link>
      </div>
    </div>
  </div>
</nav>
</div>
</div>
        </div>
    </>
  )
}

export default Navbar
