import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../Firebase/firebase";

function Login() {

     var navi = useNavigate()
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()


   const Login1 = () => {
    
    auth.signInWithEmailAndPassword(email,password).then (() => {
      navi('/home') 
    })
      
   }

  return (
    <div className="col-lg-4 lgdv">
      <h1>Login Here</h1>
      <TextField id="outlined-basic" onChange={(e) => setEmail(e.target.value)} name="name" label="Enter Name" variant="outlined" />
      <TextField
        id="outlined-basic"
        label="Enter Password"
        variant="outlined"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button onClick={Login1} variant="contained" >
            Login
      </Button>
    </div>
  );
}

export default Login;
