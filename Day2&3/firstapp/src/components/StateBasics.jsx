import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
     var [fname,setFname]=useState("Nishana")
     var[val,setval]=useState()

     const submithandler=()=>{
        setFname(val)
     }
        const handleInput=(e)=>{

            console.log(e.target.value)
            setval(e.target.value)
        }
     
  return (
    <div>
        <br /><br />
       
       <Button variant='contained' onClick={submithandler}>Submit</Button><br /><br />
       <TextField variant='outlined' label="Type Your Name" onChange={handleInput}/>

       
    </div>
  )
}

export default StateBasics