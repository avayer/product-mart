import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Landing = () => {

  let history = useHistory();
  const renderAuthButton = () => {
    if (localStorage.getItem("username") === null) {
      return (
        <div>
          <Link to="/products">Products</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      );
    } else {
      return (
         <div>
         <p>{}</p>
          <Link to="/products">Products</Link>
          <Link to="/productStats">Products-Statistics</Link>
          <button onClick={()=>logout()}>Logout</button>
        </div>       
      );
    }
  };

    function logout() {
      localStorage.clear();
      history.push('/')
    }

    return (
      <div>
        <h1>Products Mart</h1>
        {renderAuthButton()}
      </div>
    );
}

export default Landing;