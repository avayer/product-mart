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
            <Item.Image src="https://raw.githubusercontent.com/Semantic-Org/Semantic-UI-React/master/docs/public/images/image-16by9.png" />
            <Item.Content>
              <Item.Header as="a">Content Header</Item.Header>
              <Item.Meta>
                <span>Date</span>
                <span>Category</span>
              </Item.Meta>
              <Item.Description>
                A description which may flow for several lines and give context
                to the content.
              </Item.Description>
              <Item.Extra>
                <Image
                  avatar
                  circular
                  src="/images/wireframe/square-image.png"
                />
                Username
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