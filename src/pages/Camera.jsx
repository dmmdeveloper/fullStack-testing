import React from 'react'

export default function Camera() {
  return (<>
<div className="h-screen w-full bg-slate-600 text-white text-2xl md:text-2xl flex justify-center items-center flex-col">
capture="environment"  <input type="file" capture="environment"  />
    <br />
   capture="user" <input type="file" capture="user"  />
   
</div>

</>  )
}
