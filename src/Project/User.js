import React, { Component } from "react";
import { Table } from "react-bootstrap";

import { Button, ButtonToolbar } from "react-bootstrap";
//import {AddUserModal} from './AdduserModal';
//import {EditUserModal} from './EditUserModal';

export class UserComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [], addModalShow: false, editModalShow: false };
  }

  refreshList() {
    //  fetch(process.env.Main_Url_without_Auth+'GetAllUser', {
    fetch("https://localhost:7055/api/UserN/GetAllUser", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        this.setState({ users: data });
      });
  }

  componentDidMount() {
    this.refreshList();
  }

  componentDidUpdate() {
    this.refreshList();
  }

  // deleteDep(depid){
  //     if(window.confirm('Are you sure?')){
  //         fetch(process.env.REACT_APP_API+'department/'+depid,{
  //             method:'DELETE',
  //             header:{'Accept':'application/json',
  //         'Content-Type':'application/json'}
  //         })
  //     }
  // }
  render() {
    //const {users, depid,depname}=this.state;
    const { users } = this.state;
    // let addModalClose=()=>this.setState({addModalShow:false});
    // let editModalClose=()=>this.setState({editModalShow:false});
    return (
      <div>
        <Table className="mt-4" striped bordered hover size="sm">
          <thead>
            <tr>
              <th>UserId</th>
              <th>UserName</th>
              <th>FullName</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.UserId}>
                <td>{user.UserId}</td>
                <td>{user.UserName}</td>
                <td>{user.FullName}</td>
                <td>{user.Email}</td>
                <td>
                  <ButtonToolbar>
                    {/* <Button className="mr-2" variant="info"
    onClick={()=>this.setState({editModalShow:true,
        depid:dep.DepartmentId,depname:dep.DepartmentName})}>
            Edit
        </Button> */}

                    {/* <Button className="mr-2" variant="danger"
    onClick={()=>this.deleteDep(dep.DepartmentId)}>
            Delete
        </Button> */}

                    {/* <EditDepModal show={this.state.editModalShow}
        onHide={editModalClose}
        depid={depid}
        depname={depname}/> */}
                  </ButtonToolbar>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <ButtonToolbar>
          <Button
            variant="primary"
            onClick={() => this.setState({ addModalShow: true })}
          >
            Add User
          </Button>

          {/* <AddDepModal show={this.state.addModalShow}
                    onHide={addModalClose}/> */}
        </ButtonToolbar>
      </div>
    );
  }
}
