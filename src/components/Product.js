import React from 'react';
import { connect } from 'react-redux';
import {  Link } from 'react-router-dom';
import { Grid, Card, Button } from 'semantic-ui-react';

import { updateViewCount } from '../actions';

const Product = (props) => {

   const {
     productName,
     manufacturer,
     price,
     rating,
     quantity,
   } = props.product;

    const onViewClick = (product) => {
        props.updateViewCount(product)
    }

    const extra = (
      <Button onClick={() => onViewClick(props.product)}>
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
      </Button>
    );
    
    const disyplayManufacturer = props.showManuf ? (
      <li class="list-group-item">Company: {manufacturer}</li>
    ) : null;
    const disyplayQuantity = props.showQuan ? (
      <li class="list-group-item">In Stock: {quantity}</li>
    ) : null;
    const disyplayRating = props.showRating ? (<li class="list-group-item">Rating: {rating}</li> ): null;

    return (
      <Grid.Column>
        <div class="card" style={{ width: "18rem" }}>
          <img
            class="card-img-top"
            src="https://via.placeholder.com/150"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">{productName}</h5>
          </div>
          <ul class="list-group list-group-flush">
            {disyplayManufacturer}
            {disyplayRating}
            {disyplayQuantity}
            <li class="list-group-item">Rs: {price}</li>
          </ul>
          <div class="card-body">{extra}</div>
        </div>
      </Grid.Column>
    );
}

export default connect(null, { updateViewCount })(Product);

        // <Card
        //   image="https://via.placeholder.com/150"
        //   header={productName}
        //   meta={manufacturer}
        //   description={`Rs ${price}`}
        //   extra={extra}
        // />;