import axios from 'axios';
import './App.css';
import axiosInstance from './help/Axiosinstance'
import React,{createRef, useEffect, useState} from 'react';
import Nav from './components/Nav';
import Corosal from './components/Corosal';

function App() {
  let [Name,setData]=useState([])
  let [FatherName,setData2]=useState([])
  let [Email,setData3]=useState([])
  let [Phone,setData4]=useState([])
  let [acNo,setData5]=useState([])
  let max=createRef()
 
  let nam=createRef()
  let accid=createRef()

  

  let handlechange=(e)=>{

    setData(e.target.value)

  }
  let handlechange2=(e)=>{

    setData2(e.target.value)

  }
  let handlechange3=(e)=>{

    setData3(e.target.value)

  }
  let handlechange4=(e)=>{

    setData4(e.target.value)

  }
  let handlechange5=(e)=>{

    setData5(e.target.value)

  }
  let handleClick=(x)=>{
    x.preventDefault()
    let payload={
      Name
    }
    
    let payload2={
      FatherName
    }
    let payload3={
      Email
    }
    let payload4={
      Phone
    }
    let payload5={
      acNo
    }
    
    axiosInstance.post("/user",payload)
    axiosInstance.post("/user",payload2)
    axiosInstance.post("/user",payload3)
    axiosInstance.post("/user",payload4)
    axiosInstance.post("/user",payload5)



    alert("Send data Sucessfully")
    // alert(`your Account Balance is ${Math.random().toPrecision(2)*10000} Rs`)
    nam.current.innerText=`your Name is ${Name}`
    accid.current.innerText=`Your Account Number Is ${acNo}`
    max.current.innerText=`your Account Balance is ${Math.random().toPrecision(2)*10000} Rs`
    

    
  }
  
  return (
    
    <div>
     
     <Nav></Nav>
     <Corosal></Corosal>
     <section id='mainbox'>
     <section className='dbbox'>
     <form action="">
      <center>
      <h4> My Bank Account</h4>
      </center>
        <label htmlFor="name">Enter Your Name </label>
        <input ref={nam} className='dist' id='name' type="text" onChange={ handlechange} required /> <br /><br />

        <label htmlFor="fname" >Enter Your FatherName </label>
        <input   className='dist' id='fname' type="text" onChange={ handlechange2} /> <br /><br />
     
        <label htmlFor="email" >Enter Your Email id </label>
        <input required  className='dist' id='email' type="email" onChange={ handlechange3} /> <br /><br />

        <label htmlFor="pho" >Enter Your Phone Number </label>
        <input   className='dist was-validated ' id='pho' type="text" onChange={ handlechange4} /> <br /><br />

        <label htmlFor="acno" >Enter Your Account Number </label>
        <input  className='dist' id='acno' type="text" onChange={ handlechange5} /> <br /><br />
        <center>
        <button id='send' onClick={handleClick}>Send</button>
        </center>
      </form>
      </section>
      </section>
     <center>
     <h1>Account Info</h1>
      <h3 ref={nam}></h3>
      <h3 ref={accid}></h3>
      <h3 ref={max}></h3>
      </center>


  
    </div>
   
  );
}

export default App;

