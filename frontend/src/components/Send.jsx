
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useSearchParams } from 'react-router-dom'

export default function Send(){  
    const[searchParams]=useSearchParams();           
    const id=searchParams.get("id");
    const name=searchParams.get("name");
  
    const[value,setValue]=useState(0);

    const token=localStorage.getItem("token")

   


     function handle(){
        console.log("fkfklef",id)
        axios.post('http://localhost:3000/api/v1/account/transfer',{
            
        to:id,
        amount:value
   
       },{
        headers:{
            Authorization: `Bearer ${token}`
          }
       })
       .then(async function(response){
           alert("transaction done")
       })
       .catch(error=>{
        console.log(error)
       })
    }
       
    

    return(
        <div className="flex flex-col  bg-white w-80  p-7 rounded-md">
            <div className="flex  justify-center pb-4 pt-2">
            <div className="text-black pb-10 text-3xl font-bold ">Send Money</div>
            </div>
            <div className="flex flex-row gap-3">
                <div className="rounded-full bg-[#21c55d]  w-10 h-10 pt-2 pl-3.5">{name[0].toUpperCase()}</div>
            <div className="font-semibold text-lg pt-1">{name}</div>
            </div>
            <div className="font-medium text-sm justify-start pb-1">Amount (in Rs)</div>
            <div className="pb-3">
            <input placeholder="Enter amount" className="rounded-md bg-transparent w-full h-full outline outline-0 focus:outline-0 border border-black p-1"
             onChange={
                (e)=>{
                    setValue(Number(e.target.value));
                }
            }></input>
            </div>
            <div className="pb-3">
          <button  className=" bg-[#21c55d] text-white p-1 w-full rounded cursor-pointer" 
          onClick={()=>{
            handle()
          }}>Initiate Transfer</button>
          </div>
            
        </div>
    )
        }