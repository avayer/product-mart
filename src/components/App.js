import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AddProduct from './AddProduct';
import AllProducts from './AllProducts';
import EditProduct from './EditProduct';
import Landing from './Landing';
import LoginPage from './LoginPage';
import NoPageFound from './NoPageFound';
import ProductDetail from './ProductDetail';
import ProductStats from './ProductStats';
import RegisterPage from './RegisterPage';
import MyProducts from "./MyProducts";
import ProfilePage from './ProfilePage';
import Cart from './Cart';

const App = () => {

    return (
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/products" component={AllProducts} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/addProduct" component={AddProduct} />
          <Route path="/myproducts" component={MyProducts} />
          <Route path="/cart" component={Cart} />
          <Route path="/myprofile" render={(props)=>{
            return <ProfilePage userId={props.location.userProps.id} />
          }} />
          <Route
            exact
            path="/products/edit"
            render={(props) => {
              return <EditProduct product={props.location.productProps} />;
            }} />
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