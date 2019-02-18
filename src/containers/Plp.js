import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import actions from "actions";
import Product from '../components/products/GetProducts';
import SortContainer from './sortContainer';

class Plp extends React.Component {
  constructor(props) {
    super(props);  
    this.state = { products: this.props.products }
  }

  componentWillMount(){   
    this.props.actions.getProducts(); 
  }

  // componentWillReceiveProps() {
  //   this.props.actions.getProducts();
  // }

  render() {
    let { products } = this.state;

    console.log(this.state,"....");

    if(products.length > 0) {
      return (<div className="container plp-main-wrapper">
        <div className="header-sort justify-content-end">  
          <SortContainer />
        </div>
        <br/>
        
        <div className="row">
          {products.map(product => (
            <div className="col-lg-4 col-md-6 mb-4" key={product.id}>
              <Product {...product} />
            </div>
          ))}
        </div>
        
      </div>);
    }
    else {
      return (
        <div>No records Found!</div>
      );
    }
    
  }
}

function mapStateToProps(state) {
  return {
    products:  state.products.list
  };
}

function mapDispatchToProps(dispatch) {
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Plp);