import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { useHistory, Link } from 'react-router-dom';

import { deleteProduct } from "../actions";
import { addProductToCart } from '../actions/userActions';
import NavbarComponent from './ui-components/NavbarComponent';

import './ProductDetail.css';

const ProductDetail = (props) => {

    const [pdesc, setpdesc] = useState(false)
    const [prating, setprating] = useState(false)
    const [pmanuf, setpmanuf] = useState(false)
    const [pquan, setpquan] = useState(false)

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
              <button className="btn btn-success"
                onClick={() =>
                  addproductToUserCart(parseInt(localStorage.getItem('id')), id)
                }
              >
                Add to cart
              </button>
            );
          }
        }

        const disyplayName = (
            <div>{productName}</div>
        );
        const disyplayDesc = (
            pdesc ? <div>Description:{productDesc}</div> : null
        );
        const disyplayPrice = (
            <div>Rs:{price}</div>
        );
        const disyplayManufacturer = (
            pmanuf ? <div>Company: {manufacturer}</div> : null
        );
        const disyplayQuantity = (
            pquan ? <div>In Stock: {quantity}</div> : null
        );
        const disyplayRating = (
            prating ? <div>Rating: {rating}</div> : null
        );

        function changepmanuf() {
          setpmanuf(!pmanuf)
        }
        function changepdesc() {
          setpdesc(!pdesc);
        }
        function changeprating() {
          setprating(!prating);
        }
        function changepquan() {
          setpquan(!pquan)
        }

    return (
      <div>
        <NavbarComponent />
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-4">
              <div className="boxes">
                <input type="checkbox" id="box-1" checked disabled />
                <label htmlFor="box-1"> Product name</label>
                <br />
                <input type="checkbox" id="box-2" checked disabled />
                <label htmlFor="box-2"> Price</label>
                <br />
                <input
                  type="checkbox"
                  id="box-3"
                  checked={pmanuf}
                  onChange={changepmanuf}
                />
                <label htmlFor="box-3"> Manufacturer</label>
                <br />
                <input
                  type="checkbox"
                  id="box-3"
                  checked={pdesc}
                  onChange={changepdesc}
                />
                <label htmlFor="box-3"> Description</label>
                <br />
                <input
                  type="checkbox"
                  id="box-3"
                  checked={prating}
                  onChange={changeprating}
                />
                <label htmlFor="box-3"> Rating</label>
                <br />
                <input
                  type="checkbox"
                  id="box-3"
                  checked={pquan}
                  onChange={changepquan}
                />
                <label htmlFor="box-3"> quantity</label>
              </div>
            </div>
            <div className="col-sm-12 col-lg-6">
              <div className="productCard">
                {disyplayName}
                {disyplayManufacturer}
                {disyplayDesc}
                {disyplayRating}
                {disyplayPrice}
                {disyplayQuantity}
                {showButtonsBasedOnAuth(userId)}
                {showAddCartButton()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default connect(null, { deleteProduct, addProductToCart })(
  ProductDetail
);