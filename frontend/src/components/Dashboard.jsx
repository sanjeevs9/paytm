export function Dashboard() {
  return (
    <div className="bg-white  text-black  flex flex-col p-3">
        <div className="flex justify-between w-full">
            <div className="font-bold text-2xl   ">
                Payments App
            </div>
            <div>
                <div className=" flex flex-cols gap-2">
                    <div className="font-semibold pt-1.5">
                        Hello, User
                    </div>
                    
                    <div className="rounded-full bg-gray-400  w-10 h-10 pt-2 pl-3.5 text-black">U</div>
                    
                </div>
            </div>
        </div>
        
        <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div className="font-bold pb-4" >Your Balance  $5000</div>
        
        <div className="pb-3">
        <input placeholder="Search Users..." className="rounded-md bg-transparent w-full h-full outline outline-0 focus:outline-0 border border-black p-1 pb-2"></input>
        </div>

        <div className="font-bold pb-3">Users</div>

        <div>
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
                    <button className="bg-[#21c55d] p-2 rounded text-white">Send Money</button>
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
                    <button className="bg-[#21c55d] p-2 rounded text-white">Send Money</button>
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
                    <button className="bg-[#21c55d] p-2 rounded text-white">Send Money</button>
                </div>
            </div>
          
            
        </div>
       
        
        
    </div>
  )
}