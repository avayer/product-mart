import React,{ Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import AddProduct from './AddProduct';
import EditProduct from './EditProduct';
import Landing from './Landing';
import NoPageFound from './NoPageFound';
import ProductDetail from './ProductDetail';
import ProductStats from './ProductStats';
import MyProducts from "./MyProducts";
import ProfilePage from './ProfilePage';
import Cart from './Cart';
import Spinner from './ui-components/Spinner';
import { Container } from 'semantic-ui-react';

const AllProducts = lazy(()=>import('./AllProducts'));
const LoginPage = lazy(()=>import('./LoginPage'));
const RegisterPage = lazy(()=>import('./RegisterPage'));

const App = () => {

    return (
      <Container>
        <Suspense fallback={<div><Spinner /></div>}>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/products" component={AllProducts} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/addProduct" component={AddProduct} />
            <Route path="/myproducts" component={MyProducts} />
            <Route path="/cart" component={Cart} />
            <Route
              path="/myprofile"
              render={(props) => {
                return (
                  <ProfilePage userId={parseInt(localStorage.getItem("id"))} />
                );
              }}
            />
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
        </Suspense>
      </Container>
    );
}

export default App;