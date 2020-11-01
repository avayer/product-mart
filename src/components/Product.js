import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { deleteProduct } from '../actions';

const Product = (props) => {

    let history = useHistory();

    const {id, productName, productDesc, manufacturer, quantity, price, } = props.product;
    
    function onDeleteClick(id) {
        props.deleteProduct(id);
        history.push('/products');
    }

    return (
        <div>
            <p>{ id }</p>
            <p>{ productName }</p>
            <p>{ productDesc }</p>
            <p>{ manufacturer }</p>
            <p>{ quantity }</p>
            <p>{ price }</p>
    <button onClick={()=>onDeleteClick(id)}>Delete { productName }</button>
        </div>
    );
}

export default connect(null, { deleteProduct })(Product);