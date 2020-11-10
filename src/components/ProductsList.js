import React from 'react';
import { Grid, Container } from 'semantic-ui-react';

import Product from './Product';

const ProductsList = (props) => {

    const renderedProducts = props.products.map((product) => {
        return <Product key={product.id} product={product} />
    })

    return (
      <Container>
        <Grid centered columns={3} stackable>
          {renderedProducts}
        </Grid>
      </Container>
    );
}

export default ProductsList;