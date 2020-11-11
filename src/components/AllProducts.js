import React from 'react';
import { connect } from 'react-redux';

import { fetchProducts } from '../actions';
import ProductsList from './ProductsList';
import SearchField from './SearchField';
import NavbarComponent from "./ui-components/NavbarComponent";

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
        <div className="customizationCheckboxes" style={{'textAlign': 'center', 'marginTop': '20px'}}>
          <input type="checkbox" id="box-3" onChange={this.changepmanuf} />
          <label htmlFor="box-3"> Manufacturer</label>
          <input type="checkbox" id="box-3" onChange={this.changeprating} />
          <label htmlFor="box-3"> Rating</label>
          <input type="checkbox" id="box-3" onChange={this.changepquan} />
          <label htmlFor="box-3"> quantity</label>
        </div>
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