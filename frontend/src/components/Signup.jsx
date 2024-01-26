import React,{useState} from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom";


export default function Signup(){
    const[firstName,setFirstName]=useState("");
    const[lastName,setLastName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const navigate=useNavigate();

    function handle(event){
      axios.post('http://localhost:3000/api/v1/user/signup',{
        username:email,
        password:password,
        firstName:firstName,
        lastName:lastName
      })
      .then(response=>{
        localStorage.setItem("token",response.data.token);
        console.log(response.data.token);
        alert("Account created")
        navigate('/signin')
      })
      .catch(error=>{
        console.log(error);
        alert("Please fill the details correctly")
      })

    }
    return(
      <div className="flex flex-col  bg-white rounded-lg w-80">
      <div className="flex flex-col p-5 items-center ">
        <div className=""></div>
        <div className="text-2xl font-bold pb-2 text-[#18181b]">
          <h1>Sign up</h1>
        </div>
        
        <div className="">Enter your information to create an</div>
        <div>account</div>
        </div>
      
        <div className="p-5" >
          
        <div className="pb-2 text-black font-medium">First Name</div>
        <input placeholder="John"className="rounded-md bg-transparent w-full h-full outline outline-0 focus:outline-0 border border-black p-1" 
        onChange={(e)=>{
          setFirstName(e.target.value);
        }}></input>
        <div className="pb-3 text-black font-medium">Last Name</div>
         <input placeholder="Doe"className="rounded-md bg-transparent w-full h-full outline outline-0 focus:outline-0 border border-black p-1"
         onChange={(e)=>{
          setLastName(e.target.value);
         }}></input>
        <div className="pb-3 text-black font-medium">Email</div>
         <input placeholder="Johndoe@example.com"className="rounded-md bg-transparent w-full h-full outline outline-0 focus:outline-0 border border-black p-1"
         onChange={(e)=>{
          setEmail(e.target.value);
         }}></input>
         <div className="pb-3 text-black font-medium">Passsword</div>
         <div className="pb-3 "><input className="rounded-md bg-transparent w-full h-full outline outline-0 focus:outline-0 border border-black p-1" 
         onChange={(e)=>{
          setPassword(e.target.value);
         }}  placeholder='******'></input></div>
          <div className="pb-3">
          <button className=" bg-[#18181b] text-white p-1 w-full rounded cursor-pointer " 
          onClick={()=>{handle()}}>Sign up</button>
          </div>
           <div className="flex flex-row gap-2 text-sm justify-center">
          <div>Already have an account?</div>
          <div className="underline cursor-pointer" onClick={()=>{
            navigate('/signin')
          }}>Login</div>
          
        
          </div>
          </div>
      
         
      
        
      </div>
    )
}