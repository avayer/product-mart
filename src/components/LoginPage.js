import React, { useEffect, useState } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from 'yup';
import dataApi from '../api/dataApi';

const style = {
  'width': '40%',
  'margin': '10% auto'
}

const LoginPage = (props) => {

    let history = useHistory();

    const [users, setUsers] = useState([]);
     const [msg, setMsg] = useState("");

    async function getUsers () {
        const res = await dataApi.get("/users");
        setUsers(res.data);
    };

    const findUser = (creds) => {
        const user = users.filter(user => user.email === creds.email  && user.password===creds.password);
        return user;
    }

    useEffect(() => {
        getUsers();
    }, []);

    const renderBasedonAuth = () => {
        if (localStorage.getItem("username") !== null) {
            return <Redirect to="/" />
        } else {
          return (
            <div style={style}>
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                validationSchema={Yup.object().shape({
                  email: Yup.string().email().required("email is required"),
                  password: Yup.string().required("password is required"),
                })}
                onSubmit={(fields) => {
                  const user = findUser(fields);
                  if (user.length === 0) {
                    setMsg("Incorrect username or password");
                  } else {
                    localStorage.setItem("username", user[0].username);
                    localStorage.setItem("id", user[0].id);
                    history.push("/");
                  }
                }}
                render={({ errors, status, touched }) => (
                  <div className="ui middle aligned center aligned grid">
                    <div className="column">
                      <h2 className="ui teal image header">
                        Login to your account
                      </h2>
                      <p style={{ color: "red" }}>{msg}</p>
                      <Form className="ui large form">
                        <div className="ui stacked segment">
                          <div className="field">
                            <div className="ui left icon input">
                              <i className="user icon"></i>
                              <Field
                                type="email"
                                name="email"
                                placeholder="Enter Email"
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
                              <i className="lock icon"></i>
                              <Field
                                type="password"
                                name="password"
                                placeholder="password"
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
                          <Field
                            className="ui fluid large teal submit button"
                            type="submit"
                            name="Login"
                            value="Login"
                          />
                        </div>
                      </Form>
                      <div className="ui message">
                        Don't have an account?
                        <Link to="/register">Register</Link>
                      </div>
                    </div>
                  </div>
                )}
              />
            </div>
          );
        }
    }

    return <div>{renderBasedonAuth()}</div>;
}



export default LoginPage;