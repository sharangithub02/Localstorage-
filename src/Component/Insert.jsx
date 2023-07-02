import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


export default function Insert({onSubmit}) {
    const [name, setName] = useState("");
    const [staffphone, setStaffPhone] = useState("");
    const [staffemail, setStaffEmail] = useState("");
    const [staffdep ,setStaffDep]=useState("")
    const [staffaddress, setStaffAddress]=useState("")
    const [staffage, setStaffAge]=useState("")
    const [staffsalary, setStaffSalary]=useState("")
    const [stafftiming, setStaffTimming]=useState("")
    const [stafftiming2, setStaffTimming2]=useState("")

    let navigate = useNavigate()

    const [value, setValue] = useState([])

    const Submit = (e)=>{
        e.preventDefault();
        onSubmit(name,staffphone,staffemail,staffdep,staffaddress,staffage,staffsalary,stafftiming,stafftiming2)
        navigate("/")
    }
    

    return (
        <div>
            <form onSubmit={Submit} method="POST" style={{ width: "500px", marginRight: "auto", marginLeft: "auto" }}>
                <h2 style={{ textAlign: "center", marginBottom: "40px" }}>STAFF INSERT FORM</h2>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Staff Name</label>
                    <input type="text" className="form-control" name="name" onChange={(e) => setName(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" />
                    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Staff Phone</label>
                    <input type="text" className="form-control" onChange={(e) => setStaffPhone(e.target.value)} id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="a" className="form-label">Staff Email</label>
                    <input type="email" className="form-control" onChange={(e) => setStaffEmail(e.target.value)} id="a" />
                </div>
                <div className="mb-3">
                    <label htmlFor="b" className="form-label">Staff Department</label>
                    <input type="text" className="form-control" onChange={(e) => setStaffDep(e.target.value)} id="b" />
                </div>
                <div className="mb-3">
                    <label htmlFor="c" className="form-label">Staff Address</label>
                    <input type="text" className="form-control" onChange={(e) => setStaffAddress(e.target.value)} id="c" />
                </div>
                <div className="mb-3">
                    <label htmlFor="d" className="form-label">Staff Age</label>
                    <input type="number" className="form-control" onChange={(e) => setStaffAge(e.target.value)} id="d" />
                </div>
                <div className="mb-3">
                    <label htmlFor="g" className="form-label">Salary</label>
                    <input type="text" className="form-control" onChange={(e) => setStaffSalary(e.target.value)} id="g" />
                </div>
                <div className="mb-3">
                    <label htmlFor="e" className="form-label">Work Starts (AM)</label>
                    <input type="time" className="form-control" onChange={(e) => setStaffTimming(e.target.value)} id="e" />
                </div>
                <div className="mb-3">
                    <label htmlFor="f" className="form-label">Work Ends (PM)</label>
                    <input type="time" className="form-control" onChange={(e) => setStaffTimming2(e.target.value)} id="f" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}
