import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Avatar, Checkbox, Grid, Paper, TextField,FormControlLabel,Button,Typography} from '@mui/material';
import {Link} from "react-router-dom"


export default function Signup() {
    const paperstyle={
        // height:"90vh",
        width:280,
        padding:20,
        margin:"20px auto"

    }
    ;
    const avtarStyle={
        backgroundColor:'blue'
    };
    const  commonStyle={
        // marginTop:10,
        // marginBottom:10
    }
  return (
    <>
    <Grid>
        <Paper elevation={4} style={paperstyle}>
            <Grid align='center'>
        <Avatar style={avtarStyle}><AccountCircleIcon></AccountCircleIcon>

        </Avatar>
        <h2>Signup</h2>
        </Grid>
        <TextField
        variant='standard' label="username" placeholder='enter user name' fullWidth required></TextField>
         <TextField
        variant='standard' label="password" placeholder='enter user password' type='password' fullWidth required style={commonStyle}></TextField>
         <TextField
        variant='standard' label="confirm password" placeholder='confrim your password' type='password' fullWidth required style={commonStyle}></TextField>
         <TextField
        variant='standard' label="Firstname"  type='text' fullWidth required style={commonStyle}></TextField>
         <TextField
        variant='standard' label="lastname"  type='text' fullWidth required style={commonStyle}></TextField>
         <TextField
        variant='standard'   type='date' fullWidth required style={commonStyle}></TextField>
         <TextField
        variant='standard' label="age" placeholder='enter your age' type='number' fullWidth required style={commonStyle}></TextField>
        
        <FormControlLabel
        control={<Checkbox defaultChecked/>}
        label="Remember me"/>
        
    {<Button variant='contained' fullWidth style={commonStyle}> Signup</Button> } 
    <Typography>
    already have account <Link to='/'>Login</Link>
        </Typography>
        </Paper>
        
    </Grid>
    </>
  )
}
