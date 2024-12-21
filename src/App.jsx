import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import MyModal from "./components/MyModal";

import './App.css'

function App() {

let addUserBtnConfig = {
    label: 'Add Employee',
    variant: 'success',
    dataToggle: 'modal',
    heading: 'Add Employee',
    bsIcon: 'bi bi-plus-circle'
}
// const users = [
//     {id: 1, brand: 'Ford'},
//     {id: 2, brand: 'BMW'},
//     {id: 3, brand: 'Audi'},
//     {id: 4, brand: 'Audi'},
//   ];
 

 
  const fetchData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users'); // Corrected the URL
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const users = await response.json();
 
        return users; // Data is returned here
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
};

 
fetchData().then(users => {
    // console.log( users); 
});

 
 


  return (
    <>

    <div className="container">
        <div className="table-wrapper">
            <div className="table-title">
                <div className="row">
                    <div className="col-sm-6">
						<h2>Manage <b>Employees</b></h2>
					</div>
					<div className="col-sm-6">
                        <MyModal config = {addUserBtnConfig}/>
						<a href="#deleteEmployeeModal" className="btn btn-danger" data-toggle="modal">
                            <i className='bi bi-dash-circle'></i>
                            <span> Delete</span>
                        </a>						
					</div>
                </div>
            </div>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
						<th>
							<span className="custom-checkbox">
								<input type="checkbox" id="selectAll"/>
								<label htmlFor="selectAll"></label>
							</span>
						</th>
                        <th>Name</th>
                        <th>Email</th>
						<th>Address</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {
                    fetchData().then(users => {


                        users.map((user) => <tr>
                            <td>
                                <span className="custom-checkbox">
                                    <input type="checkbox" id="checkbox1" name="options[]" value="1"/>
                                    <label htmlFor="checkbox1"></label>
                                </span>
                            </td>
                            <td>Thomas Hardy</td>
                            <td>thomashardy@mail.com</td>
                            <td>89 Chiaroscuro Rd, Portland, USA</td>
                            <td>(171) 555-2222</td>
                            <td>
                                <a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="bi bi-pen-fill"></i></a>
                                <a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="bi bi-trash-fill"></i></a>
                            </td>

                        </tr> )
                        
                        


                    })
                }


                {/* {users.map((user) => <tr>
                    <td>
                        <span className="custom-checkbox">
                            <input type="checkbox" id="checkbox1" name="options[]" value="1"/>
                            <label htmlFor="checkbox1"></label>
                        </span>
                    </td>
                    <td>Thomas Hardy</td>
                    <td>thomashardy@mail.com</td>
                    <td>89 Chiaroscuro Rd, Portland, USA</td>
                    <td>(171) 555-2222</td>
                    <td>
                        <a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="bi bi-pen-fill"></i></a>
                        <a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="bi bi-trash-fill"></i></a>
                    </td>

                </tr> )} */}
              
                </tbody>
            </table>
			<div className="clearfix">
                <div className="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
                <ul className="pagination">
                    <li className="page-item disabled"><a href="#">Previous</a></li>
                    <li className="page-item"><a href="#" className="page-link">1</a></li>
                    <li className="page-item"><a href="#" className="page-link">2</a></li>
                    <li className="page-item active"><a href="#" className="page-link">3</a></li>
                    <li className="page-item"><a href="#" className="page-link">4</a></li>
                    <li className="page-item"><a href="#" className="page-link">5</a></li>
                    <li className="page-item"><a href="#" className="page-link">Next</a></li>
                </ul>
            </div>
        </div>
    </div>

   
 
    </>
  )
}

export default App
