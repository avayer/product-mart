import React from 'react';

import Product from './Product';

const ProductsList = (props) => {

    const renderedProducts = props.products.map((product) => {
        return <Product key={product.id} product={product} />
    })

    return (
        <div>
            {renderedProducts}
        </div>
    );
}

export default ProductsList;