import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const SampleUse = () => {
    var [x,setx]=useState()

    const reacthandler=()=>{
        setx("REACT")
    }
    const angularhandler=()=>{
        setx("ANGULAR")
       
    }

    const viewhandler=()=>{
        setx("VIEW")
    }
    useEffect(()=>{
        reacthandler();
    },[])
    

  return (
    <div>
        <br /><br />
    <Typography variant='h5'>WELCOME TO {x}</Typography><br />  <br />
    <Button variant='contained' color='error' onClick={reacthandler}>React</Button>&nbsp;&nbsp;
    <Button variant='contained' color='error' onClick={angularhandler}>Angular</Button>&nbsp;&nbsp;
    <Button variant='contained' color='error'  onClick={viewhandler}>View</Button>

    </div>
  )
}

export default SampleUse