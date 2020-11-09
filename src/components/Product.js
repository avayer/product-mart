import React from 'react';
import { connect } from 'react-redux';
import {  Link } from 'react-router-dom';
import { Grid, Card, Button } from 'semantic-ui-react';

import { updateViewCount } from '../actions';

const Product = (props) => {

   const {
     productName,
     productDesc,
     manufacturer,
     price,
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
    

    return (
      <Grid.Column>
        <Card
          image="https://via.placeholder.com/150"
          header={productName}
          meta={manufacturer}
          description={`Rs ${price}`}
          extra={extra}
        />
      </Grid.Column>
    );
}

export default connect(null, { updateViewCount })(Product);