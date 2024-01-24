export function Signup(){
    return(
        <div class="flex flex-col  bg-black text-white rounded-lg w-80">
<div class="flex flex-col p-5 items-center ">
  <div class="text-2xl font-bold pb-2 ">
    <h1>Sign up</h1>
  </div>
  
  <div>Enter your information to create an</div>
  <div>account</div>
  </div>

  <div class="p-5" >
    
  <div class="pb-2">First Name</div>
  <input class="rounded-sm "></input>
  <div class="pb-3 ">Last Name</div>
   <input ></input>
  <div class="pb-3">Email</div>
   <input class=""></input>
   <div class="pb-3">Passsword</div>
   <div class="pb-3"><input ></input></div>
    <div class="pb-3">
    <button class=" bg-gray-500 p-1 w-full rounded ">Sign up</button>
    </div>
     <div class="flex flex-row gap-2 text-sm justify-center">
    <div>Already have an account?</div>
    <div class="underline">Login</div>
    </div>
    </div>

   

  
</div>
    )
}