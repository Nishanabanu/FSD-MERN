import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar position='static'>
            <Toolbar>
                <Typography variant='h5' color='black'><b>BLOG</b></Typography>&nbsp;&nbsp;&nbsp;&nbsp;
                <Button variant='contained' color='inherit'>
                    <Link to='/'>
                        <b>Home</b>
                    </Link>
                </Button>&nbsp;&nbsp;&nbsp;&nbsp;
                <Button variant='contained' color='inherit'>
                    <Link to='/add'>
                        <b>ADD</b>
                    </Link>
                </Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar