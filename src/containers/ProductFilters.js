import React, { Component } from "react";
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';

import actions from "actions";
import { sortBy } from '../actions/products/filters';

class ProductFilters extends React.Component {
    constructor(props) {
        super(props);
    }
  
  componentDidMount() {
    // this.props.dispatch(actions.getProducts());
  }

  render() {
    const { products } = this.props;

    return(
        <div style={{ float: 'right' }}>
            Sort By:&nbsp;
            <select
                value={this.props.filters.sortBy}
                onChange={(e) => {
                    this.props.sortBy(e.target.value);
                }}>
                <option value='none'>---</option>
                <option value='price_low_to_high'>Price- low to high</option>
                <option value='price_high_to_low'>Price- high to low</option>
                <option value='newest'>Newest</option>
                <option value='top_rated'>Top rated</option>
                <option value='top_seller'>Top seller</option>
            </select>
        </div>
    );
  }
}

function mapStateToProps(state) {
    console.log("state.products.list");
    console.log(state.products.list);

    return {
        products: state.products.list,
        filters: state.filters
    }
}

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch){
    return bindActionCreators({sortBy: sortBy}, dispatch);
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(ProductFilters);