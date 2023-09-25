import React from 'react'
import '../App.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
const Dashboard = () => {
  let [data,updatedata]=useState([]);
  useEffect(()=>{
    async function show()
    {
      let res=await axios.get('http://tanveerpp.pythonanywhere.com/emps/');
      updatedata(res.data);
    }
    show();
  })
  
  return (
    <>
    <div className='container-fluid'>
    <div className="row">
<div className=" col-2 bg-transparent justify-content-center  align-items-center my-3">
     
  <nav id="sidebarMenu" className="navbar shadow sticky-top d-sm-block bg-dark my-4" >
    <div >
      <div className="list-group list-group-flush bg-dark">
      <button className='btn'> <Link to={"/"}  className="list-group-item bg-danger " aria-current="true" >    Main dashboard  </Link></button> 
      
      <button className='btn '><Link to={"/"} className="list-group-item my-1">Home </Link></button>
      <button className='btn '><Link to={"/"} className="list-group-item  my-1"> Log In</Link></button>
      <button className='btn '><Link to={"/"} className="list-group-item  my-1"> Teacher</Link></button>
      <button className='btn '><Link to={"/"} className="list-group-item  my-1">Student </Link></button>
      <button className='btn '><Link to={"/"} className="list-group-item  my-1"> Courses</Link></button>
        <button className='btn'> <Link to={"/"} className="list-group-item  my-1"> About</Link></button>
        <button className='btn'><Link to={"/"} className="list-group-item  my-1"> Contact</Link></button>
      
      </div>
    </div>
  </nav>
</div>
<div className=" container-fluid col-10 bg-transparent my-5 " >
    <div className='row my-4 '>
        <div className='col-lg-2 cpl-md-2 bg-info shadow  mx-auto my-3 ' style={{height:'100px'}}>

        </div>
        <div className='col-lg-2 cpl-md-2 bg-danger mx-auto my-3' style={{height:'100px'}}>

</div>
<div className='col-lg-2 cpl-md-2 bg-success mx-auto my-3' style={{height:'100px'}}>

</div>
<div className='col-lg-2 cpl-md-2 bg-info mx-auto my-3' style={{height:'100px'}}>

</div>
    </div>
    <div className='row'>
      <div className='col-md-11 mx-auto bg-secondary my-5' >
     <table className='table table-stripped table-border-dark '>
      <thead>
        <tr>
          <td>No.</td>
          <td>Name</td>
          <td>Email</td>
          <td>Password</td>
          <td>Address</td>
        </tr>
      </thead>
      <tbody>
      {data.map((v,i)=>{
          return (<tr key={i}>
            <td>{v.id}</td>
            <td>{v.name}</td>
            <td>{v.email}</td>
            <td>{v.address}</td>
            <td>{v.password}</td>
            </tr>)
      })}
      </tbody>
     </table>
      </div>
    </div>
<div className='row'>
  <div className='col-md-4 bg-gradient shadow'>graph 1</div>
  <div className='col-md-4 bg-info shadow'>graph 2</div>
  <div className='col-md-4 bg-primary shadow'>graph 3</div>
</div>
</div>

</div>
</div> 
  
    </>
  )
}

export default Dashboard
