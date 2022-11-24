import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';


export default function Register() {

        var uri = "http://localhost:1000/"

        var navi = useNavigate()

        function register(e){
                e.preventDefault()
                var d = new FormData(e.currentTarget);
                var uname = d.get("uname")
                var pass = d.get("pass")

                var data = {UserName:uname,Password:pass}

                axios.post(uri+"register",data).then((succ)=>{
                        console.log(succ)

                        if(succ.data.UserName != uname){
                                alert("register")
                                axios.post(uri+'adduser',data).then((succ)=>{
                                        console.log("user registered")
                                })
                        }else{
                                alert("already register")
                                navi("/Login1")
                        }
                })


        }

        return (
                <>
        
                        <div className="col-xs-5">
                                <form onSubmit={register}>
                                        <div className="form-group">
                                                <input name='uname' type="text" className="form-control" placeholder="username" />
                                        </div>

                                        <div className="form-group">
                                                <input name='pass' type="password" className="form-control" placeholder="passwword" />
                                        </div>

                                        <div className="form-group">
                                                <input className="btn btn-default" value={'register'} type="submit"/>
                                        </div>

                                </form>
                        </div>
                </>
        )
}