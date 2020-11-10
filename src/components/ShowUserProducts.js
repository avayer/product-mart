import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Item, Image } from "semantic-ui-react";

import { updateViewCount } from "../actions";

const ShowUserProducts = (props) => {
    let history = useHistory();

    const onViewClick = (product) => {
        props.updateViewCount(product);
    };


    useEffect(()=> {
        if(localStorage.getItem('id')===null) history.push('/');
    })
    const renderedProducts = props.products.map((product)=>{

        return (
          <Item>
            <Item.Image
              size="small"
              src="https://raw.githubusercontent.com/Semantic-Org/Semantic-UI-React/master/docs/public/images/wireframe/image.png"
            />
            <Item.Content>
              <Item.Header as="a">{product.productName}</Item.Header>
              <Item.Meta>
                <span>{product.manufacturer}</span>
              </Item.Meta>
              <Item.Description>{product.productDesc}</Item.Description>
              <Item.Extra>
                {product.price}
                <Link
                  to={{
                    pathname: "/products/" + product.productName,
                    productProps: {
                      ...product,
                    },
                  }}
                >
                  View
                </Link>
              </Item.Extra>
            </Item.Content>
          </Item>
        );
    })
    return (
        <div>
            {renderedProducts}
        </div>
    );
};

export default connect(null, { updateViewCount })(ShowUserProducts);