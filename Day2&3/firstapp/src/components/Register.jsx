import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Register = () => {
  return (
    <div>
        <br />
        <Typography variant='h5'>
            LOGIN
        </Typography><br />
        <TextField label="Username" variant="outlined" /><br /><br />

        <TextField label="Password" variant="outlined" /><br /><br />

        <Button variant="contained">LOGIN</Button>
    </div>
  )
}

export default Register