import axios from 'axios';
import React ,{useState, useEffect, Link}from 'react'
import { useNavigate } from 'react-router-dom';


export default function Login1() {

        var uri = "http://localhost:1000/"

        var navi = useNavigate()

        function login(e){
                e.preventDefault()
                var d = new FormData(e.currentTarget);
                var uname = d.get("uname")
                var pass = d.get("pass")

                var data = {UserName:uname,Password:pass}

                axios.post(uri+"register",data).then((succ)=>{
                        console.log(succ)

                        if(succ.data.UserName != uname){
                                alert("register first")
                                navi("/Register")
                        }else{
                                alert("login successful")
                                localStorage.setItem("Username",succ.data.UserName)
                                navi("/")
                        }
                })


        }
        const [id2, setid2] = useState(false)
        var uname = localStorage.getItem('Username')

        useEffect(() => {
                if (uname) {
                        setid2(true)
                }
        }, [])

        function logout(){
                localStorage.removeItem("Username")
                setid2(false)
        }
   {id2 ? (
                                                <li onClick={logout}><Link to="/">Logout</Link></li>
                                        ) : (
                                                <li><Link to="/Login1">Login1</Link></li>
                                        )}


        return (
                <>
                  
                        <div className="col-xs-5">
                                <form onSubmit={login}>
                                        <div className="form-group">
                                                <input name='uname' type="text" className="form-control" placeholder="username" />
                                        </div>

                                        <div className="form-group">
                                                <input name='pass' type="password" className="form-control" placeholder="passwword" />
                                        </div>

                                        <div className="form-group">
                                                <input className="btn btn-default" value={'login'} type="submit"/>
                                        </div>

                                </form>
                        </div>
                </>
        )
}