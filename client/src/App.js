import { Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Username from './components/Username';
import Password from './components/Password';
import Recovery from './components/Recovery';
import Reset from './components/Reset';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <>  
      <Routes>
        <Route path='/' element={<Username/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} /> 
        <Route path='/password' element={<Password/>} />
        <Route path='/recovery' element={<Recovery/>} />
        <Route path='/reset' element={<Reset/>} />              
        <Route path='/home' element={<Home/>} />
        <Route path='*' element={<PageNotFound/>} /> 


      </Routes>
    </>
  )
}

export default App