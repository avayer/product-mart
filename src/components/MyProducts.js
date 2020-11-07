import React from "react";
import { connect } from "react-redux";
import { Container, Item } from "semantic-ui-react";

import { fetchProducts } from "../actions";
import ShowUserProducts from './ShowUserProducts';

class MyProducts extends React.Component {

  async componentDidMount() {
    document.title = "My Products | Product Mart | Inventory";
    await this.props.fetchProducts();
  }


  render() {
    return (
      <Container>
        <Item.Group divided>
          <ShowUserProducts products={this.props.products} />
        </Item.Group>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
    const id = parseInt(localStorage.getItem("id"));
    return { products: state.products.filter(product => product.userId===id) };
};

export default connect(mapStateToProps, { fetchProducts })(MyProducts);
