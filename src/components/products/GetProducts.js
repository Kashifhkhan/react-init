import React from 'react';
import { connect } from 'react-redux';

const Product = ({ id, new_product, name, rating, price, sale_price, topseller,  dispatch }) => (
    <div className="card h-100">
        <a href="#"><img className="card-img-top" src="http://placehold.it/250x250" alt="{name}" /></a>
        <div className="card-body">
            <p>Pkg Date {new_product}</p>
            <p>Rating {rating}</p>
            <p>Orders {topseller}</p>
            <h4 className="card-title">
            <a href="#">{name}</a>
            </h4>
            <h5>${sale_price}</h5>
            <p>{price}</p>
        </div>
        <div className="card-footer">
            <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
        </div>
    </div>
   
);

export default connect()(Product);