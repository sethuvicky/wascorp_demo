import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";

const Demo=()=>
{

 
  const [duedate,setdue] =useState("")
  const [sendtoname,settoname] =useState("")
  const [sendingaddress,setsending] =useState("")
  const [username,setusername] =useState("")
  const [useraddress,setuseraddress] =useState("")
  const submithandler = (e)=>{
    e.preventDefault()
    const payload = {
      due: duedate,
      sendname:sendtoname,
      sendaddress: sendingaddress,
      username: username,
      useraddress:useraddress
    }
    console.log(payload)
    
    axios({
      method: 'post',
      url: '/user',
      data: payload, 
      headers: {
      'Content-Type': 'application/json'
      }, 
    }).catch((err)=>{
console.log(err)
    })   }
  return <div style={{backgroundColor:"#f3ece2",display:"flex",padding:"30px"}}><form >
  <p style={{marginTop:"30px"}}>Invoice generator</p>
  <h4><strong>Enter Invoice details </strong></h4>
  <div style={{paddingLeft:"50px"}}  >
  <div style={{marginTop:"50px"}} className="form-group"   >
    <label htmlFor="exampleInputEmail1">This invoice is due on</label>&nbsp;  
    <input
 onChange={(e) => setdue(e.target.value) }

      type="text"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      style={{border:"0",borderBottom:"2px solid black",outline:"0",backgroundColor:"transparent"}}
    />
    <label htmlFor="exampleInputEmail1">and is being sent to</label>&nbsp;  
    <input
     onChange={(e) => settoname(e.target.value)}

      type="text"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      style={{border:"0",borderBottom:"2px solid black",outline:"0",backgroundColor:"transparent"}}
    />
        <label htmlFor="exampleInputEmail1">Who's</label>&nbsp;  
  
  </div>
  <div className="form-group">
  <label htmlFor="exampleInputEmail1">address is </label>&nbsp;  
  <input
 onChange={(e) => setsending(e.target.value) }

      type="text"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      style={{border:"0",borderBottom:"2px solid black",outline:"0",backgroundColor:"transparent"}}
    />
  
  </div>
  <div className="form-group" style={{marginTop:"30px"}}>
  <label htmlFor="exampleInputEmail1">Sender of invoice is</label>&nbsp;  
    <input
        onChange={(e) => setusername(e.target.value)}

      type="email"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      style={{border:"0",borderBottom:"2px solid black",outline:"0",backgroundColor:"transparent"}}
    />
    <label htmlFor="exampleInputEmail1">Who's address is</label>&nbsp;  
    <input
    onChange={(e) => setuseraddress(e.target.value)}

      type="email"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      style={{border:"0",borderBottom:"2px solid black",outline:"0",backgroundColor:"transparent"}}
    />
  </div>
    </div>
  
  <div style={{marginTop:"50px"}} className="form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label text-muted" htmlFor="exampleCheck1">
I here accept by all the terms and conditions    </label>
  </div>
  <button disabled={
  sendingaddress.length < 1 ||
  sendtoname.length < 1 ||
  useraddress.length < 1 ||
  username.length < 1
} onClick={submithandler} style={{marginTop:"30px",marginBottom:"50px"}} type="submit" className="btn btn-dark">
    Generate invoice
  </button>
</form>
</div> 
}
 
export default Demo;