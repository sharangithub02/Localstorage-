import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Image from '../logo.svg'

export default function SingleView({ value }) {
  const [single, setSingle] = useState([])
  const params = useParams()
  // console.log(params)
  // console.log(value)


  useEffect(() => {
    setSingle(value.filter((e) => e.staff_id == params.id))
  }, [])


  console.log(single);


  return (

    <div>
      {single.map((item) => {
        return (
          <div>
          <table class="table table-success table-striped">
            <thead>
              <tr>
                <th>Staff Id :</th>  <td>{item.staff_id}</td>
              </tr>
              <tr>
                <th>Staff Name :</th>  <td>{item.name}</td>
              </tr>
              <tr>
                <th>Staff Phone :</th>  <td>{item.staffphone}</td>
              </tr>
              <tr>
                <th>Staff Email :</th>  <td>{item.staffemail}</td>
              </tr>
              <tr>
                <th>Staff Department :</th>  <td>{item.staffdep}</td>
              </tr>
              <tr>
                <th>Staff Address :</th>  <td>{item.staffaddress}</td>
              </tr>
              <tr>
                <th>Staff Age :</th>  <td>{item.staffage}</td>
              </tr>
              <tr>
                <th>Salary :</th>  <td>{item.staffsalary}</td>
              </tr>
              <tr>
                <th>Work Starts (AM)</th>  <td>{item.stafftiming}</td>
              </tr>
              <tr>
                <th>Work Ends (PM)</th>  <td>{item.stafftiming2}</td>
              </tr>
            </thead>
          </table>
            <Link to="/" className='btn btn-dark' style={{textAlign:'center',display:'flex',justifyContent:'center'}}>Go Back</Link>
          </div>
        )
      })}

    </div>
  )
}
