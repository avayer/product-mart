import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';    
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col
} from "reactstrap";

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
          <Row key={product.id}>
            <Col sm="12">
              <Card>
                <CardImg top width="50%" height="50%" src={product.url} />
                <CardBody>
                  <CardTitle tag="h5">{product.productName}</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">
                    {product.manufacturer}
                  </CardSubtitle>
                  <CardText>{product.productDesc}</CardText>
                  <CardText>Rs.{product.price}</CardText>
                  <Button onClick={() => onViewClick(product)}>
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
                  </Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        );
    })
    return (
        <div>
            {renderedProducts}
        </div>
    );
};

export default connect(null, { updateViewCount })(ShowUserProducts);