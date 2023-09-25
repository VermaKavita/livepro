import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios';
const SignIn = () => {
    let [data,updatedata]=useState({name:'',password:''});
    const change=(e)=>{
        updatedata({...data,[e.target.name]:e.target.value});
    }
  return (
    <>
    <Navbar/>
   <div class="container position-relative" id='signin'>
        <div class="row mt-4">
          <div class="col-lg-4 col-md-8 col-12 mx-auto">
            <div class="card z-index-0 fadeIn3 fadeInBottom">
            <div class="card-header p-0 position-relative mt-n4 mx-3">
                <div class="bg-gradient shadow border-radius-lg py-3 pe-1">
                  <h4 class="text-black font-weight-bolder text-center mt-2 mb-0">Sign in</h4>
                  </div></div>
<div className='card-body my-3'>
    <form onSubmit={(e)=>{
        e.preventDefault();
        async function add(){
            //let r=await axios.post('https://studentapi-c8py.onrender.com/registration/',data);
          
        }
        add();
    }}>
<div className='form-group'>
    <label>Name</label>
    <input type="text" className='form-control' name="name" value={data.name} onChange={change}/>

</div>
<div className='form-group'>
    <label>Password</label>
    <input type="text" className='form-control' name="password" value={data.password} onChange={change}/>
</div>
<div className='form-group mt-3'>
    <Link to={"/"}><button className='btn btn-danger form-control' >Sign in</button></a>

</div>
</form>
<p class="mt-4 text-sm text-center">
                    Don't have an account?
                    <a href="/signup" class="text-primary text-gradient font-weight-bold">Sign up</a>
                  </p>
</div>
                </div>
                </div>
                </div>
                </div>
               
                
    </>
  )
}

export default SignIn
