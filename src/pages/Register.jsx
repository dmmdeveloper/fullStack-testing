import React, { useState } from 'react'
import axios from "axios"
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function Register() {

    const [formData , setFormData] = useState({
        name :"",
        password :"",
        email :"",
    });

    const navigate = useNavigate("")

    const [loading , setLoading]  =useState(false)

const handleTextInput  =  (e)=>{
    const {name , value} = e.target;

    setFormData((prev)=>{ 
        return { ...prev , [name] :value }
     })
}

const submit = async(e)=>{

 e.preventDefault();

   const fieldData = new FormData()
   fieldData.append("name", formData.name)
   fieldData.append("email" ,formData.email)
   fieldData.append("password", formData.password);
    try {
      setLoading(true)
        const {data} = await axios.post(`https://fulltesting.vercel.app/user/register` , fieldData , {
            withCredentials : true ,
            headers :{
                "Content-Type":"multipart/form-data"
            }
        });
        if(data){
          navigate("/")
          toast.success(data.message)
        }
        console.log(data);
    } catch (error) {
        console.log("User Not Registred:)" , error.response.data.message);
        
        
        toast.error(error.response.data.message)
    }finally{ setLoading(false)}
}

  return (<>

  <div className="flex justify-center items-center h-screen">

  <form onSubmit={submit} className="max-w-sm space-y-3">

  <div className="relative">

    <input
      type="text"
      required
      className="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
      placeholder="Enter name"
      value={formData.name}
      name='name'
      onChange={handleTextInput}
    />
    <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
      <svg
        className="shrink-0 size-4 text-gray-500 dark:text-neutral-500"
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx={12} cy={7} r={4} />
      </svg>
    </div>
  </div>


  <div className="relative">

    <input
    required
      type="password"
      className="peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
    value={formData.password}
    name='password'
    onChange={handleTextInput}
    
      placeholder="Enter password"
    />
    <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
      <svg
        className="shrink-0 size-4 text-gray-500 dark:text-neutral-500"
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z" />
        <circle cx="16.5" cy="7.5" r=".5" />
      </svg>
    </div>
  </div>

  <div class="relative">


    <input type="email" name='email' onChange={handleTextInput} value={formData.email} id="hs-floating-input-email-value" class="peer p-4 bg-gray-100 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:focus:ring-neutral-600
    focus:pt-6
    focus:pb-2
    [&:not(:placeholder-shown)]:pt-6
    [&:not(:placeholder-shown)]:pb-2
    autofill:pt-6
    autofill:pb-2" placeholder="you@email.com" />
    <label for="hs-floating-input-email-value" class="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0] peer-disabled:opacity-50 peer-disabled:pointer-events-none
      peer-focus:scale-90
      peer-focus:translate-x-0.5
      peer-focus:-translate-y-1.5
      peer-focus:text-gray-500 dark:peer-focus:text-neutral-500
      peer-[:not(:placeholder-shown)]:scale-90
      peer-[:not(:placeholder-shown)]:translate-x-0.5
      peer-[:not(:placeholder-shown)]:-translate-y-1.5
      peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500 dark:text-neutral-500">Email</label>
  </div>

<center>
  <button  type="submit" class="py-3 mx-auto px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-gray-500 text-white hover:bg-gray-600 focus:outline-none focus:bg-gray-600 disabled:opacity-50 disabled:pointer-events-none">
    {
      loading? "Submiting....":"Submit"
    }
</button>
</center>

</form>

    
  </div>


</>  )
}
