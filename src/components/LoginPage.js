import React, { useEffect, useState } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from 'yup';
import dataApi from '../api/dataApi';

const style = {
  width: "40%",
  margin: "5px",
  border: "1px solid grey",
  padding: "5px",
  borderRadius: "5px",
};

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
            <div>
              Login Page
              <p>{msg}</p>
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
                  <Form className="ui fluid form" style={style}>
                    <div className="field">
                      <label className="ui label" htmlFor="email">
                        email
                      </label>
                      <Field
                        name="email"
                        type="text"
                        className={`${
                          errors.email && touched.email
                        } ? is-invalid : ''`}
                      />
                      <ErrorMessage
                        style={{ color: "red" }}
                        name="email"
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
                    <button className="ui button" type="submit">
                      Login
                    </button>
                  </Form>
                )}
              />
              <p>
                Don't have an account? <Link to="/register">Register</Link>
              </p>
            </div>
          );
        }
    }

    return <div>{renderBasedonAuth()}</div>;
}



export default LoginPage;