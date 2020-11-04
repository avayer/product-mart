import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { connect } from 'react-redux';

import { registerUser } from '../actions/userActions';
import dataApi from "../api/dataApi";

const style = {
    width: "40%",
    margin: "5px",
    border: "1px solid grey",
    padding: "5px",
    borderRadius: "5px",
};


const RegisterPage = (props) => {
  const history = useHistory();

      const [msg, setMsg] = useState("");

  async function getUsers(callback) {
    const res = await dataApi.get("/users");
    console.log(res.data)
    callback(arguments[1], res.data);
  }

  function checkUserAvailability(details, users) {
    let usersFound = users.filter(user => details.email===user.email);
    if (usersFound.length === 0) {
      props.registerUser(details);
      history.push("/login");
    } else {
      setMsg('Email already Registered')
    }
  }

  return (
    <div>
      Register Page
      <p>{msg}</p>
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
        render={({ errors, status, touched }) => (
          <Form className="ui fluid form" style={style}>
            <div className="field">
              <label className="ui label" htmlFor="firstName">
                firstName
              </label>
              <Field
                name="firstName"
                type="text"
                className={`${
                  errors.firstName && touched.firstName
                } ? is-invalid : ''`}
              />
              <ErrorMessage
                style={{ color: "red" }}
                name="firstName"
                component="div"
                className="ui pointing label invalid-feedback"
              />
            </div>
            <div className="field">
              <label className="ui label" htmlFor="lastName">
                lastName
              </label>
              <Field
                name="lastName"
                type="textarea"
                className={`${
                  errors.lastName && touched.lastName
                } ? is-invalid : ''`}
              />
              <ErrorMessage
                style={{ color: "red" }}
                name="lastName"
                component="div"
                className="ui pointing label invalid-feedback"
              />
            </div>
            <div className="field">
              <label className="ui label" htmlFor="email">
                email
              </label>
              <Field
                name="email"
                type="text"
                className={`${errors.email && touched.email} ? is-invalid : ''`}
              />
              <ErrorMessage
                style={{ color: "red" }}
                name="email"
                component="div"
                className="ui pointing label invalid-feedback"
              />
            </div>
            <div className="field">
              <label className="ui label" htmlFor="username">
                username
              </label>
              <Field
                name="username"
                type="text"
                className={`${
                  errors.username && touched.username
                } ? is-invalid : ''`}
              />
              <ErrorMessage
                style={{ color: "red" }}
                name="username"
                component="div"
                className="ui pointing label invalid-feedback"
              />
            </div>
            <div className="field">
              <label className="ui label" htmlFor="password">
                password
              </label>
              <Field
                name="password"
                type="password"
                className={`${
                  errors.password && touched.password
                } ? is-invalid : ''`}
              />
              <ErrorMessage
                style={{ color: "red" }}
                name="password"
                component="div"
                className="ui pointing label invalid-feedback"
              />
            </div>
            <div className="field">
              <label className="ui label" htmlFor="location">
                location
              </label>
              <Field
                name="location"
                type="text"
                className={`${
                  errors.location && touched.location
                } ? is-invalid : ''`}
              />
              <ErrorMessage
                style={{ color: "red" }}
                name="location"
                component="div"
                className="ui pointing label invalid-feedback"
              />
            </div>
            <div className="field">
              <label className="ui label" htmlFor="mobileNumber">
                mobileNumber
              </label>
              <Field
                name="mobileNumber"
                type="text"
                className={`${
                  errors.mobileNumber && touched.mobileNumber
                } ? is-invalid : ''`}
              />
              <ErrorMessage
                style={{ color: "red" }}
                name="mobileNumber    "
                component="div"
                className="ui pointing label invalid-feedback"
              />
            </div>
            <button className="ui button" type="submit">
              Register
            </button>
          </Form>
        )}
      />
      <p>
        Already have an account?<Link to="/login">Login</Link>
      </p>
    </div>
  );
};;

export default connect(null, { registerUser })(RegisterPage);
