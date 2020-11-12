import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory, Prompt } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { addProduct } from '../actions';
import NavbarComponent from "./ui-components/NavbarComponent";

const AddProduct = (props) => {
    let history = useHistory();

    useEffect(()=> {
        if(localStorage.getItem('id')===null) history.push('/login')
        document.title = 'Add Product || Product Mart';
    }, []);

    const style = {
      width: "60vh",
      margin: "0 auto",
    };

    return (
      <div>
        <NavbarComponent />
        <div style={style}>
          <Formik
            initialValues={{
              productName: "",
              productDesc: "",
              manufacturer: "",
              quantity: "",
              price: "",
            }}
            validationSchema={Yup.object().shape({
              productName: Yup.string().required(
                "Product name cannot be blank"
              ),
              productDesc: Yup.string().required(
                "Product description cannot be blank"
              ),
              manufacturer: Yup.string().required(
                "Product manufacturer cannot be blank"
              ),
              quantity: Yup.number()
                .min(1, "Quantity should be atleast 1")
                .required("Quantity cannot be blank")
                .typeError("Must be a number"),
              price: Yup.number("Must be a number")
                .required("Price cannot be blank")
                .min(1, "Should be greater than zero")
                .typeError("Must be a number"),
            })}
            onSubmit={(fields) => {
              //POST  call goes here
              const id = parseInt(localStorage.getItem("id"));
              const rating = Math.floor(Math.random() * (5 - 0)) + 0;
              props.addProduct({
                ...fields,
                count: 0,
                userId: id,
                rating: rating,
              });
              history.push("/myproducts");
            }}
            render={({ errors, dirty, touched }) => (
              <div className="ui middle aligned center aligned grid">
                <div className="column" style={{ marginTop: "10%" }}>
                  <h2 className="ui teal image header">
                    Product Data - Add product
                  </h2>

                  <Form className="ui large form">
                    <div className="ui stacked segment">
                      <div>
                        <div className="field">
                          <div className="ui left icon input">
                            <i class="suitcase icon"></i>
                            <Field
                              name="productName"
                              type="text"
                              placeholder="ProductName"
                              className={`${
                                errors.productName && touched.productName
                              } ? is-invalid : ''`}
                            />
                          </div>
                          <ErrorMessage
                            style={{ color: "red" }}
                            name="productName"
                            component="div"
                            className="ui pointing label invalid-feedback"
                          />
                        </div>
                        <div className="field">
                          <div className="ui left icon input">
                            <i class="file alternate icon"></i>
                            <Field
                              name="productDesc"
                              type="textarea"
                              placeholder="ProductDesc"
                              className={`${
                                errors.productDesc && touched.productDesc
                              } ? is-invalid : ''`}
                            />
                          </div>
                          <ErrorMessage
                            style={{ color: "red" }}
                            name="productDesc"
                            component="div"
                            className="ui pointing label invalid-feedback"
                          />
                        </div>
                      </div>
                      <div className="field">
                        <div className="ui left icon input">
                          <i class="industry icon"></i>
                          <Field
                            name="manufacturer"
                            type="text"
                            placeholder="manufacturer"
                            className={`${
                              errors.manufacturer && touched.manufacturer
                            } ? is-invalid : ''`}
                          />
                        </div>
                        <ErrorMessage
                          style={{ color: "red" }}
                          name="manufacturer"
                          component="div"
                          className="ui pointing label invalid-feedback"
                        />
                      </div>
                      <div className="field">
                        <div className="ui left icon input">
                          <i class="hashtag icon"></i>
                          <Field
                            name="quantity"
                            type="text"
                            placeholder="Quantity"
                            className={`${
                              errors.quantity && touched.quantity
                            } ? is-invalid : ''`}
                          />
                        </div>
                        <ErrorMessage
                          style={{ color: "red" }}
                          name="quantity"
                          component="div"
                          className="ui pointing label invalid-feedback"
                        />
                      </div>
                      <div className="field">
                        <div className="ui left icon input">
                          <i class="rupee sign icon"></i>
                          <Field
                            name="price"
                            type="text"
                            placeholder="Price"
                            className={`${
                              errors.price && touched.price
                            } ? is-invalid : ''`}
                          />
                        </div>
                        <ErrorMessage
                          style={{ color: "red" }}
                          name="price"
                          component="div"
                          className="ui pointing label invalid-feedback"
                        />
                      </div>
                      <Field
                        className="ui fluid large teal submit button"
                        type="submit"
                        name="Add Product"
                        value="Add Product"
                      />
                    </div>
                  </Form>
                </div>
                <Prompt when={dirty} message="Are you sure??" />
              </div>
            )}
          />
        </div>
      </div>
    );
}
export default connect(null, { addProduct })(AddProduct);