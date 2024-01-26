import {useNavigate} from "react-router-dom";
import axios from "axios";
import { useEffect,useState } from "react";
import { SendAtom } from "./atoms/send";
import { useRecoilState } from "recoil";

export default function Dashboard() {
    const[Balance,setBalance]=useState(0);
    const[user,setUser]=useState({});
    const[users,setUsers]=useState([]);
    const[search,setSearch]=useState([]);
    const[sender,setSender]=useRecoilState(SendAtom);

    const token =localStorage.getItem("token");
    const navigate=useNavigate();

//filtering users    
    useEffect(()=>{
    axios.get('http://localhost:3000/api/v1/user/bulk',{
       params:{
            filter:search
        }
       })
       .then(async function(response){    
              setUsers(response.data.user);
                console.log("filtered data", response.data.user);
            })
        },[search])


  //getting all users      
    useEffect(()=>{
        axios.get('http://localhost:3000/api/v1/user/users')
            .then(async function(response){
                setUsers(response.data.user);
                console.log(response.data.user);
            })
            .catch(error=>{
                console.log(error);
                console.log("error");
            
            })

    },[search])


    //getting balance
    useEffect(()=>{axios.get('http://localhost:3000/api/v1/account/balance',{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    .then(async function(response){
      console.log(response.data.balance)
      setBalance(response.data.balance);
    })
    .catch(error=>{
      console.log(error);
      console.log("error");
    })},[Balance]);


   //getting user details 
    useEffect(()=>{
        axios.get('http://localhost:3000/api/v1/user/me',{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        .then( function(response){
            console.log(response.data)
            setUser(response.data.user);
           
        })
        .catch(error=>{
            console.log(error);
        })
    
    },[])
   
    
    const handleClick=(x)=>{
        navigate("/pay");
        setSender(x)
        console.log(x);
    }

  return (
    <div className="bg-white  text-black  flex flex-col p-3">
        <div className="flex justify-between w-full">
            <div className="font-bold text-2xl   ">
                Payments App
            </div>
            <div>
                <div className=" flex flex-cols gap-2">
                    <div className="font-semibold pt-1.5">
                       Hello,  {user.firstName}
                    </div>
                    
                    <div className="rounded-full bg-gray-400  w-10 h-10 pt-2 pl-3.5 text-black">{user.firstName && user.firstName[0].toUpperCase()}</div>
                    
                </div>
            </div>
        </div>
        
        <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div className="font-bold pb-4" >Your Balance     ${Balance.toFixed(2)}</div>
        
        <div className="pb-3">
        <input placeholder="Search Users..." className="rounded-md bg-transparent w-full h-full outline outline-0 focus:outline-0 border border-black p-1 pb-2" onChange={(e)=>{
            setSearch(e.target.value);
        }}></input>
        </div>

        <div className="font-bold pb-3">Users</div>

        <div>

            {/* users */}
        {users && users.filter(y => y._id !==user._id).map((x)=>{
            return(
                <div className="flex flex-row justify-between pb-2">
                <div className="flex flex-row pt-2 gap-1">
                    <div className="rounded-full h-10 w-10 bg-gray-500 pl-2.5 pt-1.5 text-lg">
                        {x.firstName[0].toUpperCase()}
                    </div>
                    <div className="pl-3 font-semibold pt-1.5 text-lg">
                      {x.firstName}  {x.lastName}
                    </div>
                </div>
                <div className="pt-3">
                    <button className="bg-[#21c55d] p-2 rounded text-white" onClick={()=>{
                        handleClick(x._id)
                    }}>Send Money</button>
                </div>
            </div>
            )
        
        })}
            {/* <div className="flex flex-row justify-between pb-2 ">
                <div className="flex flex-row pt-2">
                    <div className="rounded-full h-10 w-10 bg-gray-500 pl-2.5 pt-1.5 text-lg">
                        U1
                    </div>
                    <div className="pl-3 font-semibold pt-1.5 text-lg">
                        user 1
                    </div>
                </div>
                <div className="pt-3">
                    <button className="bg-[#21c55d] p-2 rounded text-white" onClick={handleClick} >Send Money</button>
                </div>
            </div>
            <div className="flex flex-row justify-between pb-2">
                <div className="flex flex-row pt-2">
                    <div className="rounded-full h-10 w-10 bg-gray-500 pl-2.5 pt-1.5 text-lg">
                        U1
                    </div>
                    <div className="pl-3 font-semibold pt-1.5 text-lg">
                        user 1
                    </div>
                </div>
                <div className="pt-3">
                    <button className="bg-[#21c55d] p-2 rounded text-white" onClick={handleClick}>Send Money</button>
                </div>
            </div>
            <div className="flex flex-row justify-between pb-2 ">
                <div className="flex flex-row pt-2">
                    <div className="rounded-full h-10 w-10 bg-gray-500 pl-2.5 pt-1.5 text-lg">
                        U1
                    </div>
                    <div className="pl-3 font-semibold pt-1.5 text-lg">
                        user 1
                    </div>
                </div>
                <div className="pt-3">
                    <button className="bg-[#21c55d] p-2 rounded text-white" onClick={handleClick}>Send Money</button>
                </div>
            </div> */}
          
            
        </div>
       
        
        
    </div>
  )
}