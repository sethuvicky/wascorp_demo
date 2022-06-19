import React from 'react';
import ReactDOM from 'react-dom';
const Demo=()=>
{
  return <footer className="bg-light text-center text-lg-start">
  {/* Copyright */}
  <div
    className="text-center p-2"
    style={{ backgroundColor: "#F5D5A4",display:"flex",justifyContent:"space-between",padding:"40px" }}
  >
    <p>Wascorp digital</p>
    Copyright 2021 
    <img className="d-none d-lg-block d-xl-none" style={{height:"20px"}} src={require('../icons/logo1.png')}/>

  </div>
  {/* Copyright */}
</footer>

}
 
export default Demo;