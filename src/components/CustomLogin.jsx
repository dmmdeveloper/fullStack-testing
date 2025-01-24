import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

export default function CustomLogin() {
    const login =  useGoogleLogin({
        onSuccess: async tokenResponse => {
            console.log(tokenResponse.access_token);

try {
    const data = await axios.get(`https://www.googleapis.com/oauth2/v3/userinfo`,{
        headers:{
            Authorization : `Bearer ${tokenResponse.access_token}`
        }
    })
    console.log("Data " , data);
} catch (error) {
    console.log("Not find :" , error);   
}
        },
      });
  return (
<>
<button onClick={()=>login()} >Google Login</button>
</>  )
}
