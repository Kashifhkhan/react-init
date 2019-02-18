import React, { Component } from 'react';

class CheckoutButtons extends Component {
    render() {
        return (
            <div>
                {/* Dynamic Values

                    var url = ${URLUtils.https('Checkout-Login')};

                    error class condition
                    var class = ${pdict.valid.error ? 'disabled' : ''}

                    checkout text 
                    var checkout = ${Resource.msg('button.checkout','cart',null)}
                */}
                <a href="url" className="btn btn-primary btn-block checkout-btn class"
                    role="button" aria-pressed="true">
                        Checkout
                </a>
            </div>
        );
    }
}

export default CheckoutButtons;
