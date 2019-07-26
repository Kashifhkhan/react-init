import React, { Component } from 'react'
import { connect } from 'react-redux';

export class Login extends Component {
    render() {
        return (
            <div className="home-container">
                <h1>Login</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
