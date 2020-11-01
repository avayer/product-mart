import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import { addProduct } from '../actions';

const AddProduct = (props) => {
    let history = useHistory();

    useEffect(()=> {
        props.addProduct({
            id: Math.floor(Math.random() * 100) + 1,
            productName: "Redgear Dragonwar",
            productDesc: "Gaming Mouse",
            manufacturer: "Redgear",
            quantity: 5,
            price: 600
        })
        history.push("/products");
    });

    return (
        <div>
            addProduct
        </div>
    );
}
export default connect(null, { addProduct })(AddProduct);