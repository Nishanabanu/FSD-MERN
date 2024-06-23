import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar position='static' >
            <Toolbar>
                <Typography variant='h6'>
                    MY APP
                </Typography>
                &nbsp;&nbsp;&nbsp;
                <Button variant='contained' color='inherit'><Link to='/'>ADD</Link></Button>&nbsp;&nbsp;&nbsp;
                <Button variant='contained' color='inherit'><Link to='/vw'>VIEW</Link></Button>&nbsp;&nbsp;&nbsp;
            </Toolbar>
            
            
            </AppBar>   
            </div>
  )
}

export default Navbar