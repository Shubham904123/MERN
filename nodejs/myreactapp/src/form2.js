import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth, db, provider } from "./firebase";

export default function Navbar() {

        var uid = localStorage.getItem('Userid');
        console.log(uid)

        const [id1,setid1] = useState(false)
        function login() {
                auth.signInWithPopup(provider)
                        .then((result) => {
                                /** @type {firebase.auth.OAuthCredential} */
                                var credential = result.credential;

                                // This gives you a Google Access Token. You can use it to access the Google API.
                                var token = credential.accessToken;
                                // The signed-in user info.
                                var user = result.user;

                                console.log(user)

                                db.collection("User1").where('Email', '==', user.email).get().then((succ) => {
                                        if (succ.size == 0) {
                                                db.collection("User1").add({
                                                        Name: user.displayName,
                                                        Email: user.email,
                                                        UID: user.uid
                                                }).then((succ) => {
                                                        alert("added")
                                                        // console.log(succ.id)
                                                        setid1(true)
                                                        localStorage.setItem("Userid", succ.id)
                                                })
                                        } else {
                                                succ.forEach((abc) => {
                                                        // console.log(abc.id)
                                                        setid1(true)
                                                        localStorage.setItem("Userid", abc.id)
                                                })
                                        }
                                })

                                // ...

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


        function logout(){
                localStorage.removeItem("Userid");
                setid1(false)
        }


        return (
                <nav className="navbar  navbar-inverse">
                        <div className="container-fluid">
                                <div className="navbar-header">
                                        <div className="navbar-brand">
                                                abc
                                        </div>
                                </div>
                                <ul className="nav navbar-nav">
                                        <li><Link to="/">home</Link></li>
                                        <li><Link to="/about">about</Link></li>
                                        <li><Link to="/Form2">Form2</Link></li>
                                        <li><Link to="">home</Link></li>

                                        {id1 ? (
                                                <li onClick={logout}><Link to="">logout</Link></li>
                                        ) : (
                                                <li onClick={login}><Link to="">login</Link></li>
                                        )}
                                </ul>
                        </div>
                </nav>
        )
}