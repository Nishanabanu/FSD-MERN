import { TableCell,Table, TableContainer, TableHead, TableRow, TableBody, Button } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Data from './Data'

const ViewEm = () => {
    var[users,setUsers]=useState([])
    var[update,setUpdate]=useState(false)
    var[singleValue,setsingleValue]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:3005/view")
        .then((res)=>{
            console.log(res.data)
            setUsers(res.data)

        })
        .catch(err=>console.log(err))
    },[])

    const deleteValue=(id)=>{
        console.log(id)
        axios.delete("http://localhost:3005/remove/"+id)
        .then((response)=>{
            alert(response.data)
            window.location.reload(false)
        })
        .catch((err)=>console.log(err))
    }
    const updateValues=(val)=>{
        console.log("Update")
            setUpdate(true)
            setsingleValue(val)
    }
  
  
        var finalJSX=<TableContainer>
            <Table>
            <TableHead>
            <TableRow>
                <TableCell>EMPLOYEE_NAME</TableCell>
                <TableCell>EMPLOYEE_AGE</TableCell>
                <TableCell>EMPLOYEE_POSITION</TableCell>
                <TableCell>EMPLOYEE_SALARY</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {users.map((val,i)=>{
                return(
                <TableRow>
                
                    <TableCell>{val.ename}</TableCell>
                    <TableCell>{val.eage}</TableCell>
                    <TableCell>{val.eposition}</TableCell>
                    <TableCell>{val.esalary}</TableCell>
                    <TableCell>
                    <Button onClick={()=>deleteValue(val._id)}>DELETE
                    </Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Button onClick={()=>updateValues(val)}>UPDATE
                    </Button>
                    </TableCell>
                </TableRow>
            )})}
            </TableBody>
            </Table>
        </TableContainer>
        if(update) finalJSX= <Data data={singleValue}
        method='put' />

        return finalJSX

}

export default ViewEm