import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var[count,setCount]=useState(0)
    const add=()=>{
        setCount(count+1)
    }

    const sub=()=>{
        setCount(count-1)
    }

const handleInput=(e)=>{

            console.log(e.target.value)
            setCount(e.target.value)
        }
  return (
    <div>
 <br /><br />
      
       <Button variant='contained' color='error' onClick={add}>+</Button><br /><br />
       <Typography variant='h5'>Count:{count} </Typography><br />
       <Button variant='contained'color='error' onClick={sub}>-</Button><br /><br />
       
    </div>
  )
}

export default Counter