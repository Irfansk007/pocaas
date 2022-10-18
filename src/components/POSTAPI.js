import React, { useState } from 'react'

function POSTAPI() {
    const [vm_name,setName]=useState("");
    const [vm_size,setEmail]=useState("");
    const [Sname,setMobile]=useState("");
    const [Slink,setSlink]=useState("");
   function saveData()
   {
     let data={
        "vm":{
        vm_name,
        vm_size
     },
    "software":[
        Sname,
        Slink
    ]
    }
   // console.warn(data);
     fetch("http://35.194.61.7/v1/poc/software", {
       method: "POST",
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
        
       },
       body:JSON.stringify(data)
     }).then((resp)=>{
       // console.warn("resp",resp);;
       resp.json().then((result)=>{
         console.warn("result",result)
       }
       
       )
     })
   }
  return (
    <div className='text-center d-block'>
       <input type="text" name="vm_name" value={vm_name} onChange={(e)=>{setName(e.target.value)}}  /> <br /> <br />
      <input type="text" name="vm_size"  value={vm_size} onChange={(e)=>{setEmail(e.target.value)}} /> <br /> <br />
      <input type="text" name="Sname"  value={Sname} onChange={(e)=>{setMobile(e.target.value)}}/> <br /> <br />
      <input type="text" name="Slink"  value={Slink} onChange={(e)=>{setSlink(e.target.value)}}/> <br /> <br />
      <button type="button" onClick={saveData}  className="btn btn-primary">Save New User</button>
    </div>
  )
}

export default POSTAPI;