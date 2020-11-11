import React, { useState } from 'react';
import { Link, Prompt, useHistory } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { connect } from 'react-redux';

import { registerUser } from '../actions/userActions';
import NavbarComponent from "./ui-components/NavbarComponent";
import dataApi from "../api/dataApi";

const style = {
  width: "40%",
  margin: 'auto',
};

const RegisterPage = (props) => {
  const history = useHistory();

      const [msg, setMsg] = useState("");

  async function getUsers(callback) {
    const res = await dataApi.get("/users");
    callback(arguments[1], res.data);
  }

  function checkUserAvailability(details, users) {
    let usersFound = users.filter(user => details.email===user.email);
    if (usersFound.length === 0) {
      props.registerUser({...details, cart:[]});
      history.push("/login");
    } else {
      setMsg('Email already Registered')
    }
  }

  return (
    <div>
      <NavbarComponent />
      <div style={style}>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            username: "",
            password: "",
            location: "",
            mobileNumber: "",
          }}
          validationSchema={Yup.object().shape({
            firstName: Yup.string().required("firstName cannot be blank"),
            lastName: Yup.string().required("lastName cannot be blank"),
            email: Yup.string().email().required("email cannot be blank"),
            username: Yup.string().required("username cannot be blank"),
            password: Yup.string().required("Password cannot be blank"),
            location: Yup.string().required("location cannot be blank"),
            mobileNumber: Yup.string().required("mobileNumber cannot be blank"),
          })}
          onSubmit={(fields) => {
            getUsers(checkUserAvailability, fields);
          }}
          render={({ errors, dirty, touched }) => (
            <div>
              <div className="ui middle aligned center aligned grid">
                <div className="column" style={{ marginTop: "10%" }}>
                  <h2 className="ui teal image header">
                    Register your Account
                  </h2>
                  <p style={{ color: "red" }}>{msg}</p>
                  <Form className="ui large form">
                    <div className="ui stacked segment">
                      <div className="two fields">
                        <div className="field">
                          <div className="ui left icon input">
                            <i className="address card icon"></i>
                            <Field
                              name="firstName"
                              type="text"
                              placeholder="FirstName"
                              className={`${
                                errors.firstName && touched.firstName
                              } ? is-invalid : ''`}
                            />
                          </div>
                          <ErrorMessage
                            style={{ color: "red" }}
                            name="firstName"
                            component="div"
                            className="ui pointing label invalid-feedback"
                          />
                        </div>
                        <div className="field">
                          <div className="ui left icon input">
                            <i className="address card icon"></i>
                            <Field
                              name="lastName"
                              type="textarea"
                              placeholder="LastName"
                              className={`${
                                errors.lastName && touched.lastName
                              } ? is-invalid : ''`}
                            />
                          </div>
                          <ErrorMessage
                            style={{ color: "red" }}
                            name="lastName"
                            component="div"
                            className="ui pointing label invalid-feedback"
                          />
                        </div>
                      </div>
                      <div className="field">
                        <div className="ui left icon input">
                          <i className="envelope icon"></i>
                          <Field
                            name="email"
                            type="text"
                            placeholder="email"
                            className={`${
                              errors.email && touched.email
                            } ? is-invalid : ''`}
                          />
                        </div>
                        <ErrorMessage
                          style={{ color: "red" }}
                          name="email"
                          component="div"
                          className="ui pointing label invalid-feedback"
                        />
                      </div>
                      <div className="field">
                        <div className="ui left icon input">
                          <i className="user icon"></i>
                          <Field
                            name="username"
                            type="text"
                            placeholder="Username"
                            className={`${
                              errors.username && touched.username
                            } ? is-invalid : ''`}
                          />
                        </div>
                        <ErrorMessage
                          style={{ color: "red" }}
                          name="username"
                          component="div"
                          className="ui pointing label invalid-feedback"
                        />
                      </div>
                      <div className="field">
                        <div className="ui left icon input">
                          <i className="lock icon"></i>
                          <Field
                            name="password"
                            type="password"
                            placeholder="Password"
                            className={`${
                              errors.password && touched.password
                            } ? is-invalid : ''`}
                          />
                        </div>
                        <ErrorMessage
                          style={{ color: "red" }}
                          name="password"
                          component="div"
                          className="ui pointing label invalid-feedback"
                        />
                      </div>
                      <div className="field">
                        <div className="ui left icon input">
                          <i className="map marker alternate icon"></i>
                          <Field
                            name="location"
                            type="text"
                            placeholder="Location"
                            className={`${
                              errors.location && touched.location
                            } ? is-invalid : ''`}
                          />
                        </div>
                        <ErrorMessage
                          style={{ color: "red" }}
                          name="location"
                          component="div"
                          className="ui pointing label invalid-feedback"
                        />
                      </div>
                      <div className="field">
                        <div className="ui left icon input">
                          <i className="mobile icon"></i>
                          <Field
                            name="mobileNumber"
                            type="text"
                            placeholder="Mobile number"
                            className={`${
                              errors.mobileNumber && touched.mobileNumber
                            } ? is-invalid : ''`}
                          />
                        </div>
                        <ErrorMessage
                          style={{ color: "red" }}
                          name="mobileNumber"
                          component="div"
                          className="ui pointing label invalid-feedback"
                        />
                      </div>
                      <Field
                        className="ui fluid large teal submit button"
                        type="submit"
                        name="Register"
                        value="Register"
                      />
                    </div>
                  </Form>
                  <div className="ui message">
                    Already have an account?
                    <Link to="/login">Login</Link>
                  </div>
                </div>
              </div>
              <Prompt when={dirty} message="Are you sure??" />
            </div>
          )}
        />
      </div>
    </div>
  );
};;

export default connect(null, { registerUser })(RegisterPage);
