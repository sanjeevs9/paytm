import {useNavigate} from "react-router-dom";
import axios from "axios";
import { useEffect,useState } from "react";
import  Dropdown  from "./Dropdown";
import image from "./images/UPI_Integration_ea734f3523.png";

function useDebounce(search){
const[debouncedsearch,setDeboncedsearch]=useState(search);

useEffect(()=>{
   const timer= setTimeout(()=>{
        setDeboncedsearch(search);
    },500)

    return ()=>{clearTimeout(timer)}
},[search])
return debouncedsearch;
}

export default function Dashboard() {
    const[Balance,setBalance]=useState(0);
    const[user,setUser]=useState({});
    const[users,setUsers]=useState([]);
    const[search,setSearch]=useState([]);
    const[drop,setDrop]=useState(false);
  const debouncedsearch=useDebounce(search);

    const token =localStorage.getItem("token");
    const navigate=useNavigate();

//filtering users    
    useEffect(()=>{
    axios.get('https://paytm-backend-dusky.vercel.app/api/v1/user/bulk',{
       params:{
            filter:debouncedsearch
        }
       })
       .then(async function(response){    
              setUsers(response.data.user);
               
            })
        },[debouncedsearch])


  //getting all users      
    useEffect(()=>{
        axios.get('https://paytm-backend-dusky.vercel.app/api/v1/user/users',{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
            .then(async function(response){
                if (response.status === 403) {
                    console.log('Forbidden');
                } else {
                    setUsers(response.data.user);
                }
               
            })
            .catch(error=>{
                console.log(error);
                console.log("error");
            
            })

    },[debouncedsearch])


    //getting balance
    useEffect(()=>{axios.get('https://paytm-backend-dusky.vercel.app/api/v1/account/balance',{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    .then(async function(response){
     
      setBalance(response.data.balance);
    })
    .catch(error=>{
      console.log(error);
      console.log("error");
    })},[Balance]);


   //getting user details 
    useEffect(()=>{
        axios.get('https://paytm-backend-dusky.vercel.app/api/v1/user/me',{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        .then( function(response){
           
            setUser(response.data.user);
           
        })
        .catch(error=>{
            console.log(error);
        })
    
    },[])
   
    
    const handleClick=(x)=>{
        sessionStorage.setItem("id",x._id);
        sessionStorage.setItem("name",x.firstName);
        navigate("/pay");
       // setSender(x)
       
    }

  return (
    
    <div className="bg-white  text-black  flex flex-col p-3 "   style={{ 
        backgroundImage: `url(${image})`,
       
    
      }}
    >
        <div 
    className="absolute inset-0" 
    style={{ 
      backgroundImage: `url(${image})`,
      filter: 'blur(20px)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      zIndex: -1
    }}
  />
        <div className="flex justify-between w-full">
            <div className="font-bold text-2xl font-mono  ">
                Payment App
            </div>
            <div>
                <div className=" flex flex-cols gap-2 bg=white">
                    <div className="font-semibold pt-1.5">
                       Hello,  {user && user.firstName && user.firstName.toUpperCase()}
                    </div>
                    
                    <div className="rounded-full bg-[#c3cfdb]  w-10 h-10 pt-2 pl-3.5 text-black cursor-pointer" onClick={()=>{
                        setDrop(!drop);
                    }}>{user.firstName && user.firstName[0].toUpperCase()}</div>
                    {drop && (
            <div className="absolute mt-10">
            <Dropdown />
                 </div>
                    )}
                    
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
                    <div className="rounded-full h-10 w-10 bg-[#c3cfdb] pl-3.5 pt-1.5 text-lg">
                        {x.firstName[0].toUpperCase()}
                    </div>
                    <div className="pl-3 font-semibold pt-1.5 text-lg">
                      {x.firstName}  {x.lastName}
                    </div>
                </div>
                <div className="pt-3">
                    <button className="bg-[#21c55d] p-2 rounded text-white" onClick={()=>{
                        handleClick(x)
                    }}>Send Money</button>
                </div>
            </div>
            )
        
        })}
          
            
        </div>
       
        
        
    </div>
    
   
  )
}