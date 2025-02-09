import { AppContextProvider } from "./context/AppContext";
import Home from "./pages/Home";
import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useEffect, useState } from "react";
import axios from "axios";
import Profile from "./pages/Profile";
import SendMessage from "./pages/SendMessage";
import Camera from "./pages/Camera";

function App() {
const [profile , setProfile] = useState("")

  const hello = () => {
    alert("Hello Dear dM-Developer");
  };

  const fetchProfile =  async()=>{
    try {
      const {data} =await axios.get(
        // `http://localhost:4000/user/profile`,
        `https://fulltesting.vercel.app/user/profile`,

         { withCredentials :true})
      setProfile(data.data)

    } catch (error) {
      console.log("Profile Not Fetched :)" , error);
      
    }
  }
  useEffect(()=>{
    fetchProfile()
    console.log(profile);
    
  } , [])



  return (
    <GoogleOAuthProvider clientId="688415094108-jqc5m4fff92a4tl7ckiq3jl9d5thkm0b.apps.googleusercontent.com">
      <AppContextProvider value={{ hello , profile, fetchProfile }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element ={<Profile/>} />
          <Route path="/send-message"   element={<SendMessage/>} /> 
          <Route path="/camera"   element={<Camera/>} /> 
        </Routes>
      </AppContextProvider>
      <Toaster />
    </GoogleOAuthProvider>
  );
}

export default App;
