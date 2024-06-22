import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Listmap = () => {
    var[inp,setinp]=useState(["ICTAK"])
    var[data,setdata]=useState("")

    const inputhandle=(e)=>{
        setdata(e.target.value)
    }
    const add=()=>{
    setinp([...inp,data])
    console.log(inp)
    setdata("")
    }
  return (
    <div><br /><br />
       <TextField variant='outlined' label="Type  Name" onChange={inputhandle} value={data}/><br /><br />
       <Button variant='contained' onClick={add}>List</Button><br /><br />
       <ul>
        {inp.map((v,i)=>{
            return <li>{v}</li>
        })}
        
       </ul>

    </div>
  )
}

export default Listmap