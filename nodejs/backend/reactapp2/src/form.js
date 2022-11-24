import axios from "axios";
import React,{useEffect,useState} from "react";


export default function Form1(){

        var uri = "http://localhost:1000/"
        function sendform(e){

                e.preventDefault();
                var d = new FormData(e.currentTarget);

                var nm = d.get("nm")
                var em = d.get("em")
                var ps = d.get("ps")
                var ct = d.get("ct")

                console.log(nm+em+ps+ct)

                var obj1 = {Name:nm,Email:em,Password:ps,Contact:ct}
        
                axios.post(uri + "addform",obj1).then((succ)=>{
                        // console.log(succ.data)
                        if(succ.data == "data added"){
                                alert("added")
                                getdata()
                        }else{
                                alert("can't add data")
                                e.target.reset()
                        }
                })
        }

        const [data,setdata] = useState([])
        function getdata(){
                axios.get(uri+"getdata1").then((succ)=>{
                        console.log(succ.data)
                        setdata(succ.data)
                })
        }
        useEffect(() => {
                getdata()
        }, [])


        function del(x){
            console.log(x)

            var obj={ID:x}

            axios.post(uri+"deldata",obj).then((succ)=>{
                console.log(succ.data)
                alert("deleted")
                getdata()
            })


        }
        const [nm, setnm] = useState('')
        const [em, setem] = useState('')
        const [ps, setps] = useState('')
        const [ct, setct] = useState('')

        const [id, setid] = useState('')
        function edit(x) {
                setid(x)
                var obj = { ID: x }
                axios.post(uri + "getonedata", obj).then((succ) => {
                        console.log(succ.data)

                        setnm(succ.data.Name)
                        setem(succ.data.Email)
                        setps(succ.data.Password)
                        setct(succ.data.Contact)
                })
        }

        function editform(e){
                // alert("lkjhgf")

                var obj1 = {Nm:nm,Em:em,Ps:ps,Ct:ct}

                axios.post(uri+"editdata",obj1).then((succ)=>{
                        console.log(succ.data)
                        getdata()
                })
        }

        
        return (
            <>
                    {/* <Navbar /> */}

                    <div className="col-xs-5">
                            <form onSubmit={id ? (editform):(sendform)}>
                                    <div className="form-group">
                                            <input type='text' value={nm} onChange={(e) => setnm(e.target.value)} placeholder="enter name" name="nm" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                            <input type='email' value={em} onChange={(e) => setem(e.target.value)} placeholder="enter email" name="em" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                            <input type='password' value={ps} onChange={(e) => setps(e.target.value)} placeholder="enter password" name="ps" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                            <input type='number' value={ct} onChange={(e) => setct(e.target.value)} placeholder="enter contact" name="ct" className="form-control" />
                                    </div>

                                    {id ? (
                                            <div className="form-group">
                                                    <input type="submit" value={'edit form'} className="btn btn-danger btn-block" />
                                            </div>
                                    ) : (
                                            <div className="form-group">
                                                    <input type="submit" value={'send form'} className="btn btn-success btn-block" />
                                            </div>
                                    )}
                            </form>

                            {data.map((val) => (
                                    <>
                                            <h3>{val.Name}</h3>
                                            <button onClick={() => del(val._id)}>del</button>
                                            <button onClick={() => edit(val._id)}>edit</button>
                                    </>
                            ))}
                    </div>

            </>
    )
}