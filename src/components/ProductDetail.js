import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { useHistory, Link } from 'react-router-dom';

import { deleteProduct } from "../actions";
import { addProductToCart } from '../actions/userActions';

import './ProductDetail.css';

const ProductDetail = (props) => {

    const [pname, setpname] = useState(true)
    const [pprice, setpprice] = useState(true)
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

        function showPrompt() {

        }

        function showButtonsBasedOnAuth(userId) {
          const loggedUserId = parseInt(localStorage.getItem('id'));
          if (localStorage.getItem('id')!==null && loggedUserId === userId) {
            return (
              <div>
                <button>
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
                <button onClick={() => confirmDelete()}>
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
              <button
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
            pname ? <div>{productName}</div> : null
        );
        const disyplayDesc = (
            pdesc ? <div>{productDesc}</div> : null
        );
        const disyplayPrice = (
            pprice ? <div>{price}</div> : null
        );
        const disyplayManufacturer = (
            pmanuf ? <div>{manufacturer}</div> : null
        );
        const disyplayQuantity = (
            pquan ? <div>{quantity}</div> : null
        );
        const disyplayRating = (
            prating ? <div>{rating}</div> : null
        );

        function changepmanuf() {
          setpmanuf(!pmanuf)
        }
        function changepdesc() {
          setpdesc(!pdesc)
        }
        function changeprating() {
          setprating(!prating)
        }

    return (
      <div>
        <div className="boxes">
          <input type="checkbox" id="box-1" checked={pname} disabled />
          <label htmlFor="box-1"> Product name</label>

          <input type="checkbox" id="box-2" checked={pprice} disabled />
          <label htmlFor="box-2"> Price</label>

          <input
            type="checkbox"
            id="box-3"
            checked={pmanuf}
            onChange={changepmanuf}
          />
          <label htmlFor="box-3"> Manufacturer</label>

          <input
            type="checkbox"
            id="box-3"
            checked={pdesc}
            onChange={changepdesc}
          />
          <label htmlFor="box-3"> Description</label>

          <input
            type="checkbox"
            id="box-3"
            checked={prating}
            onChange={changeprating}
          />
          <label htmlFor="box-3"> Rating</label>
        </div>
        {disyplayName}
        {disyplayManufacturer}
        {disyplayDesc}
        {disyplayRating}
        {disyplayPrice}
        {disyplayQuantity}
        {showButtonsBasedOnAuth(userId)}
        {showAddCartButton()}
      </div>
    );
}

export default connect(null, { deleteProduct, addProductToCart })(
  ProductDetail
);