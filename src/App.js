import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Signup from './component/Signup'
import SignIn from './component/SignIn'
import Form from './component/Form'
import Dashboard from './component/Dashboard'
import { Link, Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <>
    
<Routes>
  <Route path='/' element={<SignIn/>}></Route>
  <Route path='/Signup' element={<Signup/>}></Route>
  <Route path='/form' element={<Form/>}></Route>
  <Route path='/dashboard' element={<Dashboard/>}></Route>
</Routes>


    
  </>
  )
}

export default App