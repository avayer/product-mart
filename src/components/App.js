import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';

import AddProduct from './AddProduct';
import AllProducts from './AllProducts';
import EditProduct from './EditProduct';
import NoPageFound from './NoPageFound';
import ProductDetail from './ProductDetail';
import ProductStats from './ProductStats';

const App = () => {
    return (
      <div>
        {/* <NavLink activeClassName="active" to="/">Home</NavLink> */}
        <NavLink activeClassName="active" to="/products">
          Products
        </NavLink>
        <NavLink activeClassName="active" to="/productStats">
          Products-Statistics
        </NavLink>
        {/* <NavLink activeClassName="active" to="/about">About</NavLink> */}

        <Switch>
          {/* <Route exact path="/" component={landing} /> */}
          <Route exact path="/products" component={AllProducts} />
          <Route path="/addProduct" component={AddProduct} />
          <Route
            exact
            path="/products/edit"
            render={(props) => {
              return <EditProduct product={props.location.productProps} />;
            }}
          />
          <Route
            path="/products/:name"
            render={(props) => {
              return <ProductDetail product={props.location.productProps} />;
            }}
          />
          <Route path="/productStats" component={ProductStats} />
          <Route component={NoPageFound} />
        </Switch>
      </div>
    );
}

export default App;