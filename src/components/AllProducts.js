import React from 'react';
import { connect } from 'react-redux';

import { fetchProducts } from '../actions';
import ProductsList from './ProductsList';
import SearchField from './SearchField';
import NavbarComponent from "./ui-components/NavbarComponent";
import './AllProducts.css';

class AllProducts extends React.Component {
  state = {
    products: [],
    msg: "",
    showManuf: false,
    showRating: false,
    showQuan: false,
  };

  onSearchSubmit = (term) => {
    console.log(term);
    if (term !== "") {
      let searchResults = this.props.products.filter((product) => {
        return product.productName.toLowerCase().startsWith(term.toLowerCase());
      });
      console.log(searchResults);

      if (searchResults.length === 0) {
        this.setState({
          products: this.props.products,
          msg: "No results Found Showing All Products",
        });
      } else {
        this.setState({ products: searchResults, msg: "showing results" });
      }
    } else {
      this.setState({ products: this.props.products, msg: "" });
    }
  };

  async componentDidMount() {
    document.title = "Product Mart | Inventory";
    await this.props.fetchProducts();
    this.setState({ products: this.props.products });
  }

  changepmanuf = async () => {
    await this.setState({ showManuf: !this.state.showManuf });
  };
  changeprating = async () => {
    await this.setState({ showRating: !this.state.showRating });
  };
  changepquan = async() => {
    await this.setState({ showQuan: !this.state.showQuan });
  };

  render() {
    return (
      <div>
        <NavbarComponent />
        <SearchField onTermSubmit={this.onSearchSubmit} />
        <h3>Customization</h3>
        <label class="container-checkbox">Manufacturer
          <input type="checkbox" onChange={this.changepmanuf} />
          <span class="checkmark"></span>
        </label>
        <label class="container-checkbox">Rating
          <input type="checkbox" onChange={this.changeprating} />
          <span class="checkmark"></span>
        </label>
        <label class="container-checkbox">Quantity
          <input type="checkbox" onChange={this.changepquan} />
          <span class="checkmark"></span>
        </label>
        <p style={{ textAlign: "center", marginTop: "10px" }}>
          {this.state.msg}
        </p>
        <ProductsList
            products={this.state.products}
            showManuf={this.state.showManuf}
            showRating={this.state.showRating}
            showQuan={this.state.showQuan}
        />
        <br />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {products: state.products};
}

export default connect(mapStateToProps, { fetchProducts })(AllProducts);