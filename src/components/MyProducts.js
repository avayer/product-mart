import React from "react";
import { connect } from "react-redux";
import { Container, Item } from "semantic-ui-react";

import { fetchProducts } from "../actions";
import ShowUserProducts from './ShowUserProducts';
import NavbarComponent from "./ui-components/NavbarComponent";

class MyProducts extends React.Component {

  async componentDidMount() {
    document.title = "My Products | Product Mart | Inventory";
    await this.props.fetchProducts();
  }


  render() {
    return (
      <div>
      <NavbarComponent />
        <div className="container">
            <ShowUserProducts products={this.props.products} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    const id = parseInt(localStorage.getItem("id"));
    return { products: state.products.filter(product => product.userId===id) };
};

export default connect(mapStateToProps, { fetchProducts })(MyProducts);
