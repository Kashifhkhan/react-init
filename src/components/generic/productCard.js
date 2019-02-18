import React, { Component } from 'react';
import SelectQuantity from './selectQuantity';

class ProductCard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props && this.props.product) {
            let { product } = this.props;
            console.log(product);
            return (
                <div>
                    <div className="product-line-item" data-product-line-item={product.UUID}>
                        {/* <div className="line-item-header">
        <isif condition=${miniCart}>
            <isinclude template="checkout/productCard/productCardProductNameAndRemove" />
        <iselse>
            <isinclude template="checkout/productCard/productCardProductName" />
        </isif>
    </div> */}


                        <div className="product-line-item-details d-flex flex-row">
                            <div className="item-image">
                                <img className="product-image"
                                    src={product.images.small[0].url}
                                    alt={product.images.small[0].alt}
                                    title={product.images.small[0].title} />
                            </div>
                            <div className="item-attributes">
                                {product.variationAttributes ? (
                                    product.variationAttributes.map((attr, i) => (
                                        <p className="line-item-attributes" key={i}>{attr.displayName} : {attr.displayValue}</p>
                                    ))
                                ) :
                                    ''
                                }
                                <div className="item-options">
                                    {product.options ? (
                                        product.options.map((opt, i) => (
                                            <div className="line-item-option" key={i}>{opt.displayName}</div>
                                        ))
                                    ) :
                                        ''
                                    }
                                </div>
                                {/* <isif condition="${(pdict.order && !pdict.order.orderStatus) || miniCart}">
                    <isinclude template="cart/productCard/cartProductCardAvailability" />
                </isif> */}
                                <div className={`line-item-availability availability-${product.UUID}`}>
                                    {
                                        product.availability.messages ? (
                                            product.availability.messages.map((msg, i) => (
                                                <p className="line-item-attributes" key={i}>{msg}</p>
                                            ))
                                        ) :
                                            ''
                                    }
                                    {
                                        product.availability.inStockDate ? (
                                            <p className="line-item-attributes line-item-instock-date">
                                                {product.availability.inStockDate}
                                            </p>
                                        ) :
                                            ''
                                    }
                                </div>
                            </div>
                        </div>

                        <div><hr className="line-item-divider" /></div>
                        {/* <isif condition="${lineItem.productType === 'bundle' && ((pdict.order && !pdict.order.orderStatus) || miniCart)}">
                            <isinclude template="cart/productCard/cartProductCardAvailability" />
                        </isif>
                            */}

                        <div className="row align-items-start">
                            <div className="col-4 line-item-unit-price">
                                {
                                    product.price ? (
                                        <p className="line-item-pricing-info">
                                            <span className="line-item-total-text unit-price-label">
                                                {/* ${Resource.msg('label.each.item.price', 'cart', null)} */}
                                                Price
                                            </span><br />
                                            <span>
                                                {
                                                    product.price.list ? (
                                                        <span className="strike-through list">
                                                            <span className="value" itemprop="price" content={product.price.list.decimalPrice}>
                                                                {product.price.list.decimalPrice.formatted}
                                                            </span>
                                                        </span>
                                                    ) :
                                                        ''
                                                }
                                                <span className="sales">
                                                    {product.price.sales.formatted}
                                                </span>
                                            </span>

                                        </p>
                                    ) :
                                        ''
                                }

                            </div>
                            <div className="col-4 line-item-quantity justify-content-center flex">
                                <SelectQuantity product={product} />


                            </div>
                            <div className="col-4 line-item-total-price justify-content-end">
                                <p className="line-item-pricing-info">
                                    <span className="line-item-total-text line-item-total-price-label">
                                        {/* ${Resource.msg('label.total.price', 'cart', null)} */}
                                        Total Price
                                        </span>
                                </p>
                                <div className={`item-total-${product.UUID} price`}>
                                    {/* <div className={`strike-through ${!product.priceTotal.nonAdjustedPrice} ? non-adjusted-price : '`} >
                                            ${product.priceTotal.nonAdjustedPrice}
                                        </div> */}
                                    <div className={`pricing line-item-total-price-amount item-total-${product.UUID}`}> {product.priceTotal.price} </div>
                                </div>
                            </div>
                        </div>
                        <div className={`line-item-promo item-${product.UUID}`}>
                            {
                                product.appliedPromotions ? (
                                    product.appliedPromotions.map((item, i) => (
                                        <div key={i}>{item.callOutMsg}</div>
                                    ))
                                ) : ''
                            }

                        </div>
                    </div>

                </div>
            );
        }
    }
}

export default ProductCard;