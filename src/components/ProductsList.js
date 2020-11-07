import React from 'react';
import { Grid } from 'semantic-ui-react';

import Product from './Product';

const ProductsList = (props) => {

    const renderedProducts = props.products.map((product) => {
        return <Product key={product.id} product={product} />
    })

    return (
        <Grid columns={4} stackable style={{'marginLeft': '200px '}}>
            {renderedProducts}
        </Grid>
    );
}

export default ProductsList;