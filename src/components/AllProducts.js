import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchProducts } from '../actions';
import ProductsList from './ProductsList';

class AllProducts extends React.Component {
    componentDidMount () {
        this.props.fetchProducts();
    }
    render () {
        console.log(this.props.products);
        return (
            <div>
                <ProductsList products={this.props.products} />
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