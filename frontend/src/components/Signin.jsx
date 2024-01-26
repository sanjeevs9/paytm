import axios from 'axios'
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

export  default function Signin(){
  const token=localStorage.getItem("token");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const navigate=useNavigate();

    function handle(){
      axios.post('http://localhost:3000/api/v1/user/signin',{
        username:email,
        password:password
      },{
        headers:{
          Authorization: `Bearer ${token}`
        }
      })
      .then(response=>{
        alert("signed In")
        console.log("done");
        console.log(response.data);
        navigate('/dashboard');
      })
      .catch(error=>{
        alert("incorrect username or password")
        console.log(error);
      })
    }

    return(
        <div className="flex flex-col  bg-white rounded-lg w-80">
        <div class="flex flex-col p-5 items-center ">
          <div className=""></div>
          <div className="text-2xl font-bold pb-2 text-[#18181b]">
            <h1>Sign in</h1>
          </div>
          
          <div className="">Enter your credentials to access your</div>
          <div>account</div>
          </div>
        
          <div className="p-5" >
            
          <div className="pb-2 text-black font-medium">Email</div>
          <input placeholder="johndoe@example.com" className="rounded-md bg-transparent w-full h-full outline outline-0 focus:outline-0 border border-black p-1"
          onChange={(e)=>{
            setEmail(e.target.value);
          }}></input>
          <div className="pb-3 text-black font-medium">password</div>
           <div className="pb-3"><input className="rounded-md bg-transparent w-full h-full outline outline-0 focus:outline-0 border border-black p-1"
           onChange={(e)=>{
            setPassword(e.target.value);
           }} placeholder='******'></input></div>
           <div className="pb-3">
          <button  className=" bg-[#18181b] text-white p-1 w-full rounded cursor-pointer"
          onClick={()=>{handle()}}>Sign In</button>
          </div>
           <div className="flex flex-row gap-2 text-sm justify-center">
          <div>Dont have an account?</div>
          <div className="underline cursor-pointer" onClick={()=>{
            navigate('/')
          }}>Sign Up</div>
          </div>

          </div>
          </div>
    )
}