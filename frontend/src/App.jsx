import  Dashboard  from "./components/Dashboard"
import  Send  from "./components/Send"
import  Signin  from "./components/Signin"
import  Signup  from "./components/Signup"
import { BrowserRouter,Route,Routes } from "react-router-dom"


function App() {

  return (
    // className="bg-black flex items-center justify-center min-h-screen"
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                  <div className="bg-black flex items-center justify-center min-h-screen">
                    <Signup/>
                  </div>
                }/>
                <Route path="/signin" element={
                  <div className="bg-black flex items-center justify-center min-h-screen">
                    <Signin/>
                  </div>
                }/>
                 <Route path="/pay" element={
                  <div className="bg-black flex items-center justify-center min-h-screen">
                    <Send/>
                  </div>
                 }/>
                <Route path="/dashboard" element={<Dashboard/>}/>
               
            </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App
