import React from 'react';
import { connect } from 'react-redux';
import {  Link } from 'react-router-dom';

import { updateViewCount } from '../actions';

const Product = (props) => {

    const onViewClick = (product) => {
        props.updateViewCount(product)
    }

    const {id, productName, productDesc, manufacturer, quantity, price, } = props.product;

    return (
      <div>
        <p>{id}</p>
        <p>{productName}</p>
        <p>{productDesc}</p>
        <p>{manufacturer}</p>
        <p>{quantity}</p>
        <p>{price}</p>
        <button onClick={()=>onViewClick(props.product)}>
          <Link
            to={{
              pathname: "/products/" + productName,
              productProps: {
                ...props.product,
              },
            }}
          >
            View
          </Link>
        </button>
      </div>
    );
}

export default connect(null, { updateViewCount })(Product);