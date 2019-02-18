import React, { Component } from 'react';
import MiniCart from "./miniCart";

class Header extends Component {
    render() {
        return (
            <header>
                <nav role="navigation">
                    <div className="header container">
                        <div className="row">
                            <div className="col-12">
                                <div className="navbar-header brand">
                                    <a href="/on/demandware.store/Sites-RefArchthree-Site/default/Home-Show" title="Commerce Cloud Storefront Reference Architecture Home">
                                        <img className="hidden-md-down" src="/on/demandware.static/Sites-RefArchthree-Site/-/default/dw1249157d/images/logo.svg" alt="Commerce Cloud Storefront Reference Architecture" />
                                        <img className="d-lg-none" src="/on/demandware.static/Sites-RefArchthree-Site/-/default/dw40d4a975/images/logo-small.svg" alt="Commerce Cloud Storefront Reference Architecture" />
                                    </a>
                                </div>
                                <div className="navbar-header">
                                    <div className="pull-left">
                                        <div className="hidden-md-down">

                                            <div className="user hidden-md-down">
                                                <a href="https://demo-disney-ecommera.demandware.net/on/demandware.store/Sites-RefArchthree-Site/default/Login-Show">
                                                    <i className="fa fa-sign-in" aria-hidden="true"></i>
                                                    <span className="user-message">Login</span>
                                                </a>
                                            </div>
                                        </div>
                                        <button className="navbar-toggler d-md-none" type="button" aria-controls="sg-navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
                                            <span className="hidden-xs-down">Menu</span>
                                        </button>
                                    </div>
                                    <div className="pull-right">
                                        <div className="search hidden-xs-down">
                                            <div className="site-search">
                                                <form role="search" action="/on/demandware.store/Sites-RefArchthree-Site/default/Search-Show" method="get" name="simpleSearch">
                                                    <span className="fa fa-search"></span>
                                                    <input className="form-control search-field" type="search" name="q" defaultValue="" placeholder="Search (keywords,etc)" autoComplete="off" aria-label="Search (keywords,etc)" />
                                                    <div className="suggestions-wrapper" data-url="/on/demandware.store/Sites-RefArchthree-Site/default/SearchServices-GetSuggestions?q="></div>
                                                    <input type="hidden" defaultValue="default" name="lang" />
                                                </form>
                                            </div>
                                            <div className="search-button">
                                                <i className="fa fa-search"></i>
                                            </div>

                                        </div>
                                        <div className="minicart" data-action-url="/on/demandware.store/Sites-RefArchthree-Site/default/Cart-MiniCartShow">
                                            <MiniCart />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main-menu navbar-toggleable-sm menu-toggleable-left multilevel-dropdown" id="sg-navbar-collapse">
                        <div className="container">
                            <div className="row">
                                <nav className="navbar navbar-expand-md bg-inverse col-12">
                                    <div className="close-menu clearfix d-lg-none">
                                        <div className="back pull-left">
                                            <a href="#" role="button">
                                                <span className="caret-left"></span>
                                                Back
</a>
                                        </div>
                                        <div className="close-button pull-right">
                                            <a href="#" role="button">
                                                Close
<span aria-hidden="true">×</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="menu-group" aria-label="Main menu" role="navigation">
                                        <ul className="nav navbar-nav">
                                            <li className="nav-item dropdown">
                                                <a href="#" className="nav-link">New Arrivals</a>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <a href="#" className="nav-link">New Arrivals</a>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <a href="#" className="nav-link">New Arrivals</a>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <a href="#" className="nav-link">New Arrivals</a>
                                            </li>
                                            
                                        </ul>
                                    </div>
                                </nav>

                            </div>
                        </div>
                    </div>
                    <div className="search-mobile d-sm-none">
                        <div className="site-search">
                            <form role="search" action="/on/demandware.store/Sites-RefArchthree-Site/default/Search-Show" method="get" name="simpleSearch">
<span className="fa fa-search"></span>
                                <input className="form-control search-field" type="search" name="q" defaultValue="" placeholder="Search (keywords,etc)" autoComplete="off" aria-label="Search (keywords,etc)" />
                                <div className="suggestions-wrapper" data-url="/on/demandware.store/Sites-RefArchthree-Site/default/SearchServices-GetSuggestions?q="></div>
                                <input type="hidden" defaultValue="default" name="lang" />
                            </form>
                        </div>
                        <div className="search-button">
                            <i className="fa fa-search"></i>
                        </div>

                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;