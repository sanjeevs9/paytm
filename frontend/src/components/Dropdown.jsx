import { useNavigate } from "react-router-dom"

export default function Dropdown(){
    const navigate=useNavigate();
    return(
        <>
        <div className="flex flex-col bg-[#c3cfdb] rounded-md p-2 border border-black">
            <ul className="flex flex-col gap-3   ">
                {/* <li className="cursor-pointer  hover:hover:text-blue-400" >Profile</li> */}
                <li className="cursor-pointer  hover:hover:text-blue-400" onClick={()=>{
                     localStorage.removeItem("token");
                    navigate('/signin')
                }}>Switch Account</li>
                <li className="cursor-pointer  hover:hover:text-blue-400" onClick={()=>{
                     localStorage.removeItem("token");
                   navigate('/')
                }}>Logout</li>
            </ul>
        </div>
        </>
    )
}