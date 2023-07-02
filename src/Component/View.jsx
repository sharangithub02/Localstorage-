import React,{useState} from 'react'
import { Link } from 'react-router-dom'

export default function View({ value, onDelete }) {
    
    const [delete_item, setDelete_item] = useState([]);

    console.log("dddel : "+delete_item)
    return (
        <>

            <div class="p-3 mb-2 bg-primary-subtle text-emphasis-primary">
                <b>New Staff..?</b><Link to="/insert"  className='btn btn-primary'>Click here</Link>

                <table class="table table-success table-striped">
                    <thead>
                        <tr>
                            <th>Sl No.</th>
                            <th>Staff Id</th>
                            <th>Staff Name</th>
                            <th>Staff Phone No.</th>
                            <th>Staff Email</th>
                            <th>Staff Department</th>
                            <th>Staff Address</th>
                            <th>Staff Age</th>
                            <th>Salary</th>
                            <th>Work Starts (AM)</th>
                            <th>Work Ends (PM)</th>

                            <th>View</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
        
                        {value.length === 0 && "No Data"}
                        {value.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{item.staff_id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.staffphone}</td>
                                    <td>{item.staffemail}</td>
                                    <td>{item.staffdep}</td>
                                    <td>{item.staffaddress}</td>
                                    <td>{item.staffage}</td>
                                    <td>{item.staffsalary}</td>
                                    <td>{item.stafftiming}</td>
                                    <td>{item.stafftiming2}</td>
                                    <td><Link to={`single-view/${item.staff_id}`}  className='btn btn-primary'>View</Link></td>
                                    <td><Link to={`edit/${item.staff_id}`}  className='btn btn-primary'>Edit</Link></td>
                                    <td><Link data-bs-target="#exampleModal" data-bs-toggle="modal" onClick={()=>setDelete_item(item)}  className='btn btn-danger'>Delete</Link></td>

                                </tr>
                            )
                        })}
                    </tbody>
                </table>



                 {/* <!-- Modal --> */}
                 <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Delete</h1>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    are you sure!!!
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">NO</button>
                                                    <button type="button" className="btn btn-primary" onClick={()=>onDelete(delete_item)} data-bs-dismiss="modal">Yes</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>





            </div>

        </>
    )
}




