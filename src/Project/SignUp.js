import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
//import { browserHistory, withRouter } from "react-router";
//import { section } from 'react-bootstrap';
import BackdropFilter from "react-backdrop-filter";
//import { useNavigation } from "@react-navigation/native";
import { Navigation, useNavigate } from "react-router-dom";

// const navi = useNavigate();
export class SignUpComponent extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  routeChange = () => {
    let path = "/login";
    let history = useNavigate();
    history.push(path);
  };
  handleSubmit(event) {
    event.preventDefault();
    // let navig = useNavigate();
    fetch("https://localhost:7055/api/ApplicationUser/Register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // data:JSON.stringify({
        UserId: null,
        FullName: event.target.FullName.value,
        Email: event.target.Email.value,
        UserName: event.target.UserName.value,
        Password: event.target.Password.value,
        // })
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          ///var FullName=result.application.FullName
          alert("user Succesfully registered");
          //this.props.History.push("/login");
          let path = "/login";
          let history = useNavigate();
          history.push(path);
          //result.UserName
          //navig("/login");
        },
        (error) => {
          alert("Failed");
        }
      );
  }

  render() {
    return (
      <section className="text-center text-lg-start">
        <div className="container py-4">
          <div className="row g-0 align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div
                className="card cascading-right"
                style={{
                  background: "hsla(0, 0%, 100%, 0.55)",
                  // backdrop-filter: 'blur(30px)',
                }}
              >
                <BackdropFilter
                  className="bluredForm"
                  filter={"blur(100px) sepia(50%)"}
                  html2canvasOpts={{
                    allowTaint: true,
                  }}
                  onDraw={() => {
                    console.log("Rendered !");
                  }}
                >
                  <div className="card-body p-4 shadow-5 text-center">
                    <h2 className="fw-bold mb-5">Sign up now</h2>
                    <form onSubmit={this.handleSubmit}>
                      <div className="row">
                        <div className="form-outline mb-4">
                          <Form.Group controlId="FullName">
                            <Form.Control
                              type="text"
                              name="FullName"
                              required
                              placeholder="FullName"
                            />
                          </Form.Group>
                        </div>
                        <div className="form-outline mb-4">
                          <Form.Group controlId="Email">
                            <Form.Control
                              type="text"
                              name="Email"
                              required
                              placeholder="Email"
                            />
                            {/* <Form.Label>Email</Form.Label> */}
                          </Form.Group>
                        </div>

                        {/* <!-- Email input --> */}
                        <div className="form-outline mb-4">
                          <Form.Group controlId="UserName">
                            <Form.Control
                              type="text"
                              name="UserName"
                              required
                              placeholder="UserName"
                            />
                            {/* <Form.Label>UserName</Form.Label> */}
                          </Form.Group>
                        </div>

                        <div className="form-outline mb-4">
                          <Form.Group controlId="Password">
                            <Form.Control
                              type="password"
                              name="Password"
                              required
                              placeholder="Password"
                            />
                            {/* <Form.Label>Password</Form.Label> */}
                          </Form.Group>
                        </div>
                      </div>

                      <div>
                        <Button
                          className="btn btn-primary btn-block mb-4"
                          type="submit"
                          // onClick={() =>
                          //   this.props.Navigation.navigate("/login")
                          // }
                        >
                          {" "}
                          Sign Up
                        </Button>
                      </div>
                    </form>
                  </div>
                </BackdropFilter>
              </div>
            </div>

            <div className="col-lg-4 mb-5 mb-lg-0">
              <img
                src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"
                class="w-100 rounded-4 shadow-4"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
