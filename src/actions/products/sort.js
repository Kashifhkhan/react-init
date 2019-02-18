import { SORT_PRODUCTS } from '../const';

function sort(array, sortBy){    
    if (sortBy == "sale_price") {
        array.sort((a, b) => parseFloat(a.sale_price) - parseFloat(b.sale_price));
    } else if (sortBy == "new_product") {
        array.sort((a, b) => parseFloat(b.new_product) - parseFloat(a.new_product));
    } else if (sortBy == "topseller") {
        array.sort((a, b) => parseFloat(b.topseller) - parseFloat(a.topseller));
    } else if (sortBy == "highprice") {
        array.sort((a, b) => parseFloat(b.sale_price) - parseFloat(a.sale_price));
    } else if (sortBy == "rating") {
        array.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
    } else {
        array
    }
    console.log(array);
    
    return dispatch => {
        dispatch({type: SORT_PRODUCTS, payload: array})
    }
}

export default sort;