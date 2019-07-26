import React, { Component } from 'react'
import { connect } from 'react-redux'
import customActions from "../../actions";
import RegisterForm from "../forms/registerForm";

export class Register extends Component {

    signupForm = (user) => { 
        console.log(user);
        // actions.submit(user)
        return false
    }

    render() {
        return (
            <RegisterForm onSubmit={this.signupForm} />
        )
    }
}

const mapStateToProps = (state) => ({
    userdata: state.form
})

const mapDispatchToProps = {
    customActions    
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
