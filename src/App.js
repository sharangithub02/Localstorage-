import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import View from './Component/View'
import Insert from './Component/Insert'
import Edit from './Component/Edit'
import { useState, useEffect } from 'react';
import SingleView from './Component/Single_View';

function App() {
  const [oldvalue, setOldvalue] = useState([]);

  let initvalue;
  if (localStorage.getItem("Staff") === null) {
    initvalue = []
  }
  else {
    initvalue = JSON.parse(localStorage.getItem("Staff"))
  }


// Insert ######################################################
  const onSubmit = (name, staffphone, staffemail,staffdep,staffaddress,staffage,staffsalary,stafftiming,stafftiming2) => {
    console.log(name, staffphone, staffemail,staffdep,staffaddress,staffage,staffsalary,stafftiming,stafftiming2)
    let staff_id = 101;
    if (value.length === 0) {
      staff_id = 101;
    }
    else {
      staff_id = value[value.length - 1].staff_id + 1
    }
    const details = {
      staff_id: staff_id,
      name: name,
      staffphone: staffphone,
      staffemail: staffemail,
     staffdep:staffdep,
     staffaddress:staffaddress,
     staffage:staffage,
     stafftiming:stafftiming,
     stafftiming2:stafftiming2,
     staffsalary:staffsalary
    }
    setValue([...value, details])

  }
  // ############################################################

  // Delete ################################################################
  const onDelete = (item) => {
    console.log("delete: " + JSON.stringify(item))
    setValue(value.filter((e) => {
      console.log(e)
      return e !== item
    }));
    localStorage.setItem("Staff", JSON.stringify(value))
  }
  // #######################################################################

  // Edit ################################################################
  const onEdit = (val,index) => {
    
    console.log(val)
    console.log(index)
    console.log(value.splice(index,1,val))
    localStorage.setItem("Staff",JSON.stringify(value))
    
  }
  // #######################################################################

  const [value, setValue] = useState(initvalue)
  useEffect(() => {
    localStorage.setItem("Staff", JSON.stringify(value))
  }, [value])
  

  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<View value={value} onDelete={onDelete} />} />
            <Route exact path="/single-view/:id" element={<SingleView value={value}/>} />
            <Route exact path="/insert" element={<Insert onSubmit={onSubmit} />} />
            <Route exact path="/edit/:id" element={<Edit onEdit={onEdit} value={value} />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
