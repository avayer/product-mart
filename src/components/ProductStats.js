import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from "../actions";
import PieChart from './PieChart';
import VerticalBarChart from './VerticalBarChart';

const ProductStats = (props) => {

  const [view, setView] = useState('');

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

function content() {
    switch(view) {
      case 'bar':
        return <VerticalBarChart labels={labelData} values={values} colors={colors} />
      case 'pie':
        return <PieChart labels={labelData} values={values} colors={colors} />
      default:
        return <div>select a view to see product statistics</div>;
    }
}

function handleChange(e) {
  setView(e.target.value);
}

  return (
    <div>
      <select onChange={handleChange} name="charts">
        <option disabled selected>select a chart</option>
        <option value="bar">Bar chart</option>
        <option value="pie">Pie Chart</option>
      </select>
      {content()}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { products: state.products };
}

export default connect(mapStateToProps, { fetchProducts })(ProductStats);