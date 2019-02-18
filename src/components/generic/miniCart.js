import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import actions from "actions";
import MiniCartPopover from "./miniCart-popover";

class MiniCart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHovering: false,
        };       
        this.handleMouseHover = this.handleMouseHover.bind(this);
    }

    handleMouseHover(){
        this.setState( this.toggleMenu );        
        // this.props.actions.getMinicartShow();
        this.props.actions.getMinicartPopover();
    }

    toggleMenu(state){
        return { 
            isHovering : !state.isHovering
        }
    }

    componentWillMount() {
        this.props.actions.getMinicart();
        // this.props.actions.getMinicartShow();
    }

    // componentDidMount(){        

        // if(this.state.isHovering){           
        // $('.minicart').on('count:update', function (event, count) {
        //     if (count && $.isNumeric(count.quantityTotal)) {
        //         $('.minicart .minicart-quantity').text(count.quantityTotal);
        //     }
        // });
    
        // // $('.minicart').on('mouseenter focusin touchstart', function () {
        //     if ($('.search:visible').length === 0) {
        //         return;
        //     }
        //     var url = $('.minicart').data('action-url');
        //     var count = parseInt($('.minicart .minicart-quantity').text(), 10);
    
        //     // if (count !== 0 && $('.minicart .popover.show').length === 0) {
        //     //     $('.minicart .popover').addClass('show');
        //     //     $('.minicart .popover').spinner().start();
        //     //     $.get(url, function (data) {
        //     //         $('.minicart .popover').empty();
        //     //         $('.minicart .popover').append(data);
        //     //         $.spinner().stop();
        //     //     });
        //     // }
        // // });
        // $('body').on('touchstart click', function (e) {
        //     if ($('.minicart').has(e.target).length <= 0) {
        //         $('.minicart .popover').empty();
        //         $('.minicart .popover').removeClass('show');
        //     }
        // });
        // // $('.minicart').on('mouseleave focusout', function (event) {
        // //     if ((event.type === 'focusout' && $('.minicart').has(event.target).length > 0)
        // //         || (event.type === 'mouseleave' && $(event.target).is('.minicart .quantity'))
        // //         || $('body').hasClass('modal-open')) {
        // //         event.stopPropagation();
        // //         return;
        // //     }
        // //     $('.minicart .popover').empty();
        // //     $('.minicart .popover').removeClass('show');
        // // });
        // $('body').on('change', '.minicart .quantity', function () {
        //     if ($(this).parents('.bonus-product-line-item').length && $('.cart-page').length) {
        //         location.reload();
        //     }
        // });
    // }

    render() {    
        if (this.props.data && this.props.data.minicart.qty > 0) {
            let { qty, title, url } = this.props.data.minicart;
            return (
                <>
                    <div className="minicart-total hide-link-med" 
                    onMouseEnter={this.handleMouseHover}
                    onMouseLeave={this.handleMouseHover}>                       
                        <a className="minicart-link" href={url} title={title}>
                        
                            <i className="minicart-icon fa fa-shopping-bag"></i>
                            <span className="minicart-quantity">
                                {qty}
                            </span>
                        </a>                        
                    </div>
                    <div className={`popover popover-bottom ${this.state.isHovering ? 'show' : ''}`}
                     onMouseEnter={this.handleMouseHover}
                     onMouseLeave={this.handleMouseHover}>                    
                        {/* {
                            this.state.isHovering ?  <div dangerouslySetInnerHTML={{ __html: this.props.data.minicartshow.data }}></div> : ''                            
                        } */}
                        <MiniCartPopover popoverData={this.props.data.minicartpopover} />
                    </div>
                </>
            )
        } else {
            return (              
                <div className="minicart-total">
                    <i className="minicart-icon fa fa-shopping-bag"></i>
                    <span className="minicart-quantity">0</span>
                </div>
            )
        }
    }
}
function mapStateToProps(state) {
    return { data: state.minicart };
}

function mapDispatchToProps(dispatch) {
    const actionMap = { actions: bindActionCreators(actions, dispatch) };
    return actionMap;
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MiniCart);
