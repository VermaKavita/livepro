import React from 'react'

import axios from 'axios'
import { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
const Signup = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  let [data,updatedata]=useState({id:'',name:'',email:'',address:'',password:''})
  const change=(e)=>{
    updatedata({...data,[e.target.name]:e.target.value});
  }
  return (
    <>
<div id='i1'>
<div > 
      <Navbar>
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar> 
          <NavItem><NavLink href='#'>Options</NavLink></NavItem> 
           <NavItem><NavLink href='#'>Options</NavLink></NavItem>   
           <NavItem><NavLink href='#'>Options</NavLink></NavItem>  
                
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    <div className='card my-5 mx-auto shadow' style={{width:'500px',background:'none',height:'420px'}}>
      <div className='card-title text-center my-3 mx-auto'><h3>Sign Up Form</h3></div>
      <form onSubmit={(e)=>{
        e.preventDefault();
        function validation(){
          
        }
          async function addPro()
        {
          let res=await axios.post('http://tanveerpp.pythonanywhere.com/emps/',data);
          console.log(res);
          if(res.status===201)
          {
            alert('product added sucessfully');
            updatedata({name:'',email:'',address:'',password:''})
          }
        }
        addPro();
            }}>
        <div className='form-group col-lg-9 col-md-7 mx-auto '>
          <label>Name</label>
          <input type="text" name="name" value={data.name} onChange={change} className='form-control shadow'/>
        </div>
        <div className='form-group col-lg-9 col-md-7 mx-auto'>
          <label>Email</label>
          <input type="text" name="email" value={data.email} onChange={change} className='form-control shadow'/>
        </div>
        <div className='form-group col-lg-9 col-md-7 mx-auto'>
          <label>address</label>
          <input type="text" name="address" value={data.address} onChange={change} className='form-control shadow'/>
        </div>
        <div className='form-group col-lg-9 col-md-7 mx-auto'>
          <label>password</label>
          <input type="text" name="password" value={data.password} onChange={change} className='form-control shadow'/>
        </div>
        <div className='form-group col-lg-9 col-md-7 my-3 mx-auto'>
          <button className=' btn btn-danger my-2 form-control shadow'>Sign Up</button>
        </div>
      </form> 

    </div>

    </div>
    </>
  )
}

export default Signup