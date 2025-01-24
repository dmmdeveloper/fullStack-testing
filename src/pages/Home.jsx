import React from 'react'
import { Link } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'

export default function Home() {

const { hello} = useAppContext();

  return (<>

  <div className="min-h-screen h-auto w-full bg-slate-700 flex justify-center items-center flex-col gap-3">
<Link to={"/register"} className='bg-white h-10 w-[200px] flex justify-center items-center text-2xl hover:bg-transparent hover:text-white duration-500 hover:border' >Register</Link>
<Link className='bg-white h-10 w-[200px] flex justify-center items-center text-2xl hover:bg-transparent hover:text-white duration-500 hover:border' >Login</Link>
<Link className='bg-white h-10 w-[200px] flex justify-center items-center text-2xl hover:bg-transparent hover:text-white duration-500 hover:border' >Logout</Link>
<Link to={"/profile"} className='bg-white h-10 w-[200px] flex justify-center items-center text-2xl hover:bg-transparent hover:text-white duration-500 hover:border' >Profile</Link>

{/* <Link className='bg-white h-10 w-[200px] flex justify-center items-center text-2xl hover:bg-transparent hover:text-white duration-500 hover:border' >Register</Link> */}

  </div>



</>  )
}
