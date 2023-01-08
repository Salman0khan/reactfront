import React from 'react'
import LockIcon from '@mui/icons-material/Lock';
import {Avatar, Checkbox, Grid, Paper, TextField,FormControlLabel, Typography,Button} from '@mui/material';
import {Link} from "react-router-dom"
// import Signup from './Signup';

export default function Login() {
    const paperstyle={
        height:"70vh",
        width:280,
        padding:20,
        margin:"20px auto"

    }
    ;
    const avtarStyle={
        backgroundColor:'green'
    };
    const  commonStyle={
        marginTop:10,
        marginBottom:10
    }
  return (
    <>
    <Grid>
        <Paper elevation={4} style={paperstyle}>
            <Grid align='center'>
        <Avatar style={avtarStyle}><LockIcon></LockIcon>

        </Avatar>
        <h2>Login</h2>
        </Grid>
        <TextField
        variant='standard' label="username" placeholder='enter user name' fullWidth required></TextField>
         <TextField
        variant='standard' label="password" placeholder='enter user password' type='password' fullWidth required style={commonStyle}></TextField>
        <FormControlLabel
        control={<Checkbox defaultChecked/>}
        label="Remember me"/>
        <Typography>
dont have account <Link to='/Signup'>creat account</Link>
        </Typography>
    {<Button variant='contained' fullWidth style={commonStyle}> Login</Button> } 
    
        </Paper>
        
    </Grid>
    </>
  )
}
