import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchProducts } from '../actions';
import ProductsList from './ProductsList';
import SearchField from './SearchField';

class AllProducts extends React.Component {

    state = {products: [], fullData: [], msg: ''};

    onSearchSubmit = (term) => {
        // this.
        if(term !== '') {
            let searchResults = this.state.fullData.filter((product) => {
                return product.productName.toLowerCase().includes(term.toLowerCase());
            });

            if(searchResults.length===0) {
                this.setState({ products: this.state.fullData, msg: 'No results Found Showing All Products' })
            } else {
                this.setState({ products: searchResults, msg: '' })
            }
            console.log(searchResults);
        }
    }

    async componentDidMount () {
        await this.props.fetchProducts();
        this.setState({ products:this.props.products, fullData: this.props.products })
        console.log(this.state.products);
    }
    render () {
        return (
            <div>
                <SearchField onTermSubmit={this.onSearchSubmit} />
                <p>{this.state.msg}</p>
                <ProductsList products={this.state.products} />
                <br/>
                <Link to="/addProduct">Add product</Link>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {products: state.products};
}

export default connect(mapStateToProps, { fetchProducts })(AllProducts);