import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import { updateViewCount, deleteProduct } from "../actions";

const style = {
  'color' : 'white'
}

const ShowUserProducts = (props) => {
    let history = useHistory();

    const onViewClick = (product) => {
        props.updateViewCount(product);
    };

    function onDeleteClick(id) {
      console.log(id);
      props.deleteProduct(id);
      history.push("/products");
    }

    function confirmDelete(id) {
      var result = window.confirm("Are you sure you want to delete?");
      if (result) {
        onDeleteClick(id);
      }
    }

    useEffect(()=> {
        if(localStorage.getItem('id')===null) history.push('/');
    })
    const renderedProducts = props.products.map((product)=>{

        return (
          <div className="col-lg-3" style={{'marginTop': '5px '}}>
            <div
              className="card"
              style={{ width: "18rem", textAlign: "center" }}
            >
              <img
                src="https://www.humanperformancehub.co.uk/wp-content/uploads/test-product.png"
                className="card-img-top"
                alt="productImg"
              />
              <div className="card-body">
                <h5 className="card-title">{product.productName}</h5>
                <p className="card-text">{product.price}</p>
                <div class="btn-group" role="group" aria-label="button-group">
                  <button
                    className="btn btn-primary"
                    onClick={() => onViewClick(product)}
                  >
                    <Link
                      style={style}
                      to={{
                        pathname: "/products/" + product.productName,
                        productProps: {
                          ...product,
                        },
                      }}
                    >
                      View
                    </Link>
                  </button>
                  <button className="btn btn-warning">
                    <Link
                      style={style}
                      to={{
                        pathname: "/products/edit",
                        productProps: {
                          ...product,
                        },
                      }}
                    >
                      Edit
                    </Link>
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => confirmDelete(product.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
    })
    return (
        <div className="row">
            {renderedProducts}
        </div>
    );
};

export default connect(null, { updateViewCount, deleteProduct })(
  ShowUserProducts
);