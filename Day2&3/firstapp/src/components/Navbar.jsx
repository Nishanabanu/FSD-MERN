import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar position='static'>
            <Toolbar>
                <Typography variant='h6'>
                    My App
                </Typography>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button variant='contained' color='inherit'><Link to='/'>Login</Link> 
                </Button>&nbsp;&nbsp;
                <Button variant='contained' color='inherit'><Link to='/sin'>Sign Up</Link></Button>&nbsp;&nbsp;
                <Button variant='contained' color='inherit'><Link to='/sb'>State</Link></Button>&nbsp;&nbsp;
                <Button variant='contained' color='inherit'><Link to='/ct'>Count</Link> 
                </Button>&nbsp;&nbsp;
                <Button variant='contained' color='inherit'><Link to='/lm'>List</Link></Button>&nbsp;&nbsp;
                <Button variant='contained' color='inherit'><Link to='/ap'>Api</Link></Button>&nbsp;&nbsp;
                <Button variant='contained' color='inherit'><Link to='/su'>SampleUse</Link> 
                </Button>&nbsp;&nbsp;
                <Button variant='contained' color='inherit'><Link to='/gc'>Cards</Link> 
                </Button>&nbsp;&nbsp;
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar