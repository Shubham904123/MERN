import React from "react";
import { Link } from "react-router-dom";
import {auth,db,provider} from "./firebase";



export default function Navbar(){
        function login(){
                console.log("hvbfhbsv")
                auth.signInWithPopup(provider)
               
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log(user)

//     db.collection("User1").add({
//         Name:user.displayName,
//         Email:user.email,
//         UID:user.uid

//     }).then((succ=>{
//         alert("added")
//         console.log(succ.id)
//         localStorage.setItem("userid",succ.id)
//     }))
//     // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });

        }
        return(
                <nav className="navbar navbar-fixed-top navbar-inverse">
                        <div className="container-fluid">
                                <div className="navbar-header">
                                        <div className="navbar-brand">
                                                GOOGLE
                                        </div>
                                </div>
                                <ul className="nav navbar-nav">
                                        <li><a href="/">HOME</a></li>
                                        <li><a href="/about">ABOUT</a></li>
                                        <li><a href="/form">FORM</a></li>
                                        <li><a href="/mui">MUI</a></li>
                                        <li><a href="/form1">FORM 1</a></li>
                                        <li><a href="/form2">FORM 2</a></li>
                                        <li><a href="/form3">FORM 3</a></li>
                                        {/* <li><a href="">home</a></li> */}
                                        <li onClick={login}><Link to="">login</Link></li>
                                        <li><Link to="">logout</Link></li>
                                        <li><a href="/stepper">stepper</a></li>



                                </ul>
                        </div>
                </nav>
        )
}