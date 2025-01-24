import React from 'react'
import { useAppContext } from '../context/AppContext'

export default function Profile() {
const {profile} =useAppContext()


  return (
<>
<div className="h-screen w-full bg-slate-600 text-white text-5xl flex justify-center items-center flex-col">
    <h1>{profile.name}</h1>
    <h1>{profile.email}</h1>



</div>

</>  )
}
