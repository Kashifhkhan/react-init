import React from "react";
// import ReportingUrls from "./reportingUrls";
import  ProductCard  from "./productCard";
import CheckoutButtons from "./checkoutButtons";

class MiniCartPopover extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props && this.props.popoverData) {
            let { popoverData } = this.props;
            return (
                <div className="container cart">
                    {/* <ReportingUrls /> */}
                    <div>
                        <div className="row">
                            <div className="col-6">
                                <h4> {popoverData.customData.cartText} </h4>
                            </div>
                            <div className="col-6 text-right">
                                <a className="normal" href={popoverData.customData.Url} title={popoverData.customData.viewText}>
                                    {popoverData.customData.viewText}
                                </a>
                            </div>
                        </div>
                        <div className="minicart-error cart-error">
                            { popoverData.data.valid.error && popoverData.data.items.length !== 0 ? (
                                <div className="alert alert-danger alert-dismissible valid-cart-error fade show" role="alert">
                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                    {popoverData.data.valid.message}
                                </div>)
                               :
                               '' 
                            }
                        </div>
                        <div className="product-summary">                        
                            {
                                popoverData.data.items.map((item) => (
                                    <div className="row" key={item.id}>
                                        <div className="col-12">
                                            {item.bonusProductLineItemUUID === 'bonus' ? (
                                                <div className={`card bonus-product-line-item uuid-${item.UUID}`}>
                                                    <div className="card-body">
                                                        {/* <isinclude template="checkout/productCard/bonusProductCard" /> */}
                                                        <p>                                                            
                                                            {item.productName}
                                                        </p>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className={`card uuid-${item.UUID}`}>
                                                    <div className="card-body">
                                                        {/* <isinclude template="checkout/productCard/productCard" /> */}
                                                        <ProductCard product={item} />                                                        
                                                    </div>
                                                </div>
                                            )
                                            }                                           
                                        </div>
                                    </div>
                                ))
                            }                            
                        </div>                           
                    </div>
                    <div className="minicart-footer">
                        <div className="row estimated-total">
                            <div className="col-8">
                                <p className="sub-total-label">
                                {/* ${Resource.msg('label.estimatedtotal','cart',null)} */}
                                Estimated Total
                                </p>
                            </div>
                            <div className="col-4">
                                <p className="text-right sub-total">{popoverData.data.totals.subTotal}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 checkout-continue">
                                <CheckoutButtons urlData={popoverData.data} />
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <h1>Data not found !!!</h1>
            )
        }
    }
}

export default MiniCartPopover;