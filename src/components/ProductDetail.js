import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { useHistory, Link } from 'react-router-dom';

import { deleteProduct } from "../actions";

const ProductDetail = (props) => {

        let history = useHistory();
        const {
          id,
          productName,
          productDesc,
          manufacturer,
          quantity,
          price,
        } = props.product;

        useEffect(() => {
            document.title = productName;
        }, [productName]);
    
        function onDeleteClick(id) {
            props.deleteProduct(id);
            history.push("/products");
        }

    return (
      <div>
        <p>{id}</p>
        <p>{productName}</p>
        <p>{productDesc}</p>
        <p>{manufacturer}</p>
        <p>{quantity}</p>
        <p>{price}</p>
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
        <button onClick={() => onDeleteClick(id)}>Delete {productName}</button>
      </div>
    );
}

export default connect(null, { deleteProduct })(ProductDetail);