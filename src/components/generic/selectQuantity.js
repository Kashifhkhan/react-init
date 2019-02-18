import React, { Component } from 'react';
import { config } from "config";

class SelectQuantity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectValue: '1',
            array : [1,2,3,4,5,6,7,8,9,10]
        };
        this.createDom = this.createDom.bind(this);
        this.handleData = this.handleData.bind(this);

        
    }
    
    handleData(event) {
        this.setState({
            selectValue: event.target.value
        });
        this.props.onChange(event.target.value);
    }

    createDom() {
        // var optionVal = this.props.product.quantityOptions;     
        // Array.apply(optionVal.minOrderQuantity, Array(optionVal.maxOrderQuantity)).map((x,i) => (
        //     (<option key={i} value={i}> {i} </option>)
        // ))  
        var options = this.state.array.map(function (item,i) {
            return (<option key={i} value={item}> {item}  </option>)
        })
        return (
            <select value={this.state.selectValue} 
            onChange={this.handleData} className="form-control quantity custom-select"
            data-uuid={this.props.product.UUID}
            data-pid={this.props.product.id}
            data-action={`"${config}/Cart-UpdateQuantity"`}
            // data-pre-select-qty="${lineItem.quantity}"
            id="quantity"
            name="quantity"
            >
                {options}
            </select>
        );
    }

    render() {
        return (
            <div className="quantity-form">
                <label className="line-item-pricing-info quantity-label" htmlFor="quantity">
                {/* ${Resource.msg('field.selectquantity','cart',null)} */}
                Select Quantity
                </label>
                {this.createDom()}
            </div>
        )
    }
}

export default SelectQuantity;