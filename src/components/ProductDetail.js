import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { useHistory, Link } from 'react-router-dom';

import { deleteProduct } from "../actions";
import { addProductToCart } from '../actions/userActions';
import NavbarComponent from './ui-components/NavbarComponent';

import './ProductDetail.css';

const ProductDetail = (props) => {

        let history = useHistory();
        const {
          id,
          productName,
          productDesc,
          manufacturer,
          quantity,
          price,
          userId,
          rating
        } = props.product;

        useEffect(() => {
            document.title = productName;
        }, [productName]);
    
        function onDeleteClick(id) {
          console.log(id)
            props.deleteProduct(id);
            history.push("/products");
        }

        function addproductToUserCart(userId, productId) {
          props.addProductToCart(userId, productId);
          history.push('/');
        }

        function showButtonsBasedOnAuth(userId) {
          const loggedUserId = parseInt(localStorage.getItem('id'));
          if (localStorage.getItem('id')!==null && loggedUserId === userId) {
            return (
              <div>
                <button className="btn btn-warning">
                  <Link
                    to={{
                      pathname: "/products/edit",
                      productProps: {
                        ...props.product,
                      },
                    }}
                  >
                    Edit
                  </Link>
                </button>
                <button className="btn btn-danger" onClick={() => confirmDelete()}>
                  Delete {productName}
                </button>
              </div>
            );
          } else {
            return <div></div>
          }
        }

        function confirmDelete() {
          var result = window.confirm("Are you sure you want to delete?");
          if (result) {
            onDeleteClick(id);
          }
        }

        function showAddCartButton() {
          if(localStorage.getItem('id')!==null) {
            return (
              <button className="btn btn-success adc"
                onClick={() =>
                  addproductToUserCart(parseInt(localStorage.getItem('id')), id)
                }
              >
                Add to cart
              </button>
            );
          }
        }

    return (
      <div>
        <NavbarComponent />
        <div className="container">
          <div className="box">
            <div className="product-img">
              <img
                src="http://images.ifun.de/wp-content/uploads/2015/09/fire-tablet-500.jpg"
                width="250"
                alt=""
              />
            </div>
            <div className="product-info">
              <h1>{productName}</h1>
              <p>
                <strong>Rs. {price}</strong>
              </p>
              <p>
                <i className="info circle icon"></i>
                {productDesc}.
              </p>
              <br />
              <p>
                <i class="hashtag icon"></i>In stock: {quantity}
              </p>
              <br />
              <p>
                <i class="star outline icon"></i>
                {rating}
              </p>
              <br />
              <br />
              {showAddCartButton()}
            </div>
          </div>
        </div>
      </div>
    );
}

export default connect(null, { deleteProduct, addProductToCart })(
  ProductDetail
);