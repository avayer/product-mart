import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from "../actions";
import PieChart from './PieChart';
import VerticalBarChart from './VerticalBarChart';

const ProductStats = (props) => {

  useEffect(() => {
    props.fetchProducts();
  }, []);

  let labelData = [];
  let values = [];
  let colors = [];

  props.products.forEach((product) => {
    labelData.push(product.productName);
    values.push(product.count);
    colors.push(randomColor());
    return;
  });

  function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }

  return (
    <div>
      <VerticalBarChart labels={labelData} values={values} colors={colors} />
      <PieChart labels={labelData} values={values} colors={colors} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { products: state.products };
}

export default connect(mapStateToProps, { fetchProducts })(ProductStats);