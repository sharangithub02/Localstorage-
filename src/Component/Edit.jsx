import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function Edit({value,onEdit}) {
  const params = useParams()
  const [single, setSingle] = useState({})
  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [staffphone, setStaffPhone] = useState("")
  const [staffemail, setStaffEmail] = useState("")
  const [staffdep, setStaffDep] = useState("")
  const [staffaddress, setStaffAddress] = useState("")
  const [staffage, setStaffAge] = useState("")
  const [staffsalary, setStaffSalary] = useState("")
  const [stafftiming, setStaffTimming] = useState("")
  const [stafftiming2, setStaffTimming2] = useState("")


  useEffect(() => {
    return (
      setSingle(Object.assign({}, ...(value.filter((e) => e.staff_id == params.id))))
    )
  }, [])

  const index=(value.findIndex((e) => e.staff_id ==params.id))



  const editSubmit = (e) => {
    e.preventDefault();
    onEdit(single,index)
    navigate("/")
  }
  console.log(params.id)
  console.log(index)

  const OnChange = (e) => {
    setSingle({...single, [e.target.name]:e.target.value})
    console.log(single)
  }

  return (
    <div>
      <div style={{ marginTop: "100px" }}>
        <form onSubmit={editSubmit} method="POST" style={{ width: "500px", marginRight: "auto", marginLeft: "auto" }}>
          <h2 style={{ textAlign: "center", marginBottom: "40px" }}>STAFF EDIT FORM</h2>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Staff Name</label>
            <input type="text" className="form-control" name="name" onChange={OnChange} value={single.name}  id="exampleInputEmail1" aria-describedby="emailHelp" />

          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Staff Phone</label>
            <input type="text" name='staffphone' onChange={OnChange} value={single.staffphone} className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="mb-3">
            <label htmlFor="a" className="form-label">Staff Email</label>
            <input type="email" name='staffemail' onChange={OnChange} value={single.staffemail} className="form-control" id="a" />
          </div>
          <div className="mb-3">
            <label htmlFor="b" className="form-label">Staff Department</label>
            <input type="text" name='staffdep' onChange={OnChange} value={single.staffdep} className="form-control" id="b" />
          </div>
          <div className="mb-3">
            <label htmlFor="c" className="form-label">Staff Address</label>
            <input type="text" name='staffaddress' onChange={OnChange} value={single.staffaddress} className="form-control" id="c" />
          </div>
          <div className="mb-3">
            <label htmlFor="d" className="form-label">Staff Age</label>
            <input type="number" name='staffage' onChange={OnChange} value={single.staffage} className="form-control" id="d" />
          </div>
          <div className="mb-3">
            <label htmlFor="g" className="form-label">Salary</label>
            <input type="text" name='staffsalary' onChange={OnChange} value={single.staffsalary} className="form-control" id="g" />
          </div>
          <div className="mb-3">
            <label htmlFor="e" className="form-label">Work Starts(AM)</label>
            <input type="time" name='stafftiming' onChange={OnChange} value={single.stafftimming} className="form-control" id="e" />
          </div>
          <div className="mb-3">
            <label htmlFor="f" className="form-label">Work Ends(PM)</label>
            <input type="time" name='stafftiming2' onChange={OnChange} value={single.stafftimming2} className="form-control" id="f" />
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>

      </div>


    </div>
  )
}
