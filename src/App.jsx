import { AppContextProvider } from "./context/AppContext";
import Home from "./pages/Home";
import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  const hello = () => {
    alert("Hello Dear dM-Developer");
  };

  return (
    <GoogleOAuthProvider clientId="688415094108-jqc5m4fff92a4tl7ckiq3jl9d5thkm0b.apps.googleusercontent.com">
      <AppContextProvider value={{ hello }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AppContextProvider>
      <Toaster />
    </GoogleOAuthProvider>
  );
}

export default App;
