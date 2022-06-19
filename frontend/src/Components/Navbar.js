import React from 'react';
import ReactDOM from 'react-dom';
const Demo=()=>
{
  return <footer className="bg-light text-center text-lg-start">
  {/* Copyright */}
  <div
    className="text-center p-3"
    style={{ backgroundColor: "#f3ece2",display:"flex",justifyContent:"space-between",padding:"40px" }}
  >    <img style={{height:"50px"}} src={require('../icons/logo2.png')}/>

    <p s >Wascorp We're the <strong style={{textDecoration:"underline "}}>Gamebred</strong> </p>
<button className="btn" style={{backgroundColor:"#F5D5A4"}}>Contact us</button>
  </div>
  {/* Copyright */}
</footer>

}
 
export default Demo;