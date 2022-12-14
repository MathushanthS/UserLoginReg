import React, { Component } from "react";
//import ReactDOM from "react-dom";
//import BackdropFilter from "react-backdrop-filter";
import "./../Style/StyleForLogin.css";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

//import drwho from "./../Images/rolex.jpg";

export class SampleLogin extends Component {
  handleSubmit(event) {
    event.preventDefault();

    fetch("https://localhost:7055/api/ApplicationUser/Login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // data:JSON.stringify({
        //UserId: null,
        //FullName: event.target.FullName.value,
        //Email: event.target.Email.value,
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
          //result.UserName
        },
        (error) => {
          alert("Failed");
        }
      );
  }

  render() {
    return (
      <div className="container py-4">
        {/* <!-- Section: Design Block --> */}
        <div className=" text-center text-lg-start">
          <div className="card mb-3">
            <div className="row g-0 d-flex align-items-center">
              <div className="col-lg-4 d-none d-lg-flex">
                <img
                  src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"
                  alt="Trendy Pants and Shoes"
                  className="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5"
                />
              </div>
              <div className="col-lg-8">
                <div className="card-body py-5 px-md-5">
                  <form onSubmit={this.handleSubmit}>
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

                    {/* <!-- Password input --> */}
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

                    {/* <!-- 2 column grid layout for inline styling --> */}
                    <div className="row mb-4">
                      {/* <div class="col d-flex justify-content-center"> */}
                      {/* <!-- Checkbox --> */}
                      {/* <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                  <label class="form-check-label" for="form2Example31"> Remember me </label>
                </div> */}
                      {/* </div> */}

                      <div className="col">
                        {/* <!-- Simple link --> */}
                        <a>If You Don't Have Account? </a>
                        <a href="/signUp">Regiter Here</a>
                      </div>
                    </div>

                    {/* <!-- Submit button --> */}
                    <button
                      type="submit"
                      className="btn btn-primary btn-block mb-4"
                      href="/signUp"
                    >
                      Sign in
                    </button>
                    {/* <Link
                      to="/signup"
                      type="submit"
                      className="btn btn-primary"
                    >
                      Sign In
                    </Link> */}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
