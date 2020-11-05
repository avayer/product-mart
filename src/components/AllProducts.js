import React from 'react';
import { connect } from 'react-redux';

import { fetchProducts } from '../actions';
import ProductsList from './ProductsList';
import SearchField from './SearchField';

class AllProducts extends React.Component {

    state = {products: [], msg: ''};

    onSearchSubmit = (term) => {
        console.log(term)
        if(term !== '') {
            let searchResults = this.props.products.filter((product) => {
                return product.productName.toLowerCase().includes(term.toLowerCase());
            });
            console.log(searchResults);

            if(searchResults.length===0) {
                this.setState({ products: this.props.products, msg: 'No results Found Showing All Products' })
            } else {
                this.setState({ products: searchResults, msg: 'showing results' })
            }
        }else {
            this.setState({ products: this.props.products, msg: '' });
        }
    }

    async componentDidMount () {
        document.title = "Product Mart | Inventory";
        await this.props.fetchProducts();
        this.setState({ products:this.props.products });
    }

    render () {
        return (
            <div>
                <SearchField onTermSubmit={this.onSearchSubmit} />
                <p>{this.state.msg}</p>
                <ProductsList products={this.props.products} />
                <br/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {products: state.products};
}

export default connect(mapStateToProps, { fetchProducts })(AllProducts);