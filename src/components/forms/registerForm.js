import React from 'react'
import { Field, reduxForm, SubmissionError  } from 'redux-form';
import { Button, FormGroup, Label, Container } from 'reactstrap';
import { isEmail, required, password, passwordsMustMatch } from "../../validator";

const RegisterForm = props => {
    const renderField = ({
        input,  
        placeholder,     
        type,
        meta: { touched, error, warning }
      }) => (
          <div>
            <input className="form-control" {...input} type={type} placeholder={placeholder}/>
            {touched &&
              ((error && <div className="text-danger">{error}</div>) ||
                (warning && <div className="text-warning">{warning}</div>))}
          </div>
      )
      
    const { error, handleSubmit, pristine, reset, submitting } = props;
    return (
        <div className="home-container">
                <Container>
                    <div className="form-wrapper">
                        <h1>Registeration Form</h1>
                        <form onSubmit={handleSubmit}>  
                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Field className="form-control" name="email" component={renderField} type="text" placeholder="Enter email"
                                  validate={[isEmail, required]}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">Password</Label>
                                <Field className="form-control" name="password" component={renderField} type="password" placeholder="Enter password" 
                                validate={[required, password]}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="cpassword">Confirm Password</Label>
                                <Field className="form-control" name="cpassword" component={renderField} type="password" placeholder="Enter confirm password" 
                                validate={[required, passwordsMustMatch]}/>
                            </FormGroup>
                            { error && <div className="text-danger">{error}</div> }
                            <FormGroup>
                            <Button type="submit" color="primary" disabled={submitting}>Submit</Button>&nbsp;&nbsp;&nbsp;
                            <Button type="button" color="secondary" disabled={submitting} onClick={reset}>Clear Values</Button>
                            </FormGroup>
                        </form>
                    </div>     
                </Container>  
            </div>
    )
}

export default reduxForm({
    form: 'registration form' // a unique identifier for this form
})(RegisterForm)