import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from "../actions";
import PieChart from './PieChart';
import VerticalBarChart from './VerticalBarChart';
import NavbarComponent from "./ui-components/NavbarComponent";

const ProductStats = (props) => {

  const [view, setView] = useState('bar');

  useEffect(() => {
    props.fetchProducts();
  }, []);

  let labelData = [];
  let values = [];
  let colors = [
    "rgba(255, 99, 132)",
    "rgba(54, 162, 235)",
    "rgba(255, 206, 86)",
    "rgba(75, 192, 192)",
    "rgba(153, 102, 255)"
  ];

 const sortedProducts = props.products.sort(function (a, b) {
   return b.count - a.count;
 })

 sortedProducts.slice(0, 5).map((product)=>{
   labelData.push(product.productName)
   values.push(product.count)
 })

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
    <NavbarComponent />
      <select onChange={handleChange} name="charts" className="ui fluid dropdown"  style={{'marginTop': '5px', 'width': '40%'}}>
        <option disabled>select a chart</option>
        <option value="bar" defaultValue>Bar chart</option>
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