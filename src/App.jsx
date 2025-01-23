import { AppContextProvider } from "./context/AppContext"
import Home from "./pages/Home"
import { Routes , Route } from "react-router-dom"
import Register from "./pages/Register"
import { Toaster } from "react-hot-toast"


function App() {


const hello = ()=>{
  alert("Hello Dear dM-Developer")
}


  return(<>

  <AppContextProvider  value={{hello}} >


  <Routes>
    <Route path="/" element={<Home/>} /> 
    <Route path="/register" element={<Register/>} />




  </Routes>
  </AppContextProvider>
  <Toaster/>
  </>)
  
}

export default App
