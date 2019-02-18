import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Select from 'react-select';
import "./style.scss";
import actions from "actions";

class SortComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedOption: ''};
    this.state.isSelected = false;    
    this.options = [
      { value: 'sale_price', label: 'Price (low - high)' },
      { value: 'new_product', label: 'Newest' },
      { value: 'topseller', label: 'Top Sellers' },
      { value: 'highprice', label: 'Price (high - low)' },
      { value: 'rating', label: 'Customer Top Rated' },
    ];
    this.handleChange = this.handleChange.bind(this);

    this.productlist = this.props.products;
  }
   

  handleChange(selectedOption) {
    this.state.isSelected = true;
    this.setState({ selectedOption }); 
    this.props.actions.sort(this.productlist, selectedOption.value)   
  } 

  render() {
    const { selectedOption } = this.state;
    return (
        <div className="sortmenu-wrapper">
           <Select
              placeholder="SORT BY"
              value={selectedOption}
              onChange={this.handleChange}
              isSearchable={false}
              options={this.options}
              styles={this.customStyles}
              theme={(theme) => ({
                ...theme,
                borderRadius: 0,
                colors: {
                ...theme.colors,
                  primary: 'black',
                  primary75: 'grey',
                  primary50: 'lightgrey',
                  primary25: 'lightgrey',
                },
              })}              
            />                    
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products:  state.products.list
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(SortComponent);
