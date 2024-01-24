export function Signup(){
    return(
      <div className="flex flex-col  bg-white rounded-lg w-80">
      <div class="flex flex-col p-5 items-center ">
        <div className=""></div>
        <div className="text-2xl font-bold pb-2 text-[#18181b]">
          <h1>Sign up</h1>
        </div>
        
        <div className="">Enter your information to create an</div>
        <div>account</div>
        </div>
      
        <div className="p-5" >
          
        <div className="pb-2 text-black font-medium">First Name</div>
        <input placeholder="John"className="rounded-md bg-transparent w-full h-full outline outline-0 focus:outline-0 border border-black p-1"></input>
        <div className="pb-3 text-black font-medium">Last Name</div>
         <input placeholder="Doe"className="rounded-md bg-transparent w-full h-full outline outline-0 focus:outline-0 border border-black p-1"></input>
        <div className="pb-3 text-black font-medium">Email</div>
         <input placeholder="Johndoe@example.com"className="rounded-md bg-transparent w-full h-full outline outline-0 focus:outline-0 border border-black p-1"></input>
         <div className="pb-3 text-black font-medium">Passsword</div>
         <div className="pb-3 "><input className="rounded-md bg-transparent w-full h-full outline outline-0 focus:outline-0 border border-black p-1" ></input></div>
          <div className="pb-3">
          <button className=" bg-[#18181b] text-white p-1 w-full rounded cursor-pointer ">Sign up</button>
          </div>
           <div className="flex flex-row gap-2 text-sm justify-center">
          <div>Already have an account?</div>
          <div className="underline">Login</div>
          
        
          </div>
          </div>
      
         
      
        
      </div>
    )
}